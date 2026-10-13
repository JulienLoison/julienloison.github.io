LINT_TARGETS   += lint-vue
FORMAT_TARGETS += format-vue
TEST_TARGETS += e2e-vue

.PHONY: lint-vue format-vue generate-vue run-playwright-test e2e-vue

lint-vue: ## Vue: type check, ESLint, Prettier check.
	@$(COMPOSE) run --rm web sh -c "npm run type-check && npm run lint"

format-vue: ## Vue: format with Prettier, then ESLint autofix.
	@$(COMPOSE) run --rm web npm run format

generate-vue: ## Vue: pre-renders the application into plain static HTML, CSS and JS files
	@$(COMPOSE) run --rm web npm run generate

run-playwright-test: ## Vue : runs end to end tests
	@$(COMPOSE) run --rm e2e npm run e2e

e2e-vue: generate-vue run-playwright-test ## Vue : generates static site and runs end to end tests
