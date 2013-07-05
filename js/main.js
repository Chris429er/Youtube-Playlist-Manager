/*!
 Youtube-Playlist-Manager (https://github.com/elias94xx/Youtube-Playlist-Manager)
 Copyright 2013 Elias Schütt <contact@elias-schuett.de>
 Open source under the MIT or CC-BY-SA license.
*/

require.config({
	shim: {
		underscore: {
			exports: "_"
		},
		backbone: {
			deps: ["underscore", "jquery"],
			exports: "Backbone"
		}
	},

	paths: {
		utils: "utils",
		jquery: "libs/jquery/jquery-1.9.1.min",
		underscore: "libs/underscore/underscore-min",
		backbone: "libs/backbone/backbone-min",
		templates: "../templates",
	}
});

require(["app"], function(App) {
	App.initialize();
});
