function getname(){
    let name= document.getElementById("name").value;
    let error= "";
    let validName= ""

if(name ==""){
        error ="Name is required"
        validName= ""
    }
else if(name.length < 10){
        error= "invalid name";
        validName= ""
    }
else{
        validName=name
    }
    document.getElementById("nameError").innerHTML= error;
    document.getElementById("validName").innerHTML= validName;
}

function getemail(){
    let email= document.getElementById("email").value;
    let error= "";
    let validEmail= ""

if(email == ""){
        error ="Email is required"
        validEmail= ""
    }

else if(email.includes("@")== false || email.includes(".") == false){
        error= "invalid email"
        validEmail=""
    }

else{
        validEmail= email
    }
    document.getElementById("emailError").innerHTML= error;
    document.getElementById("validEmail").innerHTML= validEmail;
}

function getnumber(){
    let number= document.getElementById("number").value;
    let error= "";
    let validNumber= ""

if(number == ""){
    error="Phone number is required"
    validNumber=""
}
else if( !(number.startsWith("080") || number.startsWith("091") || number.startsWith("070") || number.startsWith("081") || number.startsWith("090") || number.startsWith("071") || number.startsWith("01"))){
     error ="Invalid phone number"
     validNumber= ""
}
else if(number.length < 7){
    error="Invalid Phone number"
    validNumber=""
}
else {
    validNumber = number
}

document.getElementById("numberError") .innerHTML =error;
document.getElementById("validNumber").innerHTML= validNumber

}

function getaddress(){
    let address =document.getElementById("address").value;
    let error ="";
    let validAddress=""

    if (address == ""){
        error ="Address is required"
        validAddress=""
    }

    else if(address.length < 4){
        error="Invalid Address"
        validAddress=""
    }

    else{
        validAddress=address
    }

    document.getElementById("AddressError").innerHTML= error;
    document.getElementById("validAddress").innerHTML= validAddress;

}

