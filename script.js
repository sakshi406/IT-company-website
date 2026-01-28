// Website load check
console.log("Website Loaded Successfully");

/* =============================== */
/* 🤖 AI CHATBOT (CHAT BOARD) JS */
/* =============================== */

// Open / Close Chatbot
function toggleChat() {
    const chatbot = document.getElementById("chatbot");
    if (chatbot.style.display === "flex") {
        chatbot.style.display = "none";
    } else {
        chatbot.style.display = "flex";
    }
}

// Send message function
function sendChat() {
    const input = document.getElementById("chatInput");
    const message = input.value.trim();
    const chatBox = document.getElementById("chatMessages");

    if (message === "") return;

    // User message
    const userMsg = document.createElement("div");
    userMsg.className = "user";
    userMsg.innerText = message;
    chatBox.appendChild(userMsg);

    // Bot message
    const botMsg = document.createElement("div");
    botMsg.className = "bot";

    const msg = message.toLowerCase();

    if (msg.includes("services")) {
        botMsg.innerText =
            "We offer Website Development, CRM Systems, AI Solutions, and IT Support.";
    } 
    else if (msg.includes("project")) {
        botMsg.innerText =
            "You can check our projects like Company Website, CRM System, and AI Chatbot.";
    } 
    else if (msg.includes("contact")) {
        botMsg.innerText =
            "Please visit the Contact page to get in touch with us.";
    } 
    else if (msg.includes("hello") || msg.includes("hi")) {
        botMsg.innerText =
            "Hello 👋 How can I assist you today?";
    } 
    else {
        botMsg.innerText =
            "Sorry, I didn't understand. You can ask about services, projects, or contact.";
    }

    // Delay for realistic reply
    setTimeout(() => {
        chatBox.appendChild(botMsg);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);

    input.value = "";
}
