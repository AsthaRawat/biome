# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

<p align="center">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/biomejs/resources/main/svg/slogan-dark-transparent.svg">
        <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/biomejs/resources/main/svg/slogan-light-transparent.svg">
        <img alt="Shows the banner of Biome, with its logo and the phrase 'Biome - Toolchain of the web'." src="https://raw.githubusercontent.com/biomejs/resources/main/svg/slogan-light-transparent.svg" width="700">
    </picture>
</p>

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

<div align="center">

English | [简体中文](https://github.com/biomejs/biome/blob/main/packages/%40biomejs/biome/README.zh-CN.md) | [日本語](https://github.com/biomejs/biome/blob/main/packages/%40biomejs/biome/README.ja.md) | [Português do Brasil](https://github.com/biomejs/biome/blob/main/packages/%40biomejs/biome/README.pt-br.md)

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

## Funding

You can fund the project in different ways

### Project sponsorship and funding

You can sponsor or fund the project via [Open collective](https://opencollective.com/biome) or [GitHub sponsors](https://github.com/sponsors/biomejs)

Biome offers a simple sponsorship program that allows companies to get visibility and recognition among various developers.

### Issue funding

We use [Polar.sh](https://polar.sh/biomejs) to up-vote and promote specific features that you would like to see and implement. Check our backlog and help us:

<a href="https://polar.sh/biomejs"><img src="https://polar.sh/embed/fund-our-backlog.svg?org=biomejs" /></a>


## Sponsors

### Gold Sponsors

<table>
  <tbody>
    <tr>
      <td align="center" valign="middle">
        <a href="https://shiguredo.jp/" target="_blank"><img src="https://shiguredo.jp/official_shiguredo_logo.svg" height="120"></a>
      </td>
    </tr>
  </tbody>
</table>

### Bronze Sponsors

<table>
  <tbody>
    <tr>
      <td align="center" valign="middle">
        <a href="https://www.kanamekey.com" target="_blank"><img src="https://images.opencollective.com/kaname/d15fd98/logo/256.png?height=80" width="80"></a>
      </td>
      <td align="center" valign="middle">
        <a href="https://nanabit.dev/" target="_blank"><img src="https://images.opencollective.com/nanabit/d15fd98/logo/256.png?height=80" width="80"></a>
      </td>
    </tr>
  </tbody>
</table>

[biomejs]: https://biomejs.dev/
[biome-philosophy]: https://biomejs.dev/internals/philosophy/
[language-support]: https://biomejs.dev/internals/language-support/
[getting-started]: https://biomejs.dev/guides/getting-started/
