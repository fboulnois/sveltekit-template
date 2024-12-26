# sveltekit-template

A [SvelteKit 2](https://kit.svelte.dev/) template with a few other defaults:

- [Tailwind CSS](https://tailwindcss.com/) for rapid UI development
- [TypeScript](https://www.typescriptlang.org/) for type annotations
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io/) for code formatting
- [Vitest](https://vitest.dev/) for unit testing
- [Playwright](https://playwright.dev/) for browser testing

## Quickstart

This repository can be cloned using `degit`:

```sh
# clone `sveltekit-template` into the `my-app` directory
pnpm dlx degit fboulnois/sveltekit-template my-app
```

## Creating this project

> [!NOTE]
> Skip this step. This step was already run and is kept for posterity.

This project was originally created using [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte),
and recreated for Svelte 5 using [`sv`](https://github.com/sveltejs/cli).

The following steps were run to create this project:

```sh
# create a new sveltekit project in the `sveltekit-template` directory
pnpm dlx sv create sveltekit-template
```

See the [project history](https://github.com/fboulnois/sveltekit-template/commits/main) for other changes.

## Developing

Install the dependencies using `pnpm install`.

To check the code for issues when developing:

```sh
pnpm format
pnpm lint
pnpm check
pnpm audit
```

To start a development server:

```sh
pnpm dev
```

## Testing

Unit tests are run using [Vitest](https://vitest.dev/). To run unit tests:

```sh
pnpm test
```

End-to-end tests are run using [Playwright](https://playwright.dev/). Install the Playwright dependencies:

```sh
pnpm exec playwright install
pnpm exec playwright install-deps
```

To run end-to-end tests:

```sh
pnpm e2e
```

## Building

To create a production version of the app:

```sh
pnpm build
```

The production build can be previewed with `pnpm preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
