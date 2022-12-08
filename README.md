# Interview Scheduler

Interview scheduler is a single-page web application that allows students to schedule interviews with mentors at Lighthouse Labs.

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Testing

Testing the features of the web application using various testing libraries was a focal point during the creation of Interview Scheduler. Storybook was used to test each designed element in isolation, Jest was used to perform integration tests, and end-to-end testing was done through Cypress.

## Final Product

<b>Overview of Scheduler App</b>

<img src="https://github.com/kelvinhuang98/scheduler/blob/master/docs/Scheduler-Overview.gif" alt="Overview of Scheduler App" />

The styling for the day changes depending on if the user hovers or selects the day; the colour changes to red to denote that it is currently being hovered, and white when the user has clicked on the day.
