$(function () {
//SHOPPING CART SCRIPT START
//SWITCH BETWEEN LIST AND GRID VIEW START
$('.switch-list-grid-wrapper a').click(function(){
	$('.switch-list-grid-wrapper a').removeClass('active');
	$(this).addClass('active');
	if ($('.grid-view a').hasClass('active')) {
		$('.cart_product-list-wrapper').find('.product_items').removeClass('product_list-view');
    }
    else if($('.list-view a').hasClass('active')) {
		$('.cart_product-list-wrapper').find('.product_items').addClass('product_list-view');
    }
});
//SWITCH BETWEEN LIST AND GRID VIEW END
//SHOPPING CART SCRIPT END
});

function hideShowcase() {
    $(document).find(".showcase").each(function () {
        if ($(this).find("h3").html().trim().length == 0) {
            $(this).hide();
        }
    });
}