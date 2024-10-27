// Predefined responses based on user input
const responses = {
    "hello": "Hello! How can I assist you today?",
    "hi": "Hi there! What can I do for you?",
    "how are you?": "I'm just a bot, but I'm here to help you!",
    "goodbye": "Goodbye! Have a great day!",
    "sawubona": "Sawubona! Ngiyaphila, unjani?",
    "hallo": "Hallo! Hoe kan ek jou help?",
    "thanks": "You're welcome! Let me know if you need anything else.",
    "default": "I'm sorry, I don't understand that. Can you try again?"
};

// Function to get a response from the bot
function getBotResponse(userInput) {
    userInput = userInput.toLowerCase();
    return responses[userInput] || responses["default"];
}

// Function to display messages in the chat box
function displayMessage(message, sender) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.className = `chat-message ${sender}`;
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

// Function to handle user input
function handleUserInput() {
    const userInputField = document.getElementById("user-input");
    const userInput = userInputField.value.trim();
    
    if (userInput) {
        displayMessage(userInput, "user");
        const botResponse = getBotResponse(userInput);
        displayMessage(botResponse, "bot");
        userInputField.value = ""; // Clear input field
    }
}

// Event listeners for button click and Enter key
document.getElementById("send-button").addEventListener("click", handleUserInput);
document.getElementById("user-input").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        handleUserInput();
    }
});
