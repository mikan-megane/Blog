<script type="text/javascript">
$(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#ambHeader').fadeOut();
		}
		else {
			$('#ambHeader').fadeIn();
		}
	});
});
</script>