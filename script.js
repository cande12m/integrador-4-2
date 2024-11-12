ScriptProcessorNode.js
const questions = [
    { question: "¿Cuál es la capital de Francia?", answer: "París" },
    { question: "¿Cuántos continentes hay?", answer: "7" },
    { question: "¿Quién escribió 'Cien años de soledad'?", answer: "Gabriel García Márquez" },
    // ... más preguntas
];

function randomQuestions() {
    const selected = [];
    while (selected.length < 10) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        if (!selected.includes(randomIndex)) {
            selected.push(randomIndex);
        }
    }
    return selected.map(index => questions[index]);
}

function displayQuestions() {
    const quizContainer = document.getElementById("quiz")
}