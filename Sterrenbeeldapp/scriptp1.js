//CAT-IMAGE  /cat/TUm38IR2xbNuADwD"
const catURL = "https://cataas.com";

fetch("https://cataas.com/cat?json=true").then(
  response => response.json()
  ).then(data => {
    console.log(data);
    document.getElementById("catImage").src = catURL + data.url;
  })

  function getZodiac(){
    //GET DATE
    var customerDate = document.getElementById('birthday').value;
    var dateOfBirth = new Date(customerDate);
    var birthmonth = dateOfBirth.getMonth()+1;
    var birthday = dateOfBirth.getDate();
  
    console.log(customerDate);
    console.log(dateOfBirth);
    console.log(birthday,birthmonth);
    console.log(document.getElementById('user_birth'));
  
    //INVALID DATE
    var sign = " unknown because you didn't put a valid date.";
    //AQUARIUS
    if (birthmonth == 1 && birthday >= 20 || birthmonth == 2 && birthday <= 18){
      result = ("Aquarius");
      document.getElementById("zodiacSignImg").src="images/aquarius.png";
      document.getElementById("characteristic").innerHTML="Deep, imaginative, original & uncompromising.";
    }
    //PISCES
    if (birthmonth == 2 && birthday >= 19 || birthmonth == 3&& birthday <= 20){
      result = ("Pisces");
      document.getElementById("zodiacSignImg").src="images/pisces.png";
      document.getElementById("characteristic").innerHTML="Affectionate, empathetic, wise & artistic.";
    }
    //ARIES
    if (birthmonth == 3 && birthday >= 21 || birthmonth == 4 && birthday <= 19){
      result = ("Aries");
      document.getElementById("zodiacSignImg").src="images/aries.png";
      document.getElementById("characteristic").innerHTML="Eager, dynamic, quick & competitive.";
    }
    //TAURUS
    if (birthmonth == 4 && birthday >= 20|| birthmonth == 5 && birthday <= 20){
      result = ("Taurus");
      document.getElementById("zodiacSignImg").src="images/taurus.png";
      document.getElementById("characteristic").innerHTML="Strong, dependable, sensual & creative.";
    }
    //GEMINI
    if (birthmonth == 5 && birthday >= 21 || birthmonth == 6 && birthday <= 20){
      result = ("Gemini");
      document.getElementById("zodiacSignImg").src="images/gemini.png";
      document.getElementById("characteristic").innerHTML="Versatile, expressive, curious & kind.";
    }
    //CANCER 
    if (birthmonth == 6 && birthday >= 21 || birthmonth == 7&& birthday <= 22){
      result = ("Cancer");
      document.getElementById("zodiacSignImg").src="images/cancer.png";
      document.getElementById("characteristic").innerHTML="Intuitive, sentimental, compassionate & protective.";      
    }
    //LEO
    if (birthmonth == 7 && birthday >= 23 || birthmonth == 8 && birthday <= 22){
      result = ("Leo");
      document.getElementById("zodiacSignImg").src="images/leo.png";
      document.getElementById("characteristic").innerHTML="Dramatic, outgoing, fiery & self-assured.";      
    }
    //VIRGO
    if (birthmonth == 8 && birthday >= 23 || birthmonth == 9 && birthday <= 22){
      result = ("Virgo");
      document.getElementById("zodiacSignImg").src="images/virgo.png";
      document.getElementById("characteristic").innerHTML="Practical, loyal, gentle & analytical.";
    }
    //LIBRA  
    if (birthmonth == 9 && birthday >= 23 || birthmonth == 10&& birthday <= 22){
      result = ("Libra");
      document.getElementById("zodiacSignImg").src="images/libra.png";
      document.getElementById("characteristic").innerHTML="Social, fair-minded, diplomatic & gracious.";
    }
    //SCORPIO
    if (birthmonth == 10 && birthday >= 23|| birthmonth == 11 && birthday <= 21){
      result = ("Scorpio");
      document.getElementById("zodiacSignImg").src="images/scorpio.png";
      document.getElementById("characteristic").innerHTML="Passionate, stubborn, resourceful & brave.";
    }
    //SAGITTARIUS
    if (birthmonth == 11 && birthday >= 22 || birthmonth == 12 && birthday <= 21){
      result = ("Sagittarius");
      document.getElementById("zodiacSignImg").src="images/sagittarius.png";
      document.getElementById("characteristic").innerHTML="Extroverted, optimistic, funny & generous.";
    }
    //CAPRICORN 
    if(birthmonth == 12 && birthday >= 22 || birthmonth == 1 && birthday <= 19){ 
      result = ("Capricorn");
      document.getElementById("zodiacSignImg").src="images/capricorn.png";
      document.getElementById("characteristic").innerHTML="Serious, independent, disciplined & tenacious.";
    }
    //WRONG DATE
    else if (birthmonth > 12 || birthday > 31){
      alert("Please enter an accurate date ! ");
    }
    //OUTPUT
    document.getElementById("output").innerHTML= result;
  }