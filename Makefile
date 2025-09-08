clean-manifest:
	@echo "Removing manifest.json ..."
	@rm -f manifest.json

manifest-chrome: clean-manifest
	@echo "Copying manifest.chrome.json ..."
	@cp manifest.chrome.json manifest.json

manifest-firefox: clean-manifest
	@echo "Copying manifest.firefox.json ..."
	@cp manifest.firefox.json manifest.json

build-chrome: manifest-chrome
	@echo "Building chrome extension ..."
	@go-crx3 pack "${PWD}" -o "${PWD}/sanitize-amazon.crx" # TODO: use `-p key.pem` to sign crx by private key 

build-firefox: manifest-firefox
	@echo "Building firefox addon ..."
	@go-crx3 pack "${PWD}" -o "${PWD}/sanitize-amazon.crx"

build-all: build-chrome build-firefox
	@echo "Finished building."

.PHONY: clean-manifest manifest-chrome manifest-firefox build-chrome build-firefox build-all
