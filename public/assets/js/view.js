$(".eatBurger").on("click", function (event) {
        var eatBurger = {id: $(this).data("id")}
        $.ajax("/api/burgers", {
            type: "PUT",
            data: eatBurger
        }).then(() => {
            location.reload()
        })

    })

    $("#submitBurger").on("submit", function(event) {
        event.preventDefault();
        var newBurger = {name: $("#burgerVal").val().trim()}
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            location.reload()
        })
        
    })