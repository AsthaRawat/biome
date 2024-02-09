
### Biome

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

Check out https://biomejs.dev/ to learn more about Biome,
or directly head to the https://biomejs.dev/guides/getting-started/ to start using Biome.

## More about Biome

**Biome** has sane defaults and it doesn't require configuration.

**Biome** aims to support [all main languages][language-support] of modern web development.

**Biome** [doesn't require Node.js](https://biomejs.dev/guides/manual-installation/) to function.

**Biome** has first-class LSP support, with a sophisticated parser that represents the source text in full fidelity and top-notch error recovery.

**Biome** unifies functionality that has previously been separate tools. Building upon a shared base allows us to provide a cohesive experience for processing code, displaying errors, parallelize work, caching, and configuration.

Read more about our [project philosophy][biome-philosophy].

**Biome** is [MIT licensed](https://github.com/biomejs/biome/tree/main/LICENSE-MIT) or [Apache 2.0 licensed](https://github.com/biomejs/biome/tree/main/LICENSE-APACHE) and moderated under the [Contributor Covenant Code of Conduct](https://github.com/biomejs/biome/tree/main/CODE_OF_CONDUCT.md).

### Linter

Biome’s linter statically analyzes your code to catch common errors and to help writing idiomatic code.

When the linter is enabled, it recommends a number of rules.

When using Biome with, for example Visual Studio Code, errors defined in `src/rules` folder of this repository will be detected. For instance, the following code snippet will trigger an error:
For instance:

```jsx
//noAccessKey
<a href="https://webaim.org/" accessKey="w">
  WebAIM.org
</a>
```

Here, the commented code represents the rule, while the code below exemplifies it.

In this example, the use of the accessKey attribute violates the noAccessKey rule defined in the Biome configuration.

## Biome Rules
---
title: Rules
description: List of available lint rules.
---

Below the list of rules supported by Biome, divided by group. Here's a legend of the emojis:
- The emoji ✅ indicates that the rule is part of the recommended rules.
- The emoji 🔧 indicates that the rule provides a code action (fix) that is **safe** to apply.
- The emoji ⚠️ indicates that the rule provides a code action (fix) that is **unsafe** to apply.

## Accessibility

Rules focused on preventing accessibility problems.
| Rule name | Description | Properties |
| --- | --- | --- |
| [noAccessKey](/linter/rules/no-access-key) | Enforce that the <code>accessKey</code> attribute is not used on any HTML element. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noAriaHiddenOnFocusable](/linter/rules/no-aria-hidden-on-focusable) | Enforce that aria-hidden=&quot;true&quot; is not set on focusable elements. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noAriaUnsupportedElements](/linter/rules/no-aria-unsupported-elements) | Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noAutofocus](/linter/rules/no-autofocus) | Enforce that autoFocus prop is not used on elements. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noBlankTarget](/linter/rules/no-blank-target) | Disallow <code>target=&quot;_blank&quot;</code> attribute without <code>rel=&quot;noreferrer&quot;</code> | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has a safe fix" role="img" title="The rule has a safe fix">🔧 </span> |
| [noDistractingElements](/linter/rules/no-distracting-elements) | Enforces that no distracting elements are used. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noHeaderScope](/linter/rules/no-header-scope) | The scope prop should be used only on <code>&lt;th&gt;</code> elements. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noInteractiveElementToNoninteractiveRole](/linter/rules/no-interactive-element-to-noninteractive-role) | Enforce that non-interactive ARIA roles are not assigned to interactive HTML elements. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noNoninteractiveElementToInteractiveRole](/linter/rules/no-noninteractive-element-to-interactive-role) | Enforce that interactive ARIA roles are not assigned to non-interactive HTML elements. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noNoninteractiveTabindex](/linter/rules/no-noninteractive-tabindex) | Enforce that <code>tabIndex</code> is not assigned to non-interactive HTML elements. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noPositiveTabindex](/linter/rules/no-positive-tabindex) | Prevent the usage of positive integers on <code>tabIndex</code> property | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noRedundantAlt](/linter/rules/no-redundant-alt) | Enforce <code>img</code> alt prop does not contain the word &quot;image&quot;, &quot;picture&quot;, or &quot;photo&quot;. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noRedundantRoles](/linter/rules/no-redundant-roles) | Enforce explicit <code>role</code> property is not the same as implicit/default role property on an element. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noSvgWithoutTitle](/linter/rules/no-svg-without-title) | Enforces the usage of the <code>title</code> element for the <code>svg</code> element. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [useAltText](/linter/rules/use-alt-text) | Enforce that all elements that require alternative text have meaningful information to relay back to the end user. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [useAnchorContent](/linter/rules/use-anchor-content) | Enforce that anchors have content and that the content is accessible to screen readers. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [useAriaActivedescendantWithTabindex](/linter/rules/use-aria-activedescendant-with-tabindex) | Enforce that <code>tabIndex</code> is assigned to non-interactive HTML elements with <code>aria-activedescendant</code>. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [useAriaPropsForRole](/linter/rules/use-aria-props-for-role) | Enforce that elements with ARIA roles must have all required ARIA attributes for that role. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [useButtonType](/linter/rules/use-button-type) | Enforces the usage of the attribute <code>type</code> for the element <code>button</code> | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [useHeadingContent](/linter/rules/use-heading-content) | Enforce that heading elements (h1, h2, etc.) have content and that the content is accessible to screen readers. Accessible means that it is not hidden using the aria-hidden prop. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [useHtmlLang](/linter/rules/use-html-lang) | Enforce that <code>html</code> element has <code>lang</code> attribute. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [useIframeTitle](/linter/rules/use-iframe-title) | Enforces the usage of the attribute <code>title</code> for the element <code>iframe</code>. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [useKeyWithClickEvents](/linter/rules/use-key-with-click-events) | Enforce onClick is accompanied by at least one of the following: <code>onKeyUp</code>, <code>onKeyDown</code>, <code>onKeyPress</code>. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [useKeyWithMouseEvents](/linter/rules/use-key-with-mouse-events) | Enforce <code>onMouseOver</code> / <code>onMouseOut</code> are accompanied by <code>onFocus</code> / <code>onBlur</code>. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [useMediaCaption](/linter/rules/use-media-caption) | Enforces that <code>audio</code> and <code>video</code> elements must have a <code>track</code> for captions. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [useValidAnchor](/linter/rules/use-valid-anchor) | Enforce that all anchors are valid, and they are navigable elements. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [useValidAriaProps](/linter/rules/use-valid-aria-props) | Ensures that ARIA properties <code>aria-*</code> are all valid. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [useValidAriaRole](/linter/rules/use-valid-aria-role) | Elements with ARIA roles must use a valid, non-abstract ARIA role. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [useValidAriaValues](/linter/rules/use-valid-aria-values) | Enforce that ARIA state and property values are valid. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [useValidLang](/linter/rules/use-valid-lang) | Ensure that the attribute passed to the <code>lang</code> attribute is a correct ISO language and/or country. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |

## Complexity

Rules that focus on inspecting complex code that could be simplified.
| Rule name | Description | Properties |
| --- | --- | --- |
| [noBannedTypes](/linter/rules/no-banned-types) | Disallow primitive type aliases and misleading types. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has a safe fix" role="img" title="The rule has a safe fix">🔧 </span> |
| [noExcessiveCognitiveComplexity](/linter/rules/no-excessive-cognitive-complexity) | Disallow functions that exceed a given Cognitive Complexity score. |  |
| [noExtraBooleanCast](/linter/rules/no-extra-boolean-cast) | Disallow unnecessary boolean casts | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noForEach](/linter/rules/no-for-each) | Prefer <code>for...of</code> statement instead of <code>Array.forEach</code>. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noMultipleSpacesInRegularExpressionLiterals](/linter/rules/no-multiple-spaces-in-regular-expression-literals) | Disallow unclear usage of consecutive space characters in regular expression literals | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has a safe fix" role="img" title="The rule has a safe fix">🔧 </span> |
| [noStaticOnlyClass](/linter/rules/no-static-only-class) | This rule reports when a class has no non-static members, such as for a class used exclusively as a static namespace. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noThisInStatic](/linter/rules/no-this-in-static) | Disallow <code>this</code> and <code>super</code> in <code>static</code> contexts. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noUselessCatch](/linter/rules/no-useless-catch) | Disallow unnecessary <code>catch</code> clauses. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noUselessConstructor](/linter/rules/no-useless-constructor) | Disallow unnecessary constructors. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noUselessEmptyExport](/linter/rules/no-useless-empty-export) | Disallow empty exports that don't change anything in a module file. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has a safe fix" role="img" title="The rule has a safe fix">🔧 </span> |
| [noUselessFragments](/linter/rules/no-useless-fragments) | Disallow unnecessary fragments | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noUselessLabel](/linter/rules/no-useless-label) | Disallow unnecessary labels. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has a safe fix" role="img" title="The rule has a safe fix">🔧 </span> |
| [noUselessRename](/linter/rules/no-useless-rename) | Disallow renaming import, export, and destructured assignments to the same name. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has a safe fix" role="img" title="The rule has a safe fix">🔧 </span> |
| [noUselessSwitchCase](/linter/rules/no-useless-switch-case) | Disallow useless <code>case</code> in <code>switch</code> statements. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noUselessThisAlias](/linter/rules/no-useless-this-alias) | Disallow useless <code>this</code> aliasing. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has a safe fix" role="img" title="The rule has a safe fix">🔧 </span> |
| [noUselessTypeConstraint](/linter/rules/no-useless-type-constraint) | Disallow using <code>any</code> or <code>unknown</code> as type constraint. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has a safe fix" role="img" title="The rule has a safe fix">🔧 </span> |
| [noVoid](/linter/rules/no-void) | Disallow the use of <code>void</code> operators, which is not a familiar operator. |  |
| [noWith](/linter/rules/no-with) | Disallow <code>with</code> statements in non-strict contexts. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [useArrowFunction](/linter/rules/use-arrow-function) | Use arrow functions over function expressions. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has a safe fix" role="img" title="The rule has a safe fix">🔧 </span> |
| [useFlatMap](/linter/rules/use-flat-map) | Promotes the use of <code>.flatMap()</code> when <code>map().flat()</code> are used together. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has a safe fix" role="img" title="The rule has a safe fix">🔧 </span> |
| [useLiteralKeys](/linter/rules/use-literal-keys) | Enforce the usage of a literal access to properties over computed property access. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [useOptionalChain](/linter/rules/use-optional-chain) | Enforce using concise optional chain instead of chained logical expressions. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [useRegexLiterals](/linter/rules/use-regex-literals) | Enforce the use of the regular expression literals instead of the RegExp constructor if possible. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [useSimpleNumberKeys](/linter/rules/use-simple-number-keys) | Disallow number literal object member names which are not base10 or uses underscore as separator | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has a safe fix" role="img" title="The rule has a safe fix">🔧 </span> |
| [useSimplifiedLogicExpression](/linter/rules/use-simplified-logic-expression) | Discard redundant terms from logical expressions. | <span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |

## Correctness

Rules that detect code that is guaranteed to be incorrect or useless.
| Rule name | Description | Properties |
| --- | --- | --- |
| [noChildrenProp](/linter/rules/no-children-prop) | Prevent passing of <strong>children</strong> as props. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noConstAssign](/linter/rules/no-const-assign) | Prevents from having <code>const</code> variables being re-assigned. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noConstantCondition](/linter/rules/no-constant-condition) | Disallow constant expressions in conditions | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noConstructorReturn](/linter/rules/no-constructor-return) | Disallow returning a value from a <code>constructor</code>. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noEmptyCharacterClassInRegex](/linter/rules/no-empty-character-class-in-regex) | Disallow empty character classes in regular expression literals. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noEmptyPattern](/linter/rules/no-empty-pattern) | Disallows empty destructuring patterns. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noGlobalObjectCalls](/linter/rules/no-global-object-calls) | Disallow calling global object properties as functions | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noInnerDeclarations](/linter/rules/no-inner-declarations) | Disallow <code>function</code> and <code>var</code> declarations that are accessible outside their block. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noInvalidConstructorSuper](/linter/rules/no-invalid-constructor-super) | Prevents the incorrect use of <code>super()</code> inside classes. It also checks whether a call <code>super()</code> is missing from classes that extends other constructors. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noInvalidNewBuiltin](/linter/rules/no-invalid-new-builtin) | Disallow <code>new</code> operators with global non-constructor functions. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noNewSymbol](/linter/rules/no-new-symbol) | Disallow <code>new</code> operators with the <code>Symbol</code> object. | <span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noNonoctalDecimalEscape](/linter/rules/no-nonoctal-decimal-escape) | Disallow <code>\8</code> and <code>\9</code> escape sequences in string literals. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noPrecisionLoss](/linter/rules/no-precision-loss) | Disallow literal numbers that lose precision | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noRenderReturnValue](/linter/rules/no-render-return-value) | Prevent the usage of the return value of <code>React.render</code>. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noSelfAssign](/linter/rules/no-self-assign) | Disallow assignments where both sides are exactly the same. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noSetterReturn](/linter/rules/no-setter-return) | Disallow returning a value from a setter | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noStringCaseMismatch](/linter/rules/no-string-case-mismatch) | Disallow comparison of expressions modifying the string case with non-compliant value. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noSwitchDeclarations](/linter/rules/no-switch-declarations) | Disallow lexical declarations in <code>switch</code> clauses. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noUndeclaredVariables](/linter/rules/no-undeclared-variables) | Prevents the usage of variables that haven't been declared inside the document. |  |
| [noUnnecessaryContinue](/linter/rules/no-unnecessary-continue) | Avoid using unnecessary <code>continue</code>. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noUnreachable](/linter/rules/no-unreachable) | Disallow unreachable code | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noUnreachableSuper](/linter/rules/no-unreachable-super) | Ensures the <code>super()</code> constructor is called exactly once on every code  path in a class constructor before <code>this</code> is accessed if the class has a superclass | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noUnsafeFinally](/linter/rules/no-unsafe-finally) | Disallow control flow statements in finally blocks. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noUnsafeOptionalChaining](/linter/rules/no-unsafe-optional-chaining) | Disallow the use of optional chaining in contexts where the undefined value is not allowed. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noUnusedLabels](/linter/rules/no-unused-labels) | Disallow unused labels. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noUnusedVariables](/linter/rules/no-unused-variables) | Disallow unused variables. | <span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noVoidElementsWithChildren](/linter/rules/no-void-elements-with-children) | This rules prevents void elements (AKA self-closing elements) from having children. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noVoidTypeReturn](/linter/rules/no-void-type-return) | Disallow returning a value from a function with the return type 'void' | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [useExhaustiveDependencies](/linter/rules/use-exhaustive-dependencies) | Enforce all dependencies are correctly specified in a React hook. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [useHookAtTopLevel](/linter/rules/use-hook-at-top-level) | Enforce that all React hooks are being called from the Top Level component functions. |  |
| [useIsNan](/linter/rules/use-is-nan) | Require calls to <code>isNaN()</code> when checking for <code>NaN</code>. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [useValidForDirection](/linter/rules/use-valid-for-direction) | Enforce &quot;for&quot; loop update clause moving the counter in the right direction. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [useYield](/linter/rules/use-yield) | Require generator functions to contain <code>yield</code>. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |

## Performance

Rules catching ways your code could be written to run faster, or generally be more efficient.
| Rule name | Description | Properties |
| --- | --- | --- |
| [noAccumulatingSpread](/linter/rules/no-accumulating-spread) | Disallow the use of spread (<code>...</code>) syntax on accumulators. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noDelete](/linter/rules/no-delete) | Disallow the use of the <code>delete</code> operator. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |

## Security

Rules that detect potential security flaws.
| Rule name | Description | Properties |
| --- | --- | --- |
| [noDangerouslySetInnerHtml](/linter/rules/no-dangerously-set-inner-html) | Prevent the usage of dangerous JSX props | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noDangerouslySetInnerHtmlWithChildren](/linter/rules/no-dangerously-set-inner-html-with-children) | Report when a DOM element or a component uses both <code>children</code> and <code>dangerouslySetInnerHTML</code> prop. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |

## Style

Rules enforcing a consistent and idiomatic way of writing your code.
| Rule name | Description | Properties |
| --- | --- | --- |
| [noArguments](/linter/rules/no-arguments) | Disallow the use of <code>arguments</code>. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noCommaOperator](/linter/rules/no-comma-operator) | Disallow comma operator. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noDefaultExport](/linter/rules/no-default-export) | Disallow default exports. |  |
| [noImplicitBoolean](/linter/rules/no-implicit-boolean) | Disallow implicit <code>true</code> values on JSX boolean attributes | <span aria-label="The rule has a safe fix" role="img" title="The rule has a safe fix">🔧 </span> |
| [noInferrableTypes](/linter/rules/no-inferrable-types) | Disallow type annotations for variables, parameters, and class properties initialized with a literal expression. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has a safe fix" role="img" title="The rule has a safe fix">🔧 </span> |
| [noNamespace](/linter/rules/no-namespace) | Disallow the use of TypeScript's <code>namespace</code>s. |  |
| [noNegationElse](/linter/rules/no-negation-else) | Disallow negation in the condition of an <code>if</code> statement if it has an <code>else</code> clause. | <span aria-label="The rule has a safe fix" role="img" title="The rule has a safe fix">🔧 </span> |
| [noNonNullAssertion](/linter/rules/no-non-null-assertion) | Disallow non-null assertions using the <code>!</code> postfix operator. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noParameterAssign](/linter/rules/no-parameter-assign) | Disallow reassigning <code>function</code> parameters. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noParameterProperties](/linter/rules/no-parameter-properties) | Disallow the use of parameter properties in class constructors. |  |
| [noRestrictedGlobals](/linter/rules/no-restricted-globals) | This rule allows you to specify global variable names that you don’t want to use in your application. |  |
| [noShoutyConstants](/linter/rules/no-shouty-constants) | Disallow the use of constants which its value is the upper-case version of its name. | <span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noUnusedTemplateLiteral](/linter/rules/no-unused-template-literal) | Disallow template literals if interpolation and special-character handling are not needed | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noUselessElse](/linter/rules/no-useless-else) | Disallow <code>else</code> block when the <code>if</code> block breaks early. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noVar](/linter/rules/no-var) | Disallow the use of <code>var</code> | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [useAsConstAssertion](/linter/rules/use-as-const-assertion) | Enforce the use of <code>as const</code> over literal type and type annotation. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has a safe fix" role="img" title="The rule has a safe fix">🔧 </span> |
| [useBlockStatements](/linter/rules/use-block-statements) | Requires following curly brace conventions. | <span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [useCollapsedElseIf](/linter/rules/use-collapsed-else-if) | Enforce using <code>else if</code> instead of nested <code>if</code> in <code>else</code> clauses. | <span aria-label="The rule has a safe fix" role="img" title="The rule has a safe fix">🔧 </span> |
| [useConst](/linter/rules/use-const) | Require <code>const</code> declarations for variables that are never reassigned after declared. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has a safe fix" role="img" title="The rule has a safe fix">🔧 </span> |
| [useDefaultParameterLast](/linter/rules/use-default-parameter-last) | Enforce default function parameters and optional function parameters to be last. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [useEnumInitializers](/linter/rules/use-enum-initializers) | Require that each enum member value be explicitly initialized. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has a safe fix" role="img" title="The rule has a safe fix">🔧 </span> |
| [useExponentiationOperator](/linter/rules/use-exponentiation-operator) | Disallow the use of <code>Math.pow</code> in favor of the <code>**</code> operator. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [useFragmentSyntax](/linter/rules/use-fragment-syntax) | This rule enforces the use of <code>&lt;&gt;...&lt;/&gt;</code> over <code>&lt;Fragment&gt;...&lt;/Fragment&gt;</code>. | <span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [useLiteralEnumMembers](/linter/rules/use-literal-enum-members) | Require all enum members to be literal values. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [useNamingConvention](/linter/rules/use-naming-convention) | Enforce naming conventions for everything across a codebase. | <span aria-label="The rule has a safe fix" role="img" title="The rule has a safe fix">🔧 </span> |
| [useNumericLiterals](/linter/rules/use-numeric-literals) | Disallow <code>parseInt()</code> and <code>Number.parseInt()</code> in favor of binary, octal, and hexadecimal literals | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [useSelfClosingElements](/linter/rules/use-self-closing-elements) | Prevent extra closing tags for components without children | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [useShorthandArrayType](/linter/rules/use-shorthand-array-type) | When expressing array types, this rule promotes the usage of <code>T[]</code> shorthand instead of <code>Array&lt;T&gt;</code>. | <span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [useShorthandAssign](/linter/rules/use-shorthand-assign) | Require assignment operator shorthand where possible. | <span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [useSingleCaseStatement](/linter/rules/use-single-case-statement) | Enforces switch clauses have a single statement, emits a quick fix wrapping the statements in a block. | <span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [useSingleVarDeclarator](/linter/rules/use-single-var-declarator) | Disallow multiple variable declarations in the same variable statement | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [useTemplate](/linter/rules/use-template) | Prefer template literals over string concatenation. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [useWhile](/linter/rules/use-while) | Enforce the use of <code>while</code> loops instead of <code>for</code> loops when the initializer and update expressions are not needed. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has a safe fix" role="img" title="The rule has a safe fix">🔧 </span> |

## Suspicious

Rules that detect code that is likely to be incorrect or useless.
| Rule name | Description | Properties |
| --- | --- | --- |
| [noApproximativeNumericConstant](/linter/rules/no-approximative-numeric-constant) | Use standard constants instead of approximated literals. | <span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noArrayIndexKey](/linter/rules/no-array-index-key) | Discourage the usage of Array index in keys. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noAssignInExpressions](/linter/rules/no-assign-in-expressions) | Disallow assignments in expressions. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noAsyncPromiseExecutor](/linter/rules/no-async-promise-executor) | Disallows using an async function as a Promise executor. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noCatchAssign](/linter/rules/no-catch-assign) | Disallow reassigning exceptions in catch clauses. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noClassAssign](/linter/rules/no-class-assign) | Disallow reassigning class members. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noCommentText](/linter/rules/no-comment-text) | Prevent comments from being inserted as text nodes | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noCompareNegZero](/linter/rules/no-compare-neg-zero) | Disallow comparing against <code>-0</code> | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has a safe fix" role="img" title="The rule has a safe fix">🔧 </span> |
| [noConfusingLabels](/linter/rules/no-confusing-labels) | Disallow labeled statements that are not loops. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noConfusingVoidType](/linter/rules/no-confusing-void-type) | Disallow <code>void</code> type outside of generic or return types. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noConsoleLog](/linter/rules/no-console-log) | Disallow the use of <code>console.log</code> | <span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noConstEnum](/linter/rules/no-const-enum) | Disallow TypeScript <code>const enum</code> | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has a safe fix" role="img" title="The rule has a safe fix">🔧 </span> |
| [noControlCharactersInRegex](/linter/rules/no-control-characters-in-regex) | Prevents from having control characters and some escape sequences that match control characters in regular expressions. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noDebugger](/linter/rules/no-debugger) | Disallow the use of <code>debugger</code> | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noDoubleEquals](/linter/rules/no-double-equals) | Require the use of <code>===</code> and <code>!==</code> | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noDuplicateCase](/linter/rules/no-duplicate-case) | Disallow duplicate case labels. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noDuplicateClassMembers](/linter/rules/no-duplicate-class-members) | Disallow duplicate class members. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noDuplicateJsxProps](/linter/rules/no-duplicate-jsx-props) | Prevents JSX properties to be assigned multiple times. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noDuplicateObjectKeys](/linter/rules/no-duplicate-object-keys) | Prevents object literals having more than one property declaration for the same name. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noDuplicateParameters](/linter/rules/no-duplicate-parameters) | Disallow duplicate function parameter name. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noEmptyInterface](/linter/rules/no-empty-interface) | Disallow the declaration of empty interfaces. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has a safe fix" role="img" title="The rule has a safe fix">🔧 </span> |
| [noExplicitAny](/linter/rules/no-explicit-any) | Disallow the <code>any</code> type usage. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noExtraNonNullAssertion](/linter/rules/no-extra-non-null-assertion) | Prevents the wrong usage of the non-null assertion operator (<code>!</code>) in TypeScript files. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has a safe fix" role="img" title="The rule has a safe fix">🔧 </span> |
| [noFallthroughSwitchClause](/linter/rules/no-fallthrough-switch-clause) | Disallow fallthrough of <code>switch</code> clauses. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noFunctionAssign](/linter/rules/no-function-assign) | Disallow reassigning function declarations. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noGlobalIsFinite](/linter/rules/no-global-is-finite) | Use <code>Number.isFinite</code> instead of global <code>isFinite</code>. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noGlobalIsNan](/linter/rules/no-global-is-nan) | Use <code>Number.isNaN</code> instead of global <code>isNaN</code>. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noImplicitAnyLet](/linter/rules/no-implicit-any-let) | Disallow use of implicit <code>any</code> type on variable declarations. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noImportAssign](/linter/rules/no-import-assign) | Disallow assigning to imported bindings | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noLabelVar](/linter/rules/no-label-var) | Disallow labels that share a name with a variable | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noMisleadingInstantiator](/linter/rules/no-misleading-instantiator) | Enforce proper usage of <code>new</code> and <code>constructor</code>. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noMisrefactoredShorthandAssign](/linter/rules/no-misrefactored-shorthand-assign) | Disallow shorthand assign when variable appears on both sides. | <span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noPrototypeBuiltins](/linter/rules/no-prototype-builtins) | Disallow direct use of <code>Object.prototype</code> builtins. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noRedeclare](/linter/rules/no-redeclare) | Disallow variable, function, class, and type redeclarations in the same scope. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noRedundantUseStrict](/linter/rules/no-redundant-use-strict) | Prevents from having redundant <code>&quot;use strict&quot;</code>. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has a safe fix" role="img" title="The rule has a safe fix">🔧 </span> |
| [noSelfCompare](/linter/rules/no-self-compare) | Disallow comparisons where both sides are exactly the same. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noShadowRestrictedNames](/linter/rules/no-shadow-restricted-names) | Disallow identifiers from shadowing restricted names. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noSparseArray](/linter/rules/no-sparse-array) | Disallow sparse arrays | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noUnsafeDeclarationMerging](/linter/rules/no-unsafe-declaration-merging) | Disallow unsafe declaration merging between interfaces and classes. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [noUnsafeNegation](/linter/rules/no-unsafe-negation) | Disallow using unsafe negation. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [useDefaultSwitchClauseLast](/linter/rules/use-default-switch-clause-last) | Enforce default clauses in switch statements to be last | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [useGetterReturn](/linter/rules/use-getter-return) | Enforce <code>get</code> methods to always return a value. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span> |
| [useIsArray](/linter/rules/use-is-array) | Use <code>Array.isArray()</code> instead of <code>instanceof Array</code>. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [useNamespaceKeyword](/linter/rules/use-namespace-keyword) | Require using the <code>namespace</code> keyword over the <code>module</code> keyword to declare TypeScript namespaces. | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has a safe fix" role="img" title="The rule has a safe fix">🔧 </span> |
| [useValidTypeof](/linter/rules/use-valid-typeof) | This rule verifies the result of <code>typeof $expr</code> unary expressions is being compared to valid values, either string literals containing valid type names or other <code>typeof</code> expressions | <span aria-label="Recommended" role="img" title="Recommended">✅ </span><span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |

## Nursery
** Unfortunately, due to biome not functioning properly, the options useSortedClasses and noSkippedTest were not included as intended.** 

New rules that are still under development.

Nursery rules require explicit opt-in via configuration on stable versions because they may still have bugs or performance problems.
They are enabled by default on nightly builds, but as they are unstable their diagnostic severity may be set to either error or
warning, depending on whether we intend for the rule to be recommended or not when it eventually gets stabilized.
Nursery rules get promoted to other groups once they become stable or may be removed.

Rules that belong to this group <strong>are not subject to semantic version</strong>.
| Rule name | Description | Properties |
| --- | --- | --- |
| [noDuplicateJsonKeys](/linter/rules/no-duplicate-json-keys) | Disallow two keys with the same name inside a JSON object. |  |
| [noEmptyBlockStatements](/linter/rules/no-empty-block-statements) | Disallow empty block statements and static blocks. |  |
| [noEmptyTypeParameters](/linter/rules/no-empty-type-parameters) | Disallow empty type parameters in type aliases and interfaces. |  |
| [noFocusedTests](/linter/rules/no-focused-tests) | Disallow focused tests. |  |
| [noGlobalAssign](/linter/rules/no-global-assign) | Disallow assignments to native objects and read-only global variables. |  |
| [noGlobalEval](/linter/rules/no-global-eval) | Disallow the use of global <code>eval()</code>. |  |
| [noInvalidUseBeforeDeclaration](/linter/rules/no-invalid-use-before-declaration) | Disallow the use of variables and function parameters before their declaration |  |
| [noMisleadingCharacterClass](/linter/rules/no-misleading-character-class) | Disallow characters made with multiple code points in character class syntax. | <span aria-label="The rule has a safe fix" role="img" title="The rule has a safe fix">🔧 </span> |
| [noNodejsModules](/linter/rules/no-nodejs-modules) | Forbid the use of Node.js builtin modules. |  |
| [noReExportAll](/linter/rules/no-re-export-all) | Avoid re-export all |  |
| [noRestrictedImports](/linter/rules/no-restricted-imports) | Disallow specified modules when loaded by import or require. |  |
| [noSkippedTests](/linter/rules/no-skipped-tests) | Disallow disabled tests. |  |
| [noThenProperty](/linter/rules/no-then-property) | Disallow <code>then</code> property. |  |
| [noUnusedImports](/linter/rules/no-unused-imports) | Disallow unused imports. | <span aria-label="The rule has a safe fix" role="img" title="The rule has a safe fix">🔧 </span> |
| [noUnusedPrivateClassMembers](/linter/rules/no-unused-private-class-members) | Disallow unused private class members | <span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noUselessLoneBlockStatements](/linter/rules/no-useless-lone-block-statements) | Disallow unnecessary nested block statements. | <span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [noUselessTernary](/linter/rules/no-useless-ternary) | Disallow ternary operators when simpler alternatives exist. | <span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [useAwait](/linter/rules/use-await) | Ensure <code>async</code> functions utilize <code>await</code>. |  |
| [useConsistentArrayType](/linter/rules/use-consistent-array-type) | Require consistently using either <code>T[]</code> or <code>Array&lt;T&gt;</code> | <span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [useExportType](/linter/rules/use-export-type) | Promotes the use of <code>export type</code> for types. | <span aria-label="The rule has a safe fix" role="img" title="The rule has a safe fix">🔧 </span> |
| [useFilenamingConvention](/linter/rules/use-filenaming-convention) | Enforce naming conventions for JavaScript and TypeScript filenames. |  |
| [useForOf](/linter/rules/use-for-of) | This rule recommends a <code>for-of</code> loop when in a <code>for</code> loop, the index used to extract an item from the iterated array. |  |
| [useGroupedTypeImport](/linter/rules/use-grouped-type-import) | Enforce the use of <code>import type</code> when an <code>import</code> only has specifiers with <code>type</code> qualifier. | <span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [useImportRestrictions](/linter/rules/use-import-restrictions) | Disallows package private imports. |  |
| [useImportType](/linter/rules/use-import-type) | Promotes the use of <code>import type</code> for types. | <span aria-label="The rule has a safe fix" role="img" title="The rule has a safe fix">🔧 </span> |
| [useNodejsImportProtocol](/linter/rules/use-nodejs-import-protocol) | Enforces using the <code>node:</code> protocol for Node.js builtin modules. | <span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [useNumberNamespace](/linter/rules/use-number-namespace) | Use the <code>Number</code> properties instead of global ones. | <span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
| [useShorthandFunctionType](/linter/rules/use-shorthand-function-type) | Enforce using function types instead of object type with call signatures. | <span aria-label="The rule has a safe fix" role="img" title="The rule has a safe fix">🔧 </span> |
| [useSortedClasses](/linter/rules/use-sorted-classes) | Enforce the sorting of CSS utility classes. | <span aria-label="The rule has an unsafe fix" role="img" title="The rule has an unsafe fix">⚠️ </span> |
