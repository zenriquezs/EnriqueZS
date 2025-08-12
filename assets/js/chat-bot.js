class FloatingChatbot {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.responses = {
            greetings: [
                "¡Hola!  Soy el asistente virtual de Enrique. ¿En qué puedo ayudarte?",
                "¡Hola!  ¿Tienes alguna pregunta sobre los proyectos o experiencia de Enrique?",
                "¡Saludos! Estoy aquí para ayudarte con cualquier consulta."
            ],
            projects: [
                "Enrique ha trabajado en varios proyectos interesantes, incluyendo sistemas de gestión, aplicaciones móviles y dashboards analytics. ¿Te interesa alguno en particular?",
                "Los proyectos destacados incluyen desarrollo web con React, aplicaciones móviles con Flutter y análisis de datos con Python. ¿Quieres saber más detalles?"
            ],
            skills: [
                "Enrique domina tecnologías como JavaScript, Python, React, Flutter, Node.js, MySQL y más. ¿Hay alguna tecnología específica que te interese?",
                "Sus habilidades incluyen desarrollo Full Stack, diseño UX/UI, bases de datos y desarrollo móvil. ¿Necesitas más información sobre alguna?"
            ],
            contact: [
                "Puedes contactar a Enrique por email: zenrizu@gmail.com o por teléfono: +52 772 142 4369. También está disponible en LinkedIn y GitHub.",
                "Para proyectos o colaboraciones, el mejor medio es el email: zenrizu@gmail.com. ¡Estará encantado de escuchar sobre tu proyecto!"
            ],
            experience: [
                "Enrique es un desarrollador Full Stack Junior con experiencia en múltiples tecnologías y proyectos. Ha trabajado tanto en frontend como backend.",
                "Su experiencia abarca desde desarrollo web hasta aplicaciones móviles, siempre enfocado en crear soluciones innovadoras y eficientes."
            ],
            default: [
                "Interesante pregunta. Te recomiendo revisar el portfolio completo o contactar directamente a Enrique para más detalles específicos.",
                "No tengo información específica sobre eso, pero puedes encontrar más detalles en las secciones del portfolio o contactar directamente.",
                "¡Buena pregunta! Para información más detallada, te sugiero revisar los proyectos o enviar un mensaje directo."
            ]
        };
        this.init();
    }

    init() {
        this.createChatbot();
        this.setupEventListeners();
        this.addWelcomeMessage();
    }

    createChatbot() {
        const chatbotHTML = `
            <div class="chatbot-container">
                <button class="chatbot-toggle" id="chatbot-toggle">
                    <i class="bi bi-chat-dots-fill"></i>
                </button>
                
                <div class="chatbot-window" id="chatbot-window">
                    <div class="chatbot-header">
                        <div>
                            <h5> Asistente Virtual</h5>
                            <small>Pregúntame sobre Enrique</small>
                        </div>
                        <button class="chatbot-close" id="chatbot-close">
                            <i class="bi bi-x"></i>
                        </button>
                    </div>
                    
                    <div class="chatbot-messages" id="chatbot-messages">
                        <!-- Los mensajes se agregarán aquí -->
                    </div>
                    
                    <div class="chatbot-input">
                        <div class="input-group">
                            <input type="text" id="chatbot-input" placeholder="Escribe tu mensaje..." maxlength="200">
                            <button class="send-button" id="send-button">
                                <i class="bi bi-send-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    }

    setupEventListeners() {
        const toggle = document.getElementById('chatbot-toggle');
        const close = document.getElementById('chatbot-close');
        const input = document.getElementById('chatbot-input');
        const sendButton = document.getElementById('send-button');

        toggle.addEventListener('click', () => this.toggleChatbot());
        close.addEventListener('click', () => this.closeChatbot());
        sendButton.addEventListener('click', () => this.sendMessage());
        
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });

        // Cerrar al hacer clic fuera
        document.addEventListener('click', (e) => {
            const container = document.querySelector('.chatbot-container');
            if (this.isOpen && !container.contains(e.target)) {
                this.closeChatbot();
            }
        });
    }

    toggleChatbot() {
        const window = document.getElementById('chatbot-window');
        
        if (this.isOpen) {
            this.closeChatbot();
        } else {
            window.classList.add('active');
            this.isOpen = true;
            document.getElementById('chatbot-input').focus();
        }
    }

    closeChatbot() {
        const window = document.getElementById('chatbot-window');
        window.classList.remove('active');
        this.isOpen = false;
    }

    addWelcomeMessage() {
        setTimeout(() => {
            this.addBotMessage(this.getRandomResponse('greetings'));
        }, 1000);
    }

    sendMessage() {
        const input = document.getElementById('chatbot-input');
        const message = input.value.trim();
        
        if (!message) return;
        
        this.addUserMessage(message);
        input.value = '';
        
        // Simular typing
        this.showTypingIndicator();
        
        setTimeout(() => {
            this.hideTypingIndicator();
            const response = this.generateResponse(message);
            this.addBotMessage(response);
        }, 1500 + Math.random() * 1000);
    }

    addUserMessage(message) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const messageHTML = `
            <div class="chatbot-message message-user">
                <div class="message-content">
                    ${this.escapeHtml(message)}
                    <div class="message-time">${this.getCurrentTime()}</div>
                </div>
            </div>
        `;
        
        messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
        this.scrollToBottom();
    }

    addBotMessage(message) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const messageHTML = `
            <div class="chatbot-message message-bot">
                <div class="message-avatar">
                    <i class="bi bi-robot"></i>
                </div>
                <div class="message-content">
                    ${message}
                    <div class="message-time">${this.getCurrentTime()}</div>
                </div>
            </div>
        `;
        
        messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
        this.scrollToBottom();
    }

    showTypingIndicator() {
        const messagesContainer = document.getElementById('chatbot-messages');
        const typingHTML = `
            <div class="chatbot-message message-bot typing-message">
                <div class="message-avatar">
                    <i class="bi bi-robot"></i>
                </div>
                <div class="typing-indicator">
                    <div class="typing-dots">
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                    </div>
                </div>
            </div>
        `;
        
        messagesContainer.insertAdjacentHTML('beforeend', typingHTML);
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        const typingMessage = document.querySelector('.typing-message');
        if (typingMessage) {
            typingMessage.remove();
        }
    }

    generateResponse(message) {
        const lowerMessage = message.toLowerCase();    
        if (this.containsKeywords(lowerMessage, ['hola', 'saludos', 'buenos', 'buenas', 'hey'])) {
            return this.getRandomResponse('greetings');
        }
        
        if (this.containsKeywords(lowerMessage, ['proyecto', 'proyectos', 'trabajo', 'portfolio'])) {
            return this.getRandomResponse('projects');
        }
        
        if (this.containsKeywords(lowerMessage, ['habilidad', 'habilidades', 'tecnología', 'tecnologías', 'skill', 'lenguaje'])) {
            return this.getRandomResponse('skills');
        }
        
        if (this.containsKeywords(lowerMessage, ['contacto', 'email', 'teléfono', 'contactar', 'comunicar'])) {
            return this.getRandomResponse('contact');
        }
        
        if (this.containsKeywords(lowerMessage, ['experiencia', 'trabajo', 'carrera', 'profesional'])) {
            return this.getRandomResponse('experience');
        }
        
        return this.getRandomResponse('default');
    }

    containsKeywords(message, keywords) {
        return keywords.some(keyword => message.includes(keyword));
    }

    getRandomResponse(category) {
        const responses = this.responses[category];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    getCurrentTime() {
        return new Date().toLocaleTimeString('es-ES', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    scrollToBottom() {
        const messagesContainer = document.getElementById('chatbot-messages');
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    new FloatingChatbot();
});