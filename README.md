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

## API Server Setup

The API server must be connected to the web application as it is essential for persisting the interview and appointment data to a database. Thus, the API server and scheduler web application must both be running at the same time.

- Fork and clone the [scheduler-api](https://github.com/lighthouse-labs/scheduler-api) into a new directory
- Follow the instrucitions outlined in the README.md which will involve a few steps, including:
  - Installing dependencies
  - Creating the database
  - Creating a .env.development file in the root directory
  - Seeding the database
  - Running the server
- Once setup is completed, start the scheduler-api server by entering the command `npm start` in the root directory

## Testing

Testing the features of the web application using various testing libraries was a focal point during the creation of Interview Scheduler. Storybook was used to test each designed element in isolation, Jest was used to perform integration tests, and end-to-end testing was done through Cypress.

## Final Product

<b>Overview of Scheduler App</b>

<img src="https://github.com/kelvinhuang98/scheduler/blob/master/docs/Scheduler-Overview.gif" alt="Overview of Scheduler App" />

The styling for the day changes depending on if the user hovers or selects the day; the colour changes to red to denote that it is currently being hovered, and white when the user has clicked on the day.

<b>Creation of Interview</b>

<img src="https://github.com/kelvinhuang98/scheduler/blob/master/docs/Scheduler-Create.gif" alt="Interview Creation" />

The user can click on the plus sign on an empty timeslot to begin the appointment-creation process. After entering their name and choosing one of the appointed interviewers for the selected day, the user can press the save button and their appointment will be displayed on the timeslot.

<b>Missing Form Values</b>

<img src="https://github.com/kelvinhuang98/scheduler/blob/master/docs/Scheduler-Missing-Inputs.gif" alt="Missing Values" />

Error messages will be shown when a user attempts to save their appointment using a blank name or without selecting an interviewer.

<b>Editing an Appointment</b>

<img src="https://github.com/kelvinhuang98/scheduler/blob/master/docs/Scheduler-Edit.gif" alt="Edit" />

Clicking the left button on the bottom-right of the appointment will allow users to change the inputted name or selected interviewer.

<b>Canceling an Appointment</b>

<img src="https://github.com/kelvinhuang98/scheduler/blob/master/docs/Scheduler-Delete.gif" alt="Delete" />

Clicking the right button on the bottom-right of the appointment will allow users to delete an appointment. Users will be asked to confirm their choice. Pressing confirm will delete the appointment, and pressing cancel will show the original appointment information.
