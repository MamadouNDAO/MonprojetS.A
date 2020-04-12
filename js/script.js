$(document).ready(function(){
	var all = $('#content');
	fermer = $('#quit');
	
	$(fermer).on('click', function(){
		$(all).hide();
});
});