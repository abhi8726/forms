

function showMsg(){
    
    var name=document.getElementById("name");
    var phone=document.getElementById("phone");
    var regx=/E00/;
    var regxp=/^[7-9]\d{9}$/;
    
    
    if(regx.test(name.value))
    {
        alert("Valid Username");

    }
    else{
        alert("Invalid UserName");
        return false;
    }
    if(name.value.trim() =="")
    {
        name.style.border=" solid 2px red";
        var lbluser=document.getElementById("lbluser");
        lbluser.style.visibility="visible"
        alert("Blank Username");
        return false;
    }
    else if(name.value.trim().length<5)
    {
        alert("name too short");
        return false;
    }

    else if(regxp.test(phone.value))
        {
            alert("Valid Phone Number");
        }
    else
    {
        alert("Invalid Number");
        return false;
    }

}