//makes the Shapes parent/super class constructor
class Shape {
    constructor(color){
        this.color = color
    }
    setColor(newColor){
        this.color = newColor
    }
    render(){
        throw Error("Unable to create a shape from this class")
    }
}
//Makes class constructors for each child shape option (triangle, square, and circle) that inherits characteristics of 'shape' parent/super class
//'extends' keyword sets the classes as children of shape and extends its properties and methods to them
class Triangle extends Shape {
    constructor(color){
        super(color)
    }
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
}

class Circle extends Shape {
    constructor(color){
        super(color)
    }
    render(){
        return `<circle cx="150" cy="115" r="70" fill="${this.color}"/>`
    }
}
class Square extends Shape {
    constructor(color){
        super(color)
    }
    render(){
        return `<rect x="100" y="65" rx="10" ry="10" width="100" height="100" fill="${this.color}"/>`
    }
}

//export class information as object so their attributes can be used by index.js
module.exports = {Triangle, Circle, Square};