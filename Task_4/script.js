function calculateFactorial() {
    const number = parseInt(document.getElementById("numberInput").value);
    let result = 1;

    if (isNaN(number) || number < 0) {
        document.getElementById("result").textContent = "Please enter a non-negative integer.";
        return;
    }

    for (let i = number; i > 1; i--) {
        result *= i;
    }

    document.getElementById("result").textContent = `Factorial of ${number} is ${result}.`;
}
