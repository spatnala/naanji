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
        selector: '.pdp_star-popup',
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
    zoomImg();
    $('.pdp_thumb-img img').click(function () {
        $('.pdp_zoom-image').attr('src', $(this).attr('src'));
        $('.zoomContainer').remove();
        $('.pdp_zoom-image').removeData('elevateZoom');
        zoomImg();
    });
    //ZOOM IN IMAGE END

    //USED TO REMOVE THE ZOOM FUNCTIONALITY IN WINDOW LESS THAN 768PX START
    $(window).resize(function () {
        zoomImageMobile();
    });
    //USED TO REMOVE THE ZOOM FUNCTIONALITY IN WINDOW LESS THAN 768PX END

    $('#writeReviewFormModal').on('show.bs.modal', function () {
        $('#writeReviewFormModal .modal-content').css('height', $(window).height() * .8);
    });

    var swiper = new Swiper('.swiper-banner-container', {
        
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
    //SHOPPING CART SCRIPT END

    ////USED TO HIDE THE POPOVER, SHARE AND COMPARE POPOVERS CLOSE ON DOC. CLICK START
    /*$(document).click(function(e) 
    {
        var shareContainer = $(".pdp_share-tab");
        var compareContainer = $(".pdp_compare-tab");
        var shareClickBtn=$(".pdp-share-btn");
        var compareClickBtn=$(".pdp-compare-btn");
        // if the target of the click isn't the container nor a descendant of the container
        if (!shareContainer.is(e.target) && !compareContainer.is(e.target) && !shareClickBtn.is(e.target) && !compareClickBtn.is(e.target) && shareContainer.has(e.target).length === 0 && compareContainer.has(e.target).length === 0)
        {
            shareContainer.hide();
            compareContainer.hide();
            shareClickBtn.css('border-color', '#ccc');
            compareClickBtn.css('border-color', '#ccc');
        }
    });*/
    $(document).on('click', function (e) {
        if ($(e.target).closest('.pdp-share-btn,.pdp-compare-btn').length) {
            $(".pdp_share-tab, .pdp_compare-tab").show();
        } else if (!$(e.target).closest('.pdp_share-tab, .pdp_compare-tab').length) {
            $('.pdp_share-tab, .pdp_compare-tab').hide();
        }
    });
    ////USED TO HIDE THE POPOVER, SHARE AND COMPARE POPOVERS CLOSE ON DOC. CLICK END

    //PAGINATION START
    $('#pagination-demo').twbsPagination({
        totalPages: 3,
        // the current page that show on start
        startPage: 1,

        // maximum visible pages
        visiblePages: 5,

        initiateStartPageClick: true,

        // template for pagination links
        href: false,

        // variable name in href template for page number
        hrefVariable: '{{number}}',

        // Text labels
        first: 'First',
        prev: 'Previous',
        next: 'Next',
        last: 'Last',

        // carousel-style pagination
        loop: false,

        // callback function
        onPageClick: function (event, page) {
            $('.page-active').removeClass('page-active');
            $('#page' + page).addClass('page-active');
        },

        // pagination Classes
        paginationClass: 'pagination',
        nextClass: 'next',
        prevClass: 'prev',
        lastClass: 'last',
        firstClass: 'first',
        pageClass: 'page',
        activeClass: 'active',
        disabledClass: 'disabled'

    });
    //PAGINATION END
    //UP DOWN VOTE VALUE CHANGE START
    $(".pdp_review-up-down-vote-container").find("a.pdp_up-vote").on("click", function () {
        var voteVal = parseInt($(this).next("span").text());
        temp = voteVal;
        if (voteVal == temp) {

            voteVal = voteVal + 1;
            $(this).next("span").text(voteVal);
            return false;
        }
        if (voteVal !== temp) {
            voteVal = voteVal - 1;
            console.log("if 02" + voteVal);
        }
    });
    //UP DOWN VOTE VALUE CHANGE END
});
function zoomImg() {
    $(".pdp_zoom-image").elevateZoom({
        // zoomType: "inner",
        // cursor: "crosshair"

        gallery: 'pdp_thumb-img',
        lensSize: 400,
        cursor: 'pointer',
        galleryActiveClass: 'active',
        imageCrossfade: true,
        scrollZoom: true,
        responsive: true
    });
}

function zoomImageMobile() {
    if ($(window).width() < 768) {
        $('.zoomContainer').remove();
        $('.pdp_zoom-image').removeData('elevateZoom');
    }
}

function rescale() {
    var size = { width: $(window).width(), height: $(window).height() }
    /*CALCULATE SIZE*/
    var offset = 20;
    var offsetBody = 150;
    $('#writeReviewFormModal').css('height', size.height - offset);
    $('#writeReviewFormModal .modal-body').css('height', size.height - (offset + offsetBody));
    $('#writeReviewFormModal').css('top', 0);
}
