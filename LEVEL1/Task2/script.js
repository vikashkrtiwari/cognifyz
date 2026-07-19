function changeColor() {

    let button = document.getElementById("colorBtn");

    if (button.style.backgroundColor == "green") {

        button.style.backgroundColor = "#778fa8";

    } else {

        button.style.backgroundColor = "green";

    }

}
function showGreeting() {

    let hour = new Date().getHours();

    if (hour < 12) {

        alert("Good Morning!");

    }

    else if (hour < 18) {

        alert("Good Afternoon!");

    }

    else {

        alert("Good Evening!");

    }

}
function addNumbers() {

    let num1 = Number(document.getElementById("num1").value);

    let num2 = Number(document.getElementById("num2").value);

    if (num1 == "" || num2 == "") {

        alert("Please enter both numbers.");

        return;

    }

    let sum = num1 + num2;

    document.getElementById("result").innerHTML = "Result = " + sum;

}