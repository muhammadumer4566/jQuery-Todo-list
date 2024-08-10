$('input').keypress(function(event) {
    if(event.which === 13) {
        var todoText = $(this).val().trim(); // Trim spaces from the input
        if(todoText === "") {
            alert("Please enter a valid todo item!"); // Alert if the input is empty
        } else {
            $(this).val(""); // Clear the input field
            $('ul').append('<li>' + todoText + '<span><i class="fa fa-trash"></i></span></li>');
        }
    }
});

$('ul').on('click', "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$('ul').on('click', 'li', function() {
    $(this).toggleClass('done');
});
