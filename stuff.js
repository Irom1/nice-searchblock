function myFunction() {
  document.getElementsByTagName("button")[0].setAttribute("class", "button");
  var x = document.getElementById("NAV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  document.getElementsByTagName("button")[0].setAttribute("class", "democlass");
  }
}

$(function () {
//replace() does not keep the originating page in the session history,
document.location.replace("/Exercises#nocache"); // clear the last entry in the history and redirect to new url
});
