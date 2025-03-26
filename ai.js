document.getElementById('aiButton').addEventListener('click', function() {
    const chatbotWidget = document.getElementById('chatbotWidget');
    chatbot.style.display = 'block';
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('chatbotWidget').style.display = 'none';
});

document.querySelector('.chatbot-footer button').addEventListener('click', function() {
    const chatbotBody = document.querySelector('.chatbot-body');
    const userMessage = document.querySelector('.chatbot-footer textarea').value.trim();
    
    if (userMessage) {
        const messageElement = document.createElement('div');
        messageElement.textContent = userMessage;
        chatbotBody.appendChild(messageElement);
        document.querySelector('.chatbot-footer textarea').value = '';
        chatbotBody.scrollTop = chatbotBody.scrollHeight;
    }
});
