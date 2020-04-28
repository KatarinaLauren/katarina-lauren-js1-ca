function replaceWords() {
  document.body.innerHTML = document.body.innerHTML
    .replace(/ the /g, " banana ")
    .replace(/ The /g, " Banana ");
}

setInterval(replaceWords, 3000);
