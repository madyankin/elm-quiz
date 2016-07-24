BUILD				= build
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

$(APP):
	elm make $(MAIN) --output $@

styles:
	$$(npm bin)/elm-css $(STYLES_MAIN)
	cat $(CSS_GLOBAL) $(CSS) > $(CSS).tmp
	$$(npm bin)/cssnano $(CSS).tmp > $(CSS_MIN)
	rm $(CSS).tmp

clean:
	rm -rf $(BUILD) $(ARTIFACTS)

watch:
	$$(npm bin)/chokidar $(SOURCES) -c 'make build'

start: build
	$$(npm bin)/electron main.js & make watch

install-packages:
	npm install
	elm package install
