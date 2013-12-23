$.fn.selectReorder = function(options) {
    element = $(this).attr('id');
    
    var settings = $.extend({
        // These are the defaults.
        labelbtnUp: "Up",
        labelbtnDown: "Down",
        selectPosition: "relative",
        selectFloat: "left",
        jQueryUI: false
    }, options );
    
	$(this).after('<div id="btn-container"><input type="button" id="btn-up" value="' + settings.labelUp + '" /><br /><input type="button" id="btn-down" value="' + settings.labelDown + '" /></div>');

	$(this).css('position', settings.selectPosition);
	$(this).css('float', settings.selectFloat);

	if(settings.jQueryUI){
		$( "input" ).button();
	}

    $('#btn-up').bind('click', function() {
        $('#' + element + ' option:selected').each( function() {
            var Pos = $('#' + element + ' option').index(this);
            var newPos = $('#' + element + ' option').index(this) - 1;
            var value = $('#' + element + ' option').eq(Pos).val();
            var newValue = $('#' + element + ' option').eq(newPos).val();
            
            if (newPos > -1) {
 
                $('#' + element + ' option').eq(newPos).before("<option value='"+value+"' selected='selected'>"+$(this).text()+"</option>");
 
                $(this).remove();
                $('#' + element + ' option').eq(Pos).val(newValue);

            }
        });
    });

    $('#btn-down').bind('click', function() {
        var countOptions = $('#' + element + ' option').size();
        $('#' + element + ' option:selected').each( function() {
            var Pos = $('#' + element + ' option').index(this);
            var newPos = $('#' + element + ' option').index(this) + 1;
            var value = $('#' + element + ' option').eq(Pos).val();
            var newValue = $('#' + element + ' option').eq(newPos).val();

            if (newPos < countOptions) {
                $('#' + element + ' option').eq(newPos).after("<option value='"+value+"' selected='selected'>"+$(this).text()+"</option>");
 
                $(this).remove();
                $('#' + element + ' option').eq(Pos).val(newValue);
      
            }
        });
    });
	
};