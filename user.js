

let users = [];
async function catchProfiles() {
    let comeOut = await fetch('https://next.json-generator.com/api/json/get/NJ-UoW2Xq');
    let apiUsers = await comeOut.json();
    return apiUsers;
};


async function getProfilesById(id) {
    const profiles = await catchProfiles();
    return profiles.find(profile => profile._id === id);
}

async function urlId() {
    const searchId = new URLSearchParams(location.search);
    if(!searchId.has("id")){
        userSuccess.classList = 'hidden';
        userError.classList = '';
        userError.innerHTML = 'No ID was presented';
        return ;
    };

    const urlId = searchId.get('id');
    const userProfile = await getProfilesById(urlId);
    // console.debug('userId; ', userProfile);


    userSuccess.innerHTML =    
    `<div class='cardProfile' id='pickedUser' > 
    <h2>full name:${userProfile.name.first} ${userProfile.name.last}</h2>
    <h4>email: ${userProfile.email}</h4>
    <h4>age: ${userProfile.age}</h4>
    <h4>phone: ${userProfile.phone}</h4>
    <img src='${userProfile.picture}' id="${userProfile._id}" alt='user pic' />
    </div>` 

};

window.addEventListener("load", urlId);
