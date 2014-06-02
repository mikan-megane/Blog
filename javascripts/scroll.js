<script type="text/javascript">
(function($){
$(window).scroll(function () { if ($(this).scrollTop() > 100) {
$(".skinHeaderArea").stop().animate({"top": "-110px","left": "-20px","width": "180px"}, 300,'swing');
$(".skinHeaderArea2").stop().animate({"top": "120px","backgroundSize":"80%","left":"17px"}, 300,'swing');
$(".skinBlogHeadingGroupArea").stop().animate({"top": "-165px","opacity": "0"}, 300,'swing');} else {
$(".skinHeaderArea").stop().animate({"top": "30px","left": "0px","width": "200px"}, 300,'swing');
$(".skinHeaderArea2").stop().animate({"top": "0px","backgroundSize":"88%","left":"0px"}, 300,'swing');
$(".skinBlogHeadingGroupArea").stop().animate({"top": "0px","opacity": "1"}, 300,'swing');}});}(jQuery));
</script>