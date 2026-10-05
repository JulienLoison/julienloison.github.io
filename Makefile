# Site Perso — developer Makefile
#
# Stack-specific targets live in mk/*.mk (added at bootstrap). Each stack file
# appends its own targets to TEST_TARGETS, LINT_TARGETS and FORMAT_TARGETS.
# Works with GNU make 3.81 (macOS default) and later.

.DEFAULT_GOAL := help

TEST_TARGETS   :=
LINT_TARGETS   :=
FORMAT_TARGETS :=

-include $(wildcard mk/*.mk)

.PHONY: help test lint format check tickets

help: ## List the available targets.
	@printf "Targets:\n"
	@awk 'BEGIN{FS=":.*## "} /^[a-zA-Z0-9_.-]+:.*## /{printf "  \033[36m%-16s\033[0m %s\n",$$1,$$2}' $(MAKEFILE_LIST)

test: $(TEST_TARGETS) ## Run every test suite.
	@if [ -z "$(strip $(TEST_TARGETS))" ]; then echo "No test target yet (no stack in mk/)."; fi

lint: $(LINT_TARGETS) ## Run every linter / type checker.
	@if [ -z "$(strip $(LINT_TARGETS))" ]; then echo "No lint target yet (no stack in mk/)."; fi

format: $(FORMAT_TARGETS) ## Format the code in place.
	@if [ -z "$(strip $(FORMAT_TARGETS))" ]; then echo "No format target yet."; fi

check: lint test ## What CI runs: lint then tests.

tickets: ## Show active tickets from Doc/Tickets/state.json.
	@python3 -c 'import json; s=json.load(open("Doc/Tickets/state.json")); [print("%-6s %s  [phase %s, order %s]  %s" % (k, t["key"], t.get("phase"), t.get("order"), t["summary"])) for k in ("doing", "todo") for t in s[k]]'
