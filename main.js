const myForm = document.querySelector("#myform");
const name_input =document.querySelector('#name');
const email_input = document.querySelector('#email');
const msg = document.querySelector('.msg')

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
  e.preventDefault();
  if(name_input.value === '' || email_input.value === ''){
    // console.log("please enter valid ");
    // const error = msg.classList.add('error');
    // msg.innerHTML = 'please enter valid'
    const error = document.createElement('div');
    const add_text = document.createTextNode("enter valid.");
    error.appendChild(add_text)
    myForm.appendChild(error)

    setTimeout(()=>error.remove(),300)
  } else {
    // console.log(name_input.value,email_input.value);
    const add = document.createElement('div');
    const add_list = document.createTextNode(`${name_input.value},${email_input.value}`);
    add.appendChild(add_list)
    myform.appendChild(add)
 //    name_input.value = "";
 //    email_input.value = '';
 }
}
