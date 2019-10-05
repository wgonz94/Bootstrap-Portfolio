var frontend = $(".front-end")

frontend.hide();

$(".front-button").on("click", frontEndProjects)

function frontEndProjects() {
    frontend.show();
}