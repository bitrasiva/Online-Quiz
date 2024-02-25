// script.js

// Sample quiz questions and answers
const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Mercury"],
        answer: "Mars"
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
        answer: "Mitochondria"
    }
];

// Function to generate quiz questions
function generateQuiz() {
    const quizContainer = document.querySelector('.quiz');
    quizQuestions.forEach((quizItem, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `<p>${index + 1}. ${quizItem.question}</p>`;
        quizItem.options.forEach(option => {
            questionElement.innerHTML += `
                <label>
                    <input type="radio" name="question${index}" value="${option}">
                    ${option}
                </label><br>
            `;
        });
        quizContainer.appendChild(questionElement);
    });
}

// Function to calculate quiz score
function calculateScore() {
    let score = 0;
    quizQuestions.forEach((quizItem, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            if (selectedOption.value === quizItem.answer) {
                score++;
            }
        }
    });
    return score;
}

// Function to display quiz result
function displayResult() {
    const resultContainer = document.getElementById('result');
    const score = calculateScore();
    resultContainer.innerHTML = `<p>Your score: ${score} out of ${quizQuestions.length}</p>`;
}

// Event listener for submit button
const submitButton = document.getElementById('submit-btn');
submitButton.addEventListener('click', () => {
    displayResult();
});

// Generate quiz when the page loads
window.addEventListener('load', () => {
    generateQuiz();
});






