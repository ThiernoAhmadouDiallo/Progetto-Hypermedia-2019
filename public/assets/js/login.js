let div = null;

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
    $('#btn-signup').click(() => {
        const user = {
            username: $('#userNameSign').val(),
            password: $('#passwdSign').val(),
        };
        $.ajax({
            url: '/user/register',
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            data: (JSON.stringify(user)),
            success: function (response) {
                if (response.success) {
                    $('#successAlert').text();
                    window.location = 'login.html';
                } else {
                    console.log(response.failure);
                }
            }
        });
    });

    $('#cartBtn').click(() => {
        $.ajax({
            url: '/cart/Boubacar',
            type: 'GET',
            async: false,
            success: function (response) {
                if (response) {
                    // $('#cartDiv').html(response);
                    // window.location = '/pages/cart.html';
                    // console.log($('#cartDiv'))
                } else {
                    //TODO handle
                    console.log(response);
                }
            },
            error: function (error) {
                console.log(error)
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



