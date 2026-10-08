NODE_VERSION := $(shell cat .nvmrc 2>/dev/null | xargs)
export NODE_VERSION

COMPOSE := docker compose

WEB_DIR ?= web
