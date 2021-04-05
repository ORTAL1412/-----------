
class User {
    name;
    email;
    age;
    phone;
    picture;
    constructor(_name, _email, _age, _phone, _picture) {
        this.name = _name;
        this.email = _email;
        this.age = _age;
        this.phone = _phone;
        this.picture = _picture;
    };
};

let users = [];
async function catchProfiles() {
    let comeOut = await fetch('https://next.json-generator.com/api/json/get/NJ-UoW2Xq');
    let apiUsers = await comeOut.json();

    // const usersInClass = apiUsers.map(apiUser => {
    //     return new User(`${apiUser.name.first} ${apiUser.name.last}`, apiUser.email,apiUser.age,apiUser.phone,apiUser.picture);
    // })

    // comeOut.forEach(user=>{
    //     apiUsers.push(new User(`${user.name.first} ${user.name.last}`, user.email, user.age, user.phone, user.picture))
    // });


    let allUsers = [...apiUsers, ...users];
    return allUsers;
};
 

let cards;
async function profiles() {
    mainDiv.innerHTML = '';
    cards = await catchProfiles();
    cards.forEach((card) => {
        mainDiv.innerHTML +=
            `<div class='cardProfile' > 
        <h2>full name:${card.name.first} ${card.name.last}</h2>
        <h4>email: ${card.email}</h4>
        <h4>age: ${card.age}</h4>
        <h4>phone: ${card.phone}</h4>
        <a href="userCard.html?id=${card._id}"> 
        <img src='${card.picture}' alt='user pic' />
       </a>
        </div>`       
    });

};


addUser.style.display = 'none';
table.style.display = 'none';

function homePage() {
    table.style.display = ' none';
    addUser.style.display = ' none';
    profiles();
}

async function usersTable() {
    mainDiv.innerHTML = '';
    table.style.display = 'block';
    showTable.style = 'display:block;color:#fcf9f6;margin-left: 12%; ';
    cards = await catchProfiles();
    cards.forEach(card => {
        showTable.innerHTML +=
            `<tr>
            <td>${card.name.first} ${card.name.last}</td>
            <td>${card.email}</td>
            <td>${card.age}</td>
            <td>${card.phone}</td>
            <td><img src='${card.picture}'></td>
          </tr>`
    });
    addUser.style.display = "none";

};

function tableProfiles() {
    showTable.innerHTML = '';
    usersTable();
}


function emailConfirmation() {
    if (email.value === emailConfirm.value) {
        return true;
    }
    else {
        alert("email address is not the same");
        return false;
    }
}


function addProfile() {
    mainDiv.innerHTML = "";
    table.style.display = "none";
    addUser.style = 'display:block; margin-left: 12%;';
    let user = new User({ first: firstName.value, last: lastName.value }, emailConfirm.value, age.value, phone.value, picture.value);
    return user;
};


function submit() {
    users.push(addProfile());
    addUser.style.display = 'none';
    profiles();
}

window.addEventListener('load',profiles);
// profiles();

