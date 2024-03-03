const loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

        let wordIndex = 0;

        function startGame() {
            const wordContainer = document.getElementById("word-container");
            const inputWord = document.getElementById("input-word");
            const words = loremIpsumText.split(' ');

            // Display the current word
            wordContainer.textContent = words[wordIndex];
            inputWord.value = "";
            inputWord.focus();

            inputWord.addEventListener("input", function() {
                const typedWord = inputWord.value.trim();
                if (typedWord === words[wordIndex]) {
                    wordIndex++;
                    if (wordIndex >= words.length) {
                        alert("Congratulations! You completed the typing speed game.");
                        wordIndex = 0; // Restart the game
                    } else {
                        // Display the next word
                        wordContainer.textContent = words[wordIndex];
                    }
                    inputWord.value = "";
                }
            });
        }

        function submitWord() {
            const inputWord = document.getElementById("input-word");
            const typedWord = inputWord.value.trim();
            const currentWord = document.getElementById("word-container").textContent.trim();

            if (typedWord === currentWord) {
                alert("Correct! Keep going." + currentWord);
                startGame();  // Reset the game for a new word
            } else {
                alert("Incorrect. Try again! " + typedWord);
                startGame();
            }
        }

        startGame();