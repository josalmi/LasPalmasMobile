$( document ).ready(function() {

	var date = new Date();
	//var dayNumber = date.getDate();
	var dayNumber = 8; // for testing
	selectDay(dayNumber);
 
	$( "h1" ).click(function() {
		$(this).next("div").slideToggle(200);
		//$(this).next("div").siblings().slideToggle(200);
		$(this).toggleClass("selected");
	});

	$( "ul.dayPicker > li" ).click(function() {
		var day = $(this).attr("data-day");
		selectDay(day);
	});

	function selectDay(number) {
		$("#picker"+number).toggleClass("selected");
		$("#picker"+number).siblings().removeClass("selected");
		$("#day"+number).siblings().hide();
		$("#day"+number).toggle("drop", { direction: "right" }, 200);
	}

});


// Check if a new cache is available on page load.
window.addEventListener('load', function(e) {

  window.applicationCache.addEventListener('updateready', function(e) {
    if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
      // Browser downloaded a new app cache.
      if (confirm('A new version of this site is available. Load it?')) {
        window.location.reload();
      }
    } else {
      // Manifest didn't changed. Nothing new to server.
    }
  }, false);

}, false);

