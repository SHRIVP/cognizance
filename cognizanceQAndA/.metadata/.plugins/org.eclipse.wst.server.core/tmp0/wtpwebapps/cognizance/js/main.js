$(document).ready(function () {

    $("#loginForm").submit(function (event) {

    	event.preventDefault();

        fire_ajax_submit();

    });

});

function fire_ajax_submit() {

    var search = {}
    search["username"] = $("#username").val();
    search["password"] = $("#password").val();

     
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/cognizance/login",
        data: JSON.stringify(search),
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {

            var json = "<h4>Login Success</h4><pre>"
                + JSON.stringify(data, null, 4) + "</pre>";
            $('#loginMessage').html(json);

            

        },
        error: function (e) {

            var json = "<h4>Login Failure</h4><pre>"
                + e.responseText + "</pre>";
            $('#loginMessage').html(json);

           

        }
    });

}