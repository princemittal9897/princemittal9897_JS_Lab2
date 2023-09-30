const qData =[
    {
        question:"Which type of JavaScript language is:",
        options : ["Object-Oriented","Object-Based","Assembly-language","High-level"],
        answer:"Object-Based"
    },  {
        question:"Which one of the following also known as Conditional Expression:",
        options : ["Alternative to if-else","Switch statement","If-then-else statement","immediate if"],
        answer:"immediate if"
    },   {
        question:"In JavaScript, what is a block of statement?",
        options : ["Conditional block","block that combines a number of statements into a single compound statement","both conditional block and a single statement","block that contains a single statement"],
        answer:"block that combines a number of statements into a single compound statement"
    }, {
        question:"When interpreter encounters an empty statements, what it will do:",
        options : ["Shows a warning","Prompts to complete the statement","Throws an error","Ignores the statements"],
        answer:"Ignores the statements"
    }, {
        question:"The function and var are known as:",
        options : ["Keywords","Data types","Declaration statements","Prototypes"],
        answer:"Declaration statements"
    }]

let questionUpdate=document.querySelector('#question_area');
let currentquestionIndex=0;
let TotalQuestionIndex=4;
let score=0;
let userAnswer='';
let cent=0;
updateQuestion();

function updateQuestion(){
    questionUpdate.innerText=qData[currentquestionIndex].question;
    document.getElementById("optionlabel1").innerText=qData[currentquestionIndex].options[0];
    document.getElementById("optionlabel2").innerText=qData[currentquestionIndex].options[1];
    document.getElementById("optionlabel3").innerText=qData[currentquestionIndex].options[2];
    document.getElementById("optionlabel4").innerText=qData[currentquestionIndex].options[3];
    progress();
    next_submit();
 }

 function progress(){
    document.getElementById('progress').innerText=("Question "+ (currentquestionIndex+1) + " of " + (TotalQuestionIndex+1));
 }
 function next_submit(){
    if(currentquestionIndex===TotalQuestionIndex)
        document.getElementById('next').innerText="Finish Test";
 }

function nextquestion()
{   
    checkAnswer()
    if(currentquestionIndex<TotalQuestionIndex){    
        currentquestionIndex++;
        updateQuestion();
    }
    else 
        resultupdate();
}

function resultupdate(){
    questionUpdate.innerText="Your Quiz Evaluation:"
    document.getElementById("question_options").innerHTML=("You Score: "+ score);
    document.getElementById('next').remove();
    document.getElementById('progress').remove();
    const para = document.createElement("p");
    para.innerText = "You got "+ cent +" percentage.";
    document.getElementById("quiz").appendChild(para);

}


function checkAnswer(){
    if( document.querySelector('#option1').checked)
    {
        userAnswer = document.querySelector('#optionlabel1').textContent;
        console.log(userAnswer);
    }
    else if( document.querySelector('#option2').checked)
    {
        userAnswer = document.querySelector('#optionlabel2').textContent;
        console.log(userAnswer);
    }
    else if( document.querySelector('#option3').checked)
    {
        userAnswer = document.querySelector('#optionlabel3').textContent;
        console.log(userAnswer);
    }
    else if( document.querySelector('#option4').checked)
    {
        userAnswer = document.querySelector('#optionlabel4').textContent;
        console.log(userAnswer);
    }

    if(userAnswer === qData[currentquestionIndex].answer){
        score++;
        cent=(score*100)/(TotalQuestionIndex+1);
    }
}
document.getElementById('next').addEventListener('click',nextquestion);

