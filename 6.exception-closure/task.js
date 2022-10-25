// Task 1
function parseCount(value) {
    const parseValue = Number.parseInt(value);

    if (isNaN(parseValue)) {
        throw new Error("Невалидное значение");
    } else {
        return parseValue;
    }
};

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
};

// Task 2

class Triangle {
    constructor(side1, side2, side3) {
        if ((side1 + side2) < side3 || (side1 + side3) < side2 || (side2 + side3) < side1) {
            throw new Error("Треугольник с такими сторонами не существует");
        }

        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    getPerimeter() {
        return this.side1 + this.side2 + this.side3;
    };

    getArea() {
        let p = this.getPerimeter() / 2;
        let s = Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3));
        return Number(s.toFixed(3));
    };
};

function getTriangle(side1, side2, side3) {
    try {
        return new Triangle(side1, side2, side3);
    } catch (error) {
        return Triangle = {
            getPerimeter() {
                console.log("Ошибка! Треугольник не существует");
            },

            getArea() {
                console.log("Ошибка! Треугольник не существует");
            }
        };
    }
};





