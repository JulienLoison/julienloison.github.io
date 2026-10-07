.PHONY: build start stop restart logs sh run config

build: ## Docker: builds projects docker containers
	@$(COMPOSE) build

start: ## Docker: starts docker containers
	@$(COMPOSE) up -d

stop: ## Docker: stops docker containers
	@$(COMPOSE) down --remove-orphans

restart: stop start ## Docker: stops and starts docker containers

logs: ## Docker: displays logs from docker containers
	@$(COMPOSE) logs -f

sh: ## Docker: runs a bash terminal in the CONTAINER eg: make sh CONTAINER=web
	@$(COMPOSE) exec -it $(CONTAINER) bash

run: ## Docker: runs a CMD in the CONTAINER eg: make run CONTAINER=web CMD="npm install"
	@$(COMPOSE) run --rm $(CONTAINER) $(CMD)

config: ## Docker : displays full docker config
	@$(COMPOSE) config
