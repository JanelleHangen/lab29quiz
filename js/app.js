// console.log('Hello from the conslole')
// var firstname = "Janelle";
// var lastname = "Mueller";
//
// console.log(2+3);
// console.log(firstname+" "+lastname);

// var user = {
//   firstname: "Janelle",
//   lastname: "Mueller",
// };
//
// console.log(user.firstname);
//
// greeting("TJ");
// greeting("Aaron");
// greeting("Autumn");
//
// function greeting(name){
//   console.log("Hello, " + name);
// }
var questions = [{
      title: 'What does Ubey prefer to be?',
      answers: ['Cuddled','Brushed','Bathed','Around Cats'],
      correct: 0
  },
  {
      title: 'Where is Ubey at peace?',
      answers: ['Near The Mailman','Outside','In The Rain','With Squirrels Abounding'],
      correct: 1
  },
  {
      title: 'What does Ubey dislike?',
      answers: ['Food','Attention','Water','Playing'],
      correct: 2
  },
  {
      title: 'Who does Ubey love the most?',
      answers: ['Sleeping','Water','Human Food','His Family'],
      correct: 3
}];

var score = 0;
var currentQuestion = 0;

$(document).ready(function(){
  displayQuestion();

  $('ul').on('click','li',function(e){
    $('.selected').removeClass('selected');
    $(e.currentTarget).addClass('selected');
    $('a').addClass('ready');
  });

  $('a').click(function(e){
    e.preventDefault();
    if($(e.currentTarget).hasClass('ready')){
      var guess = $('.selected').attr("id");
      // console.log(guess);
      checkAnswer(guess);
    } else if ($(e.currentTarget).hasClass('restart')){
      currentQuestion = 0;
      score = 0;
      $(e.currentTarget).removeClass('restart').text('Submit Answer');
      displayQuestion();
    } else {
      alert('You must select an answer! Please.');
    }
  });

});

function displayQuestion(){
  if(currentQuestion < questions.length){
    updateScore();
    var question = questions[currentQuestion];
    $('h2').text(question.title);
    $('ul').html('');
    $('.ready').removeClass('ready');
    for (var i = 0; i < question.answers.length; i++) {
      $('ul').append('<li id="'+i+'">'+question.answers[i]+'</li>');
    }
  } else {
    showSummary();
  }
}

function showSummary(){
    $('.score span').text(score);
    $('ul').html('');
    $('.ready').removeClass('ready').addClass('restart').text('Restart Quiz');
    $('h2').text('You must love your dog! You scored ' + (score/questions.length)*100 + '%');
}

function checkAnswer(guess){
  var question = questions[currentQuestion];
  if(question.correct == guess){
    score++;
  }
  currentQuestion++;
  displayQuestion();
}

function updateScore(){
  $('.questions span').text((currentQuestion+1) + "/" + questions.length);
  $('.score span').text(score);
}
