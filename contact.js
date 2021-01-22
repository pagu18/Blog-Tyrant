
// $(document).ready(function(){
//     $('.btn').click(function(event){
//         console.log('button clicked')
//         var name = $('.name').val()
//         var number = $('.number').val()
//         var email = $('.email').val()
//         var Message = $('.Message').val()
//         statusElm.empty()
       
//         if(email.length>5 && email.includes('@') && email.includes('.')){
//             statusElm.append("<div>okay</div>")
//         }
//         else{
//             event.preventDefault()
//             statusElm.append("<div>email is not valid</div>")
//         }

//         if (number.length==10){
//             statusElm.append("<div>okay</div>")
//         }
//         else{
//             event.preventDefault()
//             statusElm.append("<div>number is not valid</div>")
//         }
//     })
// })

const form =document.getElementById('form');
const name =document.getElementById('name');
const number =document.getElementById('number');
const email =document.getElementById('email');
const Message =document.getElementById('Message');
form.addEventListener('submit',(e) =>{
    e.preventDefault();
});
function checkInputs(){
    const nameValue = name.value.trim();
    const numberValue = number.value.trim();
    const emailValue = email.value.trim();
    const MessageValue = Message.value.trim();

    if (name==""){
        setErrorfor(name,'Name cannot be blank');
    }else{
        setSuccessFor(name)
    }
    if(email.length>5 && email.includes('@') && email.includes('.')){
        setSuccessFor(name)
     }
        else{
            setErrorfor(name,'Invalid Email');
     }
}
function setErrorfor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-box error';
}

function setSuccessfor(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-box success';
}