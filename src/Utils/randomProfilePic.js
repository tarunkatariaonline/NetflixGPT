const randomProfilePic = ()=>{
let profilePicLink = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"

var randomNumber = (Math.random() * 10 ).toFixed();
console.log(randomNumber)

if(randomNumber<3){
    profilePicLink="https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg";
}else if (randomNumber>=3 && randomNumber<=6){
    profilePicLink="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";
}else{
    profilePicLink="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";
}



return profilePicLink;

}

export default randomProfilePic;