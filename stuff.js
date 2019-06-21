function functionabout() {
  document.getElementById("mainbox").src = "about";
}

function functionpgs() {
  document.getElementById("mainbox").src = "pgs";
}

function functionbing() {
  document.getElementById("mainbox").src = "bing";
}

function functionmusic() {
  document.getElementById("mainbox").src = "music";
}

$(document).ready(function() {
  $("#bookmarkme").click(function() {
    if (window.sidebar) { // Mozilla Firefox Bookmark
      window.sidebar.addPanel(location.href,document.title,"");
    } else if(window.external) { // IE Favorite
      window.external.AddFavorite(location.href,document.title); }
    else if(window.opera && window.print) { // Opera Hotlist
      this.title=document.title;
      return true;
    }
  });
});
