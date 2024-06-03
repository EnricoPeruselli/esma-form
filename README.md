# The Big Ja

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Headed Component Tests with [Cypress Component Testing](https://on.cypress.io/component)

```sh
npm run test:unit:dev # or `npm run test:unit` for headless testing
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Configurazione repository yarn su macchina locale

Nel file `.npmrc` alla home utente (`~/.npmrc`) inserire la seguente configurazione:

```sh
@internal:registry=https://euclidea-347233190161.d.codeartifact.eu-central-1.amazonaws.com/npm/internal/
//euclidea-347233190161.d.codeartifact.eu-central-1.amazonaws.com/npm/internal/:_authToken=${CODEARTIFACT_YARN_TOKEN}

registry=https://registry.npmjs.org/
//registry.npmjs.org/:_authToken=dummy
```

Nel file `.zshrc` alla home utente (`~/.zshrc`) inserire la seguente riga:

```zsh
export CODEARTIFACT_YARN_TOKEN=dummy
```

Per pubblicare il seguente pacchetto nel repository interno privato, dalla root del progetto lanciare lo script `yarn_repo.sh` con il comando `source script/yarn_repo.sh`, installare i pacchetti tramite il comando `yarn`, effettuare la build tramite `vite build` e infine eseguire il comando `npm publish`, avendo cura di monitorare la versione del pacchetto all'interno del file `package.json`.

Per installare un pacchetto dal repository interno, anteporre il nome del repository `@internal/` al nome del pacchetto. Esempio: `@internal/sticazzi` con `sticazzi` nome del pacchetto.

Per eliminare la versione corrente del pacchetto, lanciare il comando `delete_pkg_version.sh` con il comando `source script/delete_pkg_version.sh`.

Tutorial per condivisione componenti https://www.youtube.com/watch?v=5QV9wVc8c7g
