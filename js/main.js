$('.signin').on('click', function() {
    $('.modal').fadeIn('slow')});
$('.close').on('click',function() {
  $('.modal').fadeOut('slow')});
$('.submit').on('click',function() {
  $('input').addClass('error')});
$('input').on('click',function() {
  $('input').attr('class','')});
$('.modal').on('click',function() {
  $('.modal').fadeOut('slow')});
  $('input').click(function(ev) {
    ev.stopPropagation();
  });
