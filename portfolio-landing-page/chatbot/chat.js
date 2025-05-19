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
    linkedin: "https://www.linkedin.com/in/lefa-jele-masemola-90445421a/",
    github: "https://github.com/LefaJele-Masemola"
  }
};

// Chatbot UI Elements
const chatbotHTML = `
<div id="chatbot-container" class="chatbot-hidden">
  <div class="chatbot-header">
    <h4>Lefa's Chatbot</h4>
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
  left: 20px;
  width: 350px;
  background: #f8f9fa;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  overflow: hidden;
  z-index: 1000;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.3s ease;
  border: 1px solid #e0e0e0;
  font-family:"Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
#chatbot-container.chatbot-visible {
  transform: translateY(0);
  opacity: 1;
}
.chatbot-header {
  background: #495057;
  color:#ffffff;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dee2e6;
}
.chatbot-header h4 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 500;
}
#chatbot-close {
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  line-height: 1;
  opacity: 0.8;
}
#chatbot-close:hover {
opacity:1;
}

.chatbot-messages {
  height: 300px;
  overflow-y: auto;
  padding: 15px;
  background: #ffffff;
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
  background: #495057;
  color: white;
  margin-left: auto;
  border-bottom-right-radius: 5px;
}
.chatbot-bot-message {
  background: #e9ecef;
  color: #212529
  margin-right: auto;
  border-bottom-left-radius: 5px;
  border: 1px solid #dee2e6;
}
.chatbot-input {
  display: flex;
  padding: 12px;
  background: #f8f9fa;
  border-top: 1px solid #e0e0e0;
  align-items: center;
}
.chatbot-input input {
  flex: 1;
  padding: 10px 15px;
  background: #ffffff;
  border: 1px solid #dee2e6;
  border-radius: 25px;
  margin-right: 10px;
  color: #495057;
  font-size: 0.9rem;
  outline:none;
}
  .chatbot-input input:focus {
  border-color: #adb5bd;
}
.chatbot-input input::placeholder {
  color: #adb5db;
}
.chatbot-input button {
  padding: 10px 15px;
  background: #495057;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
}
.chatbot-input button:hover {
  background:#343a40;
}
#chatbot-mic {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  margin-right: 10px;
  color: #49507;
  padding: 5px;
    transition: all 0.2s ease;
}
.chatbot-toggle-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background: #495057;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  z-index: 999;
  transition: all 0.3s ease;
}
.chatbot-toggle-btn:hover {
  transform: scale(1.1);
  background: #343a49
}
.chatbot-pulse {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #495057;
  border-radius: 50%;
  animation: chatbot-pulse 2s infinite;
  opacity: 0.3;
}
@keyframes chatbot-pulse {
  0% { transform: scale(0.95); opacity: 0.3; }
  70% { transform: scale(1.1); opacity: 0; }
  100% { transform: scale(0.95); opacity: 0; }
}
.chatbot-link {
  color: #495057;
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
  const micBtn = document.getElementById('chatbot-mic'); 
  // Show welcome message after 3 seconds

  //Text-to-Speech with female voice
   // Text-to-Speech Functionality with female voice
    function speak(text, lang = 'en') {
        if ('speechSynthesis' in window) {
            // Clean text for speech (remove HTML)
            const cleanText = text.replace(/<[^>]*>?/gm, '');
            const utterance = new SpeechSynthesisUtterance(cleanText);
            // Configure voice settings
            utterance.lang = lang === 'zu' ? 'zu-ZA' : 'en-US';
            utterance.rate = 0.9; // Slightly slower speech
            utterance.pitch = 1.2; // Slightly higher pitch for female voice
            
            // Try to find a female voice
            const voices = window.speechSynthesis.getVoices();
            const femaleVoice = voices.find(voice => 
                (voice.lang.includes(lang === 'zu' ? 'zu' : 'en') && 
                 voice.name.toLowerCase().includes('female'))
            );
            
            if (femaleVoice) {
                utterance.voice = femaleVoice;
            }
            
            window.speechSynthesis.speak(utterance);
        }
    }
    
     // Show welcome message immediately in both languages
    function showWelcomeMessage() {
        const welcomeMessage = `
            Hello! I'm here to tell you about ${portfolioProfile.name}'s professional background. 
            You can ask me about skills, experience, or projects!
            <br><br>
            Sawubona! Ngilapha ukukutshela ngomsebenzi ka-${portfolioProfile.name}. 
            Ungabuza ngamakhono, isipiliyoni, noma imisebenzi!
        `;
        addBotMessage(welcomeMessage);
        speak("Hello! I'm your portfolio assistant. How can I help?"); // English greeting
    }
    
    // Show chatbot immediately with welcome message
    chatbotContainer.classList.add('chatbot-visible');
    document.querySelector('.chatbot-pulse').style.display = 'none';
    showWelcomeMessage();
    
    // Toggle chatbot visibility
    chatbotToggle.addEventListener('click', () => {
        chatbotContainer.classList.toggle('chatbot-visible');
        document.querySelector('.chatbot-pulse').style.display = 
            chatbotContainer.classList.contains('chatbot-visible') ? 'none' : 'block';
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

// Voice recognition
    function initVoiceRecognition() {
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            micBtn.style.display = 'none';
            return;
        }
        
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.lang = currentLanguage === 'zu' ? 'zu-ZA' : 'en-US';
        recognition.interimResults = false;
        
        micBtn.addEventListener('click', () => {
            recognition.start();
            addBotMessage("I'm listening...");
        });
        
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            userInput.value = transcript;
            processMessage();
        };
        
        recognition.onerror = (event) => {
            addBotMessage("Sorry, I didn't catch that. Please try again.");
        };
    }
    
    // Language switching
    let currentLanguage = 'en';
    const languageSelect = document.createElement('select');
    languageSelect.innerHTML = `
        <option value="en">English</option>
        <option value="zu">isiZulu</option>
    `;
    languageSelect.style.marginLeft = '10px';
    languageSelect.addEventListener('change', (e) => {
        currentLanguage = e.target.value;
    });
    
    // Add language selector to header
    document.querySelector('.chatbot-header').appendChild(languageSelect);
    
    // Response generation with isiZulu support
    function generateResponse(message) {
        let response = '';
        let speakText = '';
        
        if (message.includes('about') || message.includes('who are you') || message.includes('ngubani')) {
            if (currentLanguage === 'zu') {
                response = `Ungu-${portfolioProfile.name}, ${portfolioProfile.title}. <a href="${portfolioProfile.sections.about}" class="chatbot-link">Vakashela esigabeni sakhe</a>`;
                speakText = `Ungu ${portfolioProfile.name}, ${portfolioProfile.title} wase ${portfolioProfile.location}`;
            } else {
                response = `I'm ${portfolioProfile.name}, a ${portfolioProfile.title}. <a href="${portfolioProfile.sections.about}" class="chatbot-link">Visit About Section</a>`;
                speakText = `I'm ${portfolioProfile.name}, a ${portfolioProfile.title} from ${portfolioProfile.location}`;
            }
        }
        else if (message.includes('skill') || message.includes('tech') || message.includes('amakhono')) {
            if (currentLanguage === 'zu') {
                response = `<strong>Amakhono:</strong><br>Frontend: ${portfolioProfile.skills.frontend.join(', ')}<br>Backend: ${portfolioProfile.skills.backend.join(', ')}`;
                speakText = "Amakhono ami afaka i-frontend, i-backend, kanye ne-devops";
            } else {
                response = `<strong>Skills:</strong><br>Frontend: ${portfolioProfile.skills.frontend.join(', ')}<br>Backend: ${portfolioProfile.skills.backend.join(', ')}`;
                speakText = "My skills include frontend, backend, and devops technologies";
            }
        }
        else if (message.includes('experience') || message.includes('work') || message.includes('isipiliyoni')) {
            response = `<strong>${currentLanguage === 'zu' ? 'Isipiliyoni' : 'Experience'}:</strong><br>${portfolioProfile.experience.join('<br>')}`;
            speakText = currentLanguage === 'zu' ? 
                `Isipiliyoni sika ${portfolioProfile.name}` : 
                `${portfolioProfile.name}'s work experience`;
        }
        else if (message.includes('project') || message.includes('msebenzi') || message.includes('imisebenzi')) {
            response = `<strong>${currentLanguage === 'zu' ? 'Imisebenzi' : 'Projects'}:</strong><br>${portfolioProfile.projects.join('<br>')}`;
            speakText = currentLanguage === 'zu' ? "Imisebenzi engiyenzile" : "Projects I have worked on";
        }
        else if (message.includes('contact') || message.includes('reach') || message.includes('xhumana')) {
            response = `<strong>${currentLanguage === 'zu' ? 'Imininingwane' : 'Contact'}:</strong><br>Email: ${portfolioProfile.contact.email}<br>LinkedIn: <a href="https://${portfolioProfile.contact.linkedin}" class="chatbot-link" target="_blank">${portfolioProfile.contact.linkedin}</a>`;
            speakText = currentLanguage === 'zu' ? 
                `Ungangithola ku-email ${portfolioProfile.contact.email}` : 
                `You can reach me at ${portfolioProfile.contact.email}`;
        }
        else {
            if (currentLanguage === 'zu') {
                response = `Ngingakutshela ngo ${portfolioProfile.name}. Zama ukubuza:<br>- Amakhono<br>- Isipiliyoni<br>- Imisebenzi<br>- Imininingwane`;
                speakText = "Ngingakusiza ngani?";
            } else {
                response = `I can tell you about ${portfolioProfile.name}'s professional background. Try asking about:<br>- Skills<br>- Experience<br>- Projects<br>- Contact info`;
                speakText = "How can I help you today?";
            }
        }
        
        addBotMessage(response);
        speak(speakText, currentLanguage);
    }
    
    // Event listeners
    sendBtn.addEventListener('click', processMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') processMessage();
    });
    
    // Initialize voice recognition
    initVoiceRecognition();
    
    // Mobile responsive check
    function checkMobile() {
        if (window.innerWidth <= 768) {
            document.querySelector('.chatbot-pulse').style.display = 'none';
        }
    }
    window.addEventListener('resize', checkMobile);
    checkMobile();
    
    // Load voices when available
    if ('speechSynthesis' in window) {
        speechSynthesis.onvoiceschanged = function() {
            console.log("Voices loaded");
        };
    }
});