SCRIPTS := $(shell find . -name "*.mjs" -print)

.PHONY: test doc clean

all: test doc

test: $(SCRIPTS)
	node --experimental-modules ./test/exec.mjs

doc: $(SCRIPTS)
	jsdoc -c ./jsdoc.json .

clean:
	$(RM) doc/*.html
