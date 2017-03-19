$(document).ready(function () {

    $('.select').click(function () {
        var option=$(this).parents('.select-block').find('.option');
        if(option.is(":hidden")) {
            $(this).parents('.select-block').find('.option').slideDown(300);
        }
        else{
            $(option).slideUp(300);
        }
    })
    $('.option').find('li').click(function () {
        var flag=$(this).find('.flag').html();
        var may_lang=$(this).find('p').html();
        $(this).parent('.option').children('.active').removeClass('active')
        $(this).addClass('active');
        var select=$(this).parents('.select-block').find('.select');
        $(select).find('.flag').html(flag);
        $(select).find('p').html(may_lang);

    })
    $('.donat-button,.donat-button2').click(function () {
        if($(this).hasClass('open')){
            $(this).removeClass('open')
            $(this).find('.option').slideUp(300);
        }
        else{
            $(this).addClass('open')
            $(this).find('.option').slideDown(300);

        }

    })
    $('.footer-select').find('.zag').click(function () {
        if($(this).hasClass('open')){
            $(this).removeClass('open')
            $(this).parents('.footer-select').find('.option').slideUp(300)
        }
        else{
            $(this).addClass('open')
            $(this).parents('.footer-select').find('.option').slideDown(300)
        }
    })

})