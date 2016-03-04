$(function () {
	$('#accordion').on('shown.bs.collapse', function (e) {
		var target = $('.panel.panel-default > .panel-collapse.in');
		var heading = target.siblings('.panel-heading');
		var offset = target.offset();

		if (offset) {
			$('html,body').animate({
				scrollTop: offset.top - parseInt(heading.css('height'))
			}, 500);
		}
	}); 
});