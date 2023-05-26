# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX is a melding of JavaScript syntax and HTML syntax, that lets us use both in the same file.  When using one or the other there are slight syntax convention differences in certain situations as a way to reduce conflict within the language.  One of these differences is `class`, which is HTML syntax for assigning a class, and `className` which is the JavaScript syntax for doing the same thing.  `class` is a reserved word in JavaScript, so another had to be chosen.

Researched answer: JSX converts HTML tags into React elements. Though I already knew this, I suppose it would have been helpful to add: using `{}` allows us to write javascript code inside HTML elements.  All code that goes into JSX is intended to be transformed into JavaScript.

2. What is yarn? What file(s) are modified when you run the command yarn in your terminal?

Your answer: Yarn is a package management tool for React. it can be used to install and run things like the "Jest" debugging software.

Researched answer: Yarn is allows you to share code with others.

3. What is a React component?

Your answer: A React component is a separate `.js` file that holds code for an application.  This file is called by the main `App.js` file when its code is needed.  Creating components in React allows us to reduce the amount of code that needs to be run when making a change on a web page.  Clicking a 'like' button would normally cause a full-page refresh to show a change, but putting that action into a single component allows us to only refresh that particular element, and keep the rest of the page static.  Changes are shown when comparing the VirtualDOM to the regular DOM and finding the 'diff', or difference between the two.  Then the DOM is updated to match the VDOM.

Researched answer: Components are reusable pieces of code, akin to functions in JavaScript. They can be passed as props to other components.

4. What is the difference between state values and props in React?

Your answer: props are essentially more advanced parameters that are used in component files.  They're used as vehicles to pass specific values from `App.js` to the components, and get a return.  These values are only precessed when needed, and are not held in a persistent capacity, and the value passing only happens in the downstream direction (away from `App.js`)
  State values are assigned to a state variable, which holds any values it has until they are overwritten.  The information in a state variable is what is passed through the 'prop' in a component file, to run the code in that component.
  

Researched answer: State is mutable, while props are immutable. Meaning the value being passed to props can change, but a prop cannot change the property once it has been passed. It seems that from a performance perspective, it is better to work with props, than just state.

5. What is the DOM?

Your answer: The Document Object Model. Essentially the code that defines what is displayed on an app page. The result of that code is what we see when we visit a page. There is also a Virtual DOM that modifies the DOM whenever the Virtual DOM is updated with new information.

Researched answer: The DOM is an object oriented representation of a web page that can be modified with scripting language like JavaScript. The DOM is language agnostic, and can be manipulated with almost any language, like Python.

6. STRETCH: Which is the difference between a div tag and a span tag?

Your answer: a div tag creates a division or group in an HTML/JSX document. This creates separation on a web page A span allows you to add/alter elements without creating this separation.  For instance a `<div>` could encompass a group of paragraphs, while multiple spans within the paragraphs could be used to bold certain words or phrases without messing up the flow of the text.

Researched answer: div is a block-level element, while span is an in-line level element.  Spans should not be nested, while can and usually are.

## Looking Ahead: Terms for Next Week
<!-- I did not look any of these up -->
1. Object-oriented programming: Programming that revolves around the use of objects as a way to hold, work with, and return information.

2. Ruby: An object-oriented language that heavily focuses on objects for programming. It is a dynamic and loosly typed language that isn't as picky about syntax as others, but also contains a LOT of 'syntactical sugar'.  Ruby is geared more towards plain language typing, than JavaScript.

3. Implicit return: A return that is assumed by the language you are coding in.  You do not have to type 'return' in order for it to know that you want a return there.  Ruby does this heavily, and it is so much nicer than explicit returning in JavaScript.  I love iimplicit returns.

4. Ruby blocks: Code that exists between the `do`..`end` or `{}` of a method.  Arguments that are passed to methods are evaluated by these blocks.

5. Ruby hashes:  A group of key/value pairs, very similar to how an object stores information in JavaScript.  They are considered and act like unordered lists, though recent releases of Ruby have made it so hash key/value pairs are typically ordered in the order they are created. Still, they cannot be accessed via indexing, and only by the specific key or value. 
