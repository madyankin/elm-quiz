BUILD				= build
DIST				= dist
MAIN				= src/Main.elm
ARTIFACTS		= elm-stuff/build-artifacts
SOURCES			= 'src/**/*.elm'

APP					= $(BUILD)/app.js

STYLES_MAIN	= src/Stylesheets.elm
CSS					= $(BUILD)/styles.css
CSS_MIN			= $(BUILD)/styles.min.css
CSS_GLOBAL	= assets/global.css

.PHONY: start build $(APP) styles

all: build

build: $(APP) styles
	cp -r assets $(BUILD)
	cp ports.js $(BUILD)
	cp index.html $(BUILD)

$(APP):
	elm make $(MAIN) --output $@

styles:
	$$(npm bin)/elm-css $(STYLES_MAIN)
	cat $(CSS_GLOBAL) $(CSS) > $(CSS).tmp
	$$(npm bin)/cssnano $(CSS).tmp > $(CSS_MIN)
	rm $(CSS).tmp

clean:
	rm -rf $(BUILD) $(ARTIFACTS) $(DIST)

watch:
	$$(npm bin)/chokidar $(SOURCES) -c 'make build'

start: build
	$$(npm bin)/electron main.js & make watch

install-packages:
	npm install
	elm package install

dist: clean build
	cp package.json $(BUILD)
	$$(npm bin)/nwbuild $(BUILD) --build -o $(DIST) -v 0.12.2
