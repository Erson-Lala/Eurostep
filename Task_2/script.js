function isPalindrome(str) {
    const cleaned = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

function checkPalindrome() {
    const inputString = document.getElementById("inputString").value;
    const result = isPalindrome(inputString);
    const resultElement = document.getElementById("result");
    if(result) {
        resultElement.textContent = `"${inputString}" is a palindrome!`;
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = `"${inputString}" is not a palindrome.`;
        resultElement.style.color = "red";
    }
}
