LINT_TARGETS   += lint-vue
FORMAT_TARGETS += format-vue

.PHONY: lint-vue format-vue generate-vue

lint-vue: ## Vue: type check, ESLint, Prettier check.
	@$(COMPOSE) run --rm web sh -c "npm run type-check && npm run lint"

format-vue: ## Vue: format with Prettier, then ESLint autofix.
	@$(COMPOSE) run --rm web npm run format

generate-vue: ## Vue: pre-renders the application into plain static HTML, CSS and JS files
	@$(COMPOSE) run --rm web npm run generate
