//object descructuring syntax to import triangle, square, and circle objects from shapes.js
const { Triangle } = require("./lib/shapes");
const { Circle } = require('./lib/shapes');
const { Square} = require('./lib/shapes');

//import info from askForUserInput async function in userInput.js
const askForUserInput = require("./lib/userInput");

//asynchronous function for the main app that awaits user input inported by askForUserInput and uses shape classes from shapes.js
const svgApp = async () => {
  const shapeData = await askForUserInput();
  console.log("Shape Data: ", shapeData);
  //if userInput value for key 'shape' is triangle, then create new instance of Triangle class
  //else if other shape name in string entered by user, make instance of that shape class instead
  let myShape =
    shapeData.shape === "triangle"
      ? new Triangle()
      : shapeData.shape === "circle"
      ? new Circle()
      : shapeData.shape === "square"
      ? new Square()
      : null;
//sets shape color to color value from user data
  myShape.setColor(shapeData.shapeColor)
//svgTemplate makes svg file with values imported from userInput and shapes JS files and stored/selected in myShape
//uses .render method imported from shapes.js to place the svg syntax for the specified shape into the rest of the code rendering an svg file and the text onto that shape
  const svgTemplate = `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

 ${myShape.render()}
 <text x="150" y="125" font-size="60" text-anchor="middle" fill="${shapeData.textColor}">${shapeData.text}</text>

</svg>`;

console.log(svgTemplate)
};

//call the function to run the application and generate an SVG file
svgApp();
