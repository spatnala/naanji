$(function () {
	//VERTICAL SCROLL START
	$(".newsticker-jcarousellite").jCarouselLite({
		vertical: true,
		hoverPause:true,
		visible: 3,
		auto:1000,
		speed:4000,
		mouseWheel: true
	});
	//VERTICAL SCROLL END
    //GO TO TOP OF THE PAGE
	$('.product_view-btn').tooltip();
	
	/*ON SCROLL FIX THE SEARCH BAR AT TOP START*/
	var navTop = $('.searchbar').offset().top-120;

	$(window).scroll(function(){
		if ($(this).scrollTop() >= navTop) {
			$('.searchbar').css('position', 'fixed');
			$('.searchbar').css('top', '65px');
			$('.searchbar').addClass("search-shadow");
		} else {
			$('.searchbar').css('position', 'static');
			//$('.searchbar').css('top', '394px');
			$('.searchbar').removeClass("search-shadow");
		}
	});
	/*ON SCROLL FIX THE SEARCH BAR AT TOP END*/
	
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 50) {
            $('.toTop').fadeIn();
        } else {
            $('.toTop').fadeOut();
        }
    });
    $(".toTop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    //$('#carouselABC').carousel({ interval: 1500 });

    //$('.carousel-showmanymoveone .item').each(function () {
    //    var itemToClone = $(this);

    //    for (var i = 1; i < 4; i++) {
    //        itemToClone = itemToClone.next();

    //        // wrap around if at end of item collection
    //        if (!itemToClone.length) {
    //            itemToClone = $(this).siblings(':first');
    //        }

    //        // grab item, clone, add marker class, add to collection
    //        itemToClone.children(':first-child').clone()
    //          .addClass("cloneditem-" + (i))
    //          .appendTo($(this));
    //    }
    //});

    //$(".carousel").swipe({
    //    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
    //        if (direction == 'left') $(this).carousel('next');
    //        if (direction == 'right') $(this).carousel('prev');
    //    },
    //    allowPageScroll: "vertical"
    //});

    $(".main-menus").find("a").click(function () {
        var linkHref = $(this).attr("href");
        var offset = -160;
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top + offset
        }, 2000);
    });

    hideShowcase();
    //$("#button").click(function () {
    //    var offset = 20; //Offset of 20px
    //    $('html, body').animate({
    //        scrollTop: $("#elementtoScrollToID").offset().top + offset
    //    }, 2000);
    //});
	//VERTICAL SCROLL LI CLICK SHOW ON MODAL START
	$(".newsticker-demo").find('li').click(function(){
		var scrollVdoUrl=$(this).find('span.vert-scroll-vdo-url').text();
		console.log(scrollVdoUrl)
		$(document).find(".modal.vdoModal").find("iframe").attr("src", scrollVdoUrl);
		
	});
	//VERTICAL SCROLL LI CLICK SHOW ON MODAL END
    $(document).find(".showcase").children("a").click(function () {
        var vdoTitle = $(this).find("h3").text();
        var vdoUrl = $(this).find("span.thisVdoUrl").text();
        var itemType = $(this).find("span.itemType").text();
        $(".modal").find("h4.modal-title").text(vdoTitle);
        $(document).find(".modal").find("iframe").attr("src", vdoUrl);
        if (itemType == "Wicks") {
            //$(document).find(".vdoModal").find(".buy-now-text").show();
            //$(document).find(".vdoModal").find(".modal-buy-btn").show();
            //$(document).find(".vdoModal").find(".modal-close-btn").hide();
        }
        if (itemType !== "Wicks" || itemType == "" || itemType == null) {
            //$(document).find(".vdoModal").find(".buy-now-text").hide();
            //$(document).find(".vdoModal").find(".modal-buy-btn").hide();
            $(document).find(".vdoModal").find(".modal-close-btn").show();
        }
    });

    $(document).find(".modal").on('hidden.bs.modal', function (e) {
        $(".modal iframe").attr("src", "");
    });
	
	//CLEAR SEARCH FIELD START
	$('.search-clear').click(function(){
		$(".naanji-navbar-input").val('');
		$(this).addClass("hide");
		//$scope.naanjiSearch = {};
		$('.showcase').show();
		hideShowcase();
	});
	//CLEAR SEARCH FIELD END
$('.naanji-navbar-input').on("keyup",function(){
	//used to show or hide text box clear btn.
	if($(".naanji-navbar-input").val()!=""){
			$('.search-clear').removeClass("hide");
		}else{
			$('.search-clear').addClass("hide");
		}
		
		var txtInputVal=$(this).val().toLowerCase();
		$(".showcase .abs h3").each(function() {
			var listData = $(this).text().toLowerCase();
			//$(this).closest('.showcase')[ listData.indexOf(txtInputVal) !== -1 ? 'show' : 'hide' ]();
			if (listData.indexOf(txtInputVal)!=-1) {
				$(this).parents('.showcase').show();
				//$(this).parents('.search-container').show();
				//$(this).parents('[data-search-sections]').show();
			}
			else {
				$(this).parents('.showcase').hide();
			}
		});
	});

    //SHOW AND HIDE THE TOP NAV BAR AND BOTTOM BUY BTN START.
    $(".buynow-container").hide();
    $(window).scroll(function () {
        // set distance user needs to scroll before we fadeIn navbar
        if ($(this).scrollTop() > 50) {
            $('#top-menu').fadeOut();
            $(".buynow-container").fadeIn();
            
        } else {
            $('#top-menu').fadeIn();
            $(".buynow-container").fadeOut();
        }
    });
    //SHOW AND HIDE THE TOP NAV BAR AND BOTTOM BUY BTN END.
});

function hideShowcase() {
    $(document).find(".showcase").each(function () {
        if ($(this).find("h3").html().trim().length == 0) {
            $(this).hide();
        }
    });
}