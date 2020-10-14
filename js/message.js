const reply = document.querySelector(".reply");
const input = document.querySelector(".reply-text");
const chat = document.querySelector(".main-chat");

const MESSAGE = "message";
const messages = [];

function saveMessage() {
    localStorage.setItem(MESSAGE, JSON.stringify(messages));
}


function paintMessage(text) {
    const messageRow = document.createElement("div");
    const messageContent = document.createElement("div");
    const messageInfo = document.createElement("div");
    const messageBubble = document.createElement("span");
    const messageTime = document.createElement("span");
    messageRow.classList.add('message-row--own');
    messageContent.classList.add('message-row__content');
    messageBubble.classList.add('message__bubble');
    messageInfo.classList.add('message__info');
    messageTime.classList.add('message__time');
    messageContent.appendChild(messageInfo);
    messageInfo.appendChild(messageBubble);
    messageInfo.appendChild(messageTime);
    messageRow.appendChild(messageContent);
    chat.appendChild(messageRow);

    messageBubble.innerText = text;

    const messageObj = {
        message: text,
    };

    messages.push(messageObj);
    saveMessage();
}



function handleSubmit(event) {
    event.preventDefault();
    const currentMessage = input.value;
    paintMessage(currentMessage);
    input.value = "";
}

function loadMessage() {
    const loadedMessage = localStorage.getItem(MESSAGE);
    if (loadedMessage !== null) {
        const parsedMessage = JSON.parse(loadedMessage);
        parsedMessage.forEach(function (message) {
            paintMessage(message.message);
        });
    }
}

function init() {
    loadMessage();
    reply.addEventListener("submit", handleSubmit);
}

init();