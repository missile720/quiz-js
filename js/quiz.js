// 1. Create a multidimensional array to hold quiz questions and answers
let questions = [
    [1,"What is the meaning of life?", "Sleep", "Pizza", "Apple", "42", "42"],
    [2,"What is 2 + 2?", "22", "Fish", "4", "ewww math", "Fish"],
    [3,"What came first the chicken or the egg?", "Chicken", "Egg", "Dinosaur", "ChickenEgg", "ChickenEgg"],
    [4,"What is 3 + 3?", "8", "6", "upside down 9", "spider", "upside down 9"],
    [5,"Can water be wet?", "Yes", "No", "Wet", "H20", "Wet"],
    [6,"Apple or Android?", "Apple", "Pineapple","Android", "Landline", "Pineapple"],
    [7,"Best console?", "Potato", "Xbox", "Switch", "PlayStation","Potato"],
    [8,"How many questions did you get right so far?", "0", "5", "-10", "I don't know I haven't kept track...", "I don't know I haven't kept track..."],
    [9,"Are these questions hard?", "Yes", "No", "What questions?", "Trick question", "What questions?"],
    [10,"Last question: Who am I?", "Potato", "You", "Me", "Question", "Potato"]
];

// 2. Store the number of questions answered correctly
let correctAnswers = 0;
//stores which question the user is on
let currentQuestion = 1;
//stores incorrect questions
let incorrectQuestion = [];
/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
function questionLoop(list, number){
    //selects element via dom
    let element = document.querySelector(".question-list");

    //makes sure the element is empty
    element.innerHTML = "";

    //loads the question and answers
    element.innerHTML = `
        <h2>${list[number-1][1]}</h2>
        <p>${list[number-1][0]}.</p>
        <ul>
            <li>${list[number-1][2]}</li>
            <li>${list[number-1][3]}</li>
            <li>${list[number-1][4]}</li>
            <li>${list[number-1][5]}</li>
        </ul>`;

    //adds event listeners to the answers
    let answers = document.querySelectorAll("li");

    for(let i = 0; i < answers.length; i++){
        answers[i].addEventListener("click", answerClick);
    }
}

//inital run of quiz
questionLoop(questions, currentQuestion);

function answerClick(event){
    //updates current question
    currentQuestion++;

    //grabs user answer
    let answer = event.target.innerHTML;
    
    //grab question number
    let number = parseInt(document.querySelector("p").innerHTML);

    //checks to see if answer is correct
    if(answer === questions[number-1][6]){
        correctAnswers++;
    }
    else{
        //pushes question answered wrong to an array
        incorrectQuestion.push(document.querySelector("h2").innerHTML)
    }

    //removes event listeners to the answers
    let answers = document.querySelectorAll("li");

    for(let i = 0; i < answers.length; i++){
        answers[i].removeEventListener("click", answerClick);
    }

    //check to run function for next question or at end of questions posts results
    if(number < questions.length){
        questionLoop(questions, currentQuestion);
    }
    else{
        results();
    }
}

// 4. Display the number of correct answers to the user
function results(){
    //selects element via dom
    let element = document.querySelector(".question-list");

    //makes sure the element is empty
    element.innerHTML = "";

    //loads the results
    element.innerHTML = `
    <h2>You answered ${correctAnswers}/${questions.length} correct</h2>
    `;

    if(correctAnswers === questions.length){
        element.innerHTML += `
        <p>Perfect score!</p>
        `;
    }
    else{
        element.innerHTML += `
        <p class = "result">Questions answered wrong:</p>
        `;
        //loop through array containing questions
        for(let i = 0; i < incorrectQuestion.length; i++){
            element.innerHTML += `
            <p>${incorrectQuestion[i]}</p>
            `;
        }
        
        //add button element
        element.innerHTML += `
        <button>Retry?</button>
        `;

        //add event listener
        document.querySelector("button").addEventListener("click", reset);
    }
}

function reset(){
    //reset global variables
    correctAnswers = 0;
    currentQuestion = 1;
    incorrectQuestion = [];

    //remove event listener
    document.querySelector("button").removeEventListener("click", reset);

    //displays questions again from beginning
    questionLoop(questions, currentQuestion);
}