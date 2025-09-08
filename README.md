# sanitize-amazon

**`sanitize-amazon` is a browser extension that cleans amazon URLs when browsing
amazon's web store to protect you from tracking.**

This addon is a nice little helper if you take care of your privacy.

## Note

_This project is currently in an early stage of development.
The number of features will increase over time._

## Features

- reduce tracking by removing unnecessary stuff from Amazon URLs
- improve your privacy protection

## Browser support

- Chromium-based browser
- Firefox (MV3)

## Installation

_Note: You need to activate the development mode to install this extension
at the moment._

1. Download the `sanitize-amazon` artifact from the last build workflow.

Chromium:
2. Extract the `.crx` file from the downloaded artifact
3. Drag-and-drop `sanitize-amazon.crx` into your browser's extensions page.

Firefox:
2. Extract the `sanitize-amazon_firefox.zip`
3. In Firefox open `about:debugging` → This Firefox → Load Temporary Add-on…
4. Select `manifest.json` from the project folder (or the extracted zip).

## Usage

1. Browse Amazon as you are used to.
2. Open links like of a product by right clicking the product and
   clicking **sanitize amazon: open clean link** in the context menu.
3. The product opens in a new tab without all the dirty tracking stuff in the URL.
4. Enjoy your improved privacy.

## Development

1. Clone this repository:

   ```
   git clone https://github.com/devloberto/sanitize-amazon.git
   ```

2. Follow the instructions for your browser to load an unpacked extension
   (see your browser’s documentation).

## License

MIT
