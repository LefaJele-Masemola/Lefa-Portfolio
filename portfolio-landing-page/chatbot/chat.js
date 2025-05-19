// Professional Profile Data
const portfolioProfile = {
  name: "Lefa Lindo Jele-Masemola",
  title: "Full Stack Developer",
  location: "Pretoria, South Africa",
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
    "Microsoft AI Skills"
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
    <h4>Portfolio Assistant</h4>
    <select id="chatbot-language">
      <option value="en">English</option>
      <option value="zu">isiZulu</option>
    </select>
    <button id="chatbot-close">×</button>
  </div>
  <div class="chatbot-messages" id="chatbot-messages"></div>
  <div class="chatbot-input">
    <button id="chatbot-mic" title="Voice Input">🎤</button>
    <input type="text" id="chatbot-user-input" placeholder="Ask about my work...">
    <button id="chatbot-send">Send</button>
  </div>
</div>
<button id="chatbot-toggle" class="chatbot-toggle-btn">
  <span>💬</span>
  <span class="chatbot-pulse"></span>
</button>
`;

// Chatbot CSS with neutral colors and left positioning
const chatbotCSS = `
#chatbot-container {
  position: fixed;
  bottom: 90px;
  left: 30px;
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
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#chatbot-container.chatbot-visible {
  transform: translateY(0);
  opacity: 1;
}

.chatbot-header {
  background: #495057;
  color: #ffffff;
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

#chatbot-language {
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  background: #fff;
  margin: 0 10px;
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
  opacity: 1;
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
  color: #212529;
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
  outline: none;
}

.chatbot-input input:focus {
  border-color: #adb5bd;
}

.chatbot-input input::placeholder {
  color: #adb5bd;
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
  background: #343a40;
}

#chatbot-mic {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  margin-right: 10px;
  color: #495057;
  padding: 5px;
  transition: all 0.2s ease;
}

#chatbot-mic:hover {
  color: #212529;
  transform: scale(1.1);
}

.chatbot-toggle-btn {
  position: fixed;
  bottom: 30px;
  left: 30px;
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
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  z-index: 999;
  transition: all 0.3s ease;
}

.chatbot-toggle-btn:hover {
  transform: scale(1.1);
  background: #343a40;
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
    left: 5%;
    bottom: 80px;
  }
  
  .chatbot-toggle-btn {
    bottom: 20px;
    left: 20px;
    width: 50px;
    height: 50px;
  }
}
`;

// Initialize Chatbot
document.addEventListener('DOMContentLoaded', function() {
    // Add HTML and CSS to the page
    document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    const style = document.createElement('style');
    style.textContent = chatbotCSS;
    document.head.appendChild(style);
    
    // Chatbot elements
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatMessages = document.getElementById('chatbot-messages');
    const userInput = document.getElementById('chatbot-user-input');
    const sendBtn = document.getElementById('chatbot-send');
    const micBtn = document.getElementById('chatbot-mic');
    const languageSelect = document.getElementById('chatbot-language');
    
    // Language management
    let currentLanguage = 'en';
    
    // Text-to-Speech with female voice
    function speak(text, lang = 'en') {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = lang === 'zu' ? 'zu-ZA' : 'en-US';
            utterance.rate = 0.9;
            utterance.pitch = 1.1;
            
            const voices = window.speechSynthesis.getVoices();
            if (voices.length > 0) {
                setFemaleVoice(utterance, lang);
            } else {
                window.speechSynthesis.onvoiceschanged = () => {
                    setFemaleVoice(utterance, lang);
                };
            }
            
            window.speechSynthesis.speak(utterance);
        }
    }
    
    function setFemaleVoice(utterance, lang) {
        const voices = window.speechSynthesis.getVoices();
        const femaleVoice = voices.find(voice => {
            const isCorrectLanguage = lang === 'zu' 
                ? voice.lang.includes('zu') || voice.lang.includes('zul')
                : voice.lang.includes('en');
            return isCorrectLanguage && 
                  (voice.name.toLowerCase().includes('female') || 
                   voice.name.toLowerCase().includes('woman'));
        });
        
        if (femaleVoice) {
            utterance.voice = femaleVoice;
        } else {
            const langVoice = voices.find(voice => 
                lang === 'zu' 
                    ? voice.lang.includes('zu') || voice.lang.includes('zul')
                    : voice.lang.includes('en')
            );
            if (langVoice) utterance.voice = langVoice;
        }
    }
    
    // Language-specific welcome messages
    function showWelcomeMessage() {
        chatMessages.innerHTML = '';
        if (currentLanguage === 'zu') {
            const zuWelcome = `Sawubona! Ngingumsizi we-portfolio ka-${portfolioProfile.name}. Ungabuza ngamakhono, isipiliyoni, noma imisebenzi yakhe.`;
            addBotMessage(zuWelcome);
            speak("Sawubona! Ngingakusiza ngani?", 'zu');
        } else {
            const enWelcome = `Hello! I'm ${portfolioProfile.name}'s portfolio assistant. Ask me about skills, experience, or projects!`;
            addBotMessage(enWelcome);
            speak("Hello! How can I help you today?", 'en');
        }
    }
    
    // Language switching
    languageSelect.addEventListener('change', (e) => {
        currentLanguage = e.target.value;
        showWelcomeMessage();
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
    
    // Response generation
    function generateResponse(message) {
        if (currentLanguage === 'zu') {
            generateZuluResponse(message);
        } else {
            generateEnglishResponse(message);
        }
    }
    
    function generateEnglishResponse(message) {
        let response = '';
        let speakText = '';
        
        if (message.includes('about') || message.includes('who are you')) {
            response = `I'm ${portfolioProfile.name}, a ${portfolioProfile.title} from ${portfolioProfile.location}. <a href="${portfolioProfile.sections.about}" class="chatbot-link">Visit my about section</a>`;
            speakText = `I'm ${portfolioProfile.name}, a ${portfolioProfile.title}`;
            scrollToSection(portfolioProfile.sections.about);
        }
        else if (message.includes('experience') || message.includes('work')) {
            response = `<strong>My Experience:</strong><br>${portfolioProfile.experience.join('<br>')}<br><br><a href="${portfolioProfile.sections.experience}" class="chatbot-link">View experience section</a>`;
            speakText = "Here's my professional experience";
            scrollToSection(portfolioProfile.sections.experience);
        }
        else if (message.includes('project')) {
            response = `<strong>My Projects:</strong><br>${portfolioProfile.projects.join('<br>')}<br><br><a href="${portfolioProfile.sections.projects}" class="chatbot-link">View projects section</a>`;
            speakText = "These are my projects";
            scrollToSection(portfolioProfile.sections.projects);
        }
        else if (message.includes('contact') || message.includes('reach')) {
            response = `<strong>Contact Me:</strong><br>Email: ${portfolioProfile.contact.email}<br>Phone: ${portfolioProfile.contact.phone}<br><a href="https://${portfolioProfile.contact.linkedin}" class="chatbot-link" target="_blank">LinkedIn</a><br><a href="https://${portfolioProfile.contact.github}" class="chatbot-link" target="_blank">GitHub</a><br><br><a href="${portfolioProfile.sections.contact}" class="chatbot-link">Go to contact section</a>`;
            speakText = "Here's how you can contact me";
            scrollToSection(portfolioProfile.sections.contact);
        }
        else if (message.includes('skill')) {
            response = `<strong>My Skills:</strong><br><strong>Frontend:</strong> ${portfolioProfile.skills.frontend.join(', ')}<br><strong>Backend:</strong> ${portfolioProfile.skills.backend.join(', ')}<br><strong>DevOps:</strong> ${portfolioProfile.skills.devops.join(', ')}<br><strong>Design:</strong> ${portfolioProfile.skills.design.join(', ')}`;
            speakText = "Here are my technical skills";
        }
        else {
            response = `I can tell you about:<br>- My skills<br>- Work experience<br>- Projects<br>- Contact info<br><br>Try asking something specific!`;
            speakText = "How can I help you?";
        }
        
        addBotMessage(response);
        speak(speakText, 'en');
    }
    
    function generateZuluResponse(message) {
        let response = '';
        let speakText = '';
        
        if (message.includes('about') || message.includes('ngubani')) {
            response = `Ngingu-${portfolioProfile.name}, ${portfolioProfile.title} wase-${portfolioProfile.location}. <a href="${portfolioProfile.sections.about}" class="chatbot-link">Vakashela esigabeni sami</a>`;
            speakText = `Ngingu ${portfolioProfile.name}, ${portfolioProfile.title}`;
            scrollToSection(portfolioProfile.sections.about);
        }
        else if (message.includes('experience') || message.includes('isipiliyoni')) {
            response = `<strong>Isipiliyoni Sami:</strong><br>${portfolioProfile.experience.join('<br>')}<br><br><a href="${portfolioProfile.sections.experience}" class="chatbot-link">Bona isigaba sesipiliyoni</a>`;
            speakText = "Nansi isipiliyoni sami somsebenzi";
            scrollToSection(portfolioProfile.sections.experience);
        }
        else if (message.includes('project') || message.includes('msebenzi')) {
            response = `<strong>Imisebenzi Yami:</strong><br>${portfolioProfile.projects.join('<br>')}<br><br><a href="${portfolioProfile.sections.projects}" class="chatbot-link">Bona isigaba semisebenzi</a>`;
            speakText = "Ngemisebenzi engiyenzile";
            scrollToSection(portfolioProfile.sections.projects);
        }
        else if (message.includes('contact') || message.includes('xhumana')) {
            response = `<strong>Xhumana Nami:</strong><br>I-imeyili: ${portfolioProfile.contact.email}<br>Ucingo: ${portfolioProfile.contact.phone}<br><a href="https://${portfolioProfile.contact.linkedin}" class="chatbot-link" target="_blank">LinkedIn</a><br><a href="https://${portfolioProfile.contact.github}" class="chatbot-link" target="_blank">GitHub</a><br><br><a href="${portfolioProfile.sections.contact}" class="chatbot-link">Iya esigabeni sokuxhumana</a>`;
            speakText = "Ngemisebenzi engiyenzile";
            scrollToSection(portfolioProfile.sections.contact);
        }
        else if (message.includes('skill') || message.includes('amakhono')) {
            response = `<strong>Amakhono Ami:</strong><br><strong>Frontend:</strong> ${portfolioProfile.skills.frontend.join(', ')}<br><strong>Backend:</strong> ${portfolioProfile.skills.backend.join(', ')}<br><strong>DevOps:</strong> ${portfolioProfile.skills.devops.join(', ')}<br><strong>Design:</strong> ${portfolioProfile.skills.design.join(', ')}`;
            speakText = "Nalamakhono ami obuchwepheshe";
        }
        else {
            response = `Ngingakutshela mayelana:<br>- Amakhono ami<br>- Isipiliyoni somsebenzi<br>- Imisebenzi yami<br>- Imininingwane yokuxhumana<br><br>Zama ukubuza okuthile okucacile!`;
            speakText = "Ngingakusiza ngani?";
        }
        
        addBotMessage(response);
        speak(speakText, 'zu');
    }
    
    function scrollToSection(sectionId) {
        setTimeout(() => {
            const section = document.querySelector(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
                section.style.transition = 'background-color 0.5s ease';
                section.style.backgroundColor = '#e3f2fd';
                setTimeout(() => {
                    section.style.backgroundColor = '';
                }, 2000);
            }
        }, 800);
    }
    
    // Voice recognition
    function initVoiceRecognition() {
        if (!('webkitSpeechRecognition' in window)) {
            micBtn.style.display = 'none';
            return;
        }
        
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = currentLanguage === 'zu' ? 'zu-ZA' : 'en-US';
        recognition.interimResults = false;
        
        micBtn.addEventListener('click', () => {
            recognition.start();
            addBotMessage(currentLanguage === 'zu' ? "Ngiyalalela..." : "I'm listening...");
        });
        
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            userInput.value = transcript;
            processMessage();
        };
        
        recognition.onerror = (event) => {
            addBotMessage(currentLanguage === 'zu' ? "Angizange ngikuzwe. Zama futhi." : "Sorry, I didn't catch that. Please try again.");
        };
    }
    
    // Initialize chatbot
    chatbotContainer.classList.add('chatbot-visible');
    document.querySelector('.chatbot-pulse').style.display = 'none';
    showWelcomeMessage();
    initVoiceRecognition();
    
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