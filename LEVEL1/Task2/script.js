

const colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", function () {

    if (colorBtn.style.backgroundColor === "crimson") {

        colorBtn.style.backgroundColor = "#007bff";

    } else {

        colorBtn.style.backgroundColor = "crimson";

    }

});





function showGreeting() {

    let hour = new Date().getHours();

    if (hour < 12) {

        alert("Good Morning! ☀️");

    }

    else if (hour < 18) {

        alert("Good Afternoon! 🌤️");

    }

    else {

        alert("Good Evening! 🌙");

    }

}

function addNumbers() {

    let num1 = document.getElementById("num1").value;

    let num2 = document.getElementById("num2").value;

    if (num1 === "" || num2 === "") {

        alert("Please enter both numbers.");

        return;

    }

    let result = Number(num1) + Number(num2);

    document.getElementById("result").innerHTML =
        "Result = " + result;

}