// jQuery(document).ready( function () {} );


jQuery(document).ready( function () {

    $("html").remove();

    $("#light-off").click(function () {
        $("body").css({"background-color": "black"});
        $("body").css("color", "white");
    });

    $("#light-on").click(function () {
        var body = $("body");

        body.css({"background-color": "white"});
        body.css("color", "black");
});

    // new JavaScript function, takes two arguments, first is callback, second is how long in milliseconds.
    setTimeout(function () {

        // Add an element to the webpage. .append()
        $("ol").append("<li>This was added ager the fact.</li>");

        $("body").append("<h1>New section<h1><p>Welcome to this new section</p>");

        // Adds an element to the start of the child list, .prepend()
        $("body").prepend("<h1 style='color: red'>Alert! new things!</h1>");

        //Adds an html as a child, replacing existing children, .html()

        $("ol").html("<li>All tasks done!</li>")

    }, 5000);

    $("#recycleButton").click(function (){

        // Removes the element you have selected.
        $('body').remove();

        // Removes all children of the element you have selected.
        $("body").empty();

    });

});
