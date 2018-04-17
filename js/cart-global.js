$(function () {
    //SHOPPING CART SCRIPT START
    //SWITCH BETWEEN LIST AND GRID VIEW START
    $('.switch-list-grid-wrapper a').click(function () {
        $('.switch-list-grid-wrapper a').removeClass('active');
        $(this).addClass('active');
        if ($('.grid-view a').hasClass('active')) {
            $('.cart_product-list-wrapper').find('.product_items').removeClass('product_list-view');
        }
        else if ($('.list-view a').hasClass('active')) {
            $('.cart_product-list-wrapper').find('.product_items').addClass('product_list-view');
        }
    });
    //SWITCH BETWEEN LIST AND GRID VIEW END

    //USED TO ZOOM IN AND OUT ON MOUSE OVER START

    //USED TO ZOOM IN AND OUT ON MOUSE OVER END

    //USED TO SLIDE THE RECOMMENDED SLIDER START
    $('.carousel[data-type="multi"] .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i = 0; i < 4; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
        }
    });
    //USED TO SLIDE THE RECOMMENDED SLIDER END

    //USED TO SHOW OR HIDE THE SHARE ICONS START
    $('.pdp-share-btn').click(function () {
        $('.pdp_share-tab').toggleClass('hide');
        $('.pdp_compare-tab').addClass('hide');

        if ($('.pdp_share-tab').is(':visible')) {
            $('.pdp-share-btn').css('border-color', '#e22c60');
            $('.pdp-compare-btn').css('border-color', '#ccc');
        } else {
            $('.pdp-share-btn').css('border-color', '#ccc');
        }
    });

    //$('.pdp_share-tab').mouseover(function () {
    //    $('.pdp-share-btn').css('border-color', '#e22c60');
    //});
    //$('.pdp_share-tab').mouseout(function () {
    //    $('.pdp-share-btn').css('border-color', '#ccc');
    //});

    $('.pdp-compare-btn').click(function () {
        $('.pdp_compare-tab').toggleClass('hide');
        $('.pdp_share-tab').addClass('hide');
        if ($('.pdp_compare-tab').is(':visible')) {
            $('.pdp-compare-btn').css('border-color', '#e22c60');
            $('.pdp-share-btn').css('border-color', '#ccc');
        } else {
            $('.pdp-compare-btn').css('border-color', '#ccc');
        }
    });
    //USED TO SHOW OR HIDE THE SHARE ICONS END

    //REVIEW TOOLTIP START
    //$('.pdp_star-ratings').popover();
    var popoverTemplate = ['<div class="timePickerWrapper popover">',
                                '<div class="arrow"></div>',
                                '<div class="popover-content">',
                                '</div>',
                            '</div>'].join('');

    var content = ['<ul class="pdp_progress-bar-wrapper">',
        '<li>',
        '<span><span class="star-count">5</span>★</span>',
        '<div class="progress">',
        '<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"style="width:90%">9540 Customers</div>',
        '</div>',
        '</li>',
        '<li>',
        '<span><span class="star-count">4</span>★</span>',
        '<div class="progress">',
        '<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"style="width:70%">954 Customers</div>',
        '</div>',
        '</li>',
        '<li>',
        '<span><span class="star-count">3</span>★</span>',
        '<div class="progress">',
        '<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"style="width:50%">95 Customers</div>',
        '</div>',
        '</li>',
        '<li>',
        '<span><span class="star-count">2</span>★</span>',
        '<div class="progress">',
        '<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"style="width:40%">9 Customers</div>',
        '</div>',
        '</li>',
        '<li>',
        '<span><span class="star-count">1</span>★</span>',
        '<div class="progress">',
        '<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"style="width:30%">1 Customer</div>',
        '</div>',
        '</li>',
        '<li><a href="#customerReviews" class="pdp_see-review-btn">See All Reviews</a></li>',
        '</ul>', ].join('');

    $('body').popover({
        selector: '.pdp_star-ratings',
        trigger: 'click',
        content: content,
        template: popoverTemplate,
        placement: "bottom",
        html: true
    });
    //REVIEW TOOLTIP END
    //REVIEW POPOVER BTN SCROLL START
    $("body").on("click", "a.pdp_see-review-btn", function () {
        var linkHref = $(document).find("a.pdp_see-review-btn").attr("href");
        var offset = -160;
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top + offset
        }, 2000);
        $(this).parents(".timePickerWrapper.popover").removeClass("in");
    });
    //REVIEW POPOVER BTN SCROLL END

    //ZOOM IN IMAGE START
    //$(".pdp_zoom-image").hover(function () {
    //    var zoomImg = $(this).attr("src");
    //    $(this).attr('data-zoom-image', zoomImg);
    //}, function () {
    //    $(this).attr('data-zoom-image', '');
    //});
    //$(".pdp_zoom-image").elevateZoom({
    //    zoomType: "inner",
    //    cursor: "crosshair"
    //});
    //ZOOM IN IMAGE END
    $('.pdp_thumb-img img').click(function () {
        $('.pdp_zoom-image').attr('src', $(this).attr('src'));
        $(".pdp_zoom-image").data('zoom-image', $(this).attr('src')).elevateZoom({
            zoomType: "inner",
            cursor: "crosshair",
            responsive: "true"

        });
    });
    //SHOPPING CART SCRIPT END
});