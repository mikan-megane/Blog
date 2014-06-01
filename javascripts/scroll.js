<script type="text/javascript">
(function($){
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$("#ambHeader").stop().animate({"top": "-30px"}, 100);
		} else {
			$("#ambHeader").stop().animate({"top": "0px"}, 100);
		}
	});
}(jQuery));
</script>