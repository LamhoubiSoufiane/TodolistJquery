$('.plus').on('click', function(){
    $('#task').slideToggle("slow");
})

$('ul').on('click', 'li', function(){
    $(this).toggleClass('done');
})

$('#add').click(function(){
    value = $('input').val();
    $('ul').append('<li>'+value+ '<button class="btn btn-danger" id="remove">Clear</button> </li>');
    $('input').val('');
})

$('ul').on('click','button', function(event){
    event.stopPropagation();
    $(this).parent().fadeOut();
})
$('.btn-dark').click(function(){
    if(confirm("Want to clear?")){
        $('ul').empty();
    }
})


