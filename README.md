# Zemoga Frontend Test
# Presentado por: Fernando Nuñez Estrada

## Description

I have developed the Rule of Thumb project using React with Redux and Sagas,
also I have tried to develop it under Domain-driven design (DDD), that's why I have created different layers as this: 

Domain Layer: is in charge of the domains logic, and should host all related with the entities, actions, states definitions that belongs to the domain.

infrastructure Layer: the concern of this layer is implement all related with externals comunications, any third parties integrations.

View Layer: is where belong the creation of the components.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

I decide to make tests for the Sagas and the http-client request functions.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.



### `Backend API`

I have decide to create a small API to handle the candidates information, for retrieve and update the votes.

the repo for the backend implementation is [https://github.com/fernandojne20/rule-of-thumb-api](https://github.com/fernandojne20/rule-of-thumb-api) .

is already published at Heroku services, and accesible through [https://rule-of-thumb-zem.herokuapp.com](https://rule-of-thumb-zem.herokuapp.com)
