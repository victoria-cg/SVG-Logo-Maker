//import the shapes.js file information where classes are defined for shapes
const {Triangle, Circle, Square} = require("./shapes");


//test for render() method rendering a triangle with selected color

    describe("Triangle Color", () => {
      it("should set triangle to listed color", () => {
        const shapeTriangle = new Triangle();
        shapeTriangle.setColor("yellow");
        expect(shapeTriangle.render()).toEqual(
          `<polygon points="150, 18 244, 182 56, 182" fill="yellow"/>`
        );
      });
    });


//test for render() method rendering a square with selected color

describe("Square Color", () => {
  it("should set Square to listed color", () => {
    const shapeSquare = new Square();
    shapeSquare.setColor("yellow");
    expect(shapeSquare.render()).toEqual(
      `<rect x="100" y="65" rx="10" ry="10" width="100" height="100" fill="yellow"/>`
    );
  });
});


//test for render() method rendering a circle with selected color

describe("Circle Color", () => {
  it("should set Circle to listed color", () => {
    const shapeCircle = new Circle();
    shapeCircle.setColor("yellow");
    expect(shapeCircle.render()).toEqual(
      `<circle cx="150" cy="115" r="70" fill="yellow"/>`
    );
  });
});
  


