const quizData = [
    { question1:("What is the capital of France?"),
      options: ["Paris",  "Madrid",  "Rome",  "Berlin"],
      answer: "Paris"
    },
    {
      question2: "What is the largest planet in our solar system?",
      options: ["Jupiter",  "Saturn",  "Mars",  "Earth"],
      answer: "Jupiter"
    },
    {
     question3: " Who invented Java Programming?",
     options: ["Guido van Rossum", "James Gosling", " Dennis Ritchie", " Bjarne Stroustrup"],
     answer: "James Gosling"   
    },
    {
     question4: "What happens if an abstract class does not have any abstract methods?",
     options: ["It will not compile","The class can still be abstract","java will automatically provide an abstract method","It becomes a concrete class"],
     answer: "It becomes a concrete class"
    },
    {
    question5: "Which statement is true about Java?",
    options: ["Java is a sequence-dependent programming language"," Java is a code dependent programming language","Java is a platform-dependent programming language"," Java is a platform-independent programming language"],
    answer: " Java is a platform-independent programming language"
    },
    {
    question6: "Which component is used to compile, debug and execute the java programs?",
    options: [" JRE","JIT"," JDK","JVM"],
    answer: "JDK"
    },
    {
    question7: ". Which one of the following is not a Java feature?",
    options: [" Object-oriented"," C","Portable","Dynamic and Extensible"],
    answer: " none of the mentioned"
    },
    {
    question8: "Which of these cannot be used for a variable name in Java?",
    options: ["identifier & keyword","identifier","keyword"," none of the mentioned"],
    answer: "keyword"
    },
    {
    question9: " What is the extension of java code files?",
    options: [" .js"," .txt"," .class",".java"],
    answer: ".java"
    },
    {
    question10: " Which environment variable is used to set the java path?",
    options: [" MAVEN_Path"," JavaPATH"," JAVA","JAVA_HOME"],
    answer: "JAVA_HOME"
    }

    // Add more questions here...
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML =  `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();