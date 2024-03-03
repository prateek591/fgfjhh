const words = ["apple", "banana", "cherry", "orange", "grape", "kiwi", "mango", "pear", "pineapple", "strawberry"];
        let currentWordIndex = 0;

        function generateRandomWord() {

            // Example: Generate a random word dynamically
            const length = Math.floor(Math.random() * 7) + 3; // Random word length between 3 and 10 characters
            const characters = 'abcdefghijklmnopqrstuvwxyz, ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            return Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
        }

        function startGame() {
            const wordContainer = document.getElementById("word-container");
            const inputWord = document.getElementById("input-word");
            const targetWord = generateRandomWord();
            wordContainer.textContent = targetWord;
            inputWord.value = "";
            inputWord.focus();
            

            inputWord.addEventListener("input", function() {
                const typedWord = inputWord.value.trim();
                if (typedWord === targetWord) {
                    alert("Correct!" + targetWord);
                    startGame(); // Reset the game for a new word
                } else if (typedWord.length === targetWord.length) {
                    alert("Wrong word. Try again!" + targetWord);
                    inputWord.value = "";
                    startGame();
                }
            });
        }

        startGame();