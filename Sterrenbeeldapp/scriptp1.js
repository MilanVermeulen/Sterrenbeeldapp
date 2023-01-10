//CAT-IMAGE  /cat/TUm38IR2xbNuADwD"
const catURL = "https://cataas.com";

fetch("https://cataas.com/cat?json=true").then(
  response => response.json()
  ).then(data => {
    console.log(data);
    document.getElementById("catImage").src = catURL + data.url;
  })