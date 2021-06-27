(function(){
    function buildQuiz(){
        var output=[];

        myQuestions.forEach((currentQuestion,questionNumber) => {
            var answers=[];
            for (letter in currentQuestion.answers){
                answers.push(
                    `<label>
                    <input type = "radio" name="question${questionNumber}" value=${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label> `
                )
            }
            output.push(
               `<div class="question"> ${currentQuestion.question}</div>
               <div class="answers"> ${answers.join('')}</div>` 
            )
        });
        quizContainer.innerHTML=output.join("");
    }
    function showResults(){
        var answerContainers=quizContainer.querySelectorAll('.answers');
        var numCorrect=0;
        
        myQuestions.forEach((currentQuestion,questionNumber) => {
         var answerContainer=answerContainers[questionNumber]
         var selector=`input[name=question${questionNumber}]:checked`;
         var useranswer=(answerContainer.querySelector(selector)||{}).value;   
            
         if (useranswer===currentQuestion.correctAnswer){
             numCorrect++;
             answerContainers[questionNumber].style.color='lightgreen';
         }

         else{
             answerContainers[questionNumber].style.color='red';
         }
        });
        resultsContainer.innerHTML=`${numCorrect} out of ${myQuestions.length}`;
    }
    var quizContainer=document.getElementById('quiz')
    var resultsContainer=document.getElementById('results')
    var submitButton=document.getElementById('submit')
    var myQuestions=[
        {
            question:"Who is the main JoJo of part 4 of JoJo's Bizarre Adventure?",
            answers:{
                a:"Josuke",
                b:"Jolyne",
                c:"Joseph"
            },
            correctAnswer:"a"
            
        },
        {
            question:"The Pillar Men are allergic to two things, them being:",
            answers:{
                a:"Sunlight & Water",
                b:"Hamon/Ripple & Sunlight",
                c:"Spin & Stands"
            },
            correctAnswer:"b"
        },
        {
            question:"What's the 7th part of JoJo's Bizarre Adventure called?",
            answers:{
                a:"Stardust Crusaders",
                b:"Steel Ball Run",
                c:"JoJolion"
            },
            correctAnswer:"b"
        }
    ]
    buildQuiz();
    submitButton.addEventListener('click',showResults);
}) ();