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
  $('body'). append('<h1> You beat the game! </h1>')
}
//event listener
$('.card').on('click', function showImage () {
  $(event.target).children().removeClass('closed');
  $(event.target).children().addClass('open');
  open.push ($(event.target).children());
  if (open.length > 1 && matched.length < 16 ) {
  compareCards(); }
  if (matched.length > 15){
    endGame();
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
