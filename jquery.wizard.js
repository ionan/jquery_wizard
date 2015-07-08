(function($){
	$.wizardOpts = {
			linkTitles : true
	};
	$.fn.wizard = function(opts){
		var self = $(this);	
		var obj = {
				select : function(i){
					self.find(".wizard_title.wizard_selected_step").removeClass("wizard_selected_step");
					self.find(".wizard_step").addClass("wizard_hidden_step");
					self.find(".wizard_title_" + i).addClass("wizard_selected_step");
					self.find(".wizard_step_" + i).removeClass("wizard_hidden_step");
					this.currentStep = i;
				}, 
				currentStep : 1
		};
		var opts = $.extend({},$.wizardOpts,opts);
		var titles = self.find(".wizard_title");
		var i = 1;
		titles.each(function(){
			var w = $(this).width();
			w -= 50;
			$(this).addClass("wizard_title_" + i);
			this.innerHTML = "<div class='wizard_index wizard_index_" + i + "'>" + i + "</div>" + "<div class='wizard_title_text' style='" + w + "px'>" + this.innerHTML + "</div>";
			if (opts.linkTitles,obj){
				(function(self,idx){
					$(self).addClass("wizard_link").bind("click",function(){
						obj.select(idx);
					});
				})(this,i,obj);
			}
			i++;
		});	
		var steps = $(this).find(".wizard_step");
		var i = 1;
		steps.each(function(){
			var w = $(this).width();
			w -= 50;
			$(this).addClass("wizard_step_" + i).addClass("wizard_hidden_step");
			i++;
		});
		obj.select(1);
		return obj;
	};
})(jQuery);