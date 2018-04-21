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
});