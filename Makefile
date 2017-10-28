SCRIPTS := $(shell find . -name "*.mjs" -print)

.PHONY: test doc

all: test doc

test: $(SCRIPTS)
	node --experimental-modules ./test/exec.mjs

doc: $(SCRIPTS)
	jsdoc -c ./jsdoc.json .
