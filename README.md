Using React, React Router, and Webpack write a simple client-side app that works like a primitive CMS (content management system).
The app, upon its start, downloads a JSON file from a well-known path. The JSON file contains a description of tabs that must be rendered in the app.

The description of a tab in the JSON file consists of the following:
id
title
the sequential order of the tab among other tabs
the path to a JS file that has a React component that will be rendered in the tab's content.

See the example below:
tabs.json
[
  {id: 'dummyTable', title: 'Dummy Table', order: 1, path: 'tabs/dummyTable.js'},
  {id: 'dummyChart', title: 'Dummy Chart', order: 2, path: 'tabs/dummyChart.js'},
  {id: 'dummyList', title: 'Dummy List', order: 0, path: 'tabs/dummyList.js'}
];


dummyTable.js
import React from ‘react’

const DummyTable = () => (
  <table><tr><td>Dummy</td><td>Table</td></tr></table>
)

export default DummyTable



General requirements:
When switching between the tabs, the current tab's id must be added to the URL of the app. For example, 'localhost/dummyTable' or 'localhost/dummyChart'
The first tab must open by default.
If, at the time when the app is loaded, the URL already contains a tab id, that tab must open by default.
The file for the tab content (identified with the "path" property) should be loaded only when it is needed (the lazy loading approach). For example, all files required for the "Dummy Table" should be loaded only when the "Dummy Table" tab is selected. You should be able to see and confirm that in the Network section of the browser's dev tools
When you complete the task, it is necessary to commit your project to GitHub pages or any other alternative and share the link with us through Djinni. If we notice that any portion of your solution was borrowed or copied from another, your candidacy for the job will be immediately disqualified.


для сервера json-server --watch db.json

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
