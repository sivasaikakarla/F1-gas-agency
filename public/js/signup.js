function PValidation(){

    var pass = document.getElementById('pass');
    const ip=document.getElementById('invalid-pass');
    if( pass.value=="" ||pass.value==null){
        const ip=document.getElementById('invalid-pass');
        ip.innerHTML="*Password required";
        ip.style.display="block";
        return false;
        }
    if(pass.value.length<5){
        ip.innerHTML="*Password is too short";
        ip.style.display="block";
        ip.style.backgroundColor = "red"
        return false;
    } 
    if(pass.value.length>15){
        ip.innerHTML="*Password is too long";
        ip.style.display="block";
        ip.style.backgroundColor = "red"
        return false;
    }
    var pattern = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(!pass.value.match(pattern)){
        ip.innerHTML="*Atleast one special character needed";
        ip.style.display="block";
        ip.style.backgroundColor = "red"
        return false;
    }
    else {
        ip.style.display="none";
        return true; 
    }
  }

  function MobileValidation(){
    var mob = document.getElementById('mobile');
    var imob = document.getElementById('invalid-mobile');
    var pattern = /^[789]\d{9}$/;
    if(mob.value==null || mob.value==''){
        imob.style.display="block";
        imob.innerHTML="Required field";
        return false;
       }
        if(!mob.value.match(pattern)){
            imob.innerHTML="*Invalid mobile number ";
            imob.style.display="block";
            imob.style.backgroundColor = "red"
            return false;
        }

    
       else {
        imob.style.display="none";
        return true;
       }

      }

      function PhoneValidation(){
        var mob = document.getElementById('phone');
        var imob = document.getElementById('invalid-mobile');
        var pattern = /^[789]\d{9}$/;
        if(mob.value==null || mob.value==''){
            imob.style.display="block";
            imob.innerHTML="Required field";
            return false;
           }
            if(!mob.value.match(pattern)){
                imob.innerHTML="*Invalid mobile number ";
                imob.style.display="block";
                imob.style.backgroundColor = "red"
                return false;
            }
    
        
           else {
            imob.style.display="none";
            return true;
           }
    
          }

      function AadharValidation(){
        var aadhar = document.getElementById('aadhar');
        var iaadhar = document.getElementById('invalid-aadhar');
        var pattern = /^[1-9]\d{11}$/;
        if(aadhar.value==null || aadhar.value==''){
            iaadhar.style.display="block";
            iaadhar.innerHTML="Required field";
            return false;
           }
            if(!aadhar.value.match(pattern)){
                iaadhar.innerHTML="Invalid aadhar number ";
                iaadhar.style.display="block";
                iaadhar.style.backgroundColor = "red"
                return false;
            }

        
           else {
            iaadhar.style.display="none";
            return true;
           }

          }
  
  function nameValidation(){
    var fname = document.getElementById('name');
    const ifname = document.getElementById('invalid-name');
    if(fname.value==""|| fname.value==null){
        ifname.innerHTML="*Name required";
        ifname.style.display="block";
        return false;
    }
    var pattern = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(fname.value.match(pattern)){
        ifname.innerHTML="*No special characters are allowed ";
        ifname.style.display="block";
        ifname.style.backgroundColor = "red"
        return false;
    }
    if(fname.value.length<4){
      ifname.innerHTML="*Username is too short";
      ifname.style.display="block";
      ifname.style.backgroundColor = "red"
      return false;
  } 
  if(fname.value.length>15){
      ifname.innerHTML="*Username is too long";
      ifname.style.display="block";
      ifname.style.backgroundColor = "red"
      return false;
  }
   else {
    ifname.style.display="none";
    return true;
   }
  }
  
  function CPValidation(){
    var cpname = document.getElementById('cpassword');
    var icpname = document.getElementById('invalid-cp');
    var pass = document.getElementById('pass');
    if(cpname.value=="" || cpname.value==null){
        icpname.innerHTML="*Required field ";
        icpname.style.display="block";
        return false;
    }
    if(pass.value != cpname.value){
        icpname.innerHTML="*Password mismatch";
        icpname.style.display="block";
        icpname.style.backgroundColor = "red"
        return false; 
    }
    else {
        icpname.style.display="none";
        return true;
       }
    }
  
  function EmailValidation(){
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   var email = document.getElementById('email');
   var iemail = document.getElementById('invalid-email');
   if(email.value==null || email.value==''){
    iemail.style.display="block";
    iemail.innerHTML="Required field";
    return false;
   }
   if (!emailPattern.test(email.value)) {
    iemail.style.display="block";
    iemail.innerHTML="Wrong Email Format";
    iemail.style.backgroundColor = "red"
    return false
   }
   else {
    iemail.style.display="none";
    return true;
   }
  }
  
function DobValidation(){
    var dobInput = document.getElementById('dob');
    var idob = document.getElementById('invalid-dob');
    var minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 100); 
  var maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 18);
  var dobValue = dobInput.value;
  var dobDate = new Date(dobValue);
  if (dobDate < minDate || dobDate > maxDate){
    idob.style.display="block";
    idob.innerHTML="Date of Birth must be between " + minDate.toLocaleDateString() + " and " + maxDate.toLocaleDateString();
    idob.style.backgroundColor = "red"
    return false

  }
  else {
    iemail.style.display="none";
    return true;
  }
}