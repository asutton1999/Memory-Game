 let open = [];
 let matched = [];
 let cards=[];
 let shuffled=[];
 //randomizes card order and adds it to DOM
 function shuffle () {
   cards.push($('#heart'));
   cards.push($('#smile'));
   cards.push($('#balloon'));
   cards.push($('#board-game'));
   cards.push($('#rocket-ship'));
   cards.push($('#boat'));
   cards.push($('#car'));
   cards.push($('#plane'));
   cards.push($('#heart2'));
   cards.push($('#smile2'));
   cards.push($('#balloon2'));
   cards.push($('#board-game2'));
   cards.push($('#rocket-ship2'));
   cards.push($('#boat2'));
   cards.push($('#car2'));
   cards.push($('#plane2'));
while (shuffled.length < 16){
  let number = Math.floor(Math.random()*(cards.length))
  shuffled.push(cards[number]);
  cards.splice(number,1);
}
$('#full-deck').children().remove();
$('#full-deck').append(shuffled);
}
document.addEventListener("DOMContentLoaded", shuffle());
 // Compares the two clicked cards and responds by assigning them the appropriate class.
 function compareCards () {
   if (open[0].attr('src')=== open[1].attr('src')) {
     open[0].removeClass('open');
     open[1].removeClass('open');
     open[0].addClass('matched');
     open[1].addClass('matched');
     matched.push( open[0]);
     matched.push(open[1]);
     open.pop();
     open.pop();
     console.log('match!');
   } else {
 setTimeout( function noMatch (){
 open[0].removeClass('open');
 open[1].removeClass('open');
 open[0].addClass('closed');
 open[1].addClass('closed');
 open.pop();
 open.pop();
console.log('Not a match!')}, 500)
 }
}
// Determines all matches have been made
function endGame (){
  $('#full-deck').css('display','none');
//modal popup content
  $('#modalCongrats').css('display','block');
  $('#modalCongrats').prepend($('#timer'));
  $('#modalCongrats').prepend($('.rating'));
  $('#modalCongrats').prepend($('#counter'));
  
//modal layout design
  $('#counter').css('margin-left','40px');
  $('#counter').css('margin-top','20px');
  $('#counter').css('padding-top','20px');
  $('#star1').css('margin-left','0px');
  $('#star2').css('margin-left','0px');
  $('#star3').css('margin-left','0px');
  $('figcaption').css('margin-left','473px');
}
//Timer
let s=0;
let t;
function Timer () {
let timer = $('#timer');
timer.html(s +" seconds");
s++;
t = setTimeout(Timer,1000);
}

function stopTimer(){
  console.log(t);
  clearTimeout(t);
}
//event listener
$('.card').on('click', function showImage () {
  $(event.target).children().removeClass('closed');
  $(event.target).children().addClass('open');
  open.push ($(event.target).children());
  if(clicks < 2){
    Timer();
  }
  if (open.length > 1 && matched.length < 16 ) {
   compareCards();}
  if (matched.length > 15){
    endGame();
    stopTimer();
  }
// counter
  console.log (clicks);
  if (clicks < 2) {
  document.getElementById("counter").textContent = clicks + " clicks";
  console.log ('first click');
} else {
  document.getElementById("counter").textContent = '';
  document.getElementById("counter").textContent = clicks + " clicks";
  console.log( 'other clicks');
}

  //Star Rating
  if (clicks > 25){
    $('#star3').addClass('lowScore');
  }
  if (clicks > 30) {
    $('#star2').addClass('lowScore');
  }

});
