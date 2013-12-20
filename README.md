selectReorder
=============

This plugin makes it easy to have an option to move option elements around inside an html multiple select.

Requirements:

- jQuery library
- jQuery UI (Optional if you want to use jQuery UI buttons)

How it works?

Include the required css and jquery on your head section of your page, for example:

<link rel="stylesheet" type="text/css" media="screen" href="css/selectReorder.css" />
<link rel="stylesheet" type="text/css" media="screen" href="css/ui-lightness/jquery-ui-1.10.3.custom.min.css" />
<script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="js/jquery-ui-1.10.3.custom.min.js"></script>
<script type="text/javascript" src="js/jquery.selectReorder.js"></script>

Have a multiple select on your page with ID, for example:

<select name="selectto" id="select-to" multiple size="5">
  <option value="1">Pos 1 Item 1</option>
  <option value="2">Pos 2 Item 2</option>
  <option value="3">Pos 3 Item 3</option>
</select>
    
Then at the bottom of the page, right after the body tag simply initialize passing the id of the multiple select like this:
	
<script type="text/javascript">
	$('#select-to').selectReorder();
</script>

This will add the following html to the page:

<div id="btn-container">
  <input type="button" id="btn-up" value="arriba" /><br>
  <input type="button" id="btn-down" value="abajo" />
</div>

Available options:

labelbtnUp - Value or label of the Up button (default: "Up")
labelbtnDown - Value or label of the Down button (default: "Down")
selectPosition - css positioning of the multiple select (default: "relative") 
selectFloat - float of the multiple select (default: left)
jQueryUI - Boolean that indicates if you would like to use jQuery UI button styling. (default: false)

If you want to initialize with options, for example:

<script type="text/javascript">
	$('#select-to').selectReorder({
	  labelUp: "arriba", 
	  labelDown: "abajo", 
	  jQueryUI: true
	});
</script>

The default css have the following properties:

	#btn-container{
		display: inline-block;
		position: relative;
		float: left;
		width: 70px;
		text-align: center;
	}
	#btn-up, #btn-down{
		width: 100%;
		font-size: 1em;
		-moz-border-radius: 4px;
		-webkit-border-radius: 4px;
		border-radius: 4px;
		padding: 8px 8px;
	}

You are free to use this on your web pages, apps, etc.

