$(function () {
    $('#rdoCheckoutNetBanking').on('click', function(){
      $(this).parent().find('a').trigger('click');
    });

    $('#rdoCheckoutCard').on('click', function(){
      $(this).parent().find('a').trigger('click');
    });

    $('#rdoCheckoutUPI').on('click', function(){
      $(this).parent().find('a').trigger('click');
    });
});