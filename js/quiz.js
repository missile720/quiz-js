// 1. Create a multidimensional array to hold quiz questions and answers
let questions = [
    ["Question 1", "Answer 1", "Answer 2", "Answer 3", "Answer 4", "correct"],
    ["Question 2", "Answer 5", "Answer 2", "Answer 3", "Answer 4", "correct"]
];

// 2. Store the number of questions answered correctly
let correctAnswers = 0;
//stores which question the user is on
let currentQuestion = 1;
/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
function questionLoop(list, number){
    let element = document.querySelector(".question-list");

    element.innerHTML = "";

    element.innerHTML = `
        <p>${list[number-1][0]}</p>
        <ul>
            <li>${list[number-1][1]}</li>
            <li>${list[number-1][2]}</li>
            <li>${list[number-1][3]}</li>
            <li>${list[number-1][4]}</li>
        </ul>`;
}

//inital run of quiz
questionLoop(questions, currentQuestion);

// 4. Display the number of correct answers to the user