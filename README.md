## My Sveltekit default template

This template includes:

- Sveltekit
- Typescript
- Tailwindcss
- Eslint, Prettier
- Vite, Vitest

<br />

- Tailwindcss auto sort classes
- Test tailwind colors
- Favicons, icons & webmanifest
- Inter font
- `cn` utility for tailwind classes

## Usage

To begin, you can [clone this repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) or [use it as a template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).

When you open it in VSCode, you'll notice that some files are missing. This is because I prefer not to overload the workspace with files I don't typically need to see. If I do need to access them, I simply [open the VSCode workspace settings in JSON](https://code.visualstudio.com/docs/getstarted/settings#:~:text=You%20can%20open%20the%20settings,to%20using%20the%20default%20values.) and edit the ones I want to view.

<br />

The next step is to install the dev dependencies with `npm i -D <dependencies>` or you can use pnpm, yarn or bun, up to you.

```
@sveltejs/adapter-auto @sveltejs/kit @typescript-eslint/eslint-plugin @typescript-eslint/parser autoprefixer eslint eslint-config-prettier eslint-plugin-svelte postcss prettier prettier-plugin-svelte prettier-plugin-tailwindcss svelte svelte-check tailwindcss tslib typescript vite vitest clsx tailwind-merge
```

<br />

And you can always delete this README.md and change your project name in package.json
