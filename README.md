# Boilerplate for React with Redux
A boilerplate for React with Redux including Webpack, ESLint and Jest

Features:
* Fixed versioning for dependencies in package.json to avoid errors when packages are updated automatically
* Separate Webpack development and production build with merged generic configuration using `webpack-merge`
* Hot reloading with `webpack-dev-server`
* IE10+ browser suppport
* Strict coding style analysing using `eslint`
* Test driven development using `jest`

## Installation
Clone the repository and change the directory
```bash
$ git clone git clone git@git.ilumy.com:lars/react-redux-base.git && cd react-redux-base
```

Install dependencies from the package.json file with either `yarn install` or `npm install`
```bash
$ yarn install
```

Run the React application with `yarn start` or `npm start`
```bash
$ yarn start
```