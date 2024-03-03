//make shapes class constructor
//then make class constructor for each shape option that inherits characteristics of 'shape'
//export information so it can be used by index.js
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

class Triangle extends Shape {
    constructor(color){
        super(color)
    }
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

class Circle extends Shape {}
class Square extends Shape {}

module.exports = {Triangle}
module.exports = {Circle}
module.exports = {Square}