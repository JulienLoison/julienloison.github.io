.PHONY: node-version node-check install

node-version: ## Node: displays version read in .nvmrc
	@echo $(NODE_VERSION)

node-check: ## Node: compares node version in .nvmrc vs installed container node version
	@INSTALLED_VERSION=$$($(COMPOSE) run --rm web node --version 2>/dev/null | tr -d 'v' | xargs); \
	if [ "$$NODE_VERSION" != "$$INSTALLED_VERSION" ]; then \
		echo "❌ ERREUR : Version de Node.js incorrecte dans le conteneur !"; \
		echo "   - Version attendue (.nvmrc) : v$$NODE_VERSION"; \
		echo "   - Version installée (Docker) : v$$INSTALLED_VERSION"; \
		exit 1; \
	fi
	@echo "✅ La version de Node.js est correcte (v$$NODE_VERSION). "

install: ## Node: install dependencies
	@$(COMPOSE) run --rm web npm install
