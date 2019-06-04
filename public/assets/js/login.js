$(document).ready(() => {
    $('#btn-login').click(() => {
        const user = {
            username: $('#login-username').val(),
            password: $('#login-password').val(),
        };
        $.ajax({
            url: '/user/login',
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            data: (JSON.stringify(user)),
            success: function (response) {
                if (response.success) {
                    window.location = response.redirect;
                } else {
                    //TODO handle
                    console.log(response.failure);
                }
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



