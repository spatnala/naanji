$(function () {
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

//INCREMENT OR DECREMENT ADD TO CART VALUE START
var cartNoOfItems=parseInt($(".cart-no-of-items").text());
var cartItemPrice=parseInt($(".cart-price-details > span").text());
$(".cart-increment-decrement-wrapper").find(".cart-increment").on("click",function(){
    var tempPrice;
    cartNoOfItems=cartNoOfItems+1;
    $(".cart-no-of-items").text(cartNoOfItems);
    $(".cart-price-no-of-items").text(cartNoOfItems);//USED TO UPDATE THE PRICE DETAIL ITEM SECTION
    tempPrice=cartNoOfItems*cartItemPrice;
    $(".cart-price-details > span").text(tempPrice);//USED TO UPDATE THE PRICE 
    $(".cart-decrement").removeClass("disabled");
});
$(".cart-increment-decrement-wrapper").find(".cart-decrement").on("click",function(){
    var cartNoOfItems=parseInt($(".cart-no-of-items").text());
    var tempPrice;
    if(cartNoOfItems>=2){
    cartNoOfItems=cartNoOfItems-1;
    $(".cart-no-of-items").text(cartNoOfItems);
    $(".cart-price-no-of-items").text(cartNoOfItems);//USED TO UPDATE THE PRICE DETAIL ITEM SECTION
    tempPrice=cartNoOfItems*cartItemPrice;
    $(".cart-price-details > span").text(tempPrice);//USED TO UPDATE THE PRICE 
}
if(cartNoOfItems<=1){
    $(this).addClass("disabled");
}
});
//INCREMENT OR DECREMENT ADD TO CART VALUE END

    var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
    'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
    'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
    'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
    'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ];
    $('#cartLocation').typeahead({
        source: states
    });
    initialize();
});
///USED TO EMBED GOOGLE MAP FN END.
function initialize() {
    var myLatLng = new google.maps.LatLng(17.3850, 78.4867),
        myOptions = {
            zoom: 3,
            center: myLatLng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        },
        map = new google.maps.Map(document.getElementById('map-canvas'), myOptions),
        marker = new google.maps.Marker({
            position: myLatLng,
            map: map
        });

    marker.setMap(map);
    moveMarker(map, marker);
}

function moveMarker(map, marker) {
    //delayed so you can see it move
    setTimeout(function () {
        marker.setPosition(new google.maps.LatLng(17.3850, 78.4867));
        map.panTo(new google.maps.LatLng(17.3850, 78.4867));
    }, 1500);
};
///USED TO EMBED GOOGLE MAP FN END.