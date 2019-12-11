# ZOE TECHNICAL TEST
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)

## Developer
 * Vickler Charles (contact: charlesvikler@gmail.com)

## Development
To run a local ZOE TECHNICAL TEST development server and view the application in your browser:

#### Step 1. Clone repo
`git clone https://github.com/vickcharles/zoe-technical-test.git`

#### Step 2. Install dependecies
`npm install`

#### Step 3. Start server
`npm start`

## Tests
To run tests use `npm run test`

## Main Integrations
 * React JS
 * Material UI
 * React Router
 * Redux
 * TSLint
 * Sass

## UI

### ReactJs
 I used react js because i consider that is a good tool to develop web applications in a more orderly way and with less code than if you use pure Javascript or libraries like jQuery focused on DOM manipulation. It allows the views to be associated with the data, so if the data changes, the views also change.

### Redux
 For this test I integrate redux to manage the state in a global way since I have separate components and each of them needs to get information from the global state

### Material IU
  I used material ui because their have awesome components to build user interfaces with react, but i used SASS as preprocessor to customize some of them and get my test with own styles

### HOOKS!! *__*
  when I started working with react the hooks had not come out, basically hooks allow us to create components just writing functions, the functions can have state imorting hooks from react module for that reason i create all my componenets using hooks, i also i used some hooks of redux.

## RECOMENDATIONS
  * to go more fast in the challenge i used react without typescript but i recommend adding TypeScript to have the benefits of this Superset!


## NOTES
 I was trying to read the local json file with the fetch api but i found that fetch expects a URL. ../AGENTS_LIST.json is not a valid resource URL and hence it is not able to load it. Somehow you have to make data.json available over HTTP (either by putting it in your public directory or by creating a route). Only then fetch can load it.
