var app = angular.module('naanjiSite', []);

app.controller('naanjiData', function ($scope) {
    $scope.websiteList = [
        {
            "itemType": "Wicks",
            "searchName": "Akhanda Vatti",
            "wicksName": "Akhanda Vatti",
            "wicksImageUrl": "images/video-thumbs/akhanda-vatti.png",
            "wicksVdoUrl": "https://www.youtube.com/embed/IEnqRUW3c5w?rel=0&amp;controls=0"
        },
		{
            "itemType": "Wicks",
            "searchName": "Gandham Vathulu",
            "wicksName": "Gandham Vathulu",
            "wicksImageUrl": "images/video-thumbs/gandham-vathulu.png",
            "wicksVdoUrl": "https://www.youtube.com/embed/pY-Wsv3nZLs?rel=0&amp;controls=0"
        },
		{
            "itemType": "Wicks",
            "searchName": "Kadothulu Easy Way",
            "wicksName": "kadothulu Easy Way",
            "wicksImageUrl": "images/video-thumbs/kadothulu-easy-way.png",
            "wicksVdoUrl": ""
        },
		{
            "itemType": "Wicks",
            "searchName": "Kumkua Vathulu",
            "wicksName": "Kumkua Vathulu",
            "wicksImageUrl": "images/video-thumbs/kumkuma-vathulu.png",
            "wicksVdoUrl": ""
        },
		{
            "itemType": "Wicks",
            "searchName": "Pasupu Vathulu",
            "wicksName": "Pasupu Vathulu",
            "wicksImageUrl": "images/video-thumbs/pasupu-vathulu.png",
            "wicksVdoUrl": "https://www.youtube.com/embed/VvzpOI70UfI?rel=0&amp;showinfo=0"
        },
		{
            "itemType": "Wicks",
            "searchName": "Puvvothulu",
            "wicksName": "Puvvothulu",
            "wicksImageUrl": "images/video-thumbs/puvvothulu.png",
            "wicksVdoUrl": ""
        },
		{
            "itemType": "Wicks",
            "searchName": "108 Wicks",
            "wicksName": "108 Wicks",
            "wicksImageUrl": "images/video-thumbs/108-wicks.png",
            "wicksVdoUrl": "https://www.youtube.com/embed/uElSWYtETTo?rel=0&amp;showinfo=0"
        },
		{
            "itemType": "Wicks",
            "searchName": "Types of Wicks",
            "wicksName": "Types of Wicks",
            "wicksImageUrl": "images/video-thumbs/types-of-wicks.png",
            "wicksVdoUrl": "https://www.youtube.com/embed/6R4XjLQFotA?rel=0&amp;showinfo=0"
        },
        {
            "itemType": "Wicks",
            "searchName": "365 Wicks",
            "wicksName": "365 Wicks",
            "wicksImageUrl": "images/video-thumbs/365-wicks.png",
            "wicksVdoUrl": "https://www.youtube.com/embed/u3kbne_52_A?rel=0&amp;showinfo=0"
        },
	    {
	        "itemType": "Wicks",
	        "searchName": "Laksha Vattulu",
	        "wicksName": "Laksha Vattulu",
	        "wicksImageUrl": "images/video-thumbs/laksha-vattulu.png",
	        "wicksVdoUrl": "https://www.youtube.com/embed/uQiINFLjsBs?rel=0&amp;showinfo=0"
	    },
	    {
	        "itemType": "Wicks",
	        "searchName": "Kamalam Vatti",
	        "wicksName": "Kamalam Vatti",
	        "wicksImageUrl": "images/video-thumbs/kamalam-vatti.png",
	        "wicksVdoUrl": "https://www.youtube.com/embed/57Dcod0DuFg?rel=0&amp;showinfo=0"
	    },
        {
            "itemType": "Wicks",
            "searchName": "Maredudalam Vatti",
            "wicksName": "Maredudalam Vatti",
            "wicksImageUrl": "images/video-thumbs/maredudalam-vatti.png",
            "wicksVdoUrl": "https://www.youtube.com/embed/Hh3ltQMqcq4?rel=0&amp;showinfo=0"
        },
    	{
    	    "itemType": "Wicks",
    	    "searchName": "Astalakshmi Vattulu",
    	    "wicksName": "Astalakshmi Vattulu",
    	    "wicksImageUrl": "images/video-thumbs/astalakshmi-vattulu.png",
    	    "wicksVdoUrl": "https://www.youtube.com/embed/YC1izE2dlyg?rel=0&amp;showinfo=0"
    	},
	    {
	        "itemType": "Wicks",
	        "searchName": "Floating Wicks",
	        "wicksName": "Floating Wicks",
	        "wicksImageUrl": "images/video-thumbs/floating-wicks.png",
	        "wicksVdoUrl": "https://www.youtube.com/embed/lT-RzVzYzIY?rel=0&amp;showinfo=0"
	    },
        {
            "itemType": "Arts",
            "searchName": "DIY Stand",
            "artsName": "DIY Stand",
            "artsImageUrl": "images/video-thumbs/diy-stand.png",
            "artsVdoUrl": "https://www.youtube.com/embed/NApRB-EEGUI?rel=0&amp;showinfo=0"
        },
        {
            "itemType": "Arts",
            "searchName": "Lotus Diya",
            "artsName": "Lotus Diya",
            "artsImageUrl": "images/video-thumbs/lotus-diya.png",
            "artsVdoUrl": "https://www.youtube.com/embed/Pb640dBJtG0?rel=0&amp;showinfo=0"
        },
        {
            "itemType": "Arts",
            "searchName": "Peacock Diya",
            "artsName": "Peacock Diya",
            "artsImageUrl": "images/video-thumbs/peacock-diya.png",
            "artsVdoUrl": "https://www.youtube.com/embed/uATFsODnye4?rel=0&amp;showinfo=0"
        },
		{
            "itemType": "Recipe",
            "searchName": "Ugadi Pachadi",
            "vegRecipeName": "Ugadi Pachadi",
            "vegRecipeImageUrl": "images/video-thumbs/ugadi-pachadi.png",
            "vegRecipeVdoUrl": "https://www.youtube.com/embed/vKl0GtFgZjQ?rel=0&amp;showinfo=0"
        },
		{
            "itemType": "Recipe",
            "searchName": "Tomato Roti Pachadi",
            "vegRecipeName": "Tomato Roti Pachadi",
            "vegRecipeImageUrl": "images/video-thumbs/tomato-roti-pachadi.png",
            "vegRecipeVdoUrl": "https://www.youtube.com/embed/7sCpZkj4G34?rel=0&amp;showinfo=0"
        }
		
    ];
	
	////USED TO CLEAR THE SEARCH FILTER
	$scope.clearFilter = function() {
      console.log("xxx");
      $scope.naanjiSearch = {};
    };
});