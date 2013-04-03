Youtube-Playlist-Manager (indev)
========================

An advanced playlist manager for youtube, that lets you perform various batch actions.
This will become a chrome extension soon.
I was tired of Youtube's default playlist managing capabilities, so I decided to create my own tool using Youtube's API.  

[**Live Demo**](http://elias-schuett.de/indev/ypm/)  
**CC-BY-SA Elias Schütt**

---

![Preview](https://dl.dropbox.com/u/14645664/web/sfdsfdsfds.PNG)

#####Features (implemented):

* Export playlists
* Remove duplicates
* Remove deleted videos

#####Features (planned):

* Sort playlists by date added
* Sort by tags

#####Dependencies:
* jQuery
* Underscore.js
* Backbone.js
* RequireJS
* Youtube API v3

---

If you want to host this application yourself, you need to create your own API project [here](https://code.google.com/apis/console/)  
(also enable the Youtube API v3) and then replace the `client_id` with yours [here](https://github.com/elias94xx/Youtube-Playlist-Manager/blob/master/js/utils.js#L11).
