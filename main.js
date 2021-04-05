class User {
    constructor (id, picture, age, name, email, phone){
        this.id = id;
        this.picture = picture;
        this.age = age;
        this.name = name;
        this.email = email;
        this.phone = phone;

    }
}

const fetchUsers = async () => {
 const users = await (await fetch ("https://next.json-generator.com/api/json/get/NJ-UoW2Xq")).json();
 const usersArray =[]; 
 users.forEach(user => {
     usersArray.push(new User(user._id, user.picture, user.age,
        `${user.name.first} ${user.name.last}`, user.email,
        user.phone));       
 });
 return usersArray;
}
const creatUserCard = (user) => {
    const studentcard = document.createElement(`div`);
    studentcard.classList.add (`student-card`);
    studentcard.innerHTML = `
    <div class="student-details">
    <h4>${user.name}</h4>
    <span> age:${user.age}</span></br>
    <span> email:${user.email}</span></br>
    <span> phone:${user.phone}</span></br>
    <span> ID:${user.id}</span></br>
    </div>
    <div class="student-img">
       <img src=" ${user.picture}" alt="">
    </div>`

    return studentcard;

}

const creatUseRow = (user) => {
    const studentTabelRow = document.createElement(`tr`);
    studentTabelRow.innerHTML =`
    
    <td>${user.name}</td>
    <td>${user.id}</td>
    <td>${user.age}</td>
    <td>${user.email}</td>
    <td>${user.phone}</td>`

    return studentTabelRow;
   
}

function showTable () {
    const studentcards = document.getElementById(`student-cards`);
    const studentTabel = document.getElementById(`student-table`);
    if (studentcards.style.display === 'none'){
        studentcards.style.display = 'flex';
        studentTabel.style.display ='none';
    }
    else {
        studentcards.style.display = 'none';
        studentTabel.style.display ='block';
       
    }}
    



 const init  = async () => {
    const userArray =  await fetchUsers();
    const studentcards = document.getElementById(`student-cards`);
   console.log(studentcards);
    userArray.forEach( user => {
        studentcards.appendChild(creatUserCard (user));
    });
}

init ();


function addUser(event) {
      
    let user = {
        _id: `${users.length + 1}`,
        name: {
            first: firstNameInput.value,
            last: lastNameInput.value,
        },


        age: ageInput.value,
        picture: imgInput.value,
        phone: phoneNumberInput.value,

    };
    
    users.push(user);
    loadMode();
   


}
