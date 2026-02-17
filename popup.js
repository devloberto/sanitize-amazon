document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');

  function runSearch() {
    const query = searchInput.value.trim();
    if (!query) {
      searchInput.focus();
      return;
    }

    const encodedQuery = encodeURIComponent(query).replace(/%20/g, '+');
    const url = `https://www.amazon.de/s?k=${encodedQuery}`;
    chrome.tabs.create({ url });
  }

  searchButton.addEventListener('click', runSearch);
  searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      runSearch();
    }
  });
});
