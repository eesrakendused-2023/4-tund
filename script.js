let fullName, age, email, saveBtn;

fullName = document.querySelector('#name');
age = document.querySelector('#age');
email = document.querySelector('#email');
saveBtn = document.querySelector('#save');
loadBtn = document.querySelector('#load');
deleteBtn = document.querySelector('#delete');

function saveLocal(){
    localStorage.setItem('nimi', fullName.value);
    localStorage.setItem('vanus', age.value);
    localStorage.setItem('e-mail', email.value);
    console.log('andmed salvestati');

    sessionStorage.setItem('nimi', fullName.value);
    sessionStorage.setItem('vanus', age.value);
    sessionStorage.setItem('e-mail', email.value);

    let data = {
        name: fullName.value,
        age: age.value,
        email: email.value
    }

    localStorage.setItem('personData', JSON.stringify(data));

    document.cookie = "email="+email.value;

}

function loadLocal(){
    fullName.value = localStorage.getItem('nimi');
    age.value = localStorage.getItem('vanus');
    email.value = localStorage.getItem('e-mail');

    console.log(sessionStorage.getItem('nimi'), sessionStorage.getItem('vanus'), sessionStorage.getItem('e-mail'));

    const personData = JSON.parse(localStorage.getItem('personData'));

    document.querySelector('#textContainer').innerHTML = personData.name + " " + personData.email + " " + personData.age;
}

function deleteLocal(){
    localStorage.removeItem('nimi');
    localStorage.removeItem('vanus');
    localStorage.removeItem('e-mail');
    localStorage.removeItem('personData');

    sessionStorage.removeItem('nimi');
    sessionStorage.removeItem('vanus');
    sessionStorage.removeItem('e-mail');
}

saveBtn.addEventListener('click', saveLocal);
loadBtn.addEventListener('click', loadLocal);
deleteBtn.addEventListener('click', deleteLocal);

