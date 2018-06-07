 let open = [];
 let matched = [];
 let count=[];
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

  //Star Rating
  if (clicks > 25){
    $('#star3').addClass('lowScore');
  }
  if (clicks > 30) {
    $('#star2').addClass('lowScore');
  }
});
