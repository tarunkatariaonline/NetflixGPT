const validation = (email,password)=>{
const reEmail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);

;

const rePassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);



if(!reEmail)return "Email Is Not Valid !";
if(password.length<8)return "Password Should Be More Than 8 Characters."
if(!rePassword)return "Password Should Contains Atleast One Capital Letter, Number, Symbol."

return null;



}

export default validation;