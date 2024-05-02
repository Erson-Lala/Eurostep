function euroStep() {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = '';

    for (let i = 0; i <= 100; i++) {
        let text = document.createElement("li");

        if (i % 15 === 0) {
            text.textContent = i + ": Eurostep";
            text.className = 'special';
        } else if (i % 3 === 0) {
            text.textContent = i + ": Euro";
            text.className = 'special';
        } else if (i % 5 === 0) {
            text.textContent = i + ": Step";
            text.className = 'special';
        } else {
            text.textContent = i;
            text.className = 'normal';
        }

        resultsContainer.appendChild(text);
    }
}
