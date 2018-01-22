
var height1=window.screen.availHeight+"px";
function openmenu(){
  //document.getElementById("sidemenu1").style.display="grid";
  document.getElementById("sidemenu1").style.visibility="visible";
  document.getElementById("get_list").style.visibility="hidden";
  document.getElementById("sidemenu1").style.width="150px";
  document.getElementById("sidemenu1").style.height="100%";
   }
  
function closebar(){
  document.getElementById("sidemenu1").style.visibility="hidden";
 document.getElementById("sidemenu1").style.width="0";
 document.getElementById("get_list").style.visibility="visible";
}
 /*
function openup(){
    document.getElementById("sidemenu").style.width = "100%";
}
function closeup(){
  document.getElementById("sidemenu").style.width="0";
  document.getElementById("get_list").style.visibility="visible";
}
*/
function windowSize() {
  windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
  windowWidth = window.innerWidth ? window.innerWidth : $(window).width();

}
windowSize();

$(window).resize(function() {
  windowSize();
  if (windowWidth > 768) {
    //document.getElementById("sidemenu1").style.display="none";
    document.getElementById("sidemenu1").style.visibility="hidden";
    document.getElementById("get_list").style.visibility="hidden";
    document.getElementById("sidemenu1").style.width="0px";
    document.getElementById("sidemenu1").style.height="0px";
  }
  else{
    if(document.getElementById("sidemenu1").style.visibility=="hidden"){
      document.getElementById("get_list").style.visibility="visible";
    }
  }
});/*
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
