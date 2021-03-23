$(document).ready(function() {
    $("#show_hide_password a").on('click', function(event) {
        event.preventDefault();
        if($('#show_hide_password input').attr("type") == "text"){
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass( "fa-eye-slash" );
            $('#show_hide_password i').removeClass( "fa-eye" );
        }else if($('#show_hide_password input').attr("type") == "password"){
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass( "fa-eye-slash" );
            $('#show_hide_password i').addClass( "fa-eye" );
        }
    });
});

function validate()
{
    var username = document.getElementById ("user_name");
    var email = document.getElementById ("user_email");
    var password = document.getElementById ("pass_word");
    var confirm_password = document.getElementById ("confirm_pass_word");

    if (username.value.trim() =="")
    {
        alert("Blank username")
        username.style.border = "solid 2px red";
        return false;
    }

    if (email.value.trim() =="")
    {
        alert("Blank email")
        username.style.border = "solid 2px red";
        return false;
    }

    else if (password.value.trim() =="")
    {
        alert("Blank password")
        username.style.border = "solid 2px red";
        return false;
    }

    else if (password.value.trim().length<5)
    {
        alert("Password too short")
        return false;
    }

    if (username.value.trim() =="" ||email.value.trim() =="" 
     ||password.value.trim() =="" ||confirm_password.value.trim() =="")

    {
        alert ("No blank values allowed");
        return false;
    }

    else
    {
        true;
    }
    
}