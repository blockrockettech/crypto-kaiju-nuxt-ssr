# SSR for CryptoKaiju

## Setup

We will now get everything setup and deployed in 3 commands:

**Note:** _All of these commands are ran from the root directory_

1.  Install Dependencies in all necessary directories in 1 command

```bash
npm run setup
```

2.  Build The Project

```bash
npm run build
```

3.  Deploy To Firebase

```bash
./firebase_deploy_prod.sh

./firebase_deploy_beta.sh
```

**_Your site should now be live!_**

---

## Development

There are 2 development options.

### 1. _Without_ Firebase Functions

This will be like a normal Nuxt development experienced.

```bash
npm run dev
```

### 2. _With_ Firebase Functions

This uses Firebase's local development tools to test our project

```bash
npm run serve
```

### Features

- Server-side rendering with Firebase Hosting combined with Firebase Functions
- Firebase Hosting as our CDN for our publicPath (See nuxt.config.js)

### Things to know...

- You must have the Firebase CLI installed. If you don't have it install it with `npm install -g firebase-tools` and then configure it with `firebase login`.

- If you have errors, make sure `firebase-tools` is up to date. I've experienced many problems that were resolved once I updated.

* The root directory has a package.json file with several scripts that will be used to optimize and ease getting started and the workflow

* ALL commands are ran from the root directory
