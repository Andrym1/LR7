const input = document.getElementById('questionInput');
const ball = document.getElementById('ball');
const answer = document.getElementById('answer');

const answers = [
    "\u0422\u0430\u043a",
    "\u041d\u0456",
    "\u041c\u043e\u0436\u043b\u0438\u0432\u043e",
    "\u0421\u043a\u043e\u0440\u0456\u0448\u0435 \u0437\u0430 \u0432\u0441\u0435",
    "\u041d\u0430\u0432\u0440\u044f\u0434 \u0447\u0438",
    "\u0417\u0430\u043f\u0438\u0442\u0430\u0439 \u043f\u0456\u0437\u043d\u0456\u0448\u0435",
    "\u041d\u0435 \u0432\u043f\u0435\u0432\u043d\u0435\u043d\u0438\u0439",
    "\u0411\u0435\u0437\u043f\u0435\u0440\u0435\u0447\u043d\u043e!",
    "\u041d\u0435 \u0437\u0430\u0440\u0430\u0437",
    "\u0419\u043c\u043e\u0432\u0456\u0440\u043d\u043e"
];

ball.addEventListener('click', () => {
    const question = input.value.trim();

    if (question === "") {
        answer.textContent = "\u0412\u0432\u0435\u0434\u0438 \u043f\u0438\u0442\u0430\u043d\u043d\u044f!";
        return;
    }

    if (!question.includes("?")) {
        answer.textContent = "\u041f\u0438\u0442\u0430\u043d\u043d\u044f \u043c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 '?'";
        return;
    }

    const i = Math.floor(Math.random() * answers.length);
    answer.textContent = answers[i];
});
