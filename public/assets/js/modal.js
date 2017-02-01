$("#apply").on("click", function(){
  $("#myModal").css("display", "block")
})

$(".close").on("click", function(){
  $("#myModal").css("display", "none")
})

var modal = document.getElementById('myModal');
$(window).on("click", function(event){
	if (event.target === modal) {
		$("#myModal").css("display", "none");
	}
});
