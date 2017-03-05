$(document).ready(function(){

	$(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });

	$("#homeBtn, #logo").click(function(){
		$("#portfolioDiv").addClass('hidden');
		$("#contactDiv").addClass('hidden');
		$("#homeDiv").removeClass('hidden');
	});
	$("#portfolioBtn").click(function(){
		$("#homeDiv").addClass('hidden');
		$("#contactDiv").addClass('hidden');
		$("#portfolioDiv").removeClass('hidden');
	});
	$("#contactBtn").click(function(){
		$("#homeDiv").addClass('hidden');
		$("#portfolioDiv").addClass('hidden');
		$("#contactDiv").removeClass('hidden');
	});
});