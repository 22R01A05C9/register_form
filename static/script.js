function success(element) {
    element.parent().removeClass("red");
    element.parent().addClass("green");
    element.parent().next().css("display", "none");
    element.parent().prev().children().removeClass("fa-bounce");
}

function fail(element, message) {
    element.parent().removeClass("green");
    element.parent().addClass("red");
    element.parent().next().text(message).css("display", "block");
    element.parent().prev().children().addClass("fa-bounce");
    setTimeout((element)=>{element.parent().prev().children().removeClass("fa-bounce");},5000,element);
}



function testname() {
    let nameinpfield = $("#name");
    if (nameinpfield.val().length < 3) {
        fail(nameinpfield, "Name Must Be Greater Than 3 Letters");
    }
    else {
        success(nameinpfield);
    }
}

function testemail() {
    let emailinpfield = $("#email");
    patt = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;
    if (patt.test(emailinpfield.val()) && emailinpfield.val().length > 6) {
        success(emailinpfield);
    }
    else {
        fail(emailinpfield, "Please Enter Valid Email Address");
    }
}

function validatepas() {
    let lists = $(".details ul li");
    if (lists[0].style.color === "rgba(0, 128, 0, 0.46)" && lists[1].style.color === "rgba(0, 128, 0, 0.46)" && lists[3].style.color === "rgba(0, 128, 0, 0.46)" && lists[2].style.color === "rgba(0, 128, 0, 0.46)") {
        success($("#password"));
    }
}

function checkpass() {
    $(".details ul li").each((e) => {
        $(".details ul li")[e].style.color = "red";
    });
    pasinput = $("#password");
    if (pasinput.val().length < 6) {
        fail(pasinput, "Password Length Must Be Grater Than 6");
    }
    else {
        $(".details ul li")[0].style.color = "#00800075";
    }
    sma = /[a-z]/;
    if (sma.test(pasinput.val())) {
        $(".details ul li")[2].style.color = "#00800075";
    }
    else {
        fail(pasinput, "Password Should Contain Atleast 1 Small Letter");
    }
    cap = /[A-Z]/;
    if (cap.test(pasinput.val())) {
        $(".details ul li")[1].style.color = "#00800075";
    }
    else {
        fail(pasinput, "Password Should Contain Atleast 1 Capital Letter");
    }
    sp = /[!@#$%^&*]/
    if (sp.test(pasinput.val())) {
        $(".details ul li")[3].style.color = "#00800075";
    }
    else {
        fail(pasinput, "Password Should Contain Atleast 1 Special Character");
    }
    validatepas();
    confirmpass();
}

function confirmpass() {
    if ($("#password").val() !== $("#cnfpas").val() || $("#password").val()==="") {
        fail($("#cnfpas"), "Password Does Not Match");
    }
    else {
        success($("#cnfpas"));
    }

}

function showpas(type, thi) {
    let field = $(`#${type}`);
    if (field.attr("type") === 'password') {
        field.attr("type", "text");
        thi.classList.add("fa-eye-slash");
        thi.classList.remove("fa-eye");
        field.focus();
    } else {
        field.attr("type", "password");
        thi.classList.remove("fa-eye-slash");
        thi.classList.add("fa-eye");
        field.focus();
    }
}

function submit_form() {
    let inputs = $(".inp");
    if (inputs[0].classList.contains("green") && inputs[1].classList.contains("green") && inputs[2].classList.contains("green") && inputs[3].classList.contains("green")) {
        document.querySelector(".input-fields p").style.display = "none";
        const form = document.getElementById("register-form");
        console.log("submit");
        form.submit();
    }
    else {
        document.querySelector(".input-fields p").style.display = "block";
    }
}