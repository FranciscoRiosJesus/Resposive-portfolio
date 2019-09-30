/*!
    
 =========================================================
 * Porfolio Francisco Rios dev - v1.0.0.0
 =========================================================
 
 * Product Page: http://www.
 * Copyright 2019  (http://www.)
 * Licensed under MIT (https://github.com/)
 
 =========================================================
 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 
 */

searchVisible = 0;
transparent = true;

$(document).ready(function(){
    /*      Activate the switches with icons      */
    $('.switch')['bootstrapSwitch']();
      
    /*      Activate regular switches        */
    $("[data-toggle='switch']").wrap('<div class="switch" />').parent().bootstrapSwitch();
    
    $('[data-toggle="search"]').click(function(){
        if(searchVisible == 0){
            searchVisible = 1;
            $(this).parent().addClass('active');
            $('.navbar-search-form').fadeIn(function(){
                $('.navbar-search-form input').focus();
            });
        } else {
            searchVisible = 0;
            $(this).parent().removeClass('active');
            $(this).blur();
            $('.navbar-search-form').fadeOut(function(){
                $('.navbar-search-form input').blur();
            });
        } 
    });
    
    $('[data-toggle="gsdk-collapse"]').hover(
    function(){
            console.log('on hover');
            var thisdiv = $(this).attr("data-target");

            if(!$(this).hasClass('state-open')){
                $(this).addClass('state-hover');                
                $(thisdiv).css({
                    'height':'30px'
                });    
            }
            
        },
        function(){
            var thisdiv = $(this).attr("data-target");
            $(this).removeClass('state-hover');
            
            if(!$(this).hasClass('state-open')){
                $(thisdiv).css({
                    'height':'0px'
                });     
            }          
        }
    );
    
    $('[data-toggle="gsdk-collapse"]').click(
    function(event){
            event.preventDefault();
                        
            var thisdiv = $(this).attr("data-target");
            var height = $(thisdiv).children('.panel-body').height();
            
            if($(this).hasClass('state-open')){
                $(thisdiv).css({
                    'height':'0px',
                }); 
                $(this).removeClass('state-open');    
            } else {
                $(thisdiv).css({
                    'height':height,
                }); 
                $(this).addClass('state-open');
            }
        }
    );

    /*       Send Mail      */

    $('#submit').click(function (event) {

        const name = $('#name').val();
        const mail = $('#mail').val();
        const massage = $('#message').val();

        if(name.length >= 2) {
            $('#nameDiv').addClass('has-success');
        } else {
            event.preventDefault();
            $('#nameDiv').addClass('has-error has-feedback');
        }

        if(mail.length > 5 && mail.includes('@') && mail.includes('.')) {
            $('#mailDiv').addClass('has-success');
        } else {
            event.preventDefault();
            $('#mailDiv').addClass('has-error has-feedback');
        }

        if(massage.length > 8){
            $('#message').addClass('has-success');
        } else {
            event.preventDefault();
            $('#messageDiv').addClass('has-error has-feedback');
        }
    })

    document.getElementById('about-me-a').addEventListener('click', function() {
        document.getElementById('about-me-modal').style.display = 'block';
        document.getElementById('about-me-modal').style.padding = '0';
    });

});

$(function () {
    $('[data-toggle="gsdk-collapse"]').each(function () {
        var thisdiv = $(this).attr("data-target");
        $(thisdiv).addClass("gsdk-collapse");
    });
    
});

$(document).scroll(function() {
    if( $(this).scrollTop() > 8 ) {
        if(transparent) {
            transparent = false;
            $('nav[role="navigation"]').removeClass('navbar-transparent');
        }
    } else {
        if( !transparent ) {
            transparent = true;
            $('nav[role="navigation"]').addClass('navbar-transparent');
        }
    }
});













