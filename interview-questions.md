# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX is a melding of JavaScript syntax and HTML syntax, that lets us use both in the same file.  When using one or the other there are slight syntax convention differences in certain situations as a way to reduce conflict within the language.  One of these differences is `class`, which is HTML syntax for assigning a class, and `className` which is the JavaScript syntax for doing the same thing.  `class` is a reserved word in JavaScript, so another had to be chosen.

Researched answer:

2. What is yarn? What file(s) are modified when you run the command yarn in your terminal?

Your answer: Yarn is a package management tool for React. it can be used to install and run things like the "Jest" debugging software.

Researched answer:

3. What is a React component?

Your answer: A React component is a separate `.js` file that holds code for an application.  This file is called by the main `App.js` file when its code is needed.  Creating components in React allows us to reduce the amount of code that needs to be run when making a change on a web page.  Clicking a 'like' button would normally cause a full-page refresh to show a change, but putting that action into a single component allows us to only refresh that particular element, and keep the rest of the page static.  Changes are shown when comparing the VirtualDOM to the regular DOM and finding the 'diff', or difference between the two.  Then the DOM is updated to match the VDOM.

Researched answer:

4. What is the difference between state values and props in React?

Your answer: props are essentially more advanced parameters that are used in component files.  They're used as vehicles to pass specific values from `App.js` to the components, and get a return.  These values are only precessed when needed, and are not held in a persistent capacity, and the value passing only happens in the downstream direction (away from `App.js`)
  State values are assigned to a state variable, which holds any values it has until they are overwritten.  The information in a state variable is what is passed through the 'prop' in a component file, to run the code in that component.
  

Researched answer:

5. What is the DOM?

Your answer:

Researched answer:

6. STRETCH: Which is the difference between a div tag and a span tag?

Your answer:

Researched answer:

## Looking Ahead: Terms for Next Week

1. Object-oriented programming:

2. Ruby:

3. Implicit return:

4. Ruby blocks:

5. Ruby hashes:
