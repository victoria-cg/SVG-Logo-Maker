# SVG-Logo-Maker


## Description

This project was created for the UT EdX Full Stack Coding Boot Camp. The application contained in index.js allows the user to create a simple SVG logo by answering questions in the command line using the inquirer node.js package. Completion of this project allowed me to practice using the concepts of object-oriented JS programming such as creating classes, and allowed me to continue gaining experience using node.js concepts such as modular programming/importing files, and use of packages to add features such as asking for user input and running tests.


## Installation

To install the application, download or clone a copy of the repository. Then install the node packages specified in the package.json dependencies by running 'npm i' in the terminal. If not already installed, you will need to install node.js before completing this step. 


## Usage

Once the dependencies are installed, navigate to index.js and run the command 'node index.js' in the terminal to start the application. Then answer the question prompts that appear in the terminal. Once all questions are answered, the message "generated logo.svg" will appear in the terminal and your new logo.svg file will appear in the main directory containing index.js.

A video walkthrough of the application and how to use it can be accessed here: https://drive.google.com/file/d/14GH-8bUkJSptoIOUwB6mSBvA35C9Xufq/view?usp=sharing 


## Credits

References:

MDN tutorial for SVG shapes:

Mozilla Developer Network. (2023, March 6). Basic shapes - SVG: Scalable Vector Graphics | MDN. MDN Web Docs. Retrieved March 7, 2024, from https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes

MDN article on SVG files and syntax to render shapes used in the 'const svgTemplate' in index.js as well as the shape classes in shapes.js:

Mozilla Developer Network. (2023, May 19). Getting started - SVG: Scalable Vector Graphics | MDN. MDN Web Docs. Retrieved March 7, 2024, from https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Getting_Started

Jest testing tutorial:

Testim. (2022, March 25). Jest Testing: A Helpful Introductory Tutorial. Testim.io. Retrieved March 2, 2024, from https://www.testim.io/blog/jest-testing-a-helpful-introductory-tutorial/

BCS test example/acceptance criteria were used to format SVG code for rendering triangle shape and to format the tests to meet acceptance criteria

Boot Camp Tutoring with Alexis Gonzalez assisted with:
-Use of object destructuring to import classes from shapes.js to index.js
-Use of ternary operators in if/else statements
-Syntax and structure for classes and inheritance of shapes
-Functions to call and render user data in index.js, accurate use of async/await

Xpert AI:
Use of default value ‘null’ at index.js 23 to end the ternary operation if no expected value is entered in order to correct my syntax error. 

Class TA Walter Perry:
Debugged syntax for export and import of shape classes and shapes.js line 42 and index.js line 2


## License

This project uses an MIT license. More information available in the 'License' section of the repository or here: https://choosealicense.com/licenses/mit/ 


## Tests

Tests for the render() method on the JS classes for the SVG shapes can be found in the shapes.test.js file, and can be run by typing "npm run test" in the command line. See the video in the "Usage" section above for a demonstration.

