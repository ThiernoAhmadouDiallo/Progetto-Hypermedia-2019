$(document).ready(() => {
    $('#submit').click(() => {
        $.ajax({
            url: '/user/register',
            type: 'POST',
            async: false,
            dataType: 'json',
            data: {
                "username": $('#textUser').val(),
                "password": $('#password').val(),
            },
            success: success,
            error: (error) => {
                console.log('error');
                alert(JSON.stringify(error));
            }
        });
    });
});


$(document).ready(() => {
    $('#loginButton').click(() => {
        $.ajax({
            url: '/user/login',
            type: 'POST',
            async: false,
            dataType: 'json',
            data:{username:$('#username').val(), password:$('#passwordLogin').val()},
            success: success,
            error: (error) => {
                alert(error);
            } 
        });
    });
});


function success(data) {
    if (data.success) {
        $('#successAlert').text(data.success);
        $("#successAlert").fadeTo(5000, 500).slideUp(500, () => {
            $("#successAlert").slideUp(500);
        });
    }
    if (data.failure) {
        $('#failureAlert').text(data.failure);
        $("#failureAlert").fadeTo(5000, 500).slideUp(500, () => {
            $("#failureAlert").slideUp(500);
        });
    }
    if (data.html) {
        $('.form').append(data.html);
    }
}


$(document).ready(() => {
    const transition = 500;
    $('#createAccountLink').click(() => {
        $('.login-form').slideUp(transition, () => {
            $('.register-form').slideDown(transition);
        });
    });
    $('#signIn').click(() => {
        $('.register-form').slideUp(transition, () => {
            $('.login-form').slideDown(transition);
        });
    })
});


