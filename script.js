document.addEventListener("DOMContentLoaded", function() {
    document.body.addEventListener("keydown", function(e) {
        if (e.key === "Tab") {
            document.body.classList.add("user-is-tabbing");
        }
    });

    document.body.addEventListener("mousedown", function() {
        document.body.classList.remove("user-is-tabbing");
    });
});
