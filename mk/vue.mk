# Vue / TypeScript targets — the front-end lives in $(WEB_DIR).
# Script names match the official Vue scaffolder (create-vue); adjust if
# package.json differs (e.g. a Nuxt project).

WEB_DIR ?= web

TEST_TARGETS   += test-vue
LINT_TARGETS   += lint-vue
FORMAT_TARGETS += format-vue

.PHONY: test-vue lint-vue format-vue

test-vue: ## Vue: unit tests (Vitest, single run).
	@if [ ! -f $(WEB_DIR)/package.json ]; then echo "test-vue: no $(WEB_DIR)/package.json yet, skipped."; else npm --prefix $(WEB_DIR) run test:unit -- --run; fi

lint-vue: ## Vue: type-check and lint.
	@if [ ! -f $(WEB_DIR)/package.json ]; then echo "lint-vue: no $(WEB_DIR)/package.json yet, skipped."; else npm --prefix $(WEB_DIR) run type-check && npm --prefix $(WEB_DIR) run lint; fi

format-vue: ## Vue: format (Prettier).
	@if [ ! -f $(WEB_DIR)/package.json ]; then echo "format-vue: no $(WEB_DIR)/package.json yet, skipped."; else npm --prefix $(WEB_DIR) run format; fi
