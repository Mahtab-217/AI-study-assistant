export function getDataFromForm(prevState:unknown, formData:FormData){
const name= formData.get("myName");
const email= formData.get("email");
return{
    message:`my name is ${name } and my Email adress is ${email}`,
    success:true,
}
}