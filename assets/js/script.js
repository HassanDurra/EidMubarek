$(document).ready(function(){
    let button   = $('#submit_btn');
    let name     = $('input[name="name"]');    
    let username = $('.name h1');   
    $(button).on('click' , function(e){
        e.preventDefault();
        isValid = true ;
        $(name).each(function(){
            if($(this).val() == "")
            {   e.preventDefault();
                toastr['error']('Cannot proceed without submitting your name');
                isValid = false ;
                button.html('Try again');
                return false ;

            }
        });
        if(isValid)
        {
            e.preventDefault();
            toastr['success']('Thanks For Visiting Here ! is the gift for you');
            button.html('Submitted');
            $('.form-inputs').hide();
            $('.form-heading p').hide();
            $('.form-heading img').hide();
            username.html(name.val());
            $('.section-wish').show();
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


        }
    })
})