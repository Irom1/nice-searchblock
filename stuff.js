function myFunction() {
  document.getElementsByTagName("button")[0].setAttribute("class", "democlass");
  var x = document.getElementById("NAV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
    document.getElementsByTagName("button")[0].setAttribute("class", "button");
  }
}
