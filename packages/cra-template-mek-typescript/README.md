# cra-template-typescript

This is the official TypeScript template for [Create React App](https://github.com/facebook/create-react-app).

To use this template, add `--template typescript` when creating a new app.

For example:

```sh
npx create-react-app my-app --template @knowgistics/cra-template-mek

# or

yarn create react-app my-app --template @knowgistics/cra-template-mek
```

Copy .npmrc to root folder

```sh
yarn install @fortawesome/pro-duotone-svg-icons@6.1.1 @fortawesome/pro-regular-svg-icons@6.1.1 react-sortable-hoc@2.0.0

git submodule add https://github.com/knowgistics-coding/core-sub.git ./src/components/core-sub

git submodule update --init --recursive
```



For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.
