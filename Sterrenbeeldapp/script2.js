document.getElementById("submit").addEventListener('click', setInput);
    function setInput() {
        let name = document.getElementById("name").value;
        let birthday= document.getElementById("birthday").value;
        let month = document.getElementById("birthmonth").value;
        console.log(name, birthday, month);
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('birthday', birthday);
        sessionStorage.setItem('month', month);
        window.location.href = 'indexpage2.html';
    }