function showShareButtons() {
  var shareButtonContainer = document.getElementsByClassName("share-button-container")[0];
  if (shareButtonContainer.style.display == "none") {
      shareButtonContainer.style.display = "inline-block";
  } else {
      shareButtonContainer.style.display = "none";
  }
}
