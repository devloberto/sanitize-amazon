chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "sanitize-amazon-link",
    title: "sanitize amazon: open clean link",
    contexts: ["link"],
    targetUrlPatterns: [
      "https://www.amazon.de/*",
      "https://www.amazon.com/*"
    ]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId !== "sanitize-amazon-link") return;

  const url = info.linkUrl;
  let cleanUrl;
  if (isSponsoredLink(url)) {
    cleanUrl = sanitizeSponsoredLink(url);
  } else {
    cleanUrl = sanitizeUsualProductLink(url);
  }

  // Open the cleaned URL in a new tab
  chrome.tabs.create({ url: cleanUrl });

  function isSponsoredLink(url) {
    return url.includes("/click?");
  }

  // example url:
  // https://www.amazon.de/-/en/sspa/click?ie=UTF8&spc=MTo2MTEyNjczNDgwMDAyMTMzOjE3NTQ1NjMzOTA6c3BfYXRmOjMwMDQxMTgyMTI3MTQzMjo6MDo6&url=%2FZimaBlade-Singleboard-Hackable-Personal-3760%2Fdp%2FB0D4D37ZVS%2Fref%3Dsr_1_1_sspa%3Fcrid%3DVIU15V2FZTZ%26dib%3DeyJ2IjoiMSJ9.H33NIsoF3Y4QleJHLBJZBqVHDP5mzzW0Wqn02is0rWPy4iUCVEJCZixO0Y6HI6NjmxlKuqzqV3iEyYR7EphIyYx2KLHSD5FwZoQWaexT27xSE34u0meTywdHrVqqRCAjE6OLCZY5PBnhFrb1dSvVojxA-eN-xgtujRZN_N-mD-KNRypkFxJ3GJegtGjYlwQh.sSIXPTgTPsHU2v4D7XWCVqbJ-MSWtWeAhQmK90fh2mw%26dib_tag%3Dse%26keywords%3Dzimaboard+2%26qid%3D1754563390%26sprefix%3Dzimab%252Caps%252C87%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&sp_cr=DUB
  function sanitizeSponsoredLink(dirtyUrl) {
    const url = new URL(dirtyUrl);
    const actualDirtyUrl = url.searchParams.get('url');
    const dirtyPath = removeGetParamsFrom(actualDirtyUrl);
    const cleanPath = removeRefFromPathEnd(dirtyPath);
    return url.origin + cleanPath;
  }

  // example url:
  // https://www.amazon.de/-/en/ZimaBlade-Singleboard-Hackable-Personal-3760/dp/B0D4D37ZVS/ref=sr_1_3?crid=1QE9GS4AALUKF&dib=eyJ2IjoiMSJ9.H33NIsoF3Y4QleJHLBJZBqVHDP5mzzW0Wqn02is0rWPy4iUCVEJCZixO0Y6HI6NjmxlKuqzqV3iEyYR7EphIyYx2KLHSD5FwZoQWaexT27xSE34u0meTywdHrVqqRCAjE6OLCZY5PBnhFrb1dSvVojxA-eN-xgtujRZN_N-mD-KNRypkFxJ3GJegtGjYlwQh.sSIXPTgTPsHU2v4D7XWCVqbJ-MSWtWeAhQmK90fh2mw&dib_tag=se&keywords=zimaboard+2&qid=1754562079&sprefix=zimab%2Caps%2C129&sr=8-3
  function sanitizeUsualProductLink(dirtyUrl) {
    const url = new URL(removeGetParamsFrom(dirtyUrl));
    url.pathname = removeRefFromPathEnd(url.pathname);
    return url.toString();
  }

  function removeGetParamsFrom(url) {
    return url.split('?')[0];
  }

  function removeRefFromPathEnd(url) {
    return url.replace(/\/ref=.*$/, '');
  }
});

