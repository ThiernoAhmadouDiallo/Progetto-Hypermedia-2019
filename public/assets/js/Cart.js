$(document).ready(() => {
    //FIXME jquery not working check why
    $('.opening').bind("click", function (event) {
        console.log($(this));
    });
    // $('.deleteCartBtn').click(() => {
    //     const depart = $('.deleteCartBtn');
    //     const isbn = depart.parent().find('#isbn').text().slice(7);
    //     const temp = depart.parent().parent().parent();
    //     const user = temp.parent().attr('id');
    //     $.ajax({
    //         url: '/cart/' + user + '/' + isbn,
    //         type: 'DELETE',
    //         success: function () {
    //             temp.slideUp(1000);
    //             temp.remove();
    //         }
    //     });
    // });
});

