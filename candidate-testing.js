const input = require('readline-sync');
const ask = input.question;

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer
let question = 'Who was the first American woman in space? ';
let correctAnswer = 'Sally Ride';
let candidateAnswer = '';

// Declaring and initializing the questions and answers for the quiz through arrays in a particular order so each 
// question and answer matches
let questions = [
    'Who was the first American woman in space?',
    'True or false: 5 kilometers == 5000 meters?',
    '(5 + 3) / 2 * 10 = ?',
    'Given the array [8, \'Orbit\', \'Trajectory\', 45], what entry is at index 2?',
    'What is the minimum crew size for the ISS?'
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
    // TODO 1.1b: Ask for candidate's name
    candidateName = ask('Candidate Name: ');
}

function askQuestion() {
    // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer
    // candidateAnswer = ask(question);

    // Looping through each question and asking for the answer. Then displaying the correct answer
    for (let i = 0; i < questions.length; i++) {
        console.log(`${i + 1}) ${questions[i]} `);
        candidateAnswers[i] = ask(`Your Answer: `);
        console.log(`Correct Answer: ${correctAnswers[i]}\n`);
    }
}

function gradeQuiz(candidateAnswers) {
    // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly
    //   if (candidateAnswer === correctAnswer) {
    //     console.log(`Congratulations, ${candidateName}! You are correct!`);
    //   } else {
    //     console.log(`Sorry, ${candidateName}... Better luck next time!`);
    //   }

    //   console.log(`Candidate Answers: ${candidateAnswers}... Correct Answers: ${correctAnswers}`);

    let grade = '';
    let status = '';
    let numOfCorrectAnswers = 0;

    // Incrementing numOfCorrectAnswers each time candidateAnswers[i] and correctAnswers[i] equals each other
    for (let i = 0; i < correctAnswers.length; i++) {
        if (candidateAnswers[i].toLowerCase().trim() === correctAnswers[i].toLowerCase().trim()) {
            numOfCorrectAnswers += 1;
        }
    }

    // Calculate the percentage of correct answers and give pass or fail
    const gradingEquation = numOfCorrectAnswers / questions.length * 100;
    if (gradingEquation >= 80) {
        status = 'PASSED';
    } else {
        status = 'FAILED';
    }

    grade = `>>> Overall Grade: ${gradingEquation}% (${numOfCorrectAnswers} of ` +
        `${questions.length} responses correct) <<<\n>>> Status: ${status} <<<`;

    return grade;
}

function runProgram() {
    askForName();
    // TODO 1.1c: Ask for candidate's name //
    //   console.log(`Welcome to this quiz, ${candidateName}!`);
    askQuestion();
    console.log(gradeQuiz(this.candidateAnswers));

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