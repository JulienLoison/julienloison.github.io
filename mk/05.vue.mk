TEST_TARGETS   += test-vue
LINT_TARGETS   += lint-vue
FORMAT_TARGETS += format-vue

.PHONY: test-vue lint-vue format-vue generate-vue

test-vue: ## Vue: unit tests (Vitest, single run).
	@$(COMPOSE) run --rm web npm run test:unit -- --run

lint-vue: ## Vue: type-check and lint.
	@$(COMPOSE) run --rm web npm run type-check && $(COMPOSE) run --rm web npm run lint

format-vue: ## Vue: format (Prettier).
	@$(COMPOSE) run --rm web npm run format

generate-vue: ## Vue: pre-renders the application into plain static HTML, CSS and JS files
	@$(COMPOSE) run --rm web npm run generate
