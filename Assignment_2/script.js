// Task 1: Even or Odd Checker
function checkEvenOdd() {
    const number = document.getElementById("evenOddInput").value;

    if (number % 2 == 0) {
        document.getElementById("evenOddResult").textContent = number + " is an even number.";
    } else {
        document.getElementById("evenOddResult").textContent = number + " is an odd number.";
    }
}

// Task 2: Multiplication Table Generator
function multiplicationTable() {
    const n = document.getElementById("multInput").value;
    let result = "";

    for (let i = 1; i <= 10; i++) {
        result += n + " x " + i + " = " + n * i + "\n";
    }

    document.getElementById("multResult").textContent = result;
}

// Task 3: FizzBuzz
function fizzBuzz() {
    let result = "";

    for (let i = 1; i <= 20; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            result += "FizzBuzz\n";
        } else if (i % 3 == 0) {
            result += "Fizz\n";
        } else if (i % 5 == 0) {
            result += "Buzz\n";
        } else {
            result += i + "\n";
        }
    }

    document.getElementById("fizzBuzzResult").textContent = result;
}

// Task 4: Square Pattern
function squarePattern() {
    const n = document.getElementById("squareInput").value;
    let result = "";

    for (let row = 0; row < n; row++) {
        let line = "";
        for (let col = 0; col < n; col++) {
            line += "*";
        }
        result += line + "\n";
    }

    document.getElementById("squareResult").textContent = result;
}

// Task 5: Right-Angled Triangle
function trianglePattern() {
    const n = document.getElementById("triInput").value;
    let result = "";

    for (let row = 1; row <= n; row++) {
        let line = "";
        for (let col = 1; col <= row; col++) {
            line += "*";
        }
        result += line + "\n";
    }

    document.getElementById("triResult").textContent = result;
}
