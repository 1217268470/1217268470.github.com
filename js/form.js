(function($) {
	/**
	 *
	 *@url 请求地址
	 *@objParams 对象类型，null表示不传递参数跳转页面
	 *
	 */
	$.submit = function(url, objParams) {
		var form = document.createElement("form");
		form.style.display = 'none';
		form.action = url;
		form.method = 'post';
		for (param in objParams) {
			var value = objParams[param];
			var input = document.createElement("input");
			input.type = 'hidden';
			input.name = param;
			input.value = value;
			form.appendChild(input);
		}
		document.body.appendChild(form);
		form.submit();
	};
})(jQuery);