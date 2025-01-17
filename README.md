another quick test...
this is just a quick test line
# Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

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

# Quiz-Tsar

## About the Project
While completing my Full Stack Development Course. I decided to create an independent React-Redux project. The title is a play on the word "quizzer". With "Quiz-Tsar" now being the title, I chose a Russian royalty aesthetic. AI was used to create the picture of the Tsar and give me a colour pallete to implement into the coding of this project. I had the project on hold until I had finished all my coursework. After I returned to the project I completed the API implementation, and the logic for the game. [Open Trivia Database](https://opentdb.com/) is being used for the trivia questions- I didn't write a single trivia question into the game myself.

## Features and User Interface Details
- Simple game configuration menu- enabling users to select number of questions, difficulty, category and question type ("multiple choice" or "true or false").
- Interactive buttons with click animations and hover effects.
- Feedback for correct and incorrect answers using pop up messages.
- Exit button prominently displayed for easy game termination.
- Game tracks user progress throughout game and displays results at the end.

## Game Logic
- App state updates as user selects options.
- App makes use of createAsyncThunk and URLSearchParams while calling the API to obtain questions.
- Questions are displayed one at a time, with large buttons for each multiple choice answer.
- Game state tracks progress for user feedback.

## Accessibility and Responsiveness
- Responsive design adapts to different screen sizes and orientations.
- ARIA roles and attributes used to enhance accessibility for screen readers.

## What was Learnt During Production
What I had to consider in this app was error handling, in case the API was used incorrectly or in case of any other errors. The app uses pop up boxes to give feedback in case of any such incidences. Utilization of the state managment of Redux enabled separation of concerns and could assist scalability of the game for added features in future. The use of async thunk in Redux was utilized for handling the API.

Another factor was a mobile-first approached. I wanted to prioritize a mobile-friendly interface for this app. When trying the app on my phone, as opposed to just used my brower's responsive mode, I still encounted minor challeneges regarding keeping button appropriate sizes for touchability and preventing overflow.

## Potential Future Developments
A potential future feature may be the option to play with friends. Another may be to create a game consisting of a number of quizzes where the game tracks and compares your scores between the quizzes you play. This was a feature I thought of in the beginning but chose not to implement at first.

## Screenshots

![Game selection menu](./resources/images/screenshots/gamemenu.png)

![Game on desktop PC](./resources/images/screenshots/game1.png)

![Game on mobile device](./resources/images/screenshots/game2.png)

![Game results screen](./resources/images/screenshots/gameresults.png)

## Acknowledgements
  * [Open Trivia Database](https://opentdb.com/) - Credited for their API.
  * [1001 Fonts](https://www.1001fonts.com/) - Thanks for the awesome fonts!
  * [ChatGPT](https://chatgpt.com/) - Credited for giving me the colour pallete used in the game and also for image generation tools for the Tsar image.