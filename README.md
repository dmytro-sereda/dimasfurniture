# Furniture E-commerce React Application

E-commerce website for a furniture selling company.

## Description and tools used

It is built with React.js, JavaScript, HTML/CSS/SCSS. State management is completed with Redux. Data is fetched through asynchronous requests to Firebase handled with Redux Sagas. The styling of components is done with the Styled Components library. Lazy loading implemented for inside pages. Google sign-in is added with the integrtion of Firebase, and all new logins automatically create new users in the database.

## Available Scripts

Run `npm start` in order to boot-up the project

## Integrations

I have set-up continous deployment of this application with Netlify. Whenever there are any new commits to this repo, Netlify automatically rebuilds and serves up-to-date application to the client.

_Note that this project has been built with React-dom version 17, react-redux 7. Some of the features like React hooks or new redux API were not the best practice at the time. Nowadays I use more modern and convenient syntax_
