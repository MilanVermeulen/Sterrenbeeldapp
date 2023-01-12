//attach submit button to variable
let submit = document.getElementById('myButton');
//assign event to submit button 
submit.addEventListener('click', () => {

    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let birthday = document.getElementById('birthday').value;
    
 console.log(data);
    
 // parse data to localstorage
 

//create submitobject
    let submitobject = {
        fname: fname,
        lname: lname,
        birthday: birthday
    };
    //send data to server
    localStorage.setItem('submitObject', JSON.stringify(submitobject));
    //redirect to overeenkomst.html
    window.location.href = 'indexpage2.html';
})