 let open = [];
 let matched = [];
 function compareCards () {
   if (open[0].attr('src')=== open[1].attr('src')) {
     open[0].removeClass('open');
     open[1].removeClass('open');
     open[0].addClass('matched');
     open[1].addClass('matched');
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

$('.card').on('click', function showImage () {
  $(event.target).children().removeClass('closed');
  $(event.target).children().addClass('open');
  open.push ($(event.target).children());
  if (open.length > 1) {
  compareCards();
  };
  console.log (clicks); })
