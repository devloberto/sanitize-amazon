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
- _TODO: Firefox (not yet implemented)_

## Installation

_Note: You need to activate the development mode to install this extension
at the moment._

1. Download the `sanitize-amazon` artifact from the last build workflow,
2. extract the `.crx` file from the downloaded zip file
3. and drag-and-drop the `sanitize-amazon.crx` to your browser's extension view.

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
