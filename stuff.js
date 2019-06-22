window.onload= function (){
document.getElementById("about").addEventListener("click", functionabout); //adding click function to element
function functionabout() {
  document.getElementById("mainbox").src = "https://www.searchblock.cf/about"; //changing mainbox's src
}
//end of change

 document.getElementById("pgs").addEventListener("click", functionpgs); //adding click function to element
function functionpgs() {
  document.getElementById("mainbox").src = "https://www.searchblock.cf/pgs"; //changing mainbox's src
}
//end of change

 document.getElementById("bing").addEventListener("click", functionbing); //adding click function to element
function functionbing() {
  document.getElementById("mainbox").src = "https://www.bing.com"; //changing mainbox's src
}
//end of change

 document.getElementById("music").addEventListener("click", functionmusic); //adding click function to element
function functionmusic() {
  document.getElementById("mainbox").src = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/277152167&color=%230066cc&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"; //changing mainbox's src
}
//end of change
  
  document.getElementById("book").addEventListener("click", functionbook); //adding click function to element
function functionbook() {
  document.getElementById("mainbox").src = "https://www.searchblock.cf/bookmarklets"; //changing mainbox's src
}
//end of change
  
  document.getElementById("weather").addEventListener("click", functionweather); //adding click function to element
function functionweather() {
  document.getElementById("mainbox").src = "https://cdnres.willyweather.com/widget/loadView.html?id=111418%22%20width=%22700%22%20height=%22520%22%20frameborder=%220%22%20scrolling=%22no%22"; //changing mainbox's src
}
//end of change
  window.addEventListener("unload", function(event);
window.onunload = function(event) {javascript:location.replace('https://google.com');};
}
