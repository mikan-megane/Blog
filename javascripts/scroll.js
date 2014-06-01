<script type="text/javascript">
$(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#box1').animate({
				'top': '500px'
			},{
				'duration': 600,
				'easing': 'swing'
			});
			// $('#ambHeader').fadeOut();
		}
		else {
			$('#box1').animate({
				'top': '0px'
			},{
				'duration': 600,
				'easing': 'swing'
			});
			// $('#ambHeader').fadeIn();
		}
	});
});
</script>