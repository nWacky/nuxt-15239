# About

This is a demo repository for [nuxt/15239](https://github.com/nuxt/nuxt/issues/15239)

## How to reproduce

1. Start a production server

   ```
   # install and build
   npm ci
   npx nuxi build

   # start a dev server
   node .output/server/index.mjs
   ```

2. Open `localhost:3000`

3. Open chrome, open Memory devtools

4. Click on `Go to /page/first` link
   Additional 1.5mb was allocated for `TheList` component

5. Click on one of `Back to index` links

6. Navigate between `/` and `/page/first` (or `/page/second`) a few times

When `Allocation instrumentation` is recorded, a bunch of 1.5mb allocations for the components can be seen

After forcing gc on `/` some of allocated ram for `/page/first` is cleared, but most of it isn't

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
