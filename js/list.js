var counter = 0;

$(document).ready(function() {
	$('button').click(function() {
	    var toAdd = $('input[name=checkListItem]').val().toUpperCase();
	    counter = counter + 1;
	    $('.list').append("<div class='item'>" + counter + ".) " + toAdd + "</div>");
	});
	$(document).on('click','.item',function() {
	    $(this).remove();
	    });
});