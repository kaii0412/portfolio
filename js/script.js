var bars = document.querySelectorAll('.bar').forEach((bar) => {
  var percentage = bar.getAttribute("data-percent");

  var loading = setInterval(progressBar, 15);
  var progress = 0;

  //animation of skillbar loading
  function progressBar() {
    if (progress >= percentage) {
      clearInterval(loading);
      bar.childNodes[0].innerHTML = percentage + '%';
    } else {
      progress++;
      bar.style.width = progress + '%';
    }
  }
});