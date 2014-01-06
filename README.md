selectReorder
=============

This plugin makes it easy to have an option to move option elements around inside an html multiple select.

Please note that the release is still on beta, so there might be some minor bugs.

It has been tested on:
IE 7, 8 & 9 / Safari 6.1 / FireFox 16 / Chrome 31

Requirements:

- jQuery library
- jQuery UI (Optional if you want to use jQuery UI buttons)

How it works?

Include the required css and jquery on your head section of your page, for example:

```
<link rel="stylesheet" type="text/css" media="screen" href="css/normalize.css" />
<link rel="stylesheet" type="text/css" media="screen" href="css/selectReorder.css" />
<link rel="stylesheet" type="text/css" media="screen" href="css/ui-lightness/jquery-ui-1.10.3.custom.min.css" />
<script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="js/jquery-ui-1.10.3.custom.min.js"></script>
<script type="text/javascript" src="js/jquery.selectReorder.js"></script>
```

Have a multiple select on your page with ID, for example:

```
<select name="selectto" id="select-to" multiple size="5">
  <option value="1">Pos 1 Item 1</option>
  <option value="2">Pos 2 Item 2</option>
  <option value="3">Pos 3 Item 3</option>
</select>
```    

Then at the bottom of the page, right after the body tag simply initialize passing the id of the multiple select like this:

```	
<script type="text/javascript">
	$('#select-to').selectReorder();
</script>
```

This will add the following html to the page:

```
<div id="btn-container">
  <input type="button" id="btn-up" value="arriba" /><br>
  <input type="button" id="btn-down" value="abajo" />
</div>
```

Available options:

|Option          |Default Value|Description								  |
|----------------|:-----------:|--------------------------------------------------------------------------|
|labelbtnUp      |Up           |Value or label of the Up button. 					  |
|labelbtnDown    |Down         |Value or label of the Down button. 					  |
|btnPosition     |right        |Position of the buttons relative to the select.				  |  
|wrapInDiv     |true         |Wrap or not the select and button container in a div.                                          |   
|jQueryUI        |false        |Boolean that indicates if you would like to use jQuery UI button styling. |

If you want to initialize with options, for example:

```
<script type="text/javascript">
	$('#select-to').selectReorder({
	  labelbtnUp: "arriba", 
	  labelbtnDown: "abajo", 
	  jQueryUI: true
	});
</script>
```

The default css have the following properties:

```
	.selectReorder, .selectReorder-btn-container, .selectReorder-btn-up, .selectReorder-btn-down{
		font-size: 0.75em;
		color: #333;
		font-style: normal;
		font-weight: normal;
		line-height: normal;
	}

	.selectReorder-btn-container{
		display: inline-block;
		position: relative;
		float: left;
		width: 70px;
		text-align: center;
	}
	.selectReorder-btn-up, .selectReorder-btn-down{
		width: 100%;
		padding: 8px 8px;
		border: none;
		color: #333;
		background: #EEE;
		border-bottom: 1px solid #E5E5E5;
		-moz-box-shadow: rgba(200,200,200,0.7) 0 4px 0px -1px;
		-webkit-box-shadow: rgba(200, 200, 200, 0.7) 0 4px 0px -1px;
		box-shadow: rgba(200, 200, 200, 0.7) 0 4px 0px -1px;
		vertical-align: middle;
		margin-bottom: 10px;
	}

	.selectReorder{
		position: relative;
		float: left;
		border-radius: 5px;
		-moz-border-radius: 5px;
		-webkit-border-radius: 5px;
		border: 2px solid;
		border-color: rgba(8, 22, 37, 0.12) rgba(8, 22, 37, 0.14) rgba(8, 22, 37, 0.16);
		padding: 0.5em 0 0.5em 0;
	}
	.selectReorder-container{
		display: inline-block;
		margin: 1em;
	}
	.selectReorder-container select{
		margin-right: 1em;
		margin-left: 1em;
	}
```

This is distributed under WTFPL lincense.

http://www.wtfpl.net


