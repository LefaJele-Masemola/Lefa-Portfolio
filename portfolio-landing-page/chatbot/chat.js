//  Profile Data matching portfolio
const portfolioProfile = {
  name: "Lefa Lindo Jele-Masemola",
  title: "Full Stack Developer",
  location: "Pretoria, South Africia",
  sections: {
    about: "#about",
    experience: "#experience",
    projects: "#projects",
    contact: "#contact"
  },
  skills: {
    frontend: ["React", "ReactVite", "HTML/CSS", "JavaScript"],
    backend: ["Node.js", "Python", "SQL", "Express", "MongoDB", "COBOL"],
    devops: ["Docker", "Flask", "CI/CD", "Linux"],
    design: ["UI/UX", "Figma"]
  },
  education: [
    "Bachelor of Information Technology in Business Systems - IIE Rosebank College",
    "GirlCode ZA Python Bootcamp",
    "Microsoft AI Skills "
  ],
  experience: [
    "Independent Electoral Commission(IEC)- Registration Officer (2023)",
    "Independent Electoral Commission(IEC)- Presiding Officer(2024)",
    "CapaCiti- COBOL mainframe intern (2024-Present)",
    "Microsoft AI Skills Hackathon- CulturePulse (2025)"
  ],
  projects: [
    "E-commerce Platform - HTML/CSS/JS",
    "Budget Management System - Python",
    "Facebook Clone - React",
    "Portfolio - HTML/CSS/JS"
  ],
  contact: {
    email: "lefa030205@gmail.com",
    phone: "+27 71 528 3651",
    linkedin: "linkedin.com/in/lefa-jele-masemola",
    github: "github.com/LefaJele-Masemola"
  }
};

// Chatbot UI Elements
const chatbotHTML = `
<div id="chatbot-container" class="chatbot-hidden">
  <div class="chatbot-header">
    <h4>Ask Me Anything</h4>
    <button id="chatbot-close">×</button>
  </div>
  <div class="chatbot-messages" id="chatbot-messages"></div>
  <div class="chatbot-input">
    <button id="chatbot-mic" title="Voice Input">🎤</button>
    <input type="text" id="chatbot-user-input" placeholder="Ask about my skills or experience...">
    <button id="chatbot-send">Send</button>
  </div>
</div>
<button id="chatbot-toggle" class="chatbot-toggle-btn">
  <span>💬</span>
  <span class="chatbot-pulse"></span>
</button>
`;

// Chatbot CSS
const chatbotCSS = `
#chatbot-container {
  position: fixed;
  bottom: 90px;
  right: 30px;
  width: 350px;
  background: #0B0B0B;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  overflow: hidden;
  z-index: 1000;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.3s ease;
  border: 1px solid #333;
}
#chatbot-container.chatbot-visible {
  transform: translateY(0);
  opacity: 1;
}
.chatbot-header {
  background: linear-gradient(135deg, #1E1E1E 0%, #0B0B0B 100%);
  color: #FF4D00;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #333;
}
.chatbot-header h4 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
}
#chatbot-close {
  background: none;
  border: none;
  color: #FF4D00;
  font-size: 1.5rem;
  cursor: pointer;
  line-height: 1;
}
.chatbot-messages {
  height: 300px;
  overflow-y: auto;
  padding: 15px;
  background: #0B0B0B;
}
.chatbot-message {
  margin-bottom: 15px;
  padding: 10px 15px;
  border-radius: 18px;
  max-width: 80%;
  line-height: 1.4;
  font-size: 0.95rem;
}
.chatbot-user-message {
  background: #FF4D00;
  color: white;
  margin-left: auto;
  border-bottom-right-radius: 5px;
}
.chatbot-bot-message {
  background: #1E1E1E;
  color: #E0E0E0;
  margin-right: auto;
  border-bottom-left-radius: 5px;
  border: 1px solid #333;
}
.chatbot-input {
  display: flex;
  padding: 12px;
  background: #1E1E1E;
  border-top: 1px solid #333;
  align-items: center;
}
.chatbot-input input {
  flex: 1;
  padding: 10px 15px;
  background: #0B0B0B;
  border: 1px solid #333;
  border-radius: 25px;
  margin-right: 10px;
  color: white;
  font-size: 0.9rem;
}
.chatbot-input input::placeholder {
  color: #666;
}
.chatbot-input button {
  padding: 10px 15px;
  background: #FF4D00;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
}
.chatbot-input button:hover {
  background: #E04500;
}
#chatbot-mic {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  margin-right: 10px;
  color: #FF4D00;
  padding: 5px;
}
.chatbot-toggle-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background: #FF4D00;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 5px 15px rgba(255, 77, 0, 0.3);
  z-index: 999;
  transition: all 0.3s ease;
}
.chatbot-toggle-btn:hover {
  transform: scale(1.1);
}
.chatbot-pulse {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #FF4D00;
  border-radius: 50%;
  animation: chatbot-pulse 2s infinite;
  opacity: 0.5;
}
@keyframes chatbot-pulse {
  0% { transform: scale(0.95); opacity: 0.5; }
  70% { transform: scale(1.1); opacity: 0; }
  100% { transform: scale(0.95); opacity: 0; }
}
.chatbot-link {
  color: #FF4D00;
  text-decoration: underline;
  font-weight: 500;
}
@media (max-width: 768px) {
  #chatbot-container {
    width: 90%;
    right: 5%;
    bottom: 80px;
  }
  .chatbot-toggle-btn {
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
  }
}
`;

// Initialize Chatbot
document.addEventListener('DOMContentLoaded', function () {
  // Add HTML and CSS to the page
  document.body.insertAdjacentHTML('beforeend', chatbotHTML);
  const style = document.createElement('style');
  style.textContent = chatbotCSS;
  document.head.appendChild(style);

  // Chatbot functionality
  const chatbotContainer = document.getElementById('chatbot-container');
  const chatbotToggle = document.getElementById('chatbot-toggle');
  const chatbotClose = document.getElementById('chatbot-close');
  const chatMessages = document.getElementById('chatbot-messages');
  const userInput = document.getElementById('chatbot-user-input');
  const sendBtn = document.getElementById('chatbot-send');
  // const micBtn = document.getElementById('chatbot-mic'); // Removed unused variable
  // Show welcome message after 3 seconds
  setTimeout(() => {
    addBotMessage(`Hello! I'm here to tell you about ${portfolioProfile.name}'s professional background. Ask about skills, experience, or projects!`);
  }, 3000);

  // Toggle chatbot visibility
  chatbotToggle.addEventListener('click', () => {
    chatbotContainer.classList.toggle('chatbot-visible');
    document.querySelector('.chatbot-pulse').style.display = 'none';
  });

  chatbotClose.addEventListener('click', () => {
    chatbotContainer.classList.remove('chatbot-visible');
    document.querySelector('.chatbot-pulse').style.display = 'block';
  });

  // Message handling
  function addUserMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'chatbot-message chatbot-user-message';
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function addBotMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'chatbot-message chatbot-bot-message';
    messageElement.innerHTML = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function processMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    addUserMessage(message);
    userInput.value = '';

    setTimeout(() => {
      generateResponse(message.toLowerCase());
    }, 500);
  }

  function generateResponse(message) {
    // Simple response logic - expand as needed
    if (message.includes('about') || message.includes('who are you')) {
      addBotMessage(`I can tell you about ${portfolioProfile.name}, a ${portfolioProfile.title}. <a href="${portfolioProfile.sections.about}" class="chatbot-link">Visit About Section</a>`);
    }
    else if (message.includes('skill') || message.includes('tech')) {
      addBotMessage(`<strong>Skills:</strong><br>Frontend: ${portfolioProfile.skills.frontend.join(', ')}<br>Backend: ${portfolioProfile.skills.backend.join(', ')}`);
    }
    else if (message.includes('experience') || message.includes('work')) {
      addBotMessage(`<strong>Experience:</strong><br>${portfolioProfile.experience.join('<br>')}`);
    }
    else if (message.includes('project')) {
      addBotMessage(`<strong>Projects:</strong><br>${portfolioProfile.projects.join('<br>')}`);
    }
    else if (message.includes('contact') || message.includes('reach')) {
      addBotMessage(`<strong>Contact:</strong><br>Email: ${portfolioProfile.contact.email}<br>LinkedIn: <a href="https://${portfolioProfile.contact.linkedin}" class="chatbot-link" target="_blank">${portfolioProfile.contact.linkedin}</a>`);
    }
    else {
      addBotMessage(`I can tell you about ${portfolioProfile.name}'s professional background. Try asking about:<br>- Skills<br>- Experience<br>- Projects<br>- Contact info`);
    }
  }

  // Event listeners
  sendBtn.addEventListener('click', processMessage);
  userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') processMessage();
  });

  // Mobile responsive check
  function checkMobile() {
    if (window.innerWidth <= 768) {
      document.querySelector('.chatbot-pulse').style.display = 'none';
    }
  }
  window.addEventListener('resize', checkMobile);
  checkMobile();
});
