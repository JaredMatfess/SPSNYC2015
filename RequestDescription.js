<script type='text/javascript' src='/sites/ppx/siteassets/SP2013Modal.js'></script>
<script type='text/javascript'>
var cssBuffer = [];
	cssBuffer.push("<style type='text/css'>");
	cssBuffer.push("span.hideMe{");
	cssBuffer.push("visibility:hidden;");
	cssBuffer.push("}");	
	cssBuffer.push("</style>");

$("body").append(cssBuffer.join(''));

$(document).ready(function(){
	 truncateText('Request_x0020_Description', '80');

});

function truncateText(fieldName,initialLength,inPlaceHoverText){
	var colIndex;
	$(".ms-viewheadertr div[class^='ms-vh-div']").each(function(){		
		if($(this).attr('name')===fieldName || $(this).attr('DisplayName')===fieldName ){
			colIndex = this.parentNode.cellIndex;
		}
	});
	if(typeof colIndex === 'undefined'){
		return; // Target column not in view
	}
	$("table.ms-listviewtable tbody:not([id^='aggr']) tr:has(td.ms-vb2) > td").each(function(i,td){
		if(this.cellIndex !== colIndex || $(this).find("div.spjs_hover").length > 0){
			return;
		}
		if($(td).text().length <= initialLength){
			return;		
		}
		var teaserText;
		if(inPlaceHoverText!=='' && inPlaceHoverText!==undefined){
			teaserText = inPlaceHoverText;
		}else{
			teaserText = $(td).text().substring(0,initialLength);
		}
		if($(td).text().length>0){
			$(td).wrapInner("<div class='spjs_hover' style='background-color:white;border:1px silver solid;padding:2px;display:none'></div>")
			.append("<span class='spjs_hover_teaser' style='cursor:default'>"+teaserText+"...</span>")
			.hover(function(){
				$(td).addClass('spjs_hover_dummy');
				setTimeout(function(){
					if($(td).hasClass('spjs_hover_dummy')){
						$(td).find('span.spjs_hover_teaser').addClass('hideMe');
						$(td).find("div.spjs_hover").css({'position':'absolute','width':$(td).width()}).fadeIn(150);						
					}
				},250);				
			},function(){
				if($(td).hasClass('spjs_hover_dummy')){					
					$(td).removeClass('spjs_hover_dummy');
					$(td).find("div.spjs_hover").hide();
					$(td).find("span.spjs_hover_teaser").removeClass('hideMe');
				}				
			});
		}
	});
}

function ExpGroupRenderData(d, a, e) {
    var c = document.getElementById("tbod" + a + "_"), b = document.createElement("DIV"), f = a.split("-");
    b.innerHTML = "<TABLE><TBODY id=\"tbod" + a + "_\" isLoaded=\"" + e + "\">" + d + "</TBODY></TABLE>";
    c.parentNode.replaceChild(b.firstChild.firstChild, c); 
	customTimeoutLoop("tbod" + a + "_");
}

function handleGroupedPaging(){
	var loaded = true;
	$(".ms-listviewtable tbody").each(function(){
		if(this.isloaded==='false'){
			loaded = false;
			return false;
		}
	});
	if(!loaded){
		setTimeout(function(){
			handleGroupedPaging();
		},10);
	}
	$(".ms-listviewtable tbody[id$='__page'] a").click(function(){
		setTimeout(function(){			
			handleGroupedPaging();
			truncateText('Request_x0020_Description', '80');
		},500);
	});
}

function customTimeoutLoop(id){
var obj = $("#"+id), isloaded = ($(obj).attr('isloaded')==='true')?true:false;
	if(!isloaded){
		$(obj).hide();
		setTimeout(function(){
			customTimeoutLoop(id);
		},10);
	}else{
		$(obj).show();
		handleGroupedPaging();
		truncateText('Request_x0020_Description', '80');

	}
}

if(_spPageContextInfo.webUIVersion === 15){
	var InplviewHashTracker = "";
	setInterval(function(){
		if(location.hash.indexOf("InplviewHash") > -1 && location.hash !== InplviewHashTracker){
			InplviewHashTracker = location.hash;
			truncateText('Request_x0020_Description', '80');
		}
	},100);
}
</script>