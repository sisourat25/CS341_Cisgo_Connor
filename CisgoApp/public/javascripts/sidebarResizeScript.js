/**
 * from: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapse_sidebar 
 * other resource: https://interactjs.io/
 * 
 * adjustable width for the sidebar. 
 */

function openNav() {
    document.getElementById("mySidebar").style.width = "350px";
    document.getElementById("container").style.marginLeft = "350px";
  }
  
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("container").style.marginLeft= "0";
}