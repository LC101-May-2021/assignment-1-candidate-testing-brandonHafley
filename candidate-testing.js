const input = require('readline-sync');
const ask = input.question;

let candidateName = '';
let question = 'Who was the first American woman in space? ';
let correctAnswer = 'Sally Ride';
let candidateAnswer = '';

// Declaring and initializing the questions and answers for the quiz through arrays in a particular order so each 
// question and answer matches
let questions = [
    'Who was the first American woman in space? ',
    'True or false: 5 kilometer == 5000 meters? ',
    '(5 + 3)/2 * 10 = ? ',
    'Given the array [8, \'Orbit\', \'Trajectory\', 45], what entry is at index 2? ',
    'What is the minimum crew size for the ISS? '
];
let correctAnswers = [
    'Sally Ride',
    'true',
    '40',
    'Trajectory',
    '3'
];
let candidateAnswers = [];

function askForName() {
    candidateName = ask('Candidate Name: ');
}

function askQuestion() {

    // Looping through each question and asking for the answer. Then displaying the correct answer
    for (let i = 0; i < questions.length; i++) {
        console.log(`${i + 1}) ${questions[i]}`);
        candidateAnswers[i] = ask(`Your Answer: `);
        console.log(`Correct Answer: ${correctAnswers[i]}\n`);
    }
}

function gradeQuiz(candidateAnswers) {
    let numOfCorrectAnswers = 0;

    // Incrementing numOfCorrectAnswers each time candidateAnswers[i] and correctAnswers[i] equals each other
    for (let i = 0; i < correctAnswers.length; i++) {
        if (candidateAnswers[i].toLowerCase().trim() === correctAnswers[i].toLowerCase().trim()) {
            numOfCorrectAnswers += 1;
        }
    }

    let grade = numOfCorrectAnswers / questions.length * 100;
    
    console.log(`>>> Overall Grade: ${grade}% (${numOfCorrectAnswers} of ${questions.length} responses correct) <<< \n>>> Status: ${grade >= 80 ? 'PASSED' : 'FAILED'} <<<`);
}

function runProgram() {
    askForName();
    askQuestion();
    gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
    candidateName: candidateName,
    question: question,
    correctAnswer: correctAnswer,
    candidateAnswer: candidateAnswer,
    questions: questions,
    correctAnswers: correctAnswers,
    candidateAnswers: candidateAnswers,
    gradeQuiz: gradeQuiz,
    runProgram: runProgram
};