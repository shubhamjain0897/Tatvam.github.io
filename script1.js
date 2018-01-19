/*
var height1=window.screen.availHeight+"px";
function openmenu(){
  document.getElementById("sidemenu").style.height = "100%";
  document.getElementById("sidemenu").style.width = "50%";
 //document.getElementById("main").style.marginLeft = "100px";
 //document.getElementById("a1").style.marginLeft = "100px";
  document.getElementById("get_list").style.visibility="hidden";
   }
function closebar(){
 document.getElementById("sidemenu").style.width="0";
 document.getElementById("main").style.marginLeft="0";
 document.getElementById("get_list").style.visibility="visible";
}
function openup(){
    document.getElementById("sidemenu").style.width = "100%";
}
function closeup(){
  document.getElementById("sidemenu").style.width="0";
  document.getElementById("get_list").style.visibility="visible";
}

function windowSize() {
  windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
  windowWidth = window.innerWidth ? window.innerWidth : $(window).width();

}
windowSize();
/*
$(window).resize(function() {
  windowSize();
  if (windowWidth < 768) {
    closebar();
  }
});
addEventListener("resize",function(){
  windowSize() ;
  if( windowWidth < 768){
    closebar();
  }
  else{
    openmenu();
  //  document.getElementById("a1").style.marginLeft = "0%";
  }
});
// if (window.matchMedia("(min-width: 768px)").matches) {
//   closemenu();
// } else {
//   openmenu();
// }
*/
