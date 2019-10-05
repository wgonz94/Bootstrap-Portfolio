var frontend = $(".front-end")
var backend = $(".back-end")

backend.hide();
frontend.hide();

$(".front-button").on("click", frontEndProjects)
$(".back-button").on("click", backEndProjects)

function frontEndProjects() {
    frontend.show();
    backend.hide();
}

function backEndProjects() {
    frontend.hide();
    backend.show();
}