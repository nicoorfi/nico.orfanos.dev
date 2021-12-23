---
title: Install Tailwind's JIT compiler into Laravel
description: How to install Tailwind's JIT with Laravel mix.
date: 2021-08-21T00:00:00.000Z
---

## Introduction

Tailwind recently released their JIT compiler, which much more flexibility
when encountering edge cases during your development. It allows you to use
class names like `bg-[#00acee]`, `w-[200px]` and so on.

Let's see how you can integrate this into your Laravel setup.

## Updating Talwind

Firstly run from your terminal to get the latest version of tailwind.

```sh
$ npm install -D tailwindcss@latest
```

## Enabling jit mode 

As of version 2.1.0 the jit compiler is integated in Taliwind, without the need for an extra plugin. You can edit your `tailwind.config.js`  and change the mode to `jit` and you are good to go.

```js
// tailwind.config.js
module.exports = {
  mode: 'jit',
  // ...
}
```

It's important that you have the purge option correctly filled, so that **Tailwind** know
which files to take into consideration.

```js
// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./resources/**/*.{js,vue,blade.php}'],
  // ...
}
```

In version **[2.2.0](https://github.com/tailwindlabs/tailwindcss/compare/v2.1.4...v2.2.0)** the context was switched from "watching" to "tracking".

From the **Tailwind** changelog:
> JIT: Use "tracking" context by default instead of "watching" context for improved reliability with most bundlers (#4514)

>Depending on which tooling you use, you may need to explicitly set TAILWIND_MODE=watch until your build runner has been updated to support PostCSS's dir-dependency message type.

So the last step would be to change the **TAILWIND_MODE** variable to "**watch**" when executing our hot or watch script. 
```json
"scripts": {
    "hot": "mix watch --hot", // [tl! remove]
    "watch": "mix watch", // [tl! remove]
    "hot": "TAILWIND_MODE=watch mix watch --hot", // [tl! add]
    "watch": "TAILWIND_MODE=watch mix watch",  // [tl! add]
},
```

## Testing the configuration
Now if you run:
```sh
$ npm run hot
```

you should see the following output in your command line:
```
> hot
> TAILWIND_MODE=watch mix watch --hot

warn - You have enabled the JIT engine which is currently in preview. [tl! highlight:0]
warn - Preview features are not covered by semver, may introduce breaking changes, and can change at any time.

info - Tailwind CSS is watching for changes... [tl! highlight:0]
info - https://tailwindcss.com/docs/just-in-time-mode#watch-mode-and-one-off-builds
```