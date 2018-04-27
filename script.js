

document.onwheel = function(event){
var h1=document.getElementsByTagName('h1');
var h2=document.getElementsByTagName('h2');
console.log(event);
if (event.deltaY>10){
h1[0].style.color="white";
}
else{
h1[0].style.color='black';	
}
if(window.pageYOffset>300){///window.pageYOffset-возвращает координату вертикальной прокрутки
h2[0].style.fontSize = 35+"px";
h2[0].style.color = '#3A6953';}

if(window.pageYOffset>1300){
h2[1].style.fontSize = 35+"px";
h2[1].style.color = '#3A6953';}
if(window.pageYOffset>2000){
h2[2].style.fontSize = 35+"px";
h2[2].style.color = '#3A6953';
}
if(window.pageYOffset>2300){
h2[3].style.fontSize = 35+"px";
h2[3].style.color = '#3A6953';
}
if(window.pageYOffset>3100){
h2[4].style.fontSize = 35+"px";
h2[4].style.color = '#3A6953';
}
if(window.pageYOffset>3500){
h2[5].style.fontSize = 35+"px";
h2[5].style.color = '#3A6953';
}
}

	$(document).ready(function(){
	//фиксированная шапка при скролле
	$('#header').removeClass('default');
	$(window).scroll(function(){
	if ($(this).scrollTop()>10){
	$('#header').addClass('default').fadeIn('fast');
} else{
	$('#header').removeClass('default').fadeIn('fast');
};
	});
	});

	//document.querySelector('#out').innerHTML = navigator.userAgent;//выводит на каком устроистве откывается страница
	//console.log(navigator);
	//console.log(window.pageYOffset);


///выпадающее меню
$(function(){


$('.menu_hidden').on('click', function(){

$('.nav').slideToggle(300, function(){
if ($(this).css('display')==='none'){
	$(this).removeAttr('style');
}	
});
});
});
///фоторама
 $(function() {
    $('#fotorama').fotorama();
  });