# Sprint Challenge: Lambda Times (React)

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored Intermediate React, React Tooling, The React Life-cycle, React Composition Patterns and CSS-in-JS. In this Sprint Challenge, you will demonstrate proficiency by creating an application that uses to build a fully-functioning replicate of the LA-Times website.

Remember, this is a way for you to analyze your understanding of the concepts presented this week. Feel free to reference old code, but please refrain from copy/pasting, even rewriting old code can teach you something new! Take your time, and have fun!

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency Intermediate React and your command of the concepts and techniques in the React Tooling, The React Life-cycle, React Composition Patterns and CSS-in-JS modules.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager).

## Description

For the Lambda Times challenge you will create a React application that replicates the[LA Times Website](http://www.latimes.com). Throughout this challenge you will take a Vanilla JavaScript app, and convert it to a React app. Much of the initial work has been done, but there are some missing pieces you will need to complete to get the app working properly.

Your base React app has already been created, and includes some components. Included as well is a CSS file that you may reference when writing your own code.

Look through the application code. If you have the old Lambda Times (Applied JavaScript) sprint challenge handy, you may compare how the structure of this app differs from that, noting how React gives us very easy to use concise components.

## Self-Study/Essay Questions

* [x] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

  -  PropTypes ensure that components are using the data type that the programmer (or you) intended. It can be difficult keeping track of a value’s type in JavaScript. There are many solutions to this, such as flow and TypeScript. But the easiest way to get up and running is by using PropTypes. PropTypes define the type of a prop. So each time, a value is passed through a prop, it gets validated for it’s type. If you pass a value through a prop with a different data type than it is specified in the PropTypes, an error message will be printed in the console of your browser


* [x] Describe a life-cycle event in React?

    -   React lets you define components as classes or functions. The methods that you are able to use on these are called lifecycle events. These methods can be called during the lifecycle of a component, and they allow you to update the UI and application states.
    Mounting, Updating, and Unmounting are the three phases of the component lifecycle.
        - Mounting
            When an instance of a component is being created and inserted into the DOM it occurs during the mounting phase. Constructor, static getDerivedStateFromProps, render, componentDidMount, and UNSAFE_componentWillMount all occur in this order during mounting.
        - Updating
            Anytime a component is updated or state changes then it is rerendered. These lifecycle events happen during updating in this order.

            static getDerivedStateFromProps, shouldComponentUpdate, render,
            getSnapshotBeforeUpdate, componentDidUpdate, UNSAFE_componentWillUpdate, UNSAFE_componentWillReceiveProps
        -Unmounting
            The final phase of the lifecycle if called when a component is being removed from the DOM. componentWillUnmount is the only lifecycle event during this phase.

* [x] Explain the details of a Higher Order Component?

-    A higher-order component (HOC) is an advanced technique in React for reusing component logic. A higher-order component is a  function that takes a component and returns a new component. HOC is not a feature in React or any other programming language,       but a pattern evolved from the compositional ( made of components ) nature of react.

* [x] What are three different ways to style components in React? Explain some of the benefits of each.

1. Inline styling
    -   Convenience of having style and component logic consolidated in one place.
    - makes it easy to change styles based on component state.
    - if you want to build portable React component that can be used in any React app, CSS-in-js is almost mandatory.

2. External stylesheet
    - Separation of style and content.
    - Maintain modularity if you create a separate css file for each component, e.g., in components/Btn you have Btn.js, Btn.css, and so forth.

3. Styled components
    - Styled-components makes it easer to import default styles and then modify them.
    - Styled components lets you write traditional css write in your js files
    - You can pass props with styled-components to handle logic

## Project Setup

Follow these steps to set up your project:

* [x] Create a forked copy of this project.
* [x] Add your project manager as collaborator on Github.
* [x] Clone your OWN version of the repository (Not Lambda's by mistake!).
* [x] Create a new branch: git checkout -b `<firstName-lastName>`.
* [x] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
* [x] Push commits: git push origin `<firstName-lastName>`.
* [x] From within the `lambdatimes` folder run `yarn` and then `yarn start`. This will open your locally hosted application in your browser. Once you are ready move onto the next steps.
* [x] Inside the `Content` folder you will find all 5 components that make up the content of the application. The flow goes like this: `Content > Tabs > Tab` and `Content > Cards > Card`. Follow the directions in the `Content` component to get your data ready.

Follow these steps for completing your project.

* [x] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repository). **Please don't merge your own pull request**
- [ ] Add your project manager as a reviewer on the pull-request
- [ ] Your project manager will count the project as complete by merging the branch back into master.

## Minimum Viable Product

* [x] Go through the `Tabs`, `Tab`, `Cards`, and `Card` components following the instructions, and passing data and props to get the tabs and cards to appear on the screen.
* [x] Once the Tabs and Cards are rendering to the screen complete the `changeSelected` and `filterCards` functions in the `Content` component.
* [x] You should now be able to filter cards using your tabs!
* [x] Make sure all of your props being passed are validated using PropTypes.
* [x] Find the `TopBar` and `Header` components. Convert these two components to Styled Components. You should not have any `className` props when you are finished.

## Stretch Challenge

There are multiple stretch challenges available to you, you may attempt these in any order. Remember, stretch challenges are only to give you extra time to work on these concepts, if you do not get to these challenges, that is fine! Continue working on your main objectives.

- [ ] Re-factor the app, so that it uses ALL styled components. There should be no `className` props on any component. To truly test this, delete the CSS file.

- [ ] You will find a `Carousel` component in your Content folder. Complete this component, rendering a functional carousel. Add this component between your `Tabs` and `Cards` components within the `Content` component. Added challenge: make it so that there is infinite scroll to the right and the left.

- [ ] Add a login and an HOC. Make it so that when a user clicks on the login button at the top, a login modal is shown (Use React-strap). Have a user login, validating the login credentials on the `localStorage`. Add a Higher Order Component that wraps the `Content` component, only allowing it to render once a user has logged in. For more instructions see this README: [React-Insta-Clone: Day III](https://github.com/LambdaSchool/React-Insta-Clone/blob/master/DAY_THREE_README.md#tasks-day-iii)
