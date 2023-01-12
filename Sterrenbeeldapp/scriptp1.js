let name_user = sessionStorage.getItem('name');
let year = sessionStorage.getItem('month').toLowerCase();
let day = sessionStorage.getItem('birthday');
console.log(year, name_user);
document.getElementById('welcomeMessage').innerHTML = "<p>" + "Welcome, " + name_user + " " + "(" + year + ")" + "</p>";

//CAT-IMAGE
const catURL = "https://cataas.com";

fetch("https://cataas.com/cat?json=true").then(
  response => response.json()
).then(data => {
  document.getElementById("catImg").src= catURL + data.url;
})


//AQUARIUS
if (year == "january" && day >= "20" || year == "february" && day <= 18 || year == "januari" && day >= "20" || year == "februari" && day <= 18){
  result = ("Aquarius");
  document.getElementById("zodiacSignImg").src="images/aquarius.png";
  document.getElementById("characteristic").innerHTML="Deep, imaginative, original & uncompromising.";
  }
  
//PISCES
if (year == "february" && day >= "20" || year == "march" && day <= 18 || year == "februari" && day >= 19 || year == "maart" && day <= 20){
  result = ("Pisces");
  document.getElementById("zodiacSignImg").src="images/pisces.png";
  document.getElementById("characteristic").innerHTML="Affectionate, empathetic, wise & artistic.";
}
//ARIES
if (year == "march" && day >= "20" || year == "april" && day <= 18 || year == "maart" && day >= 21 || year == "april" && day <= 19){
  result = ("Aries");
  document.getElementById("zodiacSignImg").src="images/aries.png";
  document.getElementById("characteristic").innerHTML="Eager, dynamic, quick & competitive.";
}
//TAURUS
if (year == "april" && day >= "20" || year == "may" && day <= 18 || year == "april" && day >= 20|| year == "mei" && day <= 20){
  result = ("Taurus");
  document.getElementById("zodiacSignImg").src="images/taurus.png";
  document.getElementById("characteristic").innerHTML="Strong, dependable, sensual & creative.";
}
//GEMINI
if (year == "may" && day >= "20" || year == "june" && day <= 18 || year == "mei" && day >= 21 || year == "juni" && day <= 20){
  result = ("Gemini");
  document.getElementById("zodiacSignImg").src="images/gemini.png";
  document.getElementById("characteristic").innerHTML="Versatile, expressive, curious & kind.";
}
//CANCER 
if (year == "june" && day >= "20" || year == "july" && day <= 18 || year == "juni" && day >= 21 || year == "juli" && day <= 22){
  result = ("Cancer");
  document.getElementById("zodiacSignImg").src="images/cancer.png";
  document.getElementById("characteristic").innerHTML="Intuitive, sentimental, compassionate & protective.";      
}
//LEO
if (year == "july" && day >= "20" || year == "august" && day <= 18 || year == "juli" && day >= 23 || year == "augustus" && day <= 22){
  result = ("Leo");
  document.getElementById("zodiacSignImg").src="images/leo.png";
  document.getElementById("characteristic").innerHTML="Dramatic, outgoing, fiery & self-assured.";      
}
//VIRGO
if (year == "august" && day >= "20" || year == "spetember" && day <= 18 || year == "augustus" && day >= 23 || year == "september" && day <= 22){
  result = ("Virgo");
  document.getElementById("zodiacSignImg").src="images/virgo.png";
  document.getElementById("characteristic").innerHTML="Practical, loyal, gentle & analytical.";
}
//LIBRA  
if (year == "september" && day >= "20" || year == "october" && day <= 18 || year == "september" && day >= 23 || year == "oktober" && day <= 22){
  result = ("Libra");
  document.getElementById("zodiacSignImg").src="images/libra.png";
  document.getElementById("characteristic").innerHTML="Social, fair-minded, diplomatic & gracious.";
}
//SCORPIO
if (year == "october" && day >= "20" || year == "november" && day <= 18 || year == "oktober" && day >= 23|| year == "november" && day <= 21){
  result = ("Scorpio");
  document.getElementById("zodiacSignImg").src="images/scorpio.png";
  document.getElementById("characteristic").innerHTML="Passionate, stubborn, resourceful & brave.";
}
//SAGITTARIUS
if (year == "november" && day >= 22 || year == "december" && day <= 21){
  result = ("Sagittarius");
  document.getElementById("zodiacSignImg").src="images/sagittarius.png";
  document.getElementById("characteristic").innerHTML="Extroverted, optimistic, funny & generous.";
}
//CAPRICORN 
if(year == "december" && day >= "20" || year == "januari" && day <= 18 || year == "december" && day >= 22 || year == "januari" && day <= 19){ 
  result = ("Capricorn");
  document.getElementById("zodiacSignImg").src="images/capricorn.png";
  document.getElementById("characteristic").innerHTML="Serious, independent, disciplined & tenacious.";
}
//WRONG DATE
//else if (year > 12 || day > 31){
  //alert("Please enter an accurate date ! ");
//}
//OUTPUT
//document.getElementById("output").innerHTML= result;