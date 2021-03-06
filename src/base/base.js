(function(win){
	var FL = win.FL = {};
	try{
		win.log = function(){
			console.log.apply(console,arguments);
		};
	}
	catch(e){
		win.log = function(){
			console.dir(arguments);
		}
	}
	
	win.RAD_TO_DEG = 180/Math.PI;	
	win.DEG_TO_RAD = Math.PI/180;
	
	FL.merge = function(s1, s2){
		for(var p in s2){
			s1[p] = s2[p];
		}
		return s1;
	};

	FL.getUrlParams = function()
	{
		var params = {};
		var url = window.location.href;
		var idx = url.indexOf("?");
		if(idx > 0)
		{
			var queryStr = url.substring(idx + 1);
			var args = queryStr.split("&");
			for(var i = 0, a, nv; a = args[i]; i++)
			{
				nv = args[i] = a.split("=");
				params[nv[0]] = nv.length > 1 ? nv[1] : true;
			}
		}
		return params;
	};

	FL.ns = function(str)
	{
		var arr = str.split(".");
		var obj = win;
		for(var i = 0, l = arr.length;i < l;i ++)
		{
			obj[arr[i]] = obj[arr[i]] || {};
			obj = obj[arr[i]];
		}
		return obj;
	};

	/**
	 *   modules: "Movieclip, Utils..."
	*/
	FL.import = function(from, modules){
		var str = "";
		modules.replace(/\s/g,"").split(",").forEach(function(obj){
			str += "var " + obj + "=" + from + "." + obj + ";";
		});
		return str;
	};

	FL.params = FL.getUrlParams();
	FL.debug = FL.params.debug&&FL.params.debug!=0;
})(window);