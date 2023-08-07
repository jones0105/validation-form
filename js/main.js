// var firstname =document.getElementById('#first-name');
// var regemail =document.getElementById('#reg-email');
// var password =document.getElementById('#password');
// var phonenumber =document.getElementById('#phone-number');
// var Address =document.getElementById('#Address');
// var regpassword =document.getElementById('#reg-password');

// firstname.addEventListener('submit',(e)=>{
//     e.prevendDefault()
//     validateInputs();
// })
//  function validateInputs(){
//     var firstnameVal =firstname.value.trim()
//     var regemailVal =regemail.value.trim();
//     var passwordVal =password.value.trim();
//     var phonenumberVal =phonenumber.value.trim();
//     var AddressVal  =Address.value.trim();
//     var regpasswordVal =regpassword.value.trim();
    
//     if(firstnameVal===''){
//         setError(firstname,'firstname is required')
//     }
//   else
//   setSuccess(firstname)

//   if (regemailVal===''){
//     setError(email,'email is required')

//   }
//   else if (!validateEmail(regemailVal)){
//     setError(email,'please enter corect regemail')
//   }
//   else setSuccess(regemailVal)

//   if (passwordVal===''){
//     setError(password,'passwoed is required')

//   }
//   else if (!passwordVal.length<8){
//     setError(password,'password must be atlest 8 charecters')
//   }
//   else setSuccess(password)

// }
// function setError(element,message){
//     var inputGroup=element.parentElement;
//     var errorElement=inputGroup.querySelector('error');

//     errorElement,innerText=message;
//     inputGroup.classList.add('error')
//     inputGroup.classList.remove('success')

// }
// function setSuccess(element){
//     var inputGroup=element.parentElement;
//     var errorElement=inputGroup.querySelector('error');

//     errorElement,innerText='';
//     inputGroup.classList.add('success')
//     inputGroup.classList.remove('error')

// }

function validateForm(){
  var ename=document.forms["registration"]["fname"].value;
  var regemail=document.forms["registration"]["email"].value;
  var regpassword=document.forms["registration"]["password"].value;
  var pnumber=document.forms["registration"]["phone-number"].value;
  var Address=document.forms["registration"]["Address"].value;
  var Confirmpassword=document.forms["registration"]["Confirm-password"].value;
  var gender=document.forms["registration"]["gender"].value;

  // 1 
  if  (ename ==""){
    document.getElementById('entername').style.display='block';
    return false;
  }
  else{
    document.getElementById('entername').style.display='none';

  } 
  // 2
  if (regemail ==""){
        document.getElementById('enteremail').style.display='block';
        return false;
      }
      else{
        document.getElementById('enteremail').style.display='none';
      }
  // 3
  if (regpassword ==""){
    document.getElementById('enterpassword').style.display='block';
    return false;
  }
  else{
    document.getElementById('enterpassword').style.display='none';

  }   
  if (regpassword.length<8){
    document.getElementById('enterpassword1').style.display='block';
    return false;
  }
  else{
    document.getElementById('enterpassword1').style.display='none';

  }   
  // 4
  if (pnumber ==""){
    document.getElementById('pn').style.display='block';
    return false;
  }
  else{
    document.getElementById('pn').style.display='none';

  } 
  if (isNaN(pnumber)||pnumber<10){
    document.getElementById('pnn').style.display='block';
    return false;
  }
  else{
    document.getElementById('pnn').style.display='none';

  } 
  // 5
  if (Address ==""){
    document.getElementById('add').style.display='block';
    return false;
  }
  else{
    document.getElementById('add').style.display='none';

  } 

  // 6

  if (Confirmpassword==""){
    document.getElementById('cpassword').style.display='block';
    return false;
  }
  else{
    document.getElementById('cpassword').style.display='none';

  } 
  // 7
  if (gender==""){
    document.getElementById('gendermale').style.display='block';
    return false;
  }
  else{
    document.getElementById('gendermale').style.display='none';

  } 
}
