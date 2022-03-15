# jest-dotenv

Test using dotenv files with Jest using TypeScript.

This shows how you can ensure that the contents of a dotenv, .env, file are available during testing.

The key is to include the correct import at the top of the test files that need access.

If you need it in every Jest test then have a look at [Using dotenv with Jest](https://lusbuab.medium.com/using-dotenv-with-jest-7e735b34e55f) however this is then easy to overlook and means every test has access to something that only some tests need.

## Build

To build the project clone or fork it and open in a development environment.

Install the required npm packages.

```sh
npm install
```

## Test

I use [vscode-jest-runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner) to help in running tests directly in vscode.

To test it you can use npm.

```sh
npm run test
```

## Contribute
