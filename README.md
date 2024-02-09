<div align="center">

[![Discord chat][discord-badge]][discord-url]
[![CI on main][ci-badge]][ci-url]
[![npm version][npm-badge]][npm-url]
[![VSCode version][vscode-badge]][vscode-url]
[![Open VSX version][open-vsx-badge]][open-vsx-url]

[discord-badge]: https://badgen.net/discord/online-members/BypW39g6Yc?icon=discord&label=discord&color=green
[discord-url]: https://discord.gg/BypW39g6Yc
[ci-badge]: https://github.com/biomejs/biome/actions/workflows/main.yml/badge.svg
[ci-url]: https://github.com/biomejs/biome/actions/workflows/main.yml
[npm-badge]: https://badgen.net/npm/v/@biomejs/biome?icon=npm&color=green&label=%40biomejs%2Fbiome
[npm-url]: https://www.npmjs.com/package/@biomejs/biome/v/latest
[vscode-badge]: https://badgen.net/vs-marketplace/v/biomejs.biome?label=vscode&icon=visualstudio&color=green
[vscode-url]: https://marketplace.visualstudio.com/items?itemName=biomejs.biome
[open-vsx-badge]: https://badgen.net/open-vsx/version/biomejs/biome?label=open-vsx&color=green
[open-vsx-url]: https://open-vsx.org/extension/biomejs/biome

</div>

**Biome** is a performant toolchain for web projects, it aims to provide developer tools to maintain the health of said projects.

**Biome is a [fast formatter](./benchmark#formatting)** for _JavaScript_, _TypeScript_, _JSX_, and _JSON_ that scores **[97% compatibility with _Prettier_](https://console.algora.io/challenges/prettier)**.

**Biome is a [performant linter](https://github.com/biomejs/biome/tree/main/benchmark#linting)** for _JavaScript_, _TypeScript_, and _JSX_ that features **[more than 190 rules](https://biomejs.dev/linter/rules/)** from ESLint, TypeScript ESLint, and [other sources](https://github.com/biomejs/biome/discussions/3).
It **outputs detailed and contextualized diagnostics** that help you to improve your code and become a better programmer!

**Biome** is designed from the start to be used [interactively within an editor](https://biomejs.dev/guides/integrate-in-editor/).
It can format and lint malformed code as you are writing it.

### Installation

```shell
npm install --save-dev --save-exact @biomejs/biome
```

### Usage

```shell
# format files
npx @biomejs/biome format --write ./src

# lint files
npx @biomejs/biome lint ./src

# run format, lint, etc. and apply the safe suggestions
npx @biomejs/biome check --apply ./src

# check all files against format, lint, etc. in CI environments
npx @biomejs/biome ci ./src
```

If you want to give Biome a run without installing it, use the [online playground](https://biomejs.dev/playground/), compiled to WebAssembly.

## Documentation

Check out our [homepage][biomejs] to learn more about Biome,
or directly head to the [Getting Started guide][getting-started] to start using Biome.

## More about Biome

**Biome** has sane defaults and it doesn't require configuration.

**Biome** aims to support [all main languages][language-support] of modern web development.

**Biome** [doesn't require Node.js](https://biomejs.dev/guides/manual-installation/) to function.

**Biome** has first-class LSP support, with a sophisticated parser that represents the source text in full fidelity and top-notch error recovery.

**Biome** unifies functionality that has previously been separate tools. Building upon a shared base allows us to provide a cohesive experience for processing code, displaying errors, parallelize work, caching, and configuration.

Read more about our [project philosophy][biome-philosophy].

**Biome** is [MIT licensed](https://github.com/biomejs/biome/tree/main/LICENSE-MIT) or [Apache 2.0 licensed](https://github.com/biomejs/biome/tree/main/LICENSE-APACHE) and moderated under the [Contributor Covenant Code of Conduct](https://github.com/biomejs/biome/tree/main/CODE_OF_CONDUCT.md).

## Biome Rules

<p align="center">
    <picture>
        <img alt="Rules" src="./assets/Screenshot 2024-02-09 at 11.46.36 AM.png" width="700">
        <img alt="Rules" src="./assets/Screenshot 2024-02-09 at 11.46.53 AM.png" width="700">
        <img alt="Rules" src="./assets/Screenshot 2024-02-09 at 11.47.07 AM.png" width="700">
        <img alt="Rules" src="./assets/Screenshot 2024-02-09 at 11.47.21 AM.png" width="700">
        <img alt="Rules" src="./assets/Screenshot 2024-02-09 at 11.47.43 AM.png" width="700">
        <img alt="Rules" src="./assets/Screenshot 2024-02-09 at 11.48.07 AM.png" width="700">
        <img alt="Rules" src="./assets/Screenshot 2024-02-09 at 11.48.17 AM.png" width="700">
        <img alt="Rules" src="./assets/Screenshot 2024-02-09 at 11.48.27 AM.png" width="700">
        <img alt="Rules" src="./assets/Screenshot 2024-02-09 at 11.48.36 AM.png" width="700">
        <img alt="Rules" src="./assets/Screenshot 2024-02-09 at 11.48.49 AM.png" width="700">
        <img alt="Rules" src="./assets/Screenshot 2024-02-09 at 11.48.59 AM.png" width="700">
        <img alt="Rules" src="./assets/Screenshot 2024-02-09 at 11.49.12 AM.png" width="700">
        <img alt="Rules" src="./assets/Screenshot 2024-02-09 at 11.49.28 AM.png" width="700">
        <img alt="Rules" src="./assets/Screenshot 2024-02-09 at 11.49.38 AM.png" width="700">
        <img alt="Rules" src="./assets/Screenshot 2024-02-09 at 11.49.49 AM.png" width="700">
        <img alt="Rules" src="./assets/Screenshot 2024-02-09 at 11.51.46 AM.png" width="700">
        <img alt="Rules" src="./assets/Screenshot 2024-02-09 at 11.53.10 AM.png" width="700">
        <img alt="Rules" src="./assets/Screenshot 2024-02-09 at 11.56.35 AM.png" width="700">
        <img alt="Rules" src="./assets/Screenshot 2024-02-09 at 11.56.45 AM.png" width="700">
        <img alt="Rules" src="./assets/Screenshot 2024-02-09 at 11.56.57 AM.png" width="700">
        <img alt="Rules" src="./assets/Screenshot 2024-02-09 at 11.57.06 AM.png" width="700">
        <img alt="Rules" src="./assets/Screenshot 2024-02-09 at 11.57.17 AM.png" width="700">
        <img alt="Rules" src="./assets/Screenshot 2024-02-09 at 11.57.32 AM.png" width="700">
        <img alt="Rules" src="./assets/Screenshot 2024-02-09 at 11.57.48 AM.png" width="700">
        <img alt="Rules" src="./assets/Screenshot 2024-02-09 at 11.58.19 AM.png" width="700">
        <img alt="Rules" src="./assets/Screenshot 2024-02-09 at 11.58.53 AM.png" width="700">
        <img alt="Rules" src="./assets/Screenshot 2024-02-09 at 11.59.07 AM.png" width="700">
        <img alt="Rules" src="./assets/Screenshot 2024-02-09 at 11.59.24 AM.png" width="700">
        <img alt="Rules" src="./assets/Screenshot 2024-02-09 at 11.59.37 AM.png" width="700">
        <img alt="Rules" src="./assets/Screenshot 2024-02-09 at 12.00.07 PM.png" width="700">
    </picture>
</p>
