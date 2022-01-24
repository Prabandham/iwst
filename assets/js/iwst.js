$(document).ready(function () {
    console.log("ready!");
    $("#formButton").click(function () {
        $("#form1").toggle();
    });

    let dropdowns = document.querySelectorAll('.dropdown-toggle')
    dropdowns.forEach((dd) => {
        dd.addEventListener('click', function (e) {
            var el = this.nextElementSibling
            el.style.display = el.style.display === 'block' ? 'none' : 'block'
        })
    })

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: true,
        center:true,
        autoplay:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    

    $("form").submit(function (event) {
        var formData = {
            name1: $("#name1").val(),
            address1: $("#address1").val(),
            phonenumber1: $("#phonenumber1").val(),
            email1: $("#email1").val(),
            message1: $("#message1").val(),
        };

        $.ajax({
            type: "POST",
            crossDomain: true,
            url: "https://iwst.icfre.gov.in/sendmail.php",
            data: formData,
            dataType: "json",
        }).done(function (data) {
            console.log(data);
            $("#formrequest").html(
                '<div class="alert alert-success alert-dismissible fade show">Form submitted successfully.<button type="button" class="close" data-dismiss="alert"><span>&times;</span></button></div>'
            );
        }).fail(function (data) {
            $("#formrequest").html(
                '<div class="alert alert-danger alert-dismissible fade show">oops! something went wrong. <button type="button" class="close" data-dismiss="alert"><span>&times;</span></button></div>'
            );
        });

        event.preventDefault();
    });
});

