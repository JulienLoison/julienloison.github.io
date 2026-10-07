# Site Perso

> Julien Loison's personal website: who I am, what I build, my CV and how to
> reach me. Static, sober, written by hand with Nuxt.

**Stack**: Nuxt 4 · Vue 3 · TypeScript · Nuxt Content · Docker (dev tooling) ·
GitHub Pages

## What it is

A fully static site (no back-end, no database): pages are pre-rendered at build
time and served by GitHub Pages. Content lives in the repository as Markdown
and YAML.

Live version: coming soon.

## Getting started

Requirements: **Docker** (Docker Desktop or equivalent) and **GNU make**.
Node.js and npm run inside the container only — nothing else to install.

```sh
make build      # build the development image (Node version from .nvmrc)
make install    # install dependencies inside the container
make start      # start the dev server on http://localhost:3000
make stop       # stop everything
```

Everyday commands:

```sh
make help                        # list every available target
make check                       # lint + tests, what CI runs
make generate-vue                # generate the static site into web/.output/public
make sh                          # open a shell in the container
make run CONTAINER=web CMD="npm install <package>"   # one-off command
make node-check                  # check the container runs the Node version of .nvmrc
```

> **Never run `npm` or `node` on the host.** Dependencies contain native
> binaries built for the Linux container; installing them from macOS or
> Windows breaks the container (and vice versa).

The dev server port can be changed with `APP_PORT` (default `3000`).

## Project layout

| Path | What |
|---|---|
| `web/` | the Nuxt application (`app/` pages and components, `public/` static files) |
| `.docker/` | development image |
| `compose.yaml` | development service, mounts `web/` into the container |
| `mk/` | make targets, split by concern (variables, Docker, Node, Vue) |
| `.nvmrc` | single source of the Node.js version |
| `.github/` | CI and Dependabot |

## Data sources

No external data. All content is written by the author.

| Source | Producer | Licence |
|---|---|---|
| Site content (texts, images) | the author | to be defined |

## How this project is built

Specs and tickets are drafted with AI assistance; **all code and tests are
written by hand** by the author.

## Licence

Code: MIT — see [`LICENSE`](LICENSE). Content licence to be defined.
