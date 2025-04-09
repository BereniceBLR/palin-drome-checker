function checkPalindrome() {
    // Get the word from the input field
    var word = document.getElementById("word").value;

    // Create a version of the word that's spelled backward
    var reversedWord = word.split('').reverse().join('');

    // Check if the original word matches the reversed word
    var resultText = (word === reversedWord) ? "true" : "false";

    // Display the result
    document.getElementById("result").textContent = "Palindrome Is: " + resultText;
}
