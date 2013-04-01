define(["jquery"], function($) {

	var Utils = {};

	Utils.auth = function(callback) {
		if (Utils.cookie.get("access_token_expire")*1000 > new Date().getTime()) {
			callback(Utils.cookie.get("access_token"));
		} else {
			gapi.auth.authorize({
				"client_id": "716237968116-bfsg986nn1ob5nqir6i7kmsjig4ncf27.apps.googleusercontent.com",
				"scope": "http://gdata.youtube.com"
			}, function() {
				var token = gapi.auth.getToken(),
					access_token = token.access_token;

				Utils.cookie.set("access_token_expire", token.expires_at);
				Utils.cookie.set("access_token", access_token);

				callback(access_token);
			});
		}
	};

	Utils.serialize = function(obj) {
		var str = [], key, value;
		for(key in obj) {
			if (obj.hasOwnProperty(key)) {
				value = obj[key];

				str.push(
					encodeURIComponent(key) + "=" +
					encodeURIComponent(value)
				);
			}
		}

		return str.join("&");
	}

	Utils.cookie = {
		set: function(name, value, days) {
			if (days) {
				var date = new Date();
				date.setTime(date.getTime()+(days*24*60*60*1000));
				var expires = "; expires="+date.toGMTString();
			} else { var expires = ""; }

			document.cookie = name + "=" + value + expires + "; path=" + location.pathname;
		},

		unset: function(name) { Cookie.set(name, "", -1); },

		get: function(name) {
			var search = new RegExp(name + "=([^;]*)");
			var result = search.exec(document.cookie);
			return result ? result[1] : null;
		}
	};

	$("body").on("click", ".dropdown", function(e) {
		var $target = $(e.currentTarget);
		$target.toggleClass("opened");
	}).on("click", function(e) {
		var $target = $(e.currentTarget);
		if (!($(e.target).hasClass("dropdown") || $(e.target).parent().hasClass("dropdown")))
		$target.removeClass("opened");
	});

	$("body").on("click", ".action_bar input[type=checkbox]", function(e) {
		var checked = $(e.currentTarget).is(":checked");
		$(".listView input[type=checkbox]").prop("checked", checked);
	});

	return Utils;
});
