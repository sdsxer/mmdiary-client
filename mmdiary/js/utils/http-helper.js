/**
 * @author leon
 */

import Settings from '../settings';

let HttpHelper =
{
	encode: function(params_) {
		if(typeof(params_) == "string") {
      return params_;
    }
		var items = [];
		for(var prop in params_) {
			if(!params_.hasOwnProperty(prop)) {
				continue;
			}
			items.push(encodeURIComponent(prop) + '=' + encodeURIComponent(params_[prop]));
		}
		return items.join("&");
	},

	get: function(url_, params_) {
		var url = url_ || "";
		var params = this.encode(params_);
		if(params.length > 0 && url_.length > 0) {
			if(url.indexOf("?") < 0 ) {
				url += "?";
			}
			else {
				url += "&";
			}
			url += params; 
		}
		return fetch(url, {
			method: "GET",
			credentials: "include"
		})
		.then(response => {
			/**
			 * {
			 * 	"code": "0",
			 * 	"message": "success",
			 * 	"data": {}
			 * }
			 */
			return response.json();
		});
	},

	post: function(url_, params_, headers_) {
		var headers = {};
		var contentType = null;
		if(headers_) {
			for(var prop in headers_) {
				headers[prop] = headers_[prop];
				if(prop.toLowerCase() === 'content-type') {
					contentType = headers_[prop];
				}
			}
		}
		var body = (typeof(params_) === 'string') ? params_ : JSON.stringify(params_);
		if(!contentType) {
			headers['Content-Type'] = 'application/x-www-form-urlencoded';
			body = (typeof(params_) === 'string') ? params_ : this.encode(params_);
		}

		return fetch(url_, {
			method: "POST",
			credentials: "include",
			headers: mheaders,
			body: body
		})
		.then(response => {
			/**
			 * {
			 * 	"code": "0",
			 * 	"message": "success",
			 * 	"data": {}
			 * }
			 */
			return response.json();
		});
	},

	wallet: function( path, params ) {
		return this.get(Settings.get("apiServer") + "/api" + path, params);
	},

	walletPost: function( path, params, reqheaders ) {
		return this.post(Settings.get("apiServer") + "/api" + path, params, reqheaders);	},

	channel: function( coin, path, params ) {
		return this.get(Settings.get("channelApis")[coin] + path, params);
	},

	channelPost: function( coin, path, params, reqheaders ) {
		return this.post(Settings.get("channelApis")[coin] + path, params, reqheaders);
	}
};

export default HttpHelper;
