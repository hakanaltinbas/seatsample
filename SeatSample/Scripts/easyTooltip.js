(function($){$.fn.setTooltip=function(val){this[0]._title=val;},$.fn.getTooltip=function(){return this[0]._title;},$.fn.easyTooltip=function(options){var defaults={xOffset:10,yOffset:25,tooltipId:"easyTooltip",clickRemove:false,content:"",useElement:""};var options=$.extend(defaults,options);var content;this.each(function(){this._title=this.title;this.title='';$(this).bind('mouseover',function(e){content=(options.content!="")?options.content:this._title;content=(options.useElement!="")?$("#"+options.useElement).html():content;if(content!=""&&content!=undefined){$("body").append("<div id='"+options.tooltipId+"'>"+content+"</div>");$("#"+options.tooltipId).css("position","absolute").css("top",(e.pageY-options.yOffset)+"px").css("left",(e.pageX+options.xOffset)+"px").css("display","none").fadeIn("fast")}});$(this).bind('mouseout',function(e){$("#"+options.tooltipId).remove();});$(this).mousemove(function(e){$("#"+options.tooltipId).css("top",(e.pageY-options.yOffset)+"px").css("left",(e.pageX+options.xOffset)+"px")});if(options.clickRemove){$(this).mousedown(function(e){$("#"+options.tooltipId).remove();});}});};})(jQuery);