# Personal Budget App - Ashley Bang

# Description:
A full stack application using mysql, express, react, and node to provide budget planning functionalities and visualizations for the user to reference when calculating expenditures.
Fully functional code that allows users to sign up or login, authenticating and authorizing them to show a private page with all of the budgets on a dashboard. Users are able
to refresh their token every time it's about to expire via a popup box to continue their usage of the site.

# What I used and why:
The live feed of the website, found at https://personal-budget-1ard.onrender.com/ was deployed on Render with connections to the corresponding web service api.
Render offers free services to deploy both static sites and web services which was the main reason why it was used.
The decision to use mysql with express, react, and node instead of the more common MERN techstack was simply because I'm more familiar and comfortable with mysql as a database than I am with MongoDB.

# Limitations and future implementations:
When rendering and deploying the full application on Render, a lot of the communication was lost between the server and client sides of the code and limiting the functionalities
that were fully functional before it was uploaded. Making changes to these connections after everything was already implemented proved to be a challenge and understanding the importance
of making proper use of environment variables, ports, baseurls, and dependencies in the initial stages of development would've greatly prevented many issues. Strictly working locally
without the leniency/adaptability of eventually deploying the site was bad practice and I will be establishing this in the first stages going forward. 

The application itself lacks more meaningful substance in the information it relays. I spent a lot of time trying to implement more interactive charts with better visualizations of the configured 
budgets and expenses in comparing the two but fell short and was unable to properly display them, sticking to more simpler charts instead. 
Also including a timeline and pattern of spending would increase the value of the application as well as adding additional keys and connections within the database itself.

# Default Documentation from React:
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
