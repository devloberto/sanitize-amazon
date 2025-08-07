chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "sanitize-amazon-link",
    title: "sanitize amazon link",
    contexts: ["link"],
    targetUrlPatterns: [
      "https://www.amazon.de/*",
      "https://www.amazon.com/*"
    ]
  });
});

// example of a dirty amazon url that needs to be sanitized
// https://www.amazon.de/-/en/ZimaBlade-Singleboard-Hackable-Personal-3760/dp/B0D4D37ZVS/ref=sr_1_3?crid=1QE9GS4AALUKF&dib=eyJ2IjoiMSJ9.H33NIsoF3Y4QleJHLBJZBqVHDP5mzzW0Wqn02is0rWPy4iUCVEJCZixO0Y6HI6NjmxlKuqzqV3iEyYR7EphIyYx2KLHSD5FwZoQWaexT27xSE34u0meTywdHrVqqRCAjE6OLCZY5PBnhFrb1dSvVojxA-eN-xgtujRZN_N-mD-KNRypkFxJ3GJegtGjYlwQh.sSIXPTgTPsHU2v4D7XWCVqbJ-MSWtWeAhQmK90fh2mw&dib_tag=se&keywords=zimaboard+2&qid=1754562079&sprefix=zimab%2Caps%2C129&sr=8-3

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "sanitize-amazon-link") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      args: [info.linkUrl],
      func: (linkUrl) => {
        const urlWithoutGetParams = linkUrl.split('?')[0];
        const url = new URL(urlWithoutGetParams);
        url.pathname = url.pathname.replace(/\/ref=.*$/, '');
        console.log('clean url: ', url.toString());
        window.open(url.toString(), '_blank');
      }
    });
  }
});
