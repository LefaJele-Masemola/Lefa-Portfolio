// Show Chatbot Popup with Greeting on Page Load
window.onload = function () {
    toggleChatbot();  // Show the chatbot popup
    appendGreetingMessage();  // Display a greeting message
};

// Toggle Chatbot Popup
function toggleChatbot() {
    const chatbotPopup = document.getElementById("chatbot-popup");
    chatbotPopup.style.display = chatbotPopup.style.display === "none" || chatbotPopup.style.display === "" ? "block" : "none";
}

// Display Greeting Message
function appendGreetingMessage() {
    const greetingMessage = "Hello! 👋 my name is Lee.  I'm here to help. Feel free to ask me anything or say 'hi' to get started!";
    appendMessage(greetingMessage, 'bot-message');  // Display the greeting message
}

// Send User Message on Enter Key Press
function sendMessage(event) {
    if (event.key === 'Enter') {
        sendUserMessage();
    }
}

// Send User Message on Button Click
function sendUserMessage() {
    const input = document.getElementById("chatbot-input");
    const userMessage = input.value.trim();
    
    if (userMessage) {
        appendMessage(userMessage, 'user-message');
        input.value = '';  // Clear the input field
        
        // Bot response with a typing effect
        setTimeout(() => {
            appendTypingIndicator();
            setTimeout(() => {
                removeTypingIndicator();
                const botReply = generateCreativeBotReply(userMessage);
                appendMessage(botReply, 'bot-message');
            }, 1000); // Delay for bot's response
        }, 300); // Initial delay before showing "Typing..."
    }
}

// Append Message to Chat
function appendMessage(message, className) {
    const messagesContainer = document.getElementById("chatbot-messages");
    const messageElement = document.createElement("div");
    messageElement.className = `chatbot-message ${className}`;
    messageElement.innerHTML = message; // Use innerHTML to render HTML content
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Auto-scroll to the latest message
}

// Show Typing Indicator
function appendTypingIndicator() {
    const messagesContainer = document.getElementById("chatbot-messages");
    const typingIndicator = document.createElement("div");
    typingIndicator.id = "typing-indicator";
    typingIndicator.className = "chatbot-message bot-message";
    typingIndicator.textContent = "Typing...";
    messagesContainer.appendChild(typingIndicator);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Remove Typing Indicator
function removeTypingIndicator() {
    const typingIndicator = document.getElementById("typing-indicator");
    if (typingIndicator) typingIndicator.remove();
}

// Generate Creative Bot Replies
function generateCreativeBotReply(userMessage) {
    const message = userMessage.toLowerCase();
    
    if (message.includes("hello") || message.includes("hi")) {
        return "Hey there! 👋 What's up?";
    } else if (message.includes("portfolio") || message.includes("projects")) {
        return "I'm glad you're interested! Check out my favorite projects, <a href=\"index.html#projects\">here</a>, and feel free to ask about any of them!";
    } else if (message.includes("skills") || message.includes("experience")) {
        return "My skills? I'm a tech wizard 🧙‍♂️ with expertise in web dev, data analysis, and a sprinkle of AI magic! If you want to know more, feel free to <a href=\"index.html#skills\">explore</a>.";
    } else if (message.includes("hobbies") || message.includes("interests")) {
        return "Outside of coding, I love creating art, writing poetry, and exploring new ideas. 🎨✍️ What about you?";
    } else if (message.includes("contact") || message.includes("email")) {
        return "You can reach me through the <a href=\"index.html#contact\">contact section</a> on my website or drop a message here!";
    } else if (message.includes("joke")) {
        return "Why did the programmer quit their job? Because they didn't get arrays! 😆";
    } else if (message.includes("inspire me") || message.includes("motivate me")) {
        return "Believe in yourself and code fearlessly! Every great developer started with just one line of code. 🚀";
    } else if (message.includes("thank you") || message.includes("thanks")) {
        return "You're very welcome! 😊 Anything else I can help you with?";
    } else {
        return "I'm here to chat about anything from code to coffee ☕️. Ask away!";
    }
}

