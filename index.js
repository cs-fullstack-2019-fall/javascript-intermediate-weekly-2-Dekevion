/*
Create a Class to represent an individual Question
Your Question class should have 3 properties:

Question Text - This is the actual text of the given question
Answers - This should be an array containing the available answers for the question. The number of answers available for a given question is up to the Developer.
Correct Answer Index - This integer should be the index of the correct answer in your answer array.

 */
/*

Your Question Class should have at least 2 methods:

A method to output the question and the available answers.
A method that accepts an integer, and checks if the value matches the Correct Answer Index.
 */
// Available Question Array
// emptyArray = [];
let availableQuestionArray =[];
for(i = 0; i<availableQuestionArray.length; i++){
    console.log(availableQuestionArray[i]);

}
class Question { // class with 3 properties
    constructor (questionText, answers, correctAnswerIndex){
        this.questionText = questionText;
        this.answers = answers;
        this.correctAnswerIndex = correctAnswerIndex;


    }
    questionOutput(){
        console.log(this.questionText);//method to output question
    }
     integerCheck(){
         if(numInput === this.correctAnswerIndex) {
             alert('Correct');
         }  // does int match with correctAnswerIndex? if so what next
     }
}   //Create 3 or more Question instances via the Question class constructor (1 point).
    let q1 = new Question('Wu tang __(what)',['Clan','Sour Sauce, Chicken'], 0);
    let q2 = new Question('Best Color?',['Red',"Blue",'Tangerine'],1);
    let q3 = new Question('First letter of the alphabet',['a','z','n'],1);

    // console.log(q1);
    // console.log(q2);
    // console.log(q3);

    /*
Prompt the User to enter the number of what they think the correct answer is.
The user should input the corresponding number of the correct answer displayed in the JavaScript console.
    */


let numInput;

while (numInput !== 'q'){
    numInput = prompt(`Please select the correct answer by its number.`);
    availableQuestionArray[i].push(q1 + q2 + q3);
    // availableQuestionArray[i].push(q2);
    // availableQuestionArray[i].push(q3);
    availableQuestionArray = Math.floor(Math.random() * availableQuestionArray.length);
    console.log(availableQuestionArray);
}
// console.log(availableQuestionArray);


