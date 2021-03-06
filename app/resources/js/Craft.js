/*! Craft 3.0.0 - 2015-05-18 */
(function($){

if (typeof window.Craft == 'undefined')
{
	window.Craft = {};
}

$.extend(Craft,
{
	navHeight: 48,

	/**
	 * Map of high-ASCII codes to their low-ASCII characters.
	 *
	 * @var object
	 */
	asciiCharMap: {
		'a': [
			'à', 'á', 'ả', 'ã', 'ạ', 'ă', 'ắ', 'ằ', 'ẳ', 'ẵ', 'ặ', 'â', 'ấ', 'ầ', 'ẩ', 'ẫ', 'ậ',
			'ä', 'ā', 'ą', 'å', 'α', 'ά', 'ἀ', 'ἁ', 'ἂ', 'ἃ', 'ἄ', 'ἅ', 'ἆ', 'ἇ', 'ᾀ', 'ᾁ', 'ᾂ',
			'ᾃ', 'ᾄ', 'ᾅ', 'ᾆ', 'ᾇ', 'ὰ', 'ά', 'ᾰ', 'ᾱ', 'ᾲ', 'ᾳ', 'ᾴ', 'ᾶ', 'ᾷ', 'а', 'أ',
		],
		'b': [ 'б', 'β', 'Ъ', 'Ь', 'ب'],
		'c': ['ç', 'ć', 'č', 'ĉ', 'ċ'],
		'd': ['ď', 'ð', 'đ', 'ƌ', 'ȡ', 'ɖ', 'ɗ', 'ᵭ', 'ᶁ', 'ᶑ', 'д', 'δ', 'د', 'ض'],
		'e': [
			'é', 'è', 'ẻ', 'ẽ', 'ẹ', 'ê', 'ế', 'ề', 'ể', 'ễ', 'ệ', 'ë', 'ē', 'ę', 'ě', 'ĕ', 'ė',
			'ε', 'έ', 'ἐ', 'ἑ', 'ἒ', 'ἓ', 'ἔ', 'ἕ', 'ὲ', 'έ', 'е', 'ё', 'э', 'є', 'ə',
		],
		'f': ['ф', 'φ', 'ف'],
		'g': ['ĝ', 'ğ', 'ġ', 'ģ', 'г', 'ґ', 'γ', 'ج'],
		'h': ['ĥ', 'ħ', 'η', 'ή', 'ح', 'ه'],
		'i': [
			'í', 'ì', 'ỉ', 'ĩ', 'ị', 'î', 'ï', 'ī', 'ĭ', 'į', 'ı', 'ι', 'ί', 'ϊ', 'ΐ', 'ἰ', 'ἱ',
			'ἲ', 'ἳ', 'ἴ', 'ἵ', 'ἶ', 'ἷ', 'ὶ', 'ί', 'ῐ', 'ῑ', 'ῒ', 'ΐ', 'ῖ', 'ῗ', 'і', 'ї', 'и'
		],
		'j': ['ĵ', 'ј', 'Ј'],
		'k': ['ķ', 'ĸ', 'к', 'κ', 'Ķ', 'ق', 'ك'],
		'l': ['ł', 'ľ', 'ĺ', 'ļ', 'ŀ', 'л', 'λ', 'ل'],
		'm': ['м', 'μ', 'م'],
		'n': ['ñ', 'ń', 'ň', 'ņ', 'ŉ', 'ŋ', 'ν', 'н', 'ن'],
		'o': [
			'ó', 'ò', 'ỏ', 'õ', 'ọ', 'ô', 'ố', 'ồ', 'ổ', 'ỗ', 'ộ', 'ơ', 'ớ', 'ờ', 'ở', 'ỡ', 'ợ',
			'ø', 'ō', 'ő', 'ŏ', 'ο', 'ὀ', 'ὁ', 'ὂ', 'ὃ', 'ὄ', 'ὅ', 'ὸ', 'ό', 'ö', 'о', 'و', 'θ'
		],
		'p': ['п', 'π'],
		'r': ['ŕ', 'ř', 'ŗ', 'р', 'ρ', 'ر'],
		's': ['ś', 'š', 'ş', 'с', 'σ', 'ș', 'ς', 'س', 'ص'],
		't': ['ť', 'ţ', 'т', 'τ', 'ț', 'ت', 'ط'],
		'u': [
			'ú', 'ù', 'ủ', 'ũ', 'ụ', 'ư', 'ứ', 'ừ', 'ử', 'ữ', 'ự', 'ü', 'û', 'ū', 'ů', 'ű', 'ŭ',
			'ų', 'µ', 'у'
		],
		'v': ['в'],
		'w': ['ŵ', 'ω', 'ώ'],
		'x': ['χ'],
		'y': ['ý', 'ỳ', 'ỷ', 'ỹ', 'ỵ', 'ÿ', 'ŷ', 'й', 'ы', 'υ', 'ϋ', 'ύ', 'ΰ', 'ي'],
		'z': ['ź', 'ž', 'ż', 'з', 'ζ', 'ز'],
		'aa': ['ع'],
		'ae': ['æ'],
		'ch': ['ч'],
		'dj': ['ђ', 'đ'],
		'dz': ['џ'],
		'gh': ['غ'],
		'kh': ['х', 'خ'],
		'lj': ['љ'],
		'nj': ['њ'],
		'oe': ['œ'],
		'ps': ['ψ'],
		'sh': ['ш'],
		'shch': ['щ'],
		'ss': ['ß'],
		'th': ['þ', 'ث', 'ذ', 'ظ'],
		'ts': ['ц'],
		'ya': ['я'],
		'yu': ['ю'],
		'zh': ['ж'],
		'(c)': ['©'],
		'A': [
			'Á', 'À', 'Ả', 'Ã', 'Ạ', 'Ă', 'Ắ', 'Ằ', 'Ẳ', 'Ẵ', 'Ặ', 'Â', 'Ấ', 'Ầ', 'Ẩ', 'Ẫ',
			'Ậ', 'Ä', 'Å', 'Ā', 'Ą', 'Α', 'Ά', 'Ἀ', 'Ἁ', 'Ἂ', 'Ἃ', 'Ἄ', 'Ἅ', 'Ἆ', 'Ἇ', 'ᾈ',
			'ᾉ', 'ᾊ', 'ᾋ', 'ᾌ', 'ᾍ', 'ᾎ', 'ᾏ', 'Ᾰ', 'Ᾱ', 'Ὰ', 'Ά', 'ᾼ', 'А'
		],
		'B': ['Б', 'Β'],
		'C': ['Ć', 'Č', 'Ĉ', 'Ċ'],
		'D': ['Ď', 'Ð', 'Đ', 'Ɖ', 'Ɗ', 'Ƌ', 'ᴅ', 'ᴆ', 'Д', 'Δ'],
		'E': [
			'É', 'È', 'Ẻ', 'Ẽ', 'Ẹ', 'Ê', 'Ế', 'Ề', 'Ể', 'Ễ', 'Ệ', 'Ë', 'Ē', 'Ę', 'Ě', 'Ĕ',
			'Ė', 'Ε', 'Έ', 'Ἐ', 'Ἑ', 'Ἒ', 'Ἓ', 'Ἔ', 'Ἕ', 'Έ', 'Ὲ', 'Е', 'Ё', 'Э', 'Є', 'Ə'
		],
		'F': ['Ф', 'Φ'],
		'G': ['Ğ', 'Ġ', 'Ģ', 'Г', 'Ґ', 'Γ'],
		'H': ['Η', 'Ή'],
		'I': [
			'Í', 'Ì', 'Ỉ', 'Ĩ', 'Ị', 'Î', 'Ï', 'Ī', 'Ĭ', 'Į', 'İ', 'Ι', 'Ί', 'Ϊ', 'Ἰ', 'Ἱ',
			'Ἳ', 'Ἴ', 'Ἵ', 'Ἶ', 'Ἷ', 'Ῐ', 'Ῑ', 'Ὶ', 'Ί', 'И', 'І', 'Ї'
		],
		'K': ['К', 'Κ'],
		'L': ['Ĺ', 'Ł', 'Л', 'Λ', 'Ļ'],
		'M': ['М', 'Μ'],
		'N': ['Ń', 'Ñ', 'Ň', 'Ņ', 'Ŋ', 'Н', 'Ν'],
		'O': [
			'Ó', 'Ò', 'Ỏ', 'Õ', 'Ọ', 'Ô', 'Ố', 'Ồ', 'Ổ', 'Ỗ', 'Ộ', 'Ơ', 'Ớ', 'Ờ', 'Ở', 'Ỡ',
			'Ợ', 'Ö', 'Ø', 'Ō', 'Ő', 'Ŏ', 'Ο', 'Ό', 'Ὀ', 'Ὁ', 'Ὂ', 'Ὃ', 'Ὄ', 'Ὅ', 'Ὸ', 'Ό',
			'О', 'Θ', 'Ө'
		],
		'P': ['П', 'Π'],
		'R': ['Ř', 'Ŕ', 'Р', 'Ρ'],
		'S': ['Ş', 'Ŝ', 'Ș', 'Š', 'Ś', 'С', 'Σ'],
		'T': ['Ť', 'Ţ', 'Ŧ', 'Ț', 'Т', 'Τ'],
		'U': [
			'Ú', 'Ù', 'Ủ', 'Ũ', 'Ụ', 'Ư', 'Ứ', 'Ừ', 'Ử', 'Ữ', 'Ự', 'Û', 'Ü', 'Ū', 'Ů', 'Ű',
			'Ŭ', 'Ų', 'У'
		],
		'V': ['В'],
		'W': ['Ω', 'Ώ'],
		'X': ['Χ'],
		'Y': ['Ý', 'Ỳ', 'Ỷ', 'Ỹ', 'Ỵ', 'Ÿ', 'Ῠ', 'Ῡ', 'Ὺ', 'Ύ', 'Ы', 'Й', 'Υ', 'Ϋ'],
		'Z': ['Ź', 'Ž', 'Ż', 'З', 'Ζ'],
		'AE': ['Æ'],
		'CH': ['Ч'],
		'DJ': ['Ђ'],
		'DZ': ['Џ'],
		'KH': ['Х'],
		'LJ': ['Љ'],
		'NJ': ['Њ'],
		'PS': ['Ψ'],
		'SH': ['Ш'],
		'SHCH': ['Щ'],
		'SS': ['ẞ'],
		'TH': ['Þ'],
		'TS': ['Ц'],
		'YA': ['Я'],
		'YU': ['Ю'],
		'ZH': ['Ж'],
		' ': [
			"\xC2\xA0", "\xE2\x80\x80", "\xE2\x80\x81", "\xE2\x80\x82", "\xE2\x80\x83", "\xE2\x80\x84",
			"\xE2\x80\x85", "\xE2\x80\x86", "\xE2\x80\x87", "\xE2\x80\x88", "\xE2\x80\x89", "\xE2\x80\x8A",
			"\xE2\x80\xAF", "\xE2\x81\x9F", "\xE3\x80\x80",
		]
	},

	/**
	 * Get a translated message.
	 *
	 * @param string message
	 * @param object params
	 * @return string
	 */
	t: function(message, params)
	{
		if (typeof Craft.translations[message] != 'undefined')
			message = Craft.translations[message];

		if (params)
		{
			for (var key in params)
			{
				message = message.replace('{'+key+'}', params[key]);
			}
		}

		return message;
	},

	/**
	 * Escapes some HTML.
	 *
	 * @param string str
	 * @return string
	 */
	escapeHtml: function(str)
	{
		return $('<div/>').text(str).html();
	},

	/**
	 * Returns the text in a string that might contain HTML tags.
	 *
	 * @param string str
	 * @return string
	 */
	getText: function(str)
	{
		return $('<div/>').html(str).text();
	},

	/**
	 * Encodes a URI copmonent. Mirrors PHP's rawurlencode().
	 *
	 * @param string str
	 * @return string
	 * @see http://stackoverflow.com/questions/1734250/what-is-the-equivalent-of-javascripts-encodeuricomponent-in-php
	 */
	encodeUriComponent: function(str)
	{
		str = encodeURIComponent(str);

		var differences = {
			'!': '%21',
			'*': '%2A',
			"'": '%27',
			'(': '%28',
			')': '%29'
		};

		for (var chr in differences)
		{
			var re = new RegExp('\\'+chr, 'g');
			str = str.replace(re, differences[chr]);
		}

		return str;
	},

	/**
	 * Formats an ID out of an input name.
	 *
	 * @param string inputName
	 * @return string
	 */
	formatInputId: function(inputName)
	{
		return this.rtrim(inputName.replace(/[\[\]\\]+/g, '-'), '-');
	},

	/**
	 * @return string
	 * @param path
	 * @param params
	 */
	getUrl: function(path, params, baseUrl)
	{
		if (typeof path != 'string')
		{
			path = '';
		}

		// Return path if it appears to be an absolute URL.
		if (path.search('://') != -1 || path.substr(0, 2) == '//')
		{
			return path;
		}

		path = Craft.trim(path, '/');

		var anchor = '';

		// Normalize the params
		if ($.isPlainObject(params))
		{
			var aParams = [];

			for (var name in params)
			{
				var value = params[name];

				if (name == '#')
				{
					anchor = value;
				}
				else if (value !== null && value !== '')
				{
					aParams.push(name+'='+value);
				}
			}

			params = aParams;
		}

		if (Garnish.isArray(params))
		{
			params = params.join('&');
		}
		else
		{
			params = Craft.trim(params, '&?');
		}

		// Were there already any query string params in the path?
		var qpos = path.indexOf('?');
		if (qpos != -1)
		{
			params = path.substr(qpos+1)+(params ? '&'+params : '');
			path = path.substr(0, qpos);
		}

		// Put it all together
		var url;

		if (baseUrl)
		{
			url = baseUrl;

			if (path)
			{
				// Does baseUrl already contain a path?
				var pathMatch = url.match(/[&\?]p=[^&]+/);
				if (pathMatch)
				{
					url = url.replace(pathMatch[0], pathMatch[0]+'/'+path);
					path = '';
				}
			}
		}
		else
		{
			url = Craft.baseUrl;
		}

		// Does the base URL already have a query string?
		var qpos = url.indexOf('?');
		if (qpos != '-1')
		{
			params = url.substr(qpos+1)+(params ? '&'+params : '');
			url = url.substr(0, qpos);
		}

		if (!Craft.omitScriptNameInUrls && path)
		{
			if (Craft.usePathInfo)
			{
				// Make sure that the script name is in the URL
				if (url.search(Craft.scriptName) == -1)
				{
					url = Craft.rtrim(url, '/') + '/' + Craft.scriptName;
				}
			}
			else
			{
				// Move the path into the query string params

				// Is the p= param already set?
				if (params && params.substr(0, 2) == 'p=')
				{
					var basePath,
						endPath = params.indexOf('&');

					if (endPath != -1)
					{
						basePath = params.substring(2, endPath);
						params = params.substr(endPath+1);
					}
					else
					{
						basePath = params.substr(2);
						params = null;
					}

					// Just in case
					basePath = Craft.rtrim(basePath);

					path = basePath + (path ? '/'+path : '');
				}

				// Now move the path into the params
				params = 'p='+path + (params ? '&'+params : '');
				path = null;
			}
		}

		if (path)
		{
			url = Craft.rtrim(url, '/') + '/' + path;
		}

		if (params)
		{
			url += '?'+params;
		}

		if (anchor)
		{
			url += '#'+anchor;
		}

		return url;
	},

	/**
	 * @return string
	 * @param path
	 * @param params
	 */
	getCpUrl: function(path, params)
	{
		return this.getUrl(path, params, Craft.baseCpUrl);
	},

	/**
	 * @return string
	 * @param path
	 * @param params
	 */
	getSiteUrl: function(path, params)
	{
		return this.getUrl(path, params, Craft.baseSiteUrl);
	},

	/**
	 * Returns a resource URL.
	 *
	 * @param string path
	 * @param array|string|null params
	 * @return string
	 */
	getResourceUrl: function(path, params)
	{
		return Craft.getUrl(path, params, Craft.resourceUrl);
	},

	/**
	 * Returns an action URL.
	 *
	 * @param string path
	 * @param array|string|null params
	 * @return string
	 */
	getActionUrl: function(path, params)
	{
		return Craft.getUrl(path, params, Craft.actionUrl);
	},

	/**
	 * Redirects the window to a given URL.
	 *
	 * @param string url
	 */
	redirectTo: function(url)
	{
		document.location.href = this.getUrl(url);
	},

	/**
	 * Returns a hidden CSRF token input, if CSRF protection is enabled.
	 *
	 * @return string
	 */
	getCsrfInput: function()
	{
		if (Craft.csrfTokenName)
		{
			return '<input type="hidden" name="'+Craft.csrfTokenName+'" value="'+Craft.csrfTokenValue+'"/>';
		}
		else
		{
			return '';
		}
	},

	/**
	 * Posts an action request to the server.
	 *
	 * @param string action
	 * @param object|null data
	 * @param function|null callback
	 * @param object|null options
	 * @return jqXHR
	 */
	postActionRequest: function(action, data, callback, options)
	{
		// Make 'data' optional
		if (typeof data == 'function')
		{
			options = callback;
			callback = data;
			data = {};
		}

		if (Craft.csrfTokenValue && Craft.csrfTokenName)
		{
			if (typeof data == 'string')
			{
				if (data)
				{
					data += '&';
				}

				data += Craft.csrfTokenName + '=' + Craft.csrfTokenValue;
			}
			else
			{
				if (typeof data !== 'object')
				{
					data = {};
				}

				data[Craft.csrfTokenName] = Craft.csrfTokenValue;
			}
		}

		var jqXHR = $.ajax($.extend({
			url:      Craft.getActionUrl(action),
			type:     'POST',
			data:     data,
			success:  callback,
			error:    function(jqXHR, textStatus, errorThrown)
			{
				if (callback)
				{
					callback(null, textStatus, jqXHR);
				}
			},
			complete: function(jqXHR, textStatus)
			{
				if (textStatus != 'success')
				{
					if (typeof Craft.cp != 'undefined')
					{
						Craft.cp.displayError();
					}
					else
					{
						alert(Craft.t('An unknown error occurred.'));
					}
				}
			}
		}, options));

		// Call the 'send' callback
		if (options && typeof options.send == 'function')
		{
			options.send(jqXHR);
		}

		return jqXHR;
	},

	_waitingOnAjax: false,
	_ajaxQueue: [],

	/**
	 * Queues up an action request to be posted to the server.
	 */
	queueActionRequest: function(action, data, callback, options)
	{
		// Make 'data' optional
		if (typeof data == 'function')
		{
			options = callback;
			callback = data;
			data = undefined;
		}

		Craft._ajaxQueue.push([action, data, callback, options]);

		if (!Craft._waitingOnAjax)
		{
			Craft._postNextActionRequestInQueue();
		}
	},

	_postNextActionRequestInQueue: function()
	{
		Craft._waitingOnAjax = true;

		var args = Craft._ajaxQueue.shift();

		Craft.postActionRequest(args[0], args[1], function(data, textStatus, jqXHR)
		{
			if (args[2] && typeof args[2] == 'function')
			{
				args[2](data, textStatus, jqXHR);
			}

			if (Craft._ajaxQueue.length)
			{
				Craft._postNextActionRequestInQueue();
			}
			else
			{
				Craft._waitingOnAjax = false;
			}
		}, args[3]);
	},

	/**
	 * Converts a comma-delimited string into an array.
	 *
	 * @param string str
	 * @return array
	 */
	stringToArray: function(str)
	{
		if (typeof str != 'string')
			return str;

		var arr = str.split(',');
		for (var i = 0; i < arr.length; i++)
		{
			arr[i] = $.trim(arr[i]);
		}
		return arr;
	},

	/**
	 * Expands an array of POST array-style strings into an actual array.
	 *
	 * @param array arr
	 * @return array
	 */
	expandPostArray: function(arr)
	{
		var expanded = {};

		for (var key in arr)
		{
			var value = arr[key],
				m = key.match(/^(\w+)(\[.*)?/),
				keys;

			if (m[2])
			{
				// Get all of the nested keys
				keys = m[2].match(/\[[^\[\]]*\]/g);

				// Chop off the brackets
				for (var i = 0; i < keys.length; i++)
				{
					keys[i] = keys[i].substring(1, keys[i].length-1);
				}
			}
			else
			{
				keys = [];
			}

			keys.unshift(m[1]);

			var parentElem = expanded;

			for (var i = 0; i < keys.length; i++)
			{
				if (i < keys.length-1)
				{
					if (typeof parentElem[keys[i]] != 'object')
					{
						// Figure out what this will be by looking at the next key
						if (!keys[i+1] || parseInt(keys[i+1]) == keys[i+1])
						{
							parentElem[keys[i]] = [];
						}
						else
						{
							parentElem[keys[i]] = {};
						}
					}

					parentElem = parentElem[keys[i]];
				}
				else
				{
					// Last one. Set the value
					if (!keys[i])
					{
						keys[i] = parentElem.length;
					}

					parentElem[keys[i]] = value;
				}
			}
		}

		return expanded;
	},

	/**
	 * Compares two variables and returns whether they are equal in value.
	 * Recursively compares array and object values.
	 *
	 * @param mixed obj1
	 * @param mixed obj2
	 * @return bool
	 */
	compare: function(obj1, obj2)
	{
		// Compare the types
		if (typeof obj1 != typeof obj2)
		{
			return false;
		}

		if (typeof obj1 == 'object')
		{
			// Compare the lengths
			if (obj1.length != obj2.length)
			{
				return false;
			}

			// Is one of them an array but the other is not?
			if ((obj1 instanceof Array) != (obj2 instanceof Array))
			{
				return false;
			}

			// If they're actual objects (not arrays), compare the keys
			if (!(obj1 instanceof Array))
			{
				if (!Craft.compare(Craft.getObjectKeys(obj1), Craft.getObjectKeys(obj2)))
				{
					return false;
				}
			}

			// Compare each value
			for (var i in obj1)
			{
				if (!Craft.compare(obj1[i], obj2[i]))
				{
					return false;
				}
			}

			// All clear
			return true;
		}
		else
		{
			return (obj1 === obj2);
		}
	},

	/**
	 * Returns an array of an object's keys.
	 *
	 * @param object obj
	 * @return string
	 */
	getObjectKeys: function(obj)
	{
		var keys = [];

		for (var key in obj)
		{
			keys.push(key);
		}

		return keys;
	},

	/**
	 * Takes an array or string of chars, and places a backslash before each one, returning the combined string.
	 *
	 * Userd by ltrim() and rtrim()
	 *
	 * @param string|array chars
	 * @return string
	 */
	escapeChars: function(chars)
	{
		if (!Garnish.isArray(chars))
		{
			chars = chars.split();
		}

		var escaped = '';

		for (var i = 0; i < chars.length; i++)
		{
			escaped += "\\"+chars[i];
		}

		return escaped;
	},

	/**
	 * Trim characters off of the beginning of a string.
	 *
	 * @param string str
	 * @param string|array|null The characters to trim off. Defaults to a space if left blank.
	 * @return string
	 */
	ltrim: function(str, chars)
	{
		if (!str) return str;
		if (chars === undefined) chars = ' \t\n\r\0\x0B';
		var re = new RegExp('^['+Craft.escapeChars(chars)+']+');
		return str.replace(re, '');
	},

	/**
	 * Trim characters off of the end of a string.
	 *
	 * @param string str
	 * @param string|array|null The characters to trim off. Defaults to a space if left blank.
	 * @return string
	 */
	rtrim: function(str, chars)
	{
		if (!str) return str;
		if (chars === undefined) chars = ' \t\n\r\0\x0B';
		var re = new RegExp('['+Craft.escapeChars(chars)+']+$');
		return str.replace(re, '');
	},

	/**
	 * Trim characters off of the beginning and end of a string.
	 *
	 * @param string str
	 * @param string|array|null The characters to trim off. Defaults to a space if left blank.
	 * @return string
	 */
	trim: function(str, chars)
	{
		str = Craft.ltrim(str, chars);
		str = Craft.rtrim(str, chars);
		return str;
	},

	/**
	 * Filters an array.
	 *
	 * @param array    arr
	 * @param function callback A user-defined callback function. If null, we'll just remove any elements that equate to false.
	 * @return array
	 */
	filterArray: function(arr, callback)
	{
		var filtered = [];

		for (var i = 0; i < arr.length; i++)
		{
			var include;

			if (typeof callback == 'function')
			{
				include = callback(arr[i], i);
			}
			else
			{
				include = arr[i];
			}

			if (include)
			{
				filtered.push(arr[i]);
			}
		}

		return filtered;
	},

	/**
	 * Returns whether an element is in an array (unlike jQuery.inArray(), which returns the element's index, or -1).
	 *
	 * @param mixed elem
	 * @param mixed arr
	 * @return bool
	 */
	inArray: function(elem, arr)
	{
		return ($.inArray(elem, arr) != -1);
	},

	/**
	 * Removes an element from an array.
	 *
	 * @param mixed elem
	 * @param array arr
	 * @return bool Whether the element could be found or not.
	 */
	removeFromArray: function(elem, arr)
	{
		var index = $.inArray(elem, arr);
		if (index != -1)
		{
			arr.splice(index, 1);
			return true;
		}
		else
		{
			return false;
		}
	},

	/**
	 * Returns the last element in an array.
	 *
	 * @param array
	 * @return mixed
	 */
	getLast: function(arr)
	{
		if (!arr.length)
			return null;
		else
			return arr[arr.length-1];
	},

	/**
	 * Makes the first character of a string uppercase.
	 *
	 * @param string str
	 * @return string
	 */
	uppercaseFirst: function(str)
	{
		return str.charAt(0).toUpperCase() + str.slice(1);
	},

	/**
	 * Makes the first character of a string lowercase.
	 *
	 * @param string str
	 * @return string
	 */
	lowercaseFirst: function(str)
	{
		return str.charAt(0).toLowerCase() + str.slice(1);
	},

	/**
	 * Converts a number of seconds into a human-facing time duration.
	 */
	secondsToHumanTimeDuration: function(seconds, showSeconds)
	{
		if (typeof showSeconds == 'undefined')
		{
			showSeconds = true;
		}

		var secondsInWeek   = 604800,
			secondsInDay    = 86400,
			secondsInHour   = 3600,
			secondsInMinute = 60;

		var weeks = Math.floor(seconds / secondsInWeek);
		seconds = seconds % secondsInWeek;

		var days = Math.floor(seconds / secondsInDay);
		seconds = seconds % secondsInDay;

		var hours = Math.floor(seconds / secondsInHour);
		seconds = seconds % secondsInHour;

		var minutes;

		if (showSeconds)
		{
			minutes = Math.floor(seconds / secondsInMinute);
			seconds = seconds % secondsInMinute;
		}
		else
		{
			minutes = Math.round(seconds / secondsInMinute);
			seconds = 0;
		}

		timeComponents = [];

		if (weeks)
		{
			timeComponents.push(weeks+' '+(weeks == 1 ? Craft.t('week') : Craft.t('weeks')));
		}

		if (days)
		{
			timeComponents.push(days+' '+(days == 1 ? Craft.t('day') : Craft.t('days')));
		}

		if (hours)
		{
			timeComponents.push(hours+' '+(hours == 1 ? Craft.t('hour') : Craft.t('hours')));
		}

		if (minutes || (!showSeconds && !weeks && !days && !hours))
		{
			timeComponents.push(minutes+' '+(minutes == 1 ? Craft.t('minute') : Craft.t('minutes')));
		}

		if (seconds || (showSeconds && !weeks && !days && !hours && !minutes))
		{
			timeComponents.push(seconds+' '+(seconds == 1 ? Craft.t('second') : Craft.t('seconds')));
		}

		return timeComponents.join(', ');
	},

	/**
	 * Converts extended ASCII characters to ASCII.
	 *
	 * @param string str
	 * @return string
	 */
	asciiString: function(str)
	{
		var asciiStr = '';

		for (var stringCounter = 0; stringCounter < str.length; stringCounter++)
		{
			var asciiCode = str.charCodeAt(stringCounter);
			var char = str.charAt(stringCounter);

			if (asciiCode >= 32 && asciiCode < 128)
			{
				asciiStr += char;
			}
			else
			{
				for (var property in Craft.asciiCharMap)
				{
					if (Craft.asciiCharMap.hasOwnProperty(property))
					{
						for (var searchCounter = 0; searchCounter < Craft.asciiCharMap[property].length; searchCounter++)
						{
							if (Craft.asciiCharMap[property][searchCounter] == char)
							{
								asciiStr += property;
							}
						}
					}
				}
			}
		}

		return asciiStr;
	},

	/**
	 * Prevents the outline when an element is focused by the mouse.
	 *
	 * @param mixed elem Either an actual element or a jQuery collection.
	 */
	preventOutlineOnMouseFocus: function(elem)
	{
		var $elem = $(elem),
			namespace = '.preventOutlineOnMouseFocus';

		$elem.on('mousedown'+namespace, function() {
			$elem.addClass('no-outline');
			$elem.focus();
		})
		.on('keydown'+namespace+' blur'+namespace, function(event) {
			if (event.keyCode != Garnish.SHIFT_KEY && event.keyCode != Garnish.CTRL_KEY && event.keyCode != Garnish.CMD_KEY)
				$elem.removeClass('no-outline');
		});
	},

	/**
	 * Creates a validation error list.
	 *
	 * @param array errors
	 * @return jQuery
	 */
	createErrorList: function(errors)
	{
		var $ul = $(document.createElement('ul')).addClass('errors');

		for (var i = 0; i < errors.length; i++)
		{
			var $li = $(document.createElement('li'));
			$li.appendTo($ul);
			$li.html(errors[i]);
		}

		return $ul;
	},

	appendHeadHtml: function(html)
	{
		if (!html)
		{
			return;
		}

		// Prune out any link tags that are already included
		var $existingCss = $('link[href]');

		if ($existingCss.length)
		{
			var existingCss = [];

			for (var i = 0; i < $existingCss.length; i++)
			{
				var href = $existingCss.eq(i).attr('href');
				existingCss.push(href.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&"));
			}

			var regexp = new RegExp('<link\\s[^>]*href="(?:'+existingCss.join('|')+')".*?></script>', 'g');

			html = html.replace(regexp, '');
		}

		$('head').append(html);
	},

	appendFootHtml: function(html)
	{
		if (!html)
		{
			return;
		}

		// Prune out any script tags that are already included
		var $existingJs = $('script[src]');

		if ($existingJs.length)
		{
			var existingJs = [];

			for (var i = 0; i < $existingJs.length; i++)
			{
				var src = $existingJs.eq(i).attr('src');
				existingJs.push(src.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&"));
			}

			var regexp = new RegExp('<script\\s[^>]*src="(?:'+existingJs.join('|')+')".*?></script>', 'g');

			html = html.replace(regexp, '');
		}

		Garnish.$bod.append(html);
	},

	/**
	 * Initializes any common UI elements in a given container.
	 *
	 * @param jQuery $container
	 */
	initUiElements: function($container)
	{
		$('.grid', $container).grid();
		$('.pane', $container).pane();
		$('.info', $container).infoicon();
		$('.checkbox-select', $container).checkboxselect();
		$('.fieldtoggle', $container).fieldtoggle();
		$('.lightswitch', $container).lightswitch();
		$('.nicetext', $container).nicetext();
		$('.pill', $container).pill();
		$('.formsubmit', $container).formsubmit();
		$('.menubtn', $container).menubtn();

		// Make placeholders work for IE9, too.
		$('input[type!=password], textarea', $container).placeholder();
	},

	_elementIndexClasses: {},
	_elementSelectorModalClasses: {},

	/**
	 * Registers an element index class for a given element type.
	 *
	 * @param string elementType
	 * @param function func
	 */
	registerElementIndexClass: function(elementType, func)
	{
		if (typeof this._elementIndexClasses[elementType] != 'undefined')
		{
			throw 'An element index class has already been registered for the element type “'+elementType+'”.';
		}

		this._elementIndexClasses[elementType] = func;
	},


	/**
	 * Registers an element selector modal class for a given element type.
	 *
	 * @param string elementType
	 * @param function func
	 */
	registerElementSelectorModalClass: function(elementType, func)
	{
		if (typeof this._elementSelectorModalClasses[elementType] != 'undefined')
		{
			throw 'An element selector modal class has already been registered for the element type “'+elementType+'”.';
		}

		this._elementSelectorModalClasses[elementType] = func;
	},

	/**
	 * Creates a new element index for a given element type.
	 *
	 * @param string elementType
	 * @param mixed  $container
	 * @param object settings
	 * @return BaseElementIndex
	 */
	createElementIndex: function(elementType, $container, settings)
	{
		var func;

		if (typeof this._elementIndexClasses[elementType] != 'undefined')
		{
			func = this._elementIndexClasses[elementType];
		}
		else
		{
			func = Craft.BaseElementIndex;
		}

		return new func(elementType, $container, settings);
	},

	/**
	 * Creates a new element selector modal for a given element type.
	 *
	 * @param string elementType
	 * @param object settings
	 */
	createElementSelectorModal: function(elementType, settings)
	{
		var func;

		if (typeof this._elementSelectorModalClasses[elementType] != 'undefined')
		{
			func = this._elementSelectorModalClasses[elementType];
		}
		else
		{
			func = Craft.BaseElementSelectorModal;
		}

		return new func(elementType, settings);
	},

	/**
	 * Retrieves a value from localStorage if it exists.
	 *
	 * @param string key
	 * @param mixed defaultValue
	 */
	getLocalStorage: function(key, defaultValue)
	{
		key = 'Craft-'+Craft.siteUid+'.'+key;

		if (typeof localStorage != 'undefined' && typeof localStorage[key] != 'undefined')
		{
			return JSON.parse(localStorage[key]);
		}
		else
		{
			return defaultValue;
		}
	},

	/**
	 * Saves a value to localStorage.
	 *
	 * @param string key
	 * @param mixed value
	 */
	setLocalStorage: function(key, value)
	{
		if (typeof localStorage != 'undefined')
		{
			key = 'Craft-'+Craft.siteUid+'.'+key;

			// localStorage might be filled all the way up.
			// Especially likely if this is a private window in Safari 8+, where localStorage technically exists,
			// but has a max size of 0 bytes.
			try
			{
				localStorage[key] = JSON.stringify(value);
			}
			catch(e) {}
		}
	},

	/**
	 * Returns element information from it's HTML.
	 *
	 * @param element
	 * @returns object
	 */
	getElementInfo: function(element)
	{
		var $element = $(element);

		if (!$element.hasClass('element'))
		{
			$element = $element.find('.element:first');
		}

		var info = {
			id:       $element.data('id'),
			locale:   $element.data('locale'),
			label:    $element.data('label'),
			status:   $element.data('status'),
			url:      $element.data('url'),
			hasThumb: $element.hasClass('hasthumb'),
			$element: $element
		};

		return info;
	},

	/**
	 * Shows an element editor HUD.
	 *
	 * @param object $element
	 */
	showElementEditor: function($element)
	{
		if (Garnish.hasAttr($element, 'data-editable') && !$element.hasClass('disabled') && !$element.hasClass('loading'))
		{
			new Craft.ElementEditor($element);
		}
	}
});


// -------------------------------------------
//  Custom jQuery plugins
// -------------------------------------------

$.extend($.fn,
{
	animateLeft: function(pos, duration, easing, complete)
	{
		if (Craft.orientation == 'ltr')
		{
			return this.velocity({ left: pos }, duration, easing, complete);
		}
		else
		{
			return this.velocity({ right: pos }, duration, easing, complete);
		}
	},

	animateRight: function(pos, duration, easing, complete)
	{
		if (Craft.orientation == 'ltr')
		{
			return this.velocity({ right: pos }, duration, easing, complete);
		}
		else
		{
			return this.velocity({ left: pos }, duration, easing, complete);
		}
	},

	/**
	 * Disables elements by adding a .disabled class and preventing them from receiving focus.
	 */
	disable: function()
	{
		return this.each(function()
		{
			var $elem = $(this);
			$elem.addClass('disabled');

			if ($elem.data('activatable'))
			{
				$elem.removeAttr('tabindex');
			}
		});
	},

	/**
	 * Enables elements by removing their .disabled class and allowing them to receive focus.
	 */
	enable: function()
	{
		return this.each(function()
		{
			var $elem = $(this);
			$elem.removeClass('disabled');

			if ($elem.data('activatable'))
			{
				$elem.attr('tabindex', '0');
			}
		});
	},

	/**
	 * Sets the element as the container of a grid.
	 */
	grid: function()
	{
		return this.each(function()
		{
			var $container = $(this),
				settings = {};

			if ($container.data('item-selector')) settings.itemSelector = $container.data('item-selector');
			if ($container.data('cols'))          settings.cols = parseInt($container.data('cols'));
			if ($container.data('min-col-width')) settings.minColWidth = parseInt($container.data('min-col-width'));
			if ($container.data('mode'))          settings.mode = $container.data('mode');
			if ($container.data('fill-mode'))     settings.fillMode = $container.data('fill-mode');
			if ($container.data('col-class'))     settings.colClass = $container.data('col-class');
			if ($container.data('snap-to-grid'))  settings.snapToGrid = !!$container.data('snap-to-grid');

			new Craft.Grid(this, settings);
		});
	},

	infoicon: function()
	{
		return this.each(function()
		{
			new Craft.InfoIcon(this);
		});
	},

	pane: function()
	{
		return this.each(function()
		{
			new Craft.Pane(this);
		});
	},

	/**
	 * Sets the element as a container for a checkbox select.
	 */
	checkboxselect: function()
	{
		return this.each(function()
		{
			if (!$.data(this, 'checkboxselect'))
			{
				new Garnish.CheckboxSelect(this);
			}
		});
	},

	/**
	 * Sets the element as a field toggle trigger.
	 */
	fieldtoggle: function()
	{
		return this.each(function()
		{
			if (!$.data(this, 'fieldtoggle'))
			{
				new Craft.FieldToggle(this);
			}
		});
	},

	lightswitch: function(settings, settingName, settingValue)
	{
		// param mapping
		if (settings == 'settings')
		{
			if (typeof settingName == 'string')
			{
				settings = {};
				settings[settingName] = settingValue;
			}
			else
			{
				settings = settingName;
			}

			return this.each(function()
			{
				var obj = $.data(this, 'lightswitch');
				if (obj)
				{
					obj.setSettings(settings);
				}
			});
		}
		else
		{
			if (!$.isPlainObject(settings))
			{
				settings = {};
			}

			return this.each(function()
			{
				var thisSettings = $.extend({}, settings);

				if (Garnish.hasAttr(this, 'data-value'))
				{
					thisSettings.value = $(this).attr('data-value');
				}

				if (!$.data(this, 'lightswitch'))
				{
					new Craft.LightSwitch(this, thisSettings);
				}
			});
		}
	},

	nicetext: function()
	{
		return this.each(function()
		{
			if (!$.data(this, 'text'))
			{
				new Garnish.NiceText(this);
			}
		});
	},

	pill: function()
	{
		return this.each(function()
		{
			if (!$.data(this, 'pill'))
			{
				new Garnish.Pill(this);
			}
		});
	},

	formsubmit: function()
	{
		// Secondary form submit buttons
		this.on('click', function(ev)
		{
			var $btn = $(ev.currentTarget);

			if ($btn.attr('data-confirm'))
			{
				if (!confirm($btn.attr('data-confirm')))
				{
					return;
				}
			}

			var $form;

			// Is this a menu item?
			if ($btn.data('menu'))
			{
				$form = $btn.data('menu').$trigger.closest('form');
			}
			else
			{
				$form = $btn.closest('form');
			}

			if ($btn.attr('data-action'))
			{
				$('<input type="hidden" name="action"/>')
					.val($btn.attr('data-action'))
					.appendTo($form);
			}

			if ($btn.attr('data-redirect'))
			{
				$('<input type="hidden" name="redirect"/>')
					.val($btn.attr('data-redirect'))
					.appendTo($form);
			}

			if ($btn.attr('data-param'))
			{
				$('<input type="hidden"/>')
					.attr({
						name: $btn.attr('data-param'),
						value: $btn.attr('data-value')
					})
					.appendTo($form);
			}

			$form.submit();
		});
	},

	menubtn: function()
	{
		return this.each(function()
		{
			var $btn = $(this);

			if (!$btn.data('menubtn') && $btn.next().hasClass('menu'))
			{
				new Garnish.MenuBtn($btn);
			}
		});
	}
});


Garnish.$doc.ready(function()
{
	Craft.initUiElements();
});

/**
 * Element index class
 */
Craft.BaseElementIndex = Garnish.Base.extend(
{
	// Properties
	// =========================================================================

	initialized: false,
	elementType: null,

	instanceState: null,
	sourceStates: null,
	sourceStatesStorageKey: null,

	searchTimeout: null,
	elementSelect: null,
	sourceSelect: null,
	structureTableSort: null,

	isIndexBusy: false,

	selectable: false,
	multiSelect: false,
	actions: null,
	actionsHeadHtml: null,
	actionsFootHtml: null,
	showingActionTriggers: false,
	_$triggers: null,

	$container: null,
	$main: null,
	$scroller: null,
	$toolbar: null,
	$toolbarTableRow: null,
	toolbarOffset: null,
	$selectAllContainer: null,
	$selectAllCheckbox: null,
	$search: null,
	searching: false,
	$clearSearchBtn: null,
	$mainSpinner: null,

	$statusMenuBtn: null,
	statusMenu: null,
	status: null,

	$localeMenuBtn: null,
	localeMenu: null,
	locale: null,

	$sortMenuBtn: null,
	sortMenu: null,
	$sortAttributesList: null,
	$sortDirectionsList: null,
	$scoreSortAttribute: null,
	$structureSortAttribute: null,

	$viewModeBtnTd: null,
	$viewModeBtnContainer: null,
	viewModeBtns: null,
	viewMode: null,

	$loadingMoreSpinner: null,
	$sidebar: null,
	$sidebarButtonContainer: null,
	showingSidebar: null,
	sourceKey: null,
	sourceViewModes: null,
	$source: null,
	$elements: null,
	$table: null,
	$elementContainer: null,
	$checkboxes: null,

	_totalVisible: null,
	_morePending: false,
	_totalVisiblePostStructureTableDraggee: null,
	_morePendingPostStructureTableDraggee: false,
	loadingMore: false,

	// Public methods
	// =========================================================================

	/**
	 * Constructor
	 */
	init: function(elementType, $container, settings)
	{
		this.elementType = elementType;
		this.$container = $container;
		this.setSettings(settings, Craft.BaseElementIndex.defaults);

		// Set the state objects
		this.instanceState = {
			selectedSource: null
		};

		this.sourceStates = {};

		// Instance states (selected source) are stored by a custom storage key defined in the settings
		if (this.settings.storageKey)
		{
			$.extend(this.instanceState, Craft.getLocalStorage(this.settings.storageKey), {});
		}

		// Source states (view mode, etc.) are stored by the element type and context
		this.sourceStatesStorageKey = 'BaseElementIndex.'+this.elementType+'.'+this.settings.context;
		$.extend(this.sourceStates, Craft.getLocalStorage(this.sourceStatesStorageKey, {}));

		// Find the DOM elements
		this.$main = this.$container.find('.main');
		this.$toolbar = this.$container.find('.toolbar:first');
		this.$toolbarTableRow = this.$toolbar.children('table').children('tbody').children('tr');
		this.$statusMenuBtn = this.$toolbarTableRow.find('.statusmenubtn:first');
		this.$localeMenuBtn = this.$toolbarTableRow.find('.localemenubtn:first');
		this.$sortMenuBtn = this.$toolbarTableRow.find('.sortmenubtn:first');
		this.$search = this.$toolbarTableRow.find('.search:first input:first');
		this.$clearSearchBtn = this.$toolbarTableRow.find('.search:first > .clear');
		this.$mainSpinner = this.$toolbar.find('.spinner:first');
		this.$loadingMoreSpinner = this.$container.find('.spinner.loadingmore');
		this.$sidebar = this.$container.find('.sidebar:first');
		this.$sidebarButtonContainer = this.$sidebar.children('.buttons');
		this.$elements = this.$container.find('.elements:first');

		if (!this.$sidebarButtonContainer.length)
		{
			this.$sidebarButtonContainer = $('<div class="buttons"/>').prependTo(this.$sidebar);
		}

		this.showingSidebar = (this.$sidebar.length && !this.$sidebar.hasClass('hidden'));

		this.$viewModeBtnTd = this.$toolbarTableRow.find('.viewbtns:first');
		this.$viewModeBtnContainer = $('<div class="btngroup fullwidth"/>').appendTo(this.$viewModeBtnTd);

		if (this.settings.context == 'index' && !Garnish.isMobileBrowser(true))
		{
			this.addListener(Garnish.$win, 'scroll resize', 'updateFixedToolbar');
		}

		// Initialize the sources
		// ---------------------------------------------------------------------

		var $sources = this._getSourcesInList(this.$sidebar.children('nav').children('ul'));

		// No source, no party.
		if ($sources.length == 0)
		{
			return;
		}

		// The source selector
		this.sourceSelect = new Garnish.Select(this.$sidebar.find('nav'), {
			multi:             false,
			allowEmpty:        false,
			vertical:          true,
			onSelectionChange: $.proxy(this, 'onSourceSelectionChange')
		});

		this._initSources($sources);

		// Initialize the locale menu button
		// ---------------------------------------------------------------------

		// Is there a locale menu?
		if (this.$localeMenuBtn.length)
		{
			this.localeMenu = this.$localeMenuBtn.menubtn().data('menubtn').menu;

			// Figure out the initial locale
			var $option = this.localeMenu.$options.filter('.sel:first');

			if (!$option.length)
			{
				$option = this.localeMenu.$options.first();
			}

			if ($option.length)
			{
				this.locale = $option.data('locale');
			}
			else
			{
				// No locale options -- they must not have any locale permissions
				this.settings.criteria = { id: '0' };
			}

			this.localeMenu.on('optionselect', $.proxy(this, 'onLocaleChange'));

			if (this.locale)
			{
				// Do we have a different locale stored in localStorage?
				var storedLocale = Craft.getLocalStorage('BaseElementIndex.locale');

				if (storedLocale && storedLocale != this.locale)
				{
					// Is that one available here?
					var $storedLocaleOption = this.localeMenu.$options.filter('[data-locale="'+storedLocale+'"]:first');

					if ($storedLocaleOption.length)
					{
						// Todo: switch this to localeMenu.selectOption($storedLocaleOption) once Menu is updated to support that
						$storedLocaleOption.trigger('click');
					}
				}
			}
		}

		// Is there a sort menu?
		if (this.$sortMenuBtn.length)
		{
			this.sortMenu = this.$sortMenuBtn.menubtn().data('menubtn').menu;
			this.$sortAttributesList = this.sortMenu.$container.children('.sort-attributes');
			this.$sortDirectionsList = this.sortMenu.$container.children('.sort-directions');

			this.sortMenu.on('optionselect', $.proxy(this, 'onSortChange'));
		}

		this.onAfterHtmlInit();

		if (this.settings.context == 'index')
		{
			this.$scroller = Garnish.$win;
		}
		else
		{
			this.$scroller = this.$main;
		}

		// Select the initial source
		var source = this.getDefaultSourceKey(),
			$source;

		if (source)
		{
			$source = this.getSourceByKey(source);

			if ($source)
			{
				// Expand any parent sources
				var $parentSources = $source.parentsUntil('.sidebar', 'li');
				$parentSources.not(':first').addClass('expanded');
			}
		}

		if (!source || !$source)
		{
			// Select the first source by default
			$source = this.$sources.first();
		}

		// Load up the elements!
		this.initialized = true;
		this.sourceSelect.selectItem($source);

		// Status changes
		if (this.$statusMenuBtn.length)
		{
			this.statusMenu = this.$statusMenuBtn.menubtn().data('menubtn').menu;
			this.statusMenu.on('optionselect', $.proxy(this, 'onStatusChange'));
		}

		this.addListener(this.$search, 'textchange', $.proxy(function()
		{
			if (!this.searching && this.$search.val())
			{
				this.onStartSearching();
			}
			else if (this.searching && !this.$search.val())
			{
				this.onStopSearching();
			}

			if (this.searchTimeout)
			{
				clearTimeout(this.searchTimeout);
			}

			this.searchTimeout = setTimeout($.proxy(this, 'updateElements'), 500);
		}, this));

		this.addListener(this.$clearSearchBtn, 'click', $.proxy(function()
		{
			this.$search.val('');

			if (this.searchTimeout)
			{
				clearTimeout(this.searchTimeout);
			}

			if (!Garnish.isMobileBrowser(true))
			{
				this.$search.focus();
			}

			this.onStopSearching();

			this.updateElements();

		}, this));

		// Auto-focus the Search box
		if (!Garnish.isMobileBrowser(true))
		{
			this.$search.focus();
		}
	},

	get $sources()
	{
		if (!this.sourceSelect)
		{
			return undefined;
		}

		return this.sourceSelect.$items;
	},

	get totalVisible()
	{
		if (this._isStructureTableDraggingLastElements())
		{
			return this._totalVisiblePostStructureTableDraggee;
		}
		else
		{
			return this._totalVisible;
		}
	},

	get morePending()
	{
		if (this._isStructureTableDraggingLastElements())
		{
			return this._morePendingPostStructureTableDraggee;
		}
		else
		{
			return this._morePending;
		}
	},

	updateFixedToolbar: function()
	{
		if (!this.toolbarOffset)
		{
			this.toolbarOffset = this.$toolbar.offset().top;

			if (!this.toolbarOffset)
			{
				return;
			}
		}

		this.updateFixedToolbar._scrollTop = Garnish.$win.scrollTop();

		if (this.updateFixedToolbar._scrollTop > this.toolbarOffset - 7)
		{
			if (!this.$toolbar.hasClass('fixed'))
			{
				this.$elements.css('padding-top', (this.$toolbar.outerHeight() + 24));
				this.$toolbar.addClass('fixed');
			}

			this.$toolbar.css('width', this.$main.width());
		}
		else
		{
			if (this.$toolbar.hasClass('fixed'))
			{
				this.$toolbar.removeClass('fixed');
				this.$toolbar.css('width', '');
				this.$elements.css('padding-top', '');
			}
		}
	},

	initSource: function($source)
	{
		this.sourceSelect.addItems($source);
		this.initSourceToggle($source);
	},

	initSourceToggle: function($source)
	{
		var $toggle = this._getSourceToggle($source);

		if ($toggle.length)
		{
			this.addListener($toggle, 'click', '_onToggleClick');
		}
	},

	deinitSource: function($source)
	{
		this.sourceSelect.removeItems($source);
		this.deinitSourceToggle($source);
	},

	deinitSourceToggle: function($source)
	{
		var $toggle = this._getSourceToggle($source);

		if ($toggle.length)
		{
			this.removeListener($toggle, 'click');
		}
	},

	getDefaultSourceKey: function()
	{
		return this.instanceState.selectedSource;
	},

	onSourceSelectionChange: function()
	{
		// If the selected source was just removed (maybe because its parent was collapsed),
		// there won't be a selected source
		if (!this.sourceSelect.totalSelected)
		{
			this.sourceSelect.selectItem(this.$sources.first());
			return;
		}

		if (this.selectSource(this.sourceSelect.$selectedItems))
		{
			this.updateElements();
		}
	},

	onStartSearching: function()
	{
		// Show the clear button and add/select the Score sort option
		this.$clearSearchBtn.removeClass('hidden');

		if (!this.$scoreSortAttribute)
		{
			this.$scoreSortAttribute = $('<li><a data-attr="score">'+Craft.t('Score')+'</a></li>');
			this.sortMenu.addOptions(this.$scoreSortAttribute.children());
		}

		this.$scoreSortAttribute.prependTo(this.$sortAttributesList);
		this.setSortAttribute('score');
		this.getSortAttributeOption('structure').addClass('disabled');

		this.searching = true;
	},

	onStopSearching: function()
	{
		// Hide the clear button and Score sort option
		this.$clearSearchBtn.addClass('hidden');

		this.$scoreSortAttribute.detach();
		this.getSortAttributeOption('structure').removeClass('disabled');
		this.setStoredSortOptionsForSource();

		this.searching = false;
	},

	setInstanceState: function(key, value)
	{
		if (typeof key == 'object')
		{
			$.extend(this.instanceState, key);
		}
		else
		{
			this.instanceState[key] = value;
		}

		// Store it in localStorage too?
		if (this.settings.storageKey)
		{
			Craft.setLocalStorage(this.settings.storageKey, this.instanceState);
		}
	},

	getSourceState: function(source, key, defaultValue)
	{
		if (typeof this.sourceStates[source] == 'undefined')
		{
			// Set it now so any modifications to it by whoever's calling this will be stored.
			this.sourceStates[source] = {};
		}

		if (typeof key == 'undefined')
		{
			return this.sourceStates[source];
		}
		else if (typeof this.sourceStates[source][key] != 'undefined')
		{
			return this.sourceStates[source][key];
		}
		else
		{
			return (typeof defaultValue != 'undefined' ? defaultValue : null);
		}
	},

	getSelectedSourceState: function(key, defaultValue)
	{
		return this.getSourceState(this.instanceState.selectedSource, key, defaultValue);
	},

	setSelecetedSourceState: function(key, value)
	{
		var viewState = this.getSelectedSourceState();

		if (typeof key == 'object')
		{
			$.extend(viewState, key);
		}
		else
		{
			viewState[key] = value;
		}

		this.sourceStates[this.instanceState.selectedSource] = viewState;

		// Store it in localStorage too
		Craft.setLocalStorage(this.sourceStatesStorageKey, this.sourceStates);
	},

	/**
	 * Returns the data that should be passed to the element-index/get-elements controller action
	 * when loading the first batch of elements.
	 */
	getControllerData: function()
	{
		var data = {
			context:             this.settings.context,
			elementType:         this.elementType,
			criteria:            $.extend({ status: this.status, locale: this.locale }, this.settings.criteria),
			disabledElementIds:  this.settings.disabledElementIds,
			source:              this.instanceState.selectedSource,
			status:              this.status,
			viewState:           this.getSelectedSourceState(),
			search:              (this.$search ? this.$search.val() : null)
		};

		// Possible that the order/sort isn't entirely accurate if we're sorting by Score
		data.viewState.order = this.getSelectedSortAttribute();
		data.viewState.sort = this.getSelectedSortDirection();

		if (
			this.getSelectedSourceState('mode') == 'table' &&
			this.getSelectedSortAttribute() == 'structure'
		)
		{
			data.collapsedElementIds = this.instanceState.collapsedElementIds;
		}

		return data;
	},

	updateElements: function()
	{
		// Ignore if we're not fully initialized yet
		if (!this.initialized)
		{
			return;
		}

		// Prep the UI
		// -------------------------------------------------------------

		this.setIndexBusy();
		this.removeListener(this.$scroller, 'scroll');

		if (this.getSelectedSourceState('mode') == 'table' && this.$table)
		{
			Craft.cp.$collapsibleTables = Craft.cp.$collapsibleTables.not(this.$table);
		}

		// Fetch the elements
		// -------------------------------------------------------------

		var data = this.getControllerData();

		Craft.postActionRequest('element-index/get-elements', data, $.proxy(function(response, textStatus)
		{
			this.setIndexAvailable();

			if (textStatus == 'success')
			{
				// Cleanup
				// -------------------------------------------------------------

				this._prepForNewElements();

				// Selectable setup
				// -------------------------------------------------------------

				if (this.settings.context == 'index' && response.actions && response.actions.length)
				{
					this.actions = response.actions;
					this.actionsHeadHtml = response.actionsHeadHtml;
					this.actionsFootHtml = response.actionsFootHtml;
				}
				else
				{
					this.actions = this.actionsHeadHtml = this.actionsFootHtml = null;
				}

				this.selectable = (this.actions || this.settings.selectable);

				// Update the view with the new container + elements HTML
				// -------------------------------------------------------------

				this.$elements.html(response.html);
				this.$scroller.scrollTop(0);

				if (this.getSelectedSourceState('mode') == 'table')
				{
					this.$table = this.$elements.find('table:first');
					Craft.cp.$collapsibleTables = Craft.cp.$collapsibleTables.add(this.$table);
				}

				// Find the new container
				this.$elementContainer = this.getElementContainer();

				// Get the new elements
				var $newElements = this.$elementContainer.children();

				// Initialize the selector stuff and the structure table sorter
				this._setupNewElements($newElements);

				this._onUpdateElements(response, false, $newElements);

				if (
					this.getSelectedSourceState('mode') == 'table' &&
					this.getSelectedSortAttribute() == 'structure'
				)
				{
					// Listen for toggle clicks
					this.addListener(this.$elementContainer, 'click', function(ev)
					{
						var $target = $(ev.target);

						if ($target.hasClass('toggle'))
						{
							if (this._collapseElement($target) === false)
							{
								this._expandElement($target);
							}
						}
					});
				}

				// Listen for double-clicks
				if (this.settings.context == 'index')
				{
					this.addListener(this.$elementContainer, 'dblclick', function(ev)
					{
						var $target = $(ev.target);

						if ($target.prop('nodeName') == 'A')
						{
							// Let the link do its thing
							return;
						}

						var $element;

						if ($target.hasClass('element'))
						{
							$element = $target;
						}
						else
						{
							$element = $target.closest('.element');

							if (!$element.length)
							{
								return;
							}
						}

						if (Garnish.hasAttr($element, 'data-editable'))
						{
							new Craft.ElementEditor($element);
						}
					});
				}
			}

		}, this));
	},

	showActionTriggers: function()
	{
		// Ignore if they're already shown
		if (this.showingActionTriggers)
		{
			return;
		}

		// Hide any toolbar inputs
		this.$toolbarTableRow.children().not(this.$selectAllContainer).addClass('hidden');

		if (!this._$triggers)
		{
			this._createTriggers();
		}
		else
		{
			this._$triggers.insertAfter(this.$selectAllContainer);
		}

		this.showingActionTriggers = true;
	},

	handleActionTriggerSubmit: function(ev)
	{
		ev.preventDefault();

		var $form = $(ev.currentTarget);

		// Make sure Craft.ElementActionTrigger isn't overriding this
		if ($form.hasClass('disabled') || $form.data('custom-handler'))
		{
			return;
		}

		var actionHandle = $form.data('action'),
			params = Garnish.getPostData($form);

		this.submitAction(actionHandle, params);
	},

	handleMenuActionTriggerSubmit: function(ev)
	{
		var $option = $(ev.option);

		// Make sure Craft.ElementActionTrigger isn't overriding this
		if ($option.hasClass('disabled') || $option.data('custom-handler'))
		{
			return;
		}

		var actionHandle = $option.data('action');
		this.submitAction(actionHandle);
	},

	submitAction: function(actionHandle, params)
	{
		// Make sure something's selected
		var totalSelected = this.elementSelect.totalSelected,
			totalItems = this.elementSelect.$items.length;

		if (totalSelected == 0)
		{
			return;
		}

		// Find the action
		var action;

		for (var i = 0; i < this.actions.length; i++)
		{
			if (this.actions[i].type == actionHandle)
			{
				action = this.actions[i];
				break;
			}
		}

		if (!action || (action.confirm && !confirm(action.confirm)))
		{
			return;
		}

		// Get ready to submit
		var data = $.extend(this.getControllerData(), params, {
			elementAction: actionHandle,
			elementIds:    this.getSelectedElementIds()
		});

		// Do it
		this.setIndexBusy();

		Craft.postActionRequest('element-index/perform-action', data, $.proxy(function(response, textStatus)
		{
			this.setIndexAvailable();

			if (textStatus == 'success')
			{
				if (response.success)
				{
					this._prepForNewElements();
					this.$elementContainer.html('');
					this.elementSelect = this.createElementSelect();

					var $newElements = $(response.html).appendTo(this.$elementContainer);

					// Initialize the selector stuff and the structure table sorter
					this._setupNewElements($newElements);

					// There may be less elements now if some had been lazy-loaded before. If that's the case and all of
					// the elements were selected, we don't want to give the user the impression that all of the same
					// elements are still selected.
					if (totalItems <= 50 || totalSelected < totalItems)
					{
						for (var i = 0; i < data.elementIds.length; i++)
						{
							var $element = this.getElementById(data.elementIds[i]);

							if ($element)
							{
								this.elementSelect.selectItem($element);
							}
						}
					}

					this._onUpdateElements(response, false, $newElements);

					if (response.message)
					{
						Craft.cp.displayNotice(response.message);
					}

					// There may be a new background task that needs to be run
					Craft.cp.runPendingTasks();
				}
				else
				{
					Craft.cp.displayError(response.message);
				}
			}
		}, this));
	},

	hideActionTriggers: function()
	{
		// Ignore if there aren't any
		if (!this.showingActionTriggers)
		{
			return;
		}

		this._$triggers.detach();

		this.$toolbarTableRow.children().not(this.$selectAllContainer).removeClass('hidden');

		this.showingActionTriggers = false;
	},

	updateActionTriggers: function()
	{
		// Do we have an action UI to update?
		if (this.actions)
		{
			var totalSelected = this.elementSelect.totalSelected;

			if (totalSelected != 0)
			{
				if (totalSelected == this.elementSelect.$items.length)
				{
					this.$selectAllCheckbox.removeClass('indeterminate');
					this.$selectAllCheckbox.addClass('checked');
				}
				else
				{
					this.$selectAllCheckbox.addClass('indeterminate');
					this.$selectAllCheckbox.removeClass('checked');
				}

				this.showActionTriggers();
			}
			else
			{
				this.$selectAllCheckbox.removeClass('indeterminate checked');
				this.hideActionTriggers();
			}
		}
	},

	/**
	 * Checks if the user has reached the bottom of the scroll area, and if so, loads the next batch of elemets.
	 */
	maybeLoadMore: function()
	{
		if (this.canLoadMore())
		{
			this.loadMore();
		}
	},

	/**
	 * Returns whether the user has reached the bottom of the scroll area.
	 */
	canLoadMore: function()
	{
		if (!this.morePending)
		{
			return false;
		}

		// Check if the user has reached the bottom of the scroll area
		if (this.$scroller[0] == Garnish.$win[0])
		{
			var winHeight = Garnish.$win.innerHeight(),
				winScrollTop = Garnish.$win.scrollTop(),
				bodHeight = Garnish.$bod.height();

			return (winHeight + winScrollTop >= bodHeight);
		}
		else
		{
			var containerScrollHeight = this.$scroller.prop('scrollHeight'),
				containerScrollTop = this.$scroller.scrollTop(),
				containerHeight = this.$scroller.outerHeight();

			return (containerScrollHeight - containerScrollTop <= containerHeight + 15);
		}
	},

	/**
	 * Loads the next batch of elements.
	 */
	loadMore: function()
	{
		if (!this.morePending || this.loadingMore)
		{
			return;
		}

		this.loadingMore = true;
		this.$loadingMoreSpinner.removeClass('hidden');
		this.removeListener(this.$scroller, 'scroll');

		var data = this.getLoadMoreData();

		Craft.postActionRequest('element-index/get-more-elements', data, $.proxy(function(response, textStatus)
		{
			this.loadingMore = false;
			this.$loadingMoreSpinner.addClass('hidden');

			if (textStatus == 'success')
			{
				var $newElements = $(response.html).appendTo(this.$elementContainer);

				if (this.actions || this.settings.selectable)
				{
					this.elementSelect.addItems($newElements.filter(':not(.disabled)'));
					this.updateActionTriggers();
				}

				if (this.structureTableSort)
				{
					this.structureTableSort.addItems($newElements);
				}

				this._onUpdateElements(response, true, $newElements);
			}

		}, this));
	},

	/**
	 * Returns the data that should be passed to the elementIndex/getMoreElements controller action
	 * when loading a subsequent batch of elements.
	 */
	getLoadMoreData: function()
	{
		var data = this.getControllerData();
		data.offset = this.totalVisible;

		// If we are dragging the last elements on the page,
		// tell the controller to only load elements positioned after the draggee.
		if (this._isStructureTableDraggingLastElements())
		{
			data.criteria.positionedAfter = this.structureTableSort.$targetItem.data('id');
		}

		return data;
	},

	/**
	 * Returns the element container.
	 */
	getElementContainer: function()
	{
		if (this.getSelectedSourceState('mode') == 'table')
		{
			return this.$table.children('tbody:first');
		}
		else
		{
			return this.$elements.children('ul');
		}
	},

	createElementSelect: function()
	{
		return new Garnish.Select(this.$elementContainer, {
			multi:             (this.actions || this.settings.multiSelect),
			vertical:          (this.getSelectedSourceState('mode') != 'thumbs'),
			handle:            (this.settings.context == 'index' ? '.checkbox, .element' : null),
			filter:            ':not(a):not(.toggle)',
			checkboxMode:      (this.settings.context == 'index' && this.actions),
			onSelectionChange: $.proxy(this, 'onSelectionChange')
		});
	},

	getSelectedElementIds: function()
	{
		var $selectedItems = this.elementSelect.$selectedItems,
			ids = [];

		for (var i = 0; i < $selectedItems.length; i++)
		{
			ids.push($selectedItems.eq(i).data('id'));
		}

		return ids;
	},

	onUpdateElements: function(append, $newElements)
	{
		this.settings.onUpdateElements(append, $newElements);
	},

	onStatusChange: function(ev)
	{
		this.statusMenu.$options.removeClass('sel');
		var $option = $(ev.selectedOption).addClass('sel');
		this.$statusMenuBtn.html($option.html());

		this.status = $option.data('status');
		this.updateElements();
	},

	onLocaleChange: function(ev)
	{
		this.localeMenu.$options.removeClass('sel');
		var $option = $(ev.selectedOption).addClass('sel');
		this.$localeMenuBtn.html($option.html());

		this.locale = $option.data('locale');

		if (this.initialized)
		{
			// Remember this locale for later
			Craft.setLocalStorage('BaseElementIndex.locale', this.locale);

			// Update the elements
			this.updateElements();
		}
	},

	getSortAttributeOption: function(attr)
	{
		return this.$sortAttributesList.find('a[data-attr="'+attr+'"]:first');
	},

	getSelectedSortAttribute: function()
	{
		return this.$sortAttributesList.find('a.sel:first').data('attr');
	},

	setSortAttribute: function(attr)
	{
		// Find the option (and make sure it actually exists)
		var $option = this.getSortAttributeOption(attr);

		if ($option.length)
		{
			this.$sortAttributesList.find('a.sel').removeClass('sel');
			$option.addClass('sel');

			var label = $option.text();
			this.$sortMenuBtn.attr('title', Craft.t('Sort by {attribute}', { attribute: label }));
			this.$sortMenuBtn.text(label);

			this.setSortDirection('asc');

			if (attr == 'score' || attr == 'structure')
			{
				this.$sortDirectionsList.find('a').addClass('disabled');
			}
			else
			{
				this.$sortDirectionsList.find('a').removeClass('disabled');
			}
		}
	},

	getSortDirectionOption: function(dir)
	{
		return this.$sortDirectionsList.find('a[data-dir='+dir+']:first');
	},

	getSelectedSortDirection: function()
	{
		return this.$sortDirectionsList.find('a.sel:first').data('dir');
	},

	setSortDirection: function(dir)
	{
		if (dir != 'desc')
		{
			dir = 'asc';
		}

		this.$sortMenuBtn.attr('data-icon', dir);
		this.$sortDirectionsList.find('a.sel').removeClass('sel');
		this.getSortDirectionOption(dir).addClass('sel');
	},

	onSortChange: function(ev)
	{
		var $option = $(ev.selectedOption);

		if ($option.hasClass('disabled') || $option.hasClass('sel'))
		{
			return;
		}

		// Is this an attribute or a direction?
		if ($option.parent().parent().is(this.$sortAttributesList))
		{
			this.setSortAttribute($option.data('attr'));
		}
		else
		{
			this.setSortDirection($option.data('dir'));
		}

		// Save it to localStorage (unless we're sorting by score)
		var attr = this.getSelectedSortAttribute();

		if (attr != 'score')
		{
			this.setSelecetedSourceState({
				order: attr,
				sort: this.getSelectedSortDirection()
			});
		}

		this.updateElements();
	},

	getSourceByKey: function(key)
	{
		if (this.$sources)
		{
			var $source = this.$sources.filter('[data-key="'+key+'"]:first');

			if ($source.length)
			{
				return $source;
			}
		}
	},

	selectSource: function($source)
	{
		if (this.$source && this.$source[0] && this.$source[0] == $source[0])
		{
			return false;
		}

		if ($source[0] != this.sourceSelect.$selectedItems[0])
		{
			this.sourceSelect.selectItem($source);
		}

		this.$source = $source;
		this.sourceKey = $source.data('key');
		this.setInstanceState('selectedSource', this.sourceKey);

		if (this.searching)
		{
			// Clear the search value without triggering the textchange event
			this.$search.data('textchangeValue', '');
			this.$search.val('');
			this.onStopSearching();
		}

		// Sort menu
		// ----------------------------------------------------------------------

		// Does this source have a structure?
		if (Garnish.hasAttr(this.$source, 'data-has-structure'))
		{
			if (!this.$structureSortAttribute)
			{
				this.$structureSortAttribute = $('<li><a data-attr="structure">'+Craft.t('Structure')+'</a></li>');
				this.sortMenu.addOptions(this.$structureSortAttribute.children());
			}

			this.$structureSortAttribute.prependTo(this.$sortAttributesList);
		}
		else if (this.$structureSortAttribute)
		{
			this.$structureSortAttribute.removeClass('sel').detach();
		}

		this.setStoredSortOptionsForSource();

		// View mode buttons
		// ----------------------------------------------------------------------

		// Clear out any previous view mode data
		this.$viewModeBtnContainer.empty();
		this.viewModeBtns = {};
		this.viewMode = null;

		// Get the new list of view modes
		this.sourceViewModes = this.getViewModesForSource();

		// Create the buttons if there's more than one mode available to this source
		if (this.sourceViewModes.length > 1)
		{
			this.$viewModeBtnTd.removeClass('hidden');

			for (var i = 0; i < this.sourceViewModes.length; i++)
			{
				var viewMode = this.sourceViewModes[i];

				var $viewModeBtn = $('<div data-view="'+viewMode.mode+'" role="button"' +
					' class="btn'+(typeof viewMode.className != 'undefined' ? ' '+viewMode.className : '')+'"' +
					' title="'+viewMode.title+'"' +
					(typeof viewMode.icon != 'undefined' ? ' data-icon="'+viewMode.icon+'"' : '') +
					'/>'
				).appendTo(this.$viewModeBtnContainer);

				this.viewModeBtns[viewMode.mode] = $viewModeBtn;

				this.addListener($viewModeBtn, 'click', { mode: viewMode.mode }, function(ev) {
					this.selectViewMode(ev.data.mode);
					this.updateElements();
				});
			}
		}
		else
		{
			this.$viewModeBtnTd.addClass('hidden');
		}

		// Figure out which mode we should start with
		var viewMode = this.getSelectedSourceState('mode');

		if (!viewMode || !this.doesSourceHaveViewMode(viewMode))
		{
			// Try to keep using the current view mode
			if (this.viewMode && this.doesSourceHaveViewMode(this.viewMode))
			{
				viewMode = this.viewMode;
			}
			// Just use the first one
			else
			{
				viewMode = this.sourceViewModes[0].mode;
			}
		}

		this.selectViewMode(viewMode);

		this.onSelectSource();

		return true;
	},

	setStoredSortOptionsForSource: function()
	{
		// Default to whatever's first
		this.setSortAttribute();
		this.setSortDirection('asc');

		var sortAttr = this.getSelectedSourceState('order'),
			sortDir = this.getSelectedSourceState('sort');

		if (sortAttr)
		{
			// Get the default
			sortAttr = this.getDefaultSort();

			if (Garnish.isArray(sortAttr))
			{
				sortDir = sortAttr[1];
				sortAttr = sortAttr[0];
			}
		}

		if (sortDir != 'asc' && sortDir != 'desc')
		{
			sortDir = 'asc';
		}

		this.setSortAttribute(sortAttr);
		this.setSortDirection(sortDir);
	},

	getDefaultSort: function()
	{
		// Default to whatever's first
		return [this.$sortAttributesList.find('a:first').data('attr'), 'asc'];
	},

	getViewModesForSource: function()
	{
		var viewModes = [
			{ mode: 'table', title: Craft.t('Display in a table'), icon: 'list' }
		];

		if (Garnish.hasAttr(this.$source, 'data-has-thumbs'))
		{
			viewModes.push({ mode: 'thumbs', title: Craft.t('Display as thumbnails'), icon: 'grid' });
		}

		return viewModes;
	},

	onSelectSource: function()
	{
		this.settings.onSelectSource(this.sourceKey);
	},

	onAfterHtmlInit: function()
	{
		this.settings.onAfterHtmlInit();
	},

	onSelectionChange: function()
	{
		this.updateActionTriggers();
		this.settings.onSelectionChange();
	},

	doesSourceHaveViewMode: function(viewMode)
	{
		for (var i = 0; i < this.sourceViewModes.length; i++)
		{
			if (this.sourceViewModes[i].mode == viewMode)
			{
				return true;
			}
		}

		return false;
	},

	selectViewMode: function(viewMode, force)
	{
		// Make sure that the current source supports it
		if (!force && !this.doesSourceHaveViewMode(viewMode))
		{
			viewMode = this.sourceViewModes[0].mode;
		}

		// Has anything changed?
		if (viewMode == this.viewMode)
		{
			return;
		}

		// Deselect the previous view mode
		if (this.viewMode && typeof this.viewModeBtns[this.viewMode] != 'undefined')
		{
			this.viewModeBtns[this.viewMode].removeClass('active');
		}

		this.viewMode = viewMode;
		this.setSelecetedSourceState('mode', this.viewMode);

		if (typeof this.viewModeBtns[this.viewMode] != 'undefined')
		{
			this.viewModeBtns[this.viewMode].addClass('active');
		}
	},

	rememberDisabledElementId: function(elementId)
	{
		var index = $.inArray(elementId, this.settings.disabledElementIds);

		if (index == -1)
		{
			this.settings.disabledElementIds.push(elementId);
		}
	},

	forgetDisabledElementId: function(elementId)
	{
		var index = $.inArray(elementId, this.settings.disabledElementIds);

		if (index != -1)
		{
			this.settings.disabledElementIds.splice(index, 1);
		}
	},

	enableElements: function($elements)
	{
		$elements.removeClass('disabled').parents('.disabled').removeClass('disabled');

		for (var i = 0; i < $elements.length; i++)
		{
			var elementId = $($elements[i]).data('id');
			this.forgetDisabledElementId(elementId);
		}

		this.settings.onEnableElements($elements);
	},

	disableElements: function($elements)
	{
		$elements.removeClass('sel').addClass('disabled');

		for (var i = 0; i < $elements.length; i++)
		{
			var elementId = $($elements[i]).data('id');
			this.rememberDisabledElementId(elementId);
		}

		this.settings.onDisableElements($elements);
	},

	getElementById: function(elementId)
	{
		return this.$elementContainer.find('[data-id='+elementId+']:first');
	},

	enableElementsById: function(elementIds)
	{
		elementIds = $.makeArray(elementIds);

		for (var i = 0; i < elementIds.length; i++)
		{
			var elementId = elementIds[i],
				$element = this.getElementById(elementId);

			if ($element.length)
			{
				this.enableElements($element);
			}
			else
			{
				this.forgetDisabledElementId(elementId);
			}
		}
	},

	disableElementsById: function(elementIds)
	{
		elementIds = $.makeArray(elementIds);

		for (var i = 0; i < elementIds.length; i++)
		{
			var elementId = elementIds[i],
				$element = this.getElementById(elementId);

			if ($element.length)
			{
				this.disableElements($element);
			}
			else
			{
				this.rememberDisabledElementId(elementId);
			}
		}
	},

	addButton: function($button)
	{
		if (this.showingSidebar)
		{
			this.$sidebarButtonContainer.append($button);
		}
		else
		{
			$('<td class="thin"/>').prependTo(this.$toolbarTableRow).append($button);
		}
	},

	addCallback: function(currentCallback, newCallback)
	{
		return $.proxy(function() {
			if (typeof currentCallback == 'function')
			{
				currentCallback.apply(this, arguments);
			}
			newCallback.apply(this, arguments);
		}, this);
	},

	setIndexBusy: function()
	{
		this.$mainSpinner.removeClass('hidden');
		this.isIndexBusy = true;
	},

	setIndexAvailable: function()
	{
		this.$mainSpinner.addClass('hidden');
		this.isIndexBusy = false;
	},

	disable: function()
	{
		this.sourceSelect.disable();

		if (this.elementSelect)
		{
			this.elementSelect.disable();
		}

		this.base();
	},

	enable: function()
	{
		this.sourceSelect.enable();

		if (this.elementSelect)
		{
			this.elementSelect.enable();
		}

		this.base();
	},

	// Private methods
	// =========================================================================

	_getSourcesInList: function($list)
	{
		return $list.children('li').children('a');
	},

	_getChildSources: function($source)
	{
		var $list = $source.siblings('ul');
		return this._getSourcesInList($list);
	},

	_getSourceToggle: function($source)
	{
		return $source.siblings('.toggle');
	},

	_initSources: function($sources)
	{
		for (var i = 0; i < $sources.length; i++)
		{
			this.initSource($($sources[i]));
		}
	},

	_deinitSources: function($sources)
	{
		for (var i = 0; i < $sources.length; i++)
		{
			this.deinitSource($($sources[i]));
		}
	},

	_onToggleClick: function(ev)
	{
		this._toggleSource($(ev.currentTarget).prev('a'));
		ev.stopPropagation();
	},

	_toggleSource: function($source)
	{
		if ($source.parent('li').hasClass('expanded'))
		{
			this._collapseSource($source);
		}
		else
		{
			this._expandSource($source);
		}
	},

	_expandSource: function($source)
	{
		$source.parent('li').addClass('expanded');

		this.$sidebar.trigger('resize');

		var $childSources = this._getChildSources($source);
		this._initSources($childSources);
	},

	_collapseSource: function($source)
	{
		$source.parent('li').removeClass('expanded');

		this.$sidebar.trigger('resize');

		var $childSources = this._getChildSources($source);
		this._deinitSources($childSources);
	},

	_prepForNewElements: function()
	{
		if (this.actions)
		{
			// Get rid of the old action triggers regardless of whether the new batch has actions or not
			this.hideActionTriggers();
			this._$triggers = null;
		}

		// Reset the element select
		if (this.elementSelect)
		{
			this.elementSelect.destroy();
			delete this.elementSelect;
		}

		if (this.$selectAllContainer)
		{
			// Git rid of the old select all button
			this.$selectAllContainer.detach();
		}
	},

	_setupNewElements: function($newElements)
	{
		if (this.selectable)
		{
			// Initialize the element selector
			this.elementSelect = this.createElementSelect();
			this.elementSelect.addItems($newElements.filter(':not(.disabled)'));

			if (this.actions)
			{
				// First time?
				if (!this.$selectAllContainer)
				{
					// Create the select all button
					this.$selectAllContainer = $('<td class="selectallcontainer thin"/>');
					this.$selectAllBtn = $('<div class="btn"/>').appendTo(this.$selectAllContainer);
					this.$selectAllCheckbox = $('<div class="checkbox"/>').appendTo(this.$selectAllBtn);

					this.addListener(this.$selectAllBtn, 'click', function()
					{
						if (this.elementSelect.totalSelected == 0)
						{
							this.elementSelect.selectAll();
						}
						else
						{
							this.elementSelect.deselectAll();
						}
					});
				}
				else
				{
					// Reset the select all button
					this.$selectAllCheckbox.removeClass('indeterminate checked');
				}

				// Place the select all button at the beginning of the toolbar
				this.$selectAllContainer.prependTo(this.$toolbarTableRow);
			}
		}

		// StructureTableSorter setup
		// -------------------------------------------------------------

		if (
			this.settings.context == 'index' &&
			this.getSelectedSourceState('mode') == 'table' &&
			this.getSelectedSortAttribute() == 'structure' &&
			Garnish.hasAttr(this.$table, 'data-structure-id')
		)
		{
			// Create the sorter
			this.structureTableSort = new Craft.StructureTableSorter(this, $newElements, {
				onSortChange: $.proxy(this, '_onStructureTableSortChange')
			});
		}
		else
		{
			this.structureTableSort = null;
		}
	},

	_onUpdateElements: function(response, append, $newElements)
	{
		Craft.appendHeadHtml(response.headHtml);
		Craft.appendFootHtml(response.footHtml);

		if (this._isStructureTableDraggingLastElements())
		{
			this._totalVisiblePostStructureTableDraggee = response.totalVisible;
			this._morePendingPostStructureTableDraggee = response.more;
		}
		else
		{
			this._totalVisible = response.totalVisible;
			this._morePending = this._morePendingPostStructureTableDraggee = response.more;
		}

		if (this.morePending)
		{
			// Is there room to load more right now?
			if (this.canLoadMore())
			{
				this.loadMore();
			}
			else
			{
				this.addListener(this.$scroller, 'scroll', 'maybeLoadMore');
			}
		}

		if (this.getSelectedSourceState('mode') == 'table')
		{
			Craft.cp.updateResponsiveTables();
		}

		this.onUpdateElements(append, $newElements);
	},

	_collapseElement: function($toggle, force)
	{
		if (!force && !$toggle.hasClass('expanded'))
		{
			return false;
		}

		$toggle.removeClass('expanded');

		// Find and remove the descendant rows
		var $row = $toggle.parent().parent(),
			id = $row.data('id'),
			level = $row.data('level'),
			$nextRow = $row.next();

		while ($nextRow.length)
		{
			if (!Garnish.hasAttr($nextRow, 'data-spinnerrow'))
			{
				if ($nextRow.data('level') <= level)
				{
					break;
				}

				if (this.elementSelect)
				{
					this.elementSelect.removeItems($nextRow);
				}

				if (this.structureTableSort)
				{
					this.structureTableSort.removeItems($nextRow);
				}

				this._totalVisible--;
			}

			var $nextNextRow = $nextRow.next();
			$nextRow.remove();
			$nextRow = $nextNextRow;
		}

		// Remember that this row should be collapsed
		if (!this.instanceState.collapsedElementIds)
		{
			this.instanceState.collapsedElementIds = [];
		}

		this.instanceState.collapsedElementIds.push(id);
		this.setInstanceState('collapsedElementIds', this.instanceState.collapsedElementIds);

		// Bottom of the index might be viewable now
		this.maybeLoadMore();
	},

	_expandElement: function($toggle, force)
	{
		if (!force && $toggle.hasClass('expanded'))
		{
			return false;
		}

		$toggle.addClass('expanded');

		// Remove this element from our list of collapsed elements
		if (this.instanceState.collapsedElementIds)
		{
			var $row = $toggle.parent().parent(),
				id = $row.data('id'),
				index = $.inArray(id, this.instanceState.collapsedElementIds);

			if (index != -1)
			{
				this.instanceState.collapsedElementIds.splice(index, 1);
				this.setInstanceState('collapsedElementIds', this.instanceState.collapsedElementIds);

				// Add a temporary row
				var $spinnerRow = this._createSpinnerRowAfter($row);

				// Update the elements
				var data = this.getControllerData();
				data.criteria.descendantOf = id;

				Craft.postActionRequest('element-index/get-more-elements', data, $.proxy(function(response, textStatus)
				{
					// Do we even care about this anymore?
					if (!$spinnerRow.parent().length)
					{
						return;
					}

					if (textStatus == 'success')
					{
						// Are there more descendants we didn't get in this batch?
						if (response.more)
						{
							// Remove all the elements after it
							var $nextRows = $spinnerRow.nextAll();

							if (this.elementSelect)
							{
								this.elementSelect.removeItems($nextRows);
							}

							if (this.structureTableSort)
							{
								this.structureTableSort.removeItems($nextRows);
							}

							$nextRows.remove();
							this._totalVisible -= $nextRows.length;
						}
						else
						{
							// Maintain the current 'more' status so
							response.more = this._morePending;
						}

						var $newElements = $(response.html);
						$spinnerRow.replaceWith($newElements);

						if (this.actions || this.settings.selectable)
						{
							this.elementSelect.addItems($newElements.filter(':not(.disabled)'));
							this.updateActionTriggers();
						}

						if (this.structureTableSort)
						{
							this.structureTableSort.addItems($newElements);
						}

						// Tweak response.totalVisible to account for the elements that come before them
						response.totalVisible += this._totalVisible;

						this._onUpdateElements(response, true, $newElements);
					}

				}, this));
			}
		}
	},

	_createSpinnerRowAfter: function($row)
	{
		return $(
			'<tr data-spinnerrow>' +
				'<td class="centeralign" colspan="'+$row.children().length+'">' +
					'<div class="spinner"/>' +
				'</td>' +
			'</tr>'
		).insertAfter($row);
	},

	_isStructureTableDraggingLastElements: function()
	{
		return (this.structureTableSort && this.structureTableSort.dragging && this.structureTableSort.draggingLastElements);
	},

	_createTriggers: function()
	{
		var triggers = [],
			safeMenuActions = [],
			destructiveMenuActions = [];

		for (var i = 0; i < this.actions.length; i++)
		{
			var action = this.actions[i];

			if (action.trigger)
			{
				var $form = $('<form id="'+action.type+'-actiontrigger"/>')
					.data('action', action.type)
					.append(action.trigger);

				this.addListener($form, 'submit', 'handleActionTriggerSubmit');
				triggers.push($form);
			}
			else
			{
				if (!action.destructive)
				{
					safeMenuActions.push(action);
				}
				else
				{
					destructiveMenuActions.push(action);
				}
			}
		}

		var $btn;

		if (safeMenuActions.length || destructiveMenuActions.length)
		{
			var $menuTrigger = $('<form/>');

			$btn = $('<div class="btn menubtn" data-icon="settings" title="'+Craft.t('Actions')+'"/>').appendTo($menuTrigger);

			var $menu = $('<ul class="menu"/>').appendTo($menuTrigger),
				$safeList = this._createMenuTriggerList(safeMenuActions),
				$destructiveList = this._createMenuTriggerList(destructiveMenuActions);

			if ($safeList)
			{
				$safeList.appendTo($menu);
			}

			if ($safeList && $destructiveList)
			{
				$('<hr/>').appendTo($menu);
			}

			if ($destructiveList)
			{
				$destructiveList.appendTo($menu);
			}

			triggers.push($menuTrigger);
		}

		// Add a filler TD
		triggers.push('');

		this._$triggers = $();

		for (var i = 0; i < triggers.length; i++)
		{
			var $td = $('<td class="'+(i < triggers.length - 1 ? 'thin' : '')+'"/>').append(triggers[i]);
			this._$triggers = this._$triggers.add($td);
		}

		this._$triggers.insertAfter(this.$selectAllContainer);
		Craft.appendHeadHtml(this.actionsHeadHtml);
		Craft.appendFootHtml(this.actionsFootHtml);

		Craft.initUiElements(this._$triggers);

		if ($btn)
		{
			$btn.data('menubtn').on('optionSelect', $.proxy(this, 'handleMenuActionTriggerSubmit'));
		}
	},

	_createMenuTriggerList: function(actions)
	{
		if (actions && actions.length)
		{
			var $ul = $('<ul/>');

			for (var i = 0; i < actions.length; i++)
			{
				var type = actions[i].type;
				$('<li><a id="'+type.replace(/[\[\]\\]+/g, '-')+'-actiontrigger" data-action="'+type+'">'+actions[i].name+'</a></li>').appendTo($ul);
			}

			return $ul;
		}
	}
},

// Static Properties
// =============================================================================

{
	defaults: {
		context: 'index',
		storageKey: null,
		criteria: null,
		disabledElementIds: [],
		selectable: false,
		multiSelect: false,
		onUpdateElements: $.noop,
		onSelectionChange: $.noop,
		onEnableElements: $.noop,
		onDisableElements: $.noop,
		onSelectSource: $.noop,
		onAfterHtmlInit: $.noop
	}
});

/**
 * Element Select input
 */
Craft.BaseElementSelectInput = Garnish.Base.extend(
{
	elementSelect: null,
	elementSort: null,
	modal: null,

	$container: null,
	$elementsContainer: null,
	$elements: null,
	$addElementBtn: null,

	_initialized: false,

	init: function(settings)
	{
		// Normalize the settings and set them
		// ---------------------------------------------------------------------

		// Are they still passing in a bunch of arguments?
		if (!$.isPlainObject(settings))
		{
			// Loop through all of the old arguments and apply them to the settings
			var normalizedSettings = {},
				args = ['id', 'name', 'elementType', 'sources', 'criteria', 'sourceElementId', 'limit', 'modalStorageKey', 'fieldId'];

			for (var i = 0; i < args.length; i++)
			{
				if (typeof arguments[i] != typeof undefined)
				{
					normalizedSettings[args[i]] = arguments[i];
				}
				else
				{
					break;
				}
			}

			settings = normalizedSettings;
		}

		this.setSettings(settings, Craft.BaseElementSelectInput.defaults);

		// Apply the storage key prefix
		if (this.settings.modalStorageKey)
		{
			this.modalStorageKey = 'BaseElementSelectInput.'+this.settings.modalStorageKey;
		}

		// No reason for this to be sortable if we're only allowing 1 selection
		if (this.settings.limit == 1)
		{
			this.settings.sortable = false;
		}

		this.$container = this.getContainer();
		this.$elementsContainer = this.getElementsContainer();
		this.$addElementBtn = this.getAddElementsBtn();

		if (this.$addElementBtn && this.settings.limit == 1)
		{
			this.$addElementBtn
				.css('position', 'absolute')
				.css('top', 0)
				.css(Craft.left, 0);
		}

		this.initElementSelect();
		this.initElementSort();
		this.resetElements();

		if (this.$addElementBtn)
		{
			this.addListener(this.$addElementBtn, 'activate', 'showModal');
		}

		this._initialized = true;
	},

	get totalSelected()
	{
		return this.$elements.length;
	},

	getContainer: function()
	{
		return $('#'+this.settings.id);
	},

	getElementsContainer: function()
	{
		return this.$container.children('.elements');
	},

	getElements: function()
	{
		return this.$elementsContainer.children();
	},

	getAddElementsBtn: function()
	{
		return this.$container.children('.btn.add');
	},

	initElementSelect: function()
	{
		if (this.settings.selectable)
		{
			this.elementSelect = new Garnish.Select({
				multi: this.settings.sortable,
				filter: ':not(.delete)'
			});
		}
	},

	initElementSort: function()
	{
		if (this.settings.sortable)
		{
			this.elementSort = new Garnish.DragSort({
				container: this.$elementsContainer,
				filter: (this.settings.selectable ? $.proxy(function()
				{
					// Only return all the selected items if the target item is selected
					if (this.elementSort.$targetItem.hasClass('sel'))
					{
						return this.elementSelect.getSelectedItems();
					}
					else
					{
						return this.elementSort.$targetItem;
					}
				}, this) : null),
				ignoreHandleSelector: '.delete',
				collapseDraggees: true,
				magnetStrength: 4,
				helperLagBase: 1.5,
				onSortChange: (this.settings.selectable ? $.proxy(function() {
					this.elementSelect.resetItemOrder();
				}, this) : null)
			});
		}
	},

	canAddMoreElements: function()
	{
		return (!this.settings.limit || this.$elements.length < this.settings.limit);
	},

	updateAddElementsBtn: function()
	{
		if (this.canAddMoreElements())
		{
			this.enableAddElementsBtn();
		}
		else
		{
			this.disableAddElementsBtn();
		}
	},

	disableAddElementsBtn: function()
	{
		if (this.$addElementBtn && !this.$addElementBtn.hasClass('disabled'))
		{
			this.$addElementBtn.addClass('disabled');

			if (this.settings.limit == 1)
			{
				if (this._initialized)
				{
					this.$addElementBtn.velocity('fadeOut', Craft.BaseElementSelectInput.ADD_FX_DURATION);
				}
				else
				{
					this.$addElementBtn.hide();
				}
			}
		}
	},

	enableAddElementsBtn: function()
	{
		if (this.$addElementBtn && this.$addElementBtn.hasClass('disabled'))
		{
			this.$addElementBtn.removeClass('disabled');

			if (this.settings.limit == 1)
			{
				if (this._initialized)
				{
					this.$addElementBtn.velocity('fadeIn', Craft.BaseElementSelectInput.REMOVE_FX_DURATION);
				}
				else
				{
					this.$addElementBtn.show();
				}
			}
		}
	},

	resetElements: function()
	{
		this.$elements = $();
		this.addElements(this.getElements());
	},

	addElements: function($elements)
	{
		if (this.settings.selectable)
		{
			this.elementSelect.addItems($elements);
		}

		if (this.settings.sortable)
		{
			this.elementSort.addItems($elements);
		}

		if (this.settings.editable)
		{
			this.addListener($elements, 'dblclick', function(ev)
			{
				Craft.showElementEditor($(ev.currentTarget));
			});
		}

		$elements.find('.delete').on('click', $.proxy(function(ev)
		{
			this.removeElement($(ev.currentTarget).closest('.element'));
		}, this));

		this.$elements = this.$elements.add($elements);
		this.updateAddElementsBtn();
	},

	removeElements: function($elements)
	{
		if (this.settings.selectable)
		{
			this.elementSelect.removeItems($elements);
		}

		if (this.modal)
		{
			var ids = [];

			for (var i = 0; i < $elements.length; i++)
			{
				var id = $elements.eq(i).data('id');

				if (id)
				{
					ids.push(id);
				}
			}

			if (ids.length)
			{
				this.modal.elementIndex.enableElementsById(ids);
			}
		}

		// Disable the hidden input in case the form is submitted before this element gets removed from the DOM
		$elements.children('input').prop('disabled', true);

		this.$elements = this.$elements.not($elements);
		this.updateAddElementsBtn();

		this.onRemoveElements();
	},

	removeElement: function($element)
	{
		this.removeElements($element);
		this.animateElementAway($element, function() {
			$element.remove();
		});
	},

	animateElementAway: function($element, callback)
	{
		$element.css('z-index', 0);

		var animateCss = {
			opacity: -1
		};
		animateCss['margin-'+Craft.left] = -($element.outerWidth() + parseInt($element.css('margin-'+Craft.right)));

		$element.velocity(animateCss, Craft.BaseElementSelectInput.REMOVE_FX_DURATION, callback);
	},

	showModal: function()
	{
		// Make sure we haven't reached the limit
		if (!this.canAddMoreElements())
		{
			return;
		}

		if (!this.modal)
		{
			this.modal = this.createModal();
		}
		else
		{
			this.modal.show();
		}
	},

	createModal: function()
	{
		return Craft.createElementSelectorModal(this.settings.elementType, this.getModalSettings());
	},

	getModalSettings: function()
	{
		return $.extend({
			storageKey:         this.modalStorageKey,
			sources:            this.settings.sources,
			criteria:           this.settings.criteria,
			multiSelect:        (this.settings.limit != 1),
			disabledElementIds: this.getDisabledElementIds(),
			onSelect:           $.proxy(this, 'onModalSelect')
		}, this.settings.modalSettings);
	},

	getSelectedElementIds: function()
	{
		var ids = [];

		for (var i = 0; i < this.$elements.length; i++)
		{
			ids.push(this.$elements.eq(i).data('id'));
		}

		return ids;
	},

	getDisabledElementIds: function()
	{
		var ids = this.getSelectedElementIds();

		if (this.settings.sourceElementId)
		{
			ids.push(this.settings.sourceElementId);
		}

		return ids;
	},

	onModalSelect: function(elements)
	{
		if (this.settings.limit)
		{
			// Cut off any excess elements
			var slotsLeft = this.settings.limit - this.$elements.length;

			if (elements.length > slotsLeft)
			{
				elements = elements.slice(0, slotsLeft);
			}
		}

		this.selectElements(elements);
		this.updateDisabledElementsInModal();
	},

	selectElements: function(elements)
	{
		for (var i = 0; i < elements.length; i++)
		{
			var element = elements[i],
				$element = this.createNewElement(element);

			this.appendElement($element);
			this.addElements($element);
			this.animateElementIntoPlace(element.$element, $element);
		}

		this.onSelectElements(elements);
	},

	createNewElement: function(elementInfo)
	{
		var $element = elementInfo.$element.clone();

		// Make a couple tweaks
		$element.addClass('removable');
		$element.prepend('<input type="hidden" name="'+this.settings.name+'[]" value="'+elementInfo.id+'">' +
			'<a class="delete icon" title="'+Craft.t('Remove')+'"></a>');

		return $element;
	},

	appendElement: function($element)
	{
		$element.appendTo(this.$elementsContainer);
	},

	animateElementIntoPlace: function($modalElement, $inputElement)
	{
		var origOffset = $modalElement.offset(),
			destOffset = $inputElement.offset(),
			$helper = $inputElement.clone().appendTo(Garnish.$bod);

		$inputElement.css('visibility', 'hidden');

		$helper.css({
			position: 'absolute',
			zIndex: 10000,
			top: origOffset.top,
			left: origOffset.left
		});

		var animateCss = {
			top: destOffset.top,
			left: destOffset.left
		};

		$helper.velocity(animateCss, Craft.BaseElementSelectInput.ADD_FX_DURATION, function() {
			$helper.remove();
			$inputElement.css('visibility', 'visible');
		});
	},

	updateDisabledElementsInModal: function()
	{
		if (this.modal.elementIndex)
		{
			this.modal.elementIndex.disableElementsById(this.getDisabledElementIds());
		}
	},

	getElementById: function(id)
	{
		for (var i = 0; i < this.$elements.length; i++)
		{
			var $element = this.$elements.eq(i);

			if ($element.data('id') == id)
			{
				return $element;
			}
		}
	},

	onSelectElements: function(elements)
	{
		this.trigger('selectElements', { elements: elements });
		this.settings.onSelectElements(elements);
	},

	onRemoveElements: function()
	{
		this.trigger('removeElements');
		this.settings.onRemoveElements();
	}
},
{
	ADD_FX_DURATION: 200,
	REMOVE_FX_DURATION: 200,

	defaults: {
		id: null,
		name: null,
		fieldId: null,
		elementType: null,
		sources: null,
		criteria: {},
		sourceElementId: null,
		limit: null,
		modalStorageKey: null,
		modalSettings: {},
		onSelectElements: $.noop,
		onRemoveElements: $.noop,
		sortable: true,
		selectable: true,
		editable: true
	}
});

/**
 * Element selector modal class
 */
Craft.BaseElementSelectorModal = Garnish.Modal.extend(
{
	elementType: null,
	elementIndex: null,

	$body: null,
	$selectBtn: null,
	$sidebar: null,
	$sources: null,
	$sourceToggles: null,
	$main: null,
	$search: null,
	$elements: null,
	$tbody: null,
	$buttons: null,
	$cancelBtn: null,
	$footerSpinner: null,

	init: function(elementType, settings)
	{
		this.elementType = elementType;
		this.setSettings(settings, Craft.BaseElementSelectorModal.defaults);

		// Build the modal
		var $container = $('<div class="modal elementselectormodal"></div>').appendTo(Garnish.$bod),
			$body = $('<div class="body"><div class="spinner big"></div></div>').appendTo($container),
			$footer = $('<div class="footer"/>').appendTo($container);

		this.base($container, this.settings);

		this.$footerSpinner = $('<div class="spinner hidden"/>').appendTo($footer);
		this.$buttons = $('<div class="buttons rightalign first"/>').appendTo($footer);
		this.$cancelBtn = $('<div class="btn">'+Craft.t('Cancel')+'</div>').appendTo(this.$buttons);
		this.$selectBtn = $('<div class="btn disabled submit">'+Craft.t('Select')+'</div>').appendTo(this.$buttons);

		this.$body = $body;

		this.addListener(this.$cancelBtn, 'activate', 'cancel');
		this.addListener(this.$selectBtn, 'activate', 'selectElements');
	},

	onFadeIn: function()
	{
		if (!this.elementIndex)
		{
			// Get the modal body HTML based on the settings
			var data = {
				context:     'modal',
				elementType: this.elementType,
				sources:     this.settings.sources
			};

			Craft.postActionRequest('elements/get-modal-body', data, $.proxy(function(response, textStatus)
			{
				if (textStatus == 'success')
				{
					this.$body.html(response);

					if (this.$body.has('.sidebar:not(.hidden)').length)
					{
						this.$body.addClass('has-sidebar');
					}

					// Initialize the element index
					this.elementIndex = Craft.createElementIndex(this.elementType, this.$body, {
						context:            'modal',
						storageKey:         this.settings.storageKey,
						criteria:           this.settings.criteria,
						disabledElementIds: this.settings.disabledElementIds,
						selectable:         true,
						multiSelect:        this.settings.multiSelect,
						onSelectionChange:  $.proxy(this, 'onSelectionChange'),
						onUpdateElements:   $.proxy(this, 'onUpdateElements'),
						onEnableElements:   $.proxy(this, 'onEnableElements'),
						onDisableElements:  $.proxy(this, 'onDisableElements')
					});
				}

			}, this));
		}
		else
		{
			// Auto-focus the Search box
			if (!Garnish.isMobileBrowser(true))
			{
				this.elementIndex.$search.focus();
			}
		}

		this.base();
	},

	onUpdateElements: function(appended)
	{
		if (!appended)
		{
			// Double-clicking should select the elements
			this.addListener(this.elementIndex.$elementContainer, 'dblclick', 'selectElements');
		}
	},

	onSelectionChange: function()
	{
		this.updateSelectBtnState();
	},

	updateSelectBtnState: function()
	{
		if (this.$selectBtn)
		{
			if (this.elementIndex.elementSelect.totalSelected)
			{
				this.enableSelectBtn();
			}
			else
			{
				this.disableSelectBtn();
			}
		}
	},

	enableSelectBtn: function()
	{
		this.$selectBtn.removeClass('disabled');
	},

	disableSelectBtn: function()
	{
		this.$selectBtn.addClass('disabled');
	},

	enableCancelBtn: function()
	{
		this.$cancelBtn.removeClass('disabled');
	},

	disableCancelBtn: function()
	{
		this.$cancelBtn.addClass('disabled');
	},

	showFooterSpinner: function()
	{
		this.$footerSpinner.removeClass('hidden');
	},

	hideFooterSpinner: function()
	{
		this.$footerSpinner.addClass('hidden');
	},

	onEnableElements: function($elements)
	{
		this.elementIndex.elementSelect.addItems($elements);
	},

	onDisableElements: function($elements)
	{
		this.elementIndex.elementSelect.removeItems($elements);
	},

	cancel: function()
	{
		if (!this.$cancelBtn.hasClass('disabled'))
		{
			this.hide();
		}
	},

	selectElements: function()
	{
		if (this.elementIndex && this.elementIndex.elementSelect && this.elementIndex.elementSelect.totalSelected)
		{
			this.elementIndex.elementSelect.clearMouseUpTimeout();

			var $selectedItems = this.elementIndex.elementSelect.getSelectedItems(),
				elementInfo = this.getElementInfo($selectedItems);

			this.onSelect(elementInfo);

			if (this.settings.disableElementsOnSelect)
			{
				this.elementIndex.disableElements(this.elementIndex.elementSelect.getSelectedItems());
			}

			if (this.settings.hideOnSelect)
			{
				this.hide();
			}
		}
	},

	getElementInfo: function($selectedItems)
	{
		var info = [];

		for (var i = 0; i < $selectedItems.length; i++)
		{
			var $item = $($selectedItems[i]);

			info.push(Craft.getElementInfo($item));
		}

		return info;
	},

	show: function()
	{
		this.updateSelectBtnState();
		this.base();
	},

	onSelect: function(elementInfo)
	{
		this.settings.onSelect(elementInfo);
	},

	disable: function()
	{
		if (this.elementIndex)
		{
			this.elementIndex.disable();
		}

		this.base();
	},

	enable: function()
	{
		if (this.elementIndex)
		{
			this.elementIndex.enable();
		}

		this.base();
	}
},
{
	defaults: {
		resizable: true,
		storageKey: null,
		sources: null,
		criteria: null,
		multiSelect: false,
		disabledElementIds: [],
		disableElementsOnSelect: false,
		hideOnSelect: true,
		onCancel: $.noop,
		onSelect: $.noop
	}
});

/**
 * Input Generator
 */
Craft.BaseInputGenerator = Garnish.Base.extend(
{
	$source: null,
	$target: null,
	settings: null,

	listening: null,
	timeout: null,

	init: function(source, target, settings)
	{
		this.$source = $(source);
		this.$target = $(target);
		this.setSettings(settings);

		this.startListening();
	},

	setNewSource: function(source)
	{
		var listening = this.listening;
		this.stopListening();

		this.$source = $(source);

		if (listening)
		{
			this.startListening();
		}
	},

	startListening: function()
	{
		if (this.listening)
		{
			return;
		}

		this.listening = true;

		this.addListener(this.$source, 'textchange', 'onTextChange');

		this.addListener(this.$target, 'focus', function() {
			this.addListener(this.$target, 'textchange', 'stopListening');
			this.addListener(this.$target, 'blur', function() {
				this.removeListener(this.$target, 'textchange,blur');
			});
		});
	},

	stopListening: function()
	{
		if (!this.listening)
		{
			return;
		}

		this.listening = false;

		this.removeAllListeners(this.$source);
		this.removeAllListeners(this.$target);
	},

	onTextChange: function()
	{
		if (this.timeout)
		{
			clearTimeout(this.timeout);
		}

		this.timeout = setTimeout($.proxy(this, 'updateTarget'), 250);
	},

	updateTarget: function()
	{
		var sourceVal = this.$source.val(),
			targetVal = this.generateTargetValue(sourceVal);

		this.$target.val(targetVal);
		this.$target.trigger('textchange');
	},

	generateTargetValue: function(sourceVal)
	{
		return sourceVal;
	}
});

/**
 * Admin table class
 */
Craft.AdminTable = Garnish.Base.extend(
{
	settings: null,
	totalItems: null,
	sorter: null,

	$noItems: null,
	$table: null,
	$tbody: null,
	$deleteBtns: null,

	init: function(settings)
	{
		this.setSettings(settings, Craft.AdminTable.defaults);

		if (!this.settings.allowDeleteAll)
		{
			this.settings.minItems = 1;
		}

		this.$noItems = $(this.settings.noItemsSelector);
		this.$table = $(this.settings.tableSelector);
		this.$tbody  = this.$table.children('tbody');
		this.totalItems = this.$tbody.children().length;

		if (this.settings.sortable)
		{
			this.sorter = new Craft.DataTableSorter(this.$table, {
				onSortChange: $.proxy(this, 'reorderItems')
			});
		}

		this.$deleteBtns = this.$table.find('.delete');
		this.addListener(this.$deleteBtns, 'click', 'handleDeleteBtnClick');

		this.updateUI();
	},

	addRow: function(row)
	{
		if (this.settings.maxItems && this.totalItems >= this.settings.maxItems)
		{
			// Sorry pal.
			return;
		}

		var $row = $(row).appendTo(this.$tbody),
			$deleteBtn = $row.find('.delete');

		if (this.settings.sortable)
		{
			this.sorter.addItems($row);
		}

		this.$deleteBtns = this.$deleteBtns.add($deleteBtn);

		this.addListener($deleteBtn, 'click', 'handleDeleteBtnClick');
		this.totalItems++;

		this.updateUI();
	},

	reorderItems: function()
	{
		if (!this.settings.sortable)
		{
			return false;
		}

		// Get the new field order
		var ids = [];

		for (var i = 0; i < this.sorter.$items.length; i++)
		{
			var id = $(this.sorter.$items[i]).attr(this.settings.idAttribute);
			ids.push(id);
		}

		// Send it to the server
		var data = {
			ids: JSON.stringify(ids)
		};

		Craft.postActionRequest(this.settings.reorderAction, data, $.proxy(function(response, textStatus)
		{
			if (textStatus == 'success')
			{
				if (response.success)
				{
					Craft.cp.displayNotice(Craft.t(this.settings.reorderSuccessMessage));
				}
				else
				{
					Craft.cp.displayError(Craft.t(this.settings.reorderFailMessage));
				}
			}

		}, this));
	},

	handleDeleteBtnClick: function(event)
	{
		if (this.settings.minItems && this.totalItems <= this.settings.minItems)
		{
			// Sorry pal.
			return;
		}

		var $row = $(event.target).closest('tr');

		if (this.confirmDeleteItem($row))
		{
			this.deleteItem($row);
		}
	},

	confirmDeleteItem: function($row)
	{
		var name = this.getItemName($row);
		return confirm(Craft.t(this.settings.confirmDeleteMessage, { name: name }));
	},

	deleteItem: function($row)
	{
		var data = {
			id: this.getItemId($row)
		};

		Craft.postActionRequest(this.settings.deleteAction, data, $.proxy(function(response, textStatus)
		{
			if (textStatus == 'success')
			{
				this.handleDeleteItemResponse(response, $row);
			}
		}, this));
	},

	handleDeleteItemResponse: function(response, $row)
	{
		var id = this.getItemId($row),
			name = this.getItemName($row);

		if (response.success)
		{
			$row.remove();
			this.totalItems--;
			this.updateUI();
			this.onDeleteItem(id);

			Craft.cp.displayNotice(Craft.t(this.settings.deleteSuccessMessage, { name: name }));
		}
		else
		{
			Craft.cp.displayError(Craft.t(this.settings.deleteFailMessage, { name: name }));
		}
	},

	onDeleteItem: function(id)
	{
		this.settings.onDeleteItem(id);
	},

	getItemId: function($row)
	{
		return $row.attr(this.settings.idAttribute);
	},

	getItemName: function($row)
	{
		return $row.attr(this.settings.nameAttribute);
	},

	updateUI: function()
	{
		// Show the "No Whatever Exists" message if there aren't any
		if (this.totalItems == 0)
		{
			this.$table.hide();
			this.$noItems.removeClass('hidden');
		}
		else
		{
			this.$table.show();
			this.$noItems.addClass('hidden');
		}

		// Disable the sort buttons if there's only one row
		if (this.settings.sortable)
		{
			var $moveButtons = this.$table.find('.move');

			if (this.totalItems == 1)
			{
				$moveButtons.addClass('disabled');
			}
			else
			{
				$moveButtons.removeClass('disabled');
			}
		}

		// Disable the delete buttons if we've reached the minimum items
		if (this.settings.minItems && this.totalItems <= this.settings.minItems)
		{
			this.$deleteBtns.addClass('disabled');
		}
		else
		{
			this.$deleteBtns.removeClass('disabled');
		}

		// Hide the New Whatever button if we've reached the maximum items
		if (this.settings.newItemBtnSelector)
		{
			if (this.settings.maxItems && this.totalItems >= this.settings.maxItems)
			{
				$(this.settings.newItemBtnSelector).addClass('hidden');
			}
			else
			{
				$(this.settings.newItemBtnSelector).removeClass('hidden');
			}
		}
	}
},
{
	defaults: {
		tableSelector: null,
		noItemsSelector: null,
		newItemBtnSelector: null,
		idAttribute: 'data-id',
		nameAttribute: 'data-name',
		sortable: false,
		allowDeleteAll: true,
		minItems: 0,
		maxItems: null,
		reorderAction: null,
		deleteAction: null,
		reorderSuccessMessage: Craft.t('New order saved.'),
		reorderFailMessage:    Craft.t('Couldn’t save new order.'),
		confirmDeleteMessage:  Craft.t('Are you sure you want to delete “{name}”?'),
		deleteSuccessMessage:  Craft.t('“{name}” deleted.'),
		deleteFailMessage:     Craft.t('Couldn’t delete “{name}”.'),
		onDeleteItem: $.noop
	}
});

/**
 * Asset index class
 */
Craft.AssetIndex = Craft.BaseElementIndex.extend(
{
	$uploadButton: null,
	$uploadInput: null,
	$progressBar: null,
	$folders: null,

	uploader: null,
	promptHandler: null,
	progressBar: null,

	_uploadTotalFiles: 0,
	_uploadFileProgress: {},
	_uploadedFileIds: [],
	_currentUploaderSettings: {},

	_fileDrag: null,
	_folderDrag: null,
	_expandDropTargetFolderTimeout: null,
	_tempExpandedFolders: [],

	_fileConflictTemplate: {
		message: "File “{file}” already exists at target location.",
		choices: [
			{value: 'keepBoth', title: Craft.t('Keep both')},
			{value: 'replace', title: Craft.t('Replace it')}
		]
	},
	_folderConflictTemplate: {
		message: "Folder “{folder}” already exists at target location",
		choices: [
			{value: 'replace', title: Craft.t('Replace the folder (all existing files will be deleted)')},
			{value: 'merge', title: Craft.t('Merge the folder (any conflicting files will be replaced)')}
		]
	},


	init: function(elementType, $container, settings)
	{
		this.base(elementType, $container, settings);

		if (this.settings.context == 'index')
		{
			this._initIndexPageMode();
		}
	},

	initSource: function($source)
	{
		this.base($source);

		this._createFolderContextMenu($source);

		if (this.settings.context == 'index')
		{
			if (this._folderDrag && this._getSourceLevel($source) > 1)
			{
				this._folderDrag.addItems($source.parent());
			}

			if (this._fileDrag)
			{
				this._fileDrag.updateDropTargets();
			}
		}
	},

	deinitSource: function($source)
	{
		this.base($source);

		// Does this source have a context menu?
		var contextMenu = $source.data('contextmenu');

		if (contextMenu)
		{
			contextMenu.destroy();
		}

		if (this.settings.context == 'index')
		{
			if (this._folderDrag && this._getSourceLevel($source) > 1)
			{
				this._folderDrag.removeItems($source.parent());
			}

			if (this._fileDrag)
			{
				this._fileDrag.updateDropTargets();
			}
		}
	},

	_getSourceLevel: function($source)
	{
		return $source.parentsUntil('nav', 'ul').length;
	},

	/**
	 * Initialize the index page-specific features
	 */
	_initIndexPageMode: function()
	{
		// Make the elements selectable
		this.settings.selectable = true;
		this.settings.multiSelect = true;

		var onDragStartProxy = $.proxy(this, '_onDragStart'),
			onDropTargetChangeProxy = $.proxy(this, '_onDropTargetChange');

		// File dragging
		// ---------------------------------------------------------------------

		this._fileDrag = new Garnish.DragDrop({
			activeDropTargetClass: 'sel',
			helperOpacity: 0.75,

			filter: $.proxy(function()
			{
				return this.elementSelect.getSelectedItems();
			}, this),

			helper: $.proxy(function($file)
			{
				return this._getFileDragHelper($file);
			}, this),

			dropTargets: $.proxy(function()
			{
				var targets = [];

				for (var i = 0; i < this.$sources.length; i++)
				{
					targets.push($(this.$sources[i]));
				}

				return targets;
			}, this),

			onDragStart: onDragStartProxy,
			onDropTargetChange: onDropTargetChangeProxy,
			onDragStop: $.proxy(this, '_onFileDragStop')
		});

		// Folder dragging
		// ---------------------------------------------------------------------

		this._folderDrag = new Garnish.DragDrop(
		{
			activeDropTargetClass: 'sel',
			helperOpacity: 0.75,

			filter: $.proxy(function()
			{
				// Return each of the selected <a>'s parent <li>s, except for top level drag attempts.
				var $selected = this.sourceSelect.getSelectedItems(),
					draggees = [];

				for (var i = 0; i < $selected.length; i++)
				{
					var $source = $($selected[i]).parent();

					if ($source.hasClass('sel') && this._getSourceLevel($source) > 1)
					{
						draggees.push($source[0]);
					}
				}

				return $(draggees);
			}, this),

			helper: $.proxy(function($draggeeHelper)
			{
				var $helperSidebar = $('<div class="sidebar" style="padding-top: 0; padding-bottom: 0;"/>'),
					$helperNav = $('<nav/>').appendTo($helperSidebar),
					$helperUl = $('<ul/>').appendTo($helperNav);

				$draggeeHelper.appendTo($helperUl).removeClass('expanded');
				$draggeeHelper.children('a').addClass('sel');

				// Match the style
				$draggeeHelper.css({
					'padding-top':    this._folderDrag.$draggee.css('padding-top'),
					'padding-right':  this._folderDrag.$draggee.css('padding-right'),
					'padding-bottom': this._folderDrag.$draggee.css('padding-bottom'),
					'padding-left':   this._folderDrag.$draggee.css('padding-left')
				});

				return $helperSidebar;
			}, this),

			dropTargets: $.proxy(function()
			{
				var targets = [];

				// Tag the dragged folder and it's subfolders
				var draggedSourceIds = [];
				this._folderDrag.$draggee.find('a[data-key]').each(function()
				{
					draggedSourceIds.push($(this).data('key'));
				});

				for (var i = 0; i < this.$sources.length; i++)
				{
					var $source = $(this.$sources[i]);
					if (!Craft.inArray($source.data('key'), draggedSourceIds))
					{
						targets.push($source);
					}
				}

				return targets;
			}, this),

			onDragStart: onDragStartProxy,
			onDropTargetChange: onDropTargetChangeProxy,
			onDragStop: $.proxy(this, '_onFolderDragStop')
		});
	},

	/**
	 * On file drag stop
	 */
	_onFileDragStop: function()
	{
		if (this._fileDrag.$activeDropTarget && this._fileDrag.$activeDropTarget[0] != this.$source[0])
		{
			// Keep it selected
			var originatingSource = this.$source;

			var targetFolderId = this._getFolderIdFromSourceKey(this._fileDrag.$activeDropTarget.data('key')),
				originalFileIds = [];

			// For each file, prepare array data.
			for (var i = 0; i < this._fileDrag.$draggee.length; i++)
			{
				var originalFileId = Craft.getElementInfo(this._fileDrag.$draggee[i]).id;

				originalFileIds.push(originalFileId);
			}

			// Are any files actually getting moved?
			if (originalFileIds.length)
			{
				this.setIndexBusy();

				this._positionProgressBar();
				this.progressBar.resetProgressBar();
				this.progressBar.setItemCount(originalFileIds.length);
				this.progressBar.showProgressBar();


				// For each file to move a separate request
				var parameterArray = [];
				for (i = 0; i < originalFileIds.length; i++)
				{
					parameterArray.push({
						fileId: originalFileIds[i],
						folderId: targetFolderId
					});
				}

				// Define the callback for when all file moves are complete
				var onMoveFinish = $.proxy(function(responseArray)
				{
					this.promptHandler.resetPrompts();

					// Loop trough all the responses
					for (var i = 0; i < responseArray.length; i++)
					{
						var response = responseArray[i];

						// Push prompt into prompt array
						if (response.prompt)
						{
							promptData = this._fileConflictTemplate;
							promptData.message = Craft.t(promptData.message, {file: response.filename});
							response.prompt = promptData;

							this.promptHandler.addPrompt(response);
						}

						if (response.error)
						{
							alert(response.error);
						}
					}

					this.setIndexAvailable();
					this.progressBar.hideProgressBar();
					var reloadIndex = false;

					var performAfterMoveActions = function ()
					{
						// Select original source
						this.sourceSelect.selectItem(originatingSource);

						// Make sure we use the correct offset when fetching the next page
						this._totalVisible -= this._fileDrag.$draggee.length;

						// And remove the elements that have been moved away
						for (var i = 0; i < originalFileIds.length; i++)
						{
							$('[data-id=' + originalFileIds[i] + ']').remove();
						}

						this.elementSelect.deselectAll();
						this._collapseExtraExpandedFolders(targetFolderId);

						if (reloadIndex)
						{
							this.updateElements();
						}
					};

					if (this.promptHandler.getPromptCount())
					{
						// Define callback for completing all prompts
						var promptCallback = $.proxy(function(returnData)
						{
							var newParameterArray = [];

							// Loop trough all returned data and prepare a new request array
							for (var i = 0; i < returnData.length; i++)
							{
								if (returnData[i].choice == 'cancel')
								{
									reloadIndex = true;
									continue;
								}

								// Find the matching request parameters for this file and modify them slightly
								for (var ii = 0; ii < parameterArray.length; ii++)
								{
									if (parameterArray[ii].fileId == returnData[i].fileId)
									{
										parameterArray[ii].userResponse = returnData[i].choice;
										newParameterArray.push(parameterArray[ii]);
									}
								}
							}

							// Nothing to do, carry on
							if (newParameterArray.length == 0)
							{
								performAfterMoveActions.apply(this);
							}
							else
							{
								// Start working
								this.setIndexBusy();
								this.progressBar.resetProgressBar();
								this.progressBar.setItemCount(this.promptHandler.getPromptCount());
								this.progressBar.showProgressBar();

								// Move conflicting files again with resolutions now
								this._moveFile(newParameterArray, 0, onMoveFinish);
							}
						}, this);

						this._fileDrag.fadeOutHelpers();
						this.promptHandler.showBatchPrompts(promptCallback);
					}
					else
					{
						performAfterMoveActions.apply(this);
						this._fileDrag.fadeOutHelpers();
					}
				}, this);

				// Initiate the file move with the built array, index of 0 and callback to use when done
				this._moveFile(parameterArray, 0, onMoveFinish);

				// Skip returning dragees
				return;
			}
		}
		else
		{
			// Add the .sel class back on the selected source
			this.$source.addClass('sel');

			this._collapseExtraExpandedFolders();
		}

		this._fileDrag.returnHelpersToDraggees();
	},

	/**
	 * On folder drag stop
	 */
	_onFolderDragStop: function()
	{
		// Only move if we have a valid target and we're not trying to move into our direct parent
		if (
			this._folderDrag.$activeDropTarget &&
			this._folderDrag.$activeDropTarget.siblings('ul').children('li').filter(this._folderDrag.$draggee).length == 0
		)
		{
			var targetFolderId = this._getFolderIdFromSourceKey(this._folderDrag.$activeDropTarget.data('key'));

			this._collapseExtraExpandedFolders(targetFolderId);

			// Get the old folder IDs, and sort them so that we're moving the most-nested folders first
			var folderIds = [];

			for (var i = 0; i < this._folderDrag.$draggee.length; i++)
			{
				var $a = this._folderDrag.$draggee.eq(i).children('a'),
					folderId = this._getFolderIdFromSourceKey($a.data('key')),
					$source = this._getSourceByFolderId(folderId);

				// Make sure it's not already in the target folder
				if (this._getFolderIdFromSourceKey(this._getParentSource($source).data('key')) != targetFolderId)
				{
					folderIds.push(folderId);
				}
			}

			if (folderIds.length)
			{
				folderIds.sort();
				folderIds.reverse();

				this.setIndexBusy();
				this._positionProgressBar();
				this.progressBar.resetProgressBar();
				this.progressBar.setItemCount(folderIds.length);
				this.progressBar.showProgressBar();

				var responseArray = [];
				var parameterArray = [];

				for (var i = 0; i < folderIds.length; i++)
				{
					parameterArray.push({
						folderId: folderIds[i],
						parentId: targetFolderId
					});
				}

				// Increment, so to avoid displaying folder files that are being moved
				this.requestId++;

				/*
				 Here's the rundown:
				 1) Send all the folders being moved
				 2) Get results:
				   a) For all conflicting, receive prompts and resolve them to get:
				   b) For all valid move operations: by now server has created the needed folders
					  in target destination. Server returns an array of file move operations
				   c) server also returns a list of all the folder id changes
				   d) and the data-id of node to be removed, in case of conflict
				   e) and a list of folders to delete after the move
				 3) From data in 2) build a large file move operation array
				 4) Create a request loop based on this, so we can display progress bar
				 5) when done, delete all the folders and perform other maintenance
				 6) Champagne
				 */

				// This will hold the final list of files to move
				var fileMoveList = [];

				// These folders have to be deleted at the end
				var folderDeleteList = [];

				// This one tracks the changed folder ids
				var changedFolderIds = {};

				var removeFromTree = [];

				var onMoveFinish = $.proxy(function(responseArray)
				{
					this.promptHandler.resetPrompts();

					// Loop trough all the responses
					for (var i = 0; i < responseArray.length; i++)
					{
						var data = responseArray[i];

						// If succesful and have data, then update
						if (data.success)
						{
							// TODO REFACTOR THIS OUT
							if (data.transferList && data.changedIds)
							{
								for (var ii = 0; ii < data.transferList.length; ii++)
								{
									fileMoveList.push(data.transferList[ii]);
								}

								folderDeleteList = folderIds;

								for (var oldFolderId in data.changedIds)
								{
									changedFolderIds[oldFolderId] = data.changedIds[oldFolderId];
								}

								removeFromTree.push(data.removeFromTree);
							}
						}

						// Push prompt into prompt array
						if (data.prompt)
						{
							promptData = this._folderConflictTemplate;
							promptData.message = Craft.t(promptData.message, {folder: data.foldername});
							data.prompt = promptData;

							this.promptHandler.addPrompt(data);
						}

						if (data.error)
						{
							alert(data.error);
						}
					}

					if (this.promptHandler.getPromptCount())
					{
						// Define callback for completing all prompts
						var promptCallback = $.proxy(function(returnData)
						{
							this.promptHandler.resetPrompts();

							var newParameterArray = [];

							// Loop trough all returned data and prepare a new request array
							for (var i = 0; i < returnData.length; i++)
							{
								if (returnData[i].choice == 'cancel')
								{
									continue;
								}

								parameterArray[0].userResponse = returnData[i].choice;
								newParameterArray.push(parameterArray[0]);
							}

							// Start working on them lists, baby
							if (newParameterArray.length == 0)
							{
								$.proxy(this, '_performActualFolderMove', fileMoveList, folderDeleteList, changedFolderIds, removeFromTree)();
							}
							else
							{
								// Start working
								this.setIndexBusy();
								this.progressBar.resetProgressBar();
								this.progressBar.setItemCount(this.promptHandler.getPromptCount());
								this.progressBar.showProgressBar();

								// Move conflicting files again with resolutions now
								moveFolder(newParameterArray, 0, onMoveFinish);
							}
						}, this);

						this.promptHandler.showBatchPrompts(promptCallback);

						this.setIndexAvailable();
						this.progressBar.hideProgressBar();
					}
					else
					{
						$.proxy(this, '_performActualFolderMove', fileMoveList, folderDeleteList, changedFolderIds, removeFromTree, targetFolderId)();
					}
				}, this);

				var moveFolder = $.proxy(function(parameterArray, parameterIndex, callback)
				{
					if (parameterIndex == 0)
					{
						responseArray = [];
					}

					Craft.postActionRequest('assets/move-folder', parameterArray[parameterIndex], $.proxy(function(data, textStatus)
					{
						parameterIndex++;
						this.progressBar.incrementProcessedItemCount(1);
						this.progressBar.updateProgressBar();

						if (textStatus == 'success')
						{
							responseArray.push(data);
						}

						if (parameterIndex >= parameterArray.length)
						{
							callback(responseArray);
						}
						else
						{
							moveFolder(parameterArray, parameterIndex, callback);
						}
					}, this));
				}, this);

				// Initiate the folder move with the built array, index of 0 and callback to use when done
				moveFolder(parameterArray, 0, onMoveFinish);

				// Skip returning dragees until we get the Ajax response
				return;
			}
		}
		else
		{
			// Add the .sel class back on the selected source
			this.$source.addClass('sel');

			this._collapseExtraExpandedFolders();
		}

		this._folderDrag.returnHelpersToDraggees();
	},

	/**
	 * Really move the folder. Like really. For real.
	 */
	_performActualFolderMove: function(fileMoveList, folderDeleteList, changedFolderIds, removeFromTree, targetFolderId)
	{
		this.setIndexBusy();
		this.progressBar.resetProgressBar();
		this.progressBar.setItemCount(1);
		this.progressBar.showProgressBar();

		var moveCallback = $.proxy(function(folderDeleteList, changedFolderIds, removeFromTree)
		{
			//Move the folders around in the tree
			var topFolderLi = $();
			var folderToMove = $();
			var topFolderMovedId = 0;

			// Change the folder ids
			for (var previousFolderId in changedFolderIds)
			{
				folderToMove = this._getSourceByFolderId(previousFolderId);

				// Change the id and select the containing element as the folder element.
				folderToMove = folderToMove
									.attr('data-key', 'folder:' + changedFolderIds[previousFolderId])
									.data('key', 'folder:' + changedFolderIds[previousFolderId]).parent();

				if (topFolderLi.length == 0 || topFolderLi.parents().filter(folderToMove).length > 0)
				{
					topFolderLi = folderToMove;
					topFolderMovedId = changedFolderIds[previousFolderId];
				}
			}

			if (topFolderLi.length == 0)
			{
				this.setIndexAvailable();
				this.progressBar.hideProgressBar();
				this._folderDrag.returnHelpersToDraggees();

				return;
			}

			var topFolder = topFolderLi.children('a');

			// Now move the uppermost node.
			var siblings = topFolderLi.siblings('ul, .toggle');
			var parentSource = this._getParentSource(topFolder);

			var $newParent = this._getSourceByFolderId(targetFolderId);

			if (typeof removeFromTree != "undefined")
			{
				for (var i = 0; i < removeFromTree.length; i++)
				{
					$newParent.parent().find('[data-key="folder:' + removeFromTree[i] + '"]').parent().remove();
				}
			}
			this._prepareParentForChildren($newParent);
			this._appendSubfolder($newParent, topFolderLi);

			topFolder.after(siblings);

			this._cleanUpTree(parentSource);
			this._cleanUpTree($newParent);
			this.$sidebar.find('ul>ul, ul>.toggle').remove();

			// Delete the old folders
			for (var i = 0; i < folderDeleteList.length; i++)
			{
				Craft.postActionRequest('assets/delete-folder', {folderId: folderDeleteList[i]});
			}

			this.setIndexAvailable();
			this.progressBar.hideProgressBar();
			this._folderDrag.returnHelpersToDraggees();

			this._selectSourceByFolderId(topFolderMovedId);

		}, this);

		if (fileMoveList.length > 0)
		{
			this._moveFile(fileMoveList, 0, $.proxy(function()
			{
				moveCallback(folderDeleteList, changedFolderIds, removeFromTree);
			}, this));
		}
		else
		{
			moveCallback(folderDeleteList, changedFolderIds, removeFromTree);
		}
	},

	/**
	 * Get parent source for a source.
	 *
	 * @param $source
	 * @returns {*}
	 * @private
	 */
	_getParentSource: function($source)
	{
		if (this._getSourceLevel($source) > 1)
		{
			return $source.parent().parent().siblings('a');
		}
	},

	/**
	 * Move a file using data from a parameter array.
	 *
	 * @param parameterArray
	 * @param parameterIndex
	 * @param callback
	 * @private
	 */
	_moveFile: function(parameterArray, parameterIndex, callback)
	{
		if (parameterIndex == 0)
		{
			this.responseArray = [];
		}

		Craft.postActionRequest('assets/move-file', parameterArray[parameterIndex], $.proxy(function(data, textStatus)
		{
			this.progressBar.incrementProcessedItemCount(1);
			this.progressBar.updateProgressBar();

			if (textStatus == 'success')
			{
				this.responseArray.push(data);

				// If assets were just merged we should get the referece tags updated right away
				Craft.cp.runPendingTasks();
			}

			parameterIndex++;

			if (parameterIndex >= parameterArray.length)
			{
				callback(this.responseArray);
			}
			else
			{
				this._moveFile(parameterArray, parameterIndex, callback);
			}

		}, this));
	},

	_selectSourceByFolderId: function(targetFolderId)
	{
		var $targetSource = this._getSourceByFolderId(targetFolderId);

		// Make sure that all the parent sources are expanded and this source is visible.
		var $parentSources = $targetSource.parent().parents('li');

		for (var i = 0; i < $parentSources.length; i++)
		{
			var $parentSource = $($parentSources[i]);

			if (!$parentSource.hasClass('expanded'))
			{
				$parentSource.children('.toggle').click();
			}
		}

		this.sourceSelect.selectItem($targetSource);

		this.$source = $targetSource;
		this.sourceKey = $targetSource.data('key');
		this.setInstanceState('selectedSource', this.sourceKey);

		this.updateElements();
	},

	/**
	 * Initialize the uploader.
	 *
	 * @private
	 */
	onAfterHtmlInit: function()
	{
		if (!this.$uploadButton)
		{
			this.$uploadButton = $('<div class="btn submit" data-icon="upload" style="position: relative; overflow: hidden;" role="button">' + Craft.t('Upload files') + '</div>');
			this.addButton(this.$uploadButton);

			this.$uploadInput = $('<input type="file" multiple="multiple" name="assets-upload" />').hide().insertBefore(this.$uploadButton);
		}

		this.promptHandler = new Craft.PromptHandler();
		this.progressBar = new Craft.ProgressBar(this.$main, true);

		var options = {
			url: Craft.getActionUrl('assets/save-asset'),
			fileInput: this.$uploadInput,
			dropZone: this.$main
		};

		options.events = {
			fileuploadstart:       $.proxy(this, '_onUploadStart'),
			fileuploadprogressall: $.proxy(this, '_onUploadProgress'),
			fileuploaddone:        $.proxy(this, '_onUploadComplete')
		};

		if (typeof this.settings.criteria.kind != "undefined")
		{
			options.allowedKinds = this.settings.criteria.kind;
		}

		this._currentUploaderSettings = options;

		this.uploader = new Craft.Uploader (this.$uploadButton, options);

		this.$uploadButton.on('click', $.proxy(function()
		{
			if (this.$uploadButton.hasClass('disabled'))
			{
				return;
			}
			if (!this.isIndexBusy)
			{
				this.$uploadButton.parent().find('input[name=assets-upload]').click();
			}
		}, this));

		this.base();
	},

	onSelectSource: function()
	{
		this.uploader.setParams({folderId: this._getFolderIdFromSourceKey(this.sourceKey)});
		if (!this.$source.attr('data-upload'))
		{
			this.$uploadButton.addClass('disabled');
		}
		else
		{
			this.$uploadButton.removeClass('disabled');
		}
		this.base();
	},

	_getFolderIdFromSourceKey: function(sourceKey)
	{
		return sourceKey.split(':')[1];
	},

	/**
	 * React on upload submit.
	 *
	 * @param id
	 * @private
	 */
	_onUploadStart: function(event)
	{
		this.setIndexBusy();

		// Initial values
		this._positionProgressBar();
		this.progressBar.resetProgressBar();
		this.progressBar.showProgressBar();

		this.promptHandler.resetPrompts();
	},

	/**
	 * Update uploaded byte count.
	 */
	_onUploadProgress: function(event, data)
	{
		var progress = parseInt(data.loaded / data.total * 100, 10);
		this.progressBar.setProgressPercentage(progress);
	},

	/**
	 * On Upload Complete.
	 */
	_onUploadComplete: function(event, data)
	{
		var response = data.result;
		var filename = data.files[0].name;

		var doReload = true;

		if (response.success || response.prompt)
		{
			// Add the uploaded file to the selected ones, if appropriate
			this._uploadedFileIds.push(response.fileId);

			// If there is a prompt, add it to the queue
			if (response.prompt)
			{
				promptData = this._fileConflictTemplate;
				promptData.message = Craft.t(promptData.message, {file: response.filename});
				response.prompt = promptData;

				this.promptHandler.addPrompt(response);
			}
		}
		else
		{
			if (response.error)
			{
				alert(Craft.t('Upload failed for {filename}. The error message was: ”{error}“', { filename: filename, error: response.error }));
			}
			else
			{
				alert(Craft.t('Upload failed for {filename}.', { filename: filename }));
			}

			doReload = false;
		}

		// For the last file, display prompts, if any. If not - just update the element view.
		if (this.uploader.isLastUpload())
		{
			this.setIndexAvailable();
			this.progressBar.hideProgressBar();

			if (this.promptHandler.getPromptCount())
			{
				this.promptHandler.showBatchPrompts($.proxy(this, '_uploadFollowup'));
			}
			else
			{
				if (doReload)
				{
					this.updateElements();
				}
			}
		}
	},

	/**
	 * Follow up to an upload that triggered at least one conflict resolution prompt.
	 *
	 * @param returnData
	 * @private
	 */
	_uploadFollowup: function(returnData)
	{
		this.setIndexBusy();
		this.progressBar.resetProgressBar();

		this.promptHandler.resetPrompts();

		var finalCallback = $.proxy(function()
		{
			this.setIndexAvailable();
			this.progressBar.hideProgressBar();
			this.updateElements();
		}, this);

		this.progressBar.setItemCount(returnData.length);

		var doFollowup = $.proxy(function(parameterArray, parameterIndex, callback)
		{
			var postData = {
				fileId:       parameterArray[parameterIndex].fileId,
				filename:     parameterArray[parameterIndex].filename,
				userResponse: parameterArray[parameterIndex].choice
			};

			Craft.postActionRequest('assets/save-asset', postData, $.proxy(function(data, textStatus)
			{
				if (textStatus == 'success' && data.fileId)
				{
					this._uploadedFileIds.push(data.fileId);
				}
				parameterIndex++;
				this.progressBar.incrementProcessedItemCount(1);
				this.progressBar.updateProgressBar();

				if (parameterIndex == parameterArray.length)
				{
					callback();
				}
				else
				{
					doFollowup(parameterArray, parameterIndex, callback);
				}
			}, this));

		}, this);

		this.progressBar.showProgressBar();
		doFollowup(returnData, 0, finalCallback);
	},

	/**
	 * Perform actions after updating elements
	 * @private
	 */
	onUpdateElements: function(append, $newElements)
	{
		if (this.settings.context == 'index')
		{
			if (!append)
			{
				this._fileDrag.removeAllItems();
			}

			this._fileDrag.addItems($newElements);
		}

		// See if we have freshly uploaded files to add to selection
		if (this._uploadedFileIds.length)
		{
			var $item = null;
			for (var i = 0; i < this._uploadedFileIds.length; i++)
			{
				$item = this.$main.find('.element[data-id=' + this._uploadedFileIds[i] + ']:first').parent();
				if (this.getSelectedSourceState('mode') == 'table')
				{
					$item = $item.parent();
				}

				if (this.elementSelect)
				{
					this.elementSelect.selectItem($item);
				}
			}

			// Reset the list.
			this._uploadedFileIds = [];
		}

		this.base(append, $newElements);
	},

	/**
	 * On Drag Start
	 */
	_onDragStart: function()
	{
		this._tempExpandedFolders = [];
	},

	/**
	 * Get File Drag Helper
	 */
	_getFileDragHelper: function($element)
	{
		var currentView = this.getSelectedSourceState('mode');

		switch (currentView)
		{
			case 'table':
			{
				var $outerContainer = $('<div class="elements datatablesorthelper"/>').appendTo(Garnish.$bod),
					$innerContainer = $('<div class="tableview"/>').appendTo($outerContainer),
					$table = $('<table class="data"/>').appendTo($innerContainer),
					$tbody = $('<tbody/>').appendTo($table);

				$element.appendTo($tbody);

				// Copy the column widths
				this._$firstRowCells = this.$elementContainer.children('tr:first').children();
				var $helperCells = $element.children();

				for (var i = 0; i < $helperCells.length; i++)
				{
					// Hard-set the cell widths
					var $helperCell = $($helperCells[i]);

					// Skip the checkbox cell
					if (Garnish.hasAttr($helperCell, 'data-checkboxcell'))
					{
						$helperCell.remove();
						$outerContainer.css('margin-'+Craft.left, 19); // 26 - 7
						continue;
					}

					var $firstRowCell = $(this._$firstRowCells[i]),
						width = $firstRowCell.width();

					$firstRowCell.width(width);
					$helperCell.width(width);
				}

				return $outerContainer;
			}
			case 'thumbs':
			{
				var $outerContainer = $('<div class="elements thumbviewhelper"/>').appendTo(Garnish.$bod),
					$innerContainer = $('<ul class="thumbsview"/>').appendTo($outerContainer);

				$element.appendTo($innerContainer);

				return $outerContainer;
			}
		}

		return $();
	},

	/**
	 * On Drop Target Change
	 */
	_onDropTargetChange: function($dropTarget)
	{
		clearTimeout(this._expandDropTargetFolderTimeout);

		if ($dropTarget)
		{
			var folderId = this._getFolderIdFromSourceKey($dropTarget.data('key'));

			if (folderId)
			{
				this.dropTargetFolder = this._getSourceByFolderId(folderId);

				if (this._hasSubfolders(this.dropTargetFolder) && ! this._isExpanded(this.dropTargetFolder))
				{
					this._expandDropTargetFolderTimeout = setTimeout($.proxy(this, '_expandFolder'), 500);
				}
			}
			else
			{
				this.dropTargetFolder = null;
			}
		}

		if ($dropTarget && $dropTarget[0] != this.$source[0])
		{
			// Temporarily remove the .sel class on the active source
			this.$source.removeClass('sel');
		}
		else
		{
			this.$source.addClass('sel');
		}
	},

	/**
	 * Collapse Extra Expanded Folders
	 */
	_collapseExtraExpandedFolders: function(dropTargetFolderId)
	{
		clearTimeout(this._expandDropTargetFolderTimeout);

		// If a source ID is passed in, exclude its parents
		var excluded;

		if (dropTargetFolderId)
		{
			excluded = this._getSourceByFolderId(dropTargetFolderId).parents('li').children('a');
		}

		for (var i = this._tempExpandedFolders.length-1; i >= 0; i--)
		{
			var $source = this._tempExpandedFolders[i];

			// Check the parent list, if a source id is passed in
			if (!dropTargetFolderId || excluded.filter('[data-key="' + $source.data('key') + '"]').length == 0)
			{
				this._collapseFolder($source);
				this._tempExpandedFolders.splice(i, 1);
			}
		}
	},

	_getSourceByFolderId: function(folderId)
	{
		return this.$sources.filter('[data-key="folder:' + folderId + '"]');
	},

	_hasSubfolders: function($source)
	{
		return $source.siblings('ul').find('li').length;
	},

	_isExpanded: function($source)
	{
		return $source.parent('li').hasClass('expanded');
	},

	_expandFolder: function()
	{
		// Collapse any temp-expanded drop targets that aren't parents of this one
		this._collapseExtraExpandedFolders(this._getFolderIdFromSourceKey(this.dropTargetFolder.data('key')));

		this.dropTargetFolder.siblings('.toggle').click();

		// Keep a record of that
		this._tempExpandedFolders.push(this.dropTargetFolder);
	},

	_collapseFolder: function($source)
	{
		if ($source.parent().hasClass('expanded'))
		{
			$source.siblings('.toggle').click();
		}
	},

	_createFolderContextMenu: function($source)
	{
		var menuOptions = [{ label: Craft.t('New subfolder'), onClick: $.proxy(this, '_createSubfolder', $source) }];

		// For all folders that are not top folders
		if (this.settings.context == 'index' && this._getSourceLevel($source) > 1)
		{
			menuOptions.push({ label: Craft.t('Rename folder'), onClick: $.proxy(this, '_renameFolder', $source) });
			menuOptions.push({ label: Craft.t('Delete folder'), onClick: $.proxy(this, '_deleteFolder', $source) });
		}

		new Garnish.ContextMenu($source, menuOptions, {menuClass: 'menu'});
	},

	_createSubfolder: function($parentFolder)
	{
		var subfolderName = prompt(Craft.t('Enter the name of the folder'));

		if (subfolderName)
		{
			var params = {
				parentId:  this._getFolderIdFromSourceKey($parentFolder.data('key')),
				folderName: subfolderName
			};

			this.setIndexBusy();

			Craft.postActionRequest('assets/create-folder', params, $.proxy(function(data, textStatus)
			{
				this.setIndexAvailable();

				if (textStatus == 'success' && data.success)
				{
					this._prepareParentForChildren($parentFolder);

					var $subfolder = $(
						'<li>' +
							'<a data-key="folder:'+data.folderId+'"' +
								(Garnish.hasAttr($parentFolder, 'data-has-thumbs') ? ' data-has-thumbs' : '') +
								' data-upload="'+$parentFolder.attr('data-upload')+'"' +
							'>' +
								data.folderName +
							'</a>' +
						'</li>'
					);

					var $a = $subfolder.children('a:first');
					this._appendSubfolder($parentFolder, $subfolder);
					this.initSource($a);
				}

				if (textStatus == 'success' && data.error)
				{
					alert(data.error);
				}
			}, this));
		}
	},

	_deleteFolder: function($targetFolder)
	{
		if (confirm(Craft.t('Really delete folder “{folder}”?', {folder: $.trim($targetFolder.text())})))
		{
			var params = {
				folderId: this._getFolderIdFromSourceKey($targetFolder.data('key'))
			};

			this.setIndexBusy();

			Craft.postActionRequest('assets/delete-folder', params, $.proxy(function(data, textStatus)
			{
				this.setIndexAvailable();

				if (textStatus == 'success' && data.success)
				{
					var $parentFolder = this._getParentSource($targetFolder);

					// Remove folder and any trace from its parent, if needed
					this.deinitSource($targetFolder);

					$targetFolder.parent().remove();
					this._cleanUpTree($parentFolder);

					this.$sidebar.trigger('resize');
				}

				if (textStatus == 'success' && data.error)
				{
					alert(data.error);
				}
			}, this));
		}
	},

	/**
	 * Rename
	 */
	_renameFolder: function($targetFolder)
	{
		var oldName = $.trim($targetFolder.text()),
			newName = prompt(Craft.t('Rename folder'), oldName);

		if (newName && newName != oldName)
		{
			var params = {
				folderId: this._getFolderIdFromSourceKey($targetFolder.data('key')),
				newName: newName
			};

			this.setIndexBusy();

			Craft.postActionRequest('assets/rename-folder', params, $.proxy(function(data, textStatus)
			{
				this.setIndexAvailable();

				if (textStatus == 'success' && data.success)
				{
					$targetFolder.text(data.newName);
				}

				if (textStatus == 'success' && data.error)
				{
					alert(data.error);
				}

			}, this), 'json');
		}
	},

	/**
	 * Prepare a source folder for children folder.
	 *
	 * @param $parentFolder
	 * @private
	 */
	_prepareParentForChildren: function($parentFolder)
	{
		if (!this._hasSubfolders($parentFolder))
		{
			$parentFolder.parent().addClass('expanded').append('<div class="toggle"></div><ul></ul>');
			this.initSourceToggle($parentFolder);
		}
	},

	/**
	 * Appends a subfolder to the parent folder at the correct spot.
	 *
	 * @param $parentFolder
	 * @param $subfolder
	 * @private
	 */
	_appendSubfolder: function($parentFolder, $subfolder)
	{
		var $subfolderList = $parentFolder.siblings('ul'),
			$existingChildren = $subfolderList.children('li'),
			subfolderLabel = $.trim($subfolder.children('a:first').text()),
			folderInserted = false;

		for (var i = 0; i < $existingChildren.length; i++)
		{
			var $existingChild = $($existingChildren[i]);

			if ($.trim($existingChild.children('a:first').text()) > subfolderLabel)
			{
				$existingChild.before($subfolder);
				folderInserted = true;
				break;
			}
		}

		if (!folderInserted)
		{
			$parentFolder.siblings('ul').append($subfolder);
		}

		this.$sidebar.trigger('resize');
	},

	_cleanUpTree: function($parentFolder)
	{
		if ($parentFolder !== null && $parentFolder.siblings('ul').children('li').length == 0)
		{
			this.deinitSourceToggle($parentFolder);
			$parentFolder.siblings('ul').remove();
			$parentFolder.siblings('.toggle').remove();
			$parentFolder.parent().removeClass('expanded');
		}
	},

	_positionProgressBar: function()
	{
		var $container = $(),
			offset = 0;

		if (this.settings.context == 'index')
		{
			$container = this.progressBar.$progressBar.closest('#content');
		}
		else
		{
			$container = this.progressBar.$progressBar.closest('.main');
		}

		var containerTop = $container.offset().top;
		var scrollTop = Garnish.$doc.scrollTop();
		var diff = scrollTop - containerTop;
		var windowHeight = Garnish.$win.height();

		if ($container.height() > windowHeight)
		{
			offset = (windowHeight / 2) - 6 + diff;
		}
		else
		{
			offset = ($container.height() / 2) - 6;
		}

		this.progressBar.$progressBar.css({
			top: offset
		});
	}

});

// Register it!
Craft.registerElementIndexClass('craft\\app\\elements\\Asset', Craft.AssetIndex);

/**
 * Asset Select input
 */
Craft.AssetSelectInput = Craft.BaseElementSelectInput.extend(
{
	requestId: 0,
	hud: null,
	uploader: null,
	progressBar: null,

	init: function()
	{
		this.base.apply(this, arguments);
		this._attachUploader();
	},

	/**
	 * Attach the uploader with drag event handler
	 */
	_attachUploader: function()
	{
		this.progressBar = new Craft.ProgressBar($('<div class="progress-shade"></div>').appendTo(this.$container));

		var options = {
			url: Craft.getActionUrl('assets/express-upload'),
			dropZone: this.$container,
			formData: {
				fieldId: this.settings.fieldId,
				elementId: this.settings.sourceElementId
			}
		};

		// If CSRF protection isn't enabled, these won't be defined.
		if (typeof Craft.csrfTokenName !== 'undefined' && typeof Craft.csrfTokenValue !== 'undefined')
		{
			// Add the CSRF token
			options.formData[Craft.csrfTokenName] = Craft.csrfTokenValue;
		}

		if (typeof this.settings.criteria.kind != "undefined")
		{
			options.allowedKinds = this.settings.criteria.kind;
		}

		options.canAddMoreFiles = $.proxy(this, 'canAddMoreFiles');

		options.events = {};
		options.events.fileuploadstart = $.proxy(this, '_onUploadStart');
		options.events.fileuploadprogressall = $.proxy(this, '_onUploadProgress');
		options.events.fileuploaddone = $.proxy(this, '_onUploadComplete');

		this.uploader = new Craft.Uploader(this.$container, options);
	},

	/**
	 * Add the freshly uploaded file to the input field.
	 */
	selectUploadedFile: function(element)
	{
		// Check if we're able to add new elements
		if (!this.canAddMoreElements())
		{
			return;
		}

		var $newElement = element.$element;

		// Make a couple tweaks
		$newElement.addClass('removable');
		$newElement.prepend('<input type="hidden" name="'+this.settings.name+'[]" value="'+element.id+'">' +
			'<a class="delete icon" title="'+Craft.t('Remove')+'"></a>');

		$newElement.appendTo(this.$elementsContainer);

		var margin = -($newElement.outerWidth()+10);

		this.$addElementBtn.css('margin-'+Craft.left, margin+'px');

		var animateCss = {};
		animateCss['margin-'+Craft.left] = 0;
		this.$addElementBtn.velocity(animateCss, 'fast');

		this.addElements($newElement);

		delete this.modal;
	},

	/**
	 * On upload start.
	 */
	_onUploadStart: function(event)
	{
		this.progressBar.$progressBar.css({
			top: Math.round(this.$container.outerHeight() / 2) - 6
		});

		this.$container.addClass('uploading');
		this.progressBar.resetProgressBar();
		this.progressBar.showProgressBar();
	},

	/**
	 * On upload progress.
	 */
	_onUploadProgress: function(event, data)
	{
		var progress = parseInt(data.loaded / data.total * 100, 10);
		this.progressBar.setProgressPercentage(progress);
	},

	/**
	 * On a file being uploaded.
	 */
	_onUploadComplete: function(event, data)
	{
		if (data.result.error)
		{
			alert(data.result.error);
		}
		else
		{
			var html = $(data.result.html);
			Craft.appendHeadHtml(data.result.headHtml);
			this.selectUploadedFile(Craft.getElementInfo(html));
		}

		// Last file
		if (this.uploader.isLastUpload())
		{
			this.progressBar.hideProgressBar();
			this.$container.removeClass('uploading');
		}
	},

	/**
	 * We have to take into account files about to be added as well
	 */
	canAddMoreFiles: function (slotsTaken)
	{
		return (!this.settings.limit || this.$elements.length  + slotsTaken < this.settings.limit);
	}
});

/**
 * Asset selector modal class
 */
Craft.AssetSelectorModal = Craft.BaseElementSelectorModal.extend(
{
	$selectTransformBtn: null,
	_selectedTransform: null,

	init: function(elementType, settings)
	{
		settings = $.extend({}, Craft.AssetSelectorModal.defaults, settings);

		if (settings.canSelectImageTransforms)
		{
			if (typeof Craft.AssetSelectorModal.transforms == 'undefined')
			{
				var base = this.base;

				this.fetchTransformInfo($.proxy(function()
				{
					// Finally call this.base()
					base.call(this, elementType, settings);

					this.createSelectTransformButton();
				}, this));

				// Prevent this.base() from getting called until later
				return;
			}
		}

		this.base(elementType, settings);

		if (settings.canSelectImageTransforms)
		{
			this.createSelectTransformButton();
		}
	},

	fetchTransformInfo: function(callback)
	{
		Craft.postActionRequest('assets/get-transform-info', $.proxy(function(response, textStatus)
		{
			if (textStatus == 'success' && response instanceof Array)
			{
				Craft.AssetSelectorModal.transforms = response;
			}
			else
			{
				Craft.AssetSelectorModal.transforms = [];
			}

			callback();

		}, this));
	},

	createSelectTransformButton: function()
	{
		if (!Craft.AssetSelectorModal.transforms.length)
		{
			return;
		}

		var $btnGroup = $('<div class="btngroup"/>').appendTo(this.$buttons);
		this.$selectBtn.appendTo($btnGroup);

		this.$selectTransformBtn = $('<div class="btn menubtn disabled">'+Craft.t('Select Transform')+'</div>').appendTo($btnGroup);

		var $menu = $('<div class="menu" data-align="right"></div>').insertAfter(this.$selectTransformBtn),
			$menuList = $('<ul></ul>').appendTo($menu);

		for (var i = 0; i < Craft.AssetSelectorModal.transforms.length; i++)
		{
			$('<li><a data-transform="'+Craft.AssetSelectorModal.transforms[i].handle+'">'+Craft.AssetSelectorModal.transforms[i].name+'</a></li>').appendTo($menuList);
		}

		var MenuButton = new Garnish.MenuBtn(this.$selectTransformBtn, {
			onOptionSelect: $.proxy(this, 'onSelectTransform')
		});
		MenuButton.disable();

		this.$selectTransformBtn.data('menuButton', MenuButton);
	},

	onSelectionChange: function(ev)
	{
		var allowTransforms,
			MenuBtn;

		if (this.elementIndex.elementSelect.totalSelected && this.settings.canSelectImageTransforms && Craft.AssetSelectorModal.transforms.length)
		{
			allowTransforms = true;
			var $selectedItems = this.elementIndex.elementSelect.getSelectedItems();

			for (var i = 0; i < $selectedItems.length; i++)
			{
				if (!$('.element.hasthumb:first', $selectedItems[i]).length)
				{
					allowTransforms = false;
					break;
				}
			}
		}
		else
		{
			allowTransforms = false;
		}

		if (this.$selectTransformBtn)
		{
			MenuBtn = this.$selectTransformBtn.data('menuButton');
		}
		else
		{
			MenuBtn = null;
		}

		if (allowTransforms)
		{
			if (MenuBtn)
			{
				MenuBtn.enable();
			}

			this.$selectTransformBtn.removeClass('disabled');
		}
		else if (this.$selectTransformBtn)
		{
			if (MenuBtn)
			{
				MenuBtn.disable();
			}

			this.$selectTransformBtn.addClass('disabled');
		}

		this.base();
	},

	onSelectTransform: function(option)
	{
		var transform = $(option).data('transform');
		this.selectImagesWithTransform(transform);
	},

	selectImagesWithTransform: function(transform)
	{
		// First we must get any missing transform URLs
		if (typeof Craft.AssetSelectorModal.transformUrls[transform] == 'undefined')
		{
			Craft.AssetSelectorModal.transformUrls[transform] = {};
		}

		var $selectedItems = this.elementIndex.elementSelect.getSelectedItems(),
			imageIdsWithMissingUrls = [];

		for (var i = 0; i < $selectedItems.length; i++)
		{
			var $item = $($selectedItems[i]),
				elementId = Craft.getElementInfo($item).id;

			if (typeof Craft.AssetSelectorModal.transformUrls[transform][elementId] == 'undefined')
			{
				imageIdsWithMissingUrls.push(elementId);
			}
		}

		if (imageIdsWithMissingUrls.length)
		{
			this.showFooterSpinner();

			this.fetchMissingTransformUrls(imageIdsWithMissingUrls, transform, $.proxy(function()
			{
				this.hideFooterSpinner();
				this.selectImagesWithTransform(transform);
			}, this));
		}
		else
		{
			this._selectedTransform = transform;
			this.selectElements();
			this._selectedTransform = null;
		}
	},

	fetchMissingTransformUrls: function(imageIdsWithMissingUrls, transform, callback)
	{
		var elementId = imageIdsWithMissingUrls.pop();

		var data = {
			fileId: elementId,
			handle: transform,
			returnUrl: true
		};

		Craft.postActionRequest('assets/generate-transform', data, $.proxy(function(response, textStatus)
		{
			Craft.AssetSelectorModal.transformUrls[transform][elementId] = false;

			if (textStatus == 'success')
			{
				if (response.url)
				{
					Craft.AssetSelectorModal.transformUrls[transform][elementId] = response.url;
				}
			}

			// More to load?
			if (imageIdsWithMissingUrls.length)
			{
				this.fetchMissingTransformUrls(imageIdsWithMissingUrls, transform, callback);
			}
			else
			{
				callback();
			}
		}, this));
	},

	getElementInfo: function($selectedItems)
	{
		var info = this.base($selectedItems);

		if (this._selectedTransform)
		{
			for (var i = 0; i < info.length; i++)
			{
				var elementId = info[i].id;

				if (
					typeof Craft.AssetSelectorModal.transformUrls[this._selectedTransform][elementId] != 'undefined' &&
					Craft.AssetSelectorModal.transformUrls[this._selectedTransform][elementId] !== false
				)
				{
					info[i].url = Craft.AssetSelectorModal.transformUrls[this._selectedTransform][elementId];
				}
			}
		}

		return info;
	},

	onSelect: function(elementInfo)
	{
		this.settings.onSelect(elementInfo, this._selectedTransform);
	}
},
{
	defaults: {
		canSelectImageTransforms: false
	},

	transformUrls: {}
});

// Register it!
Craft.registerElementSelectorModalClass('Asset', Craft.AssetSelectorModal);

(function($) {


/**
 * AuthManager class
 */
Craft.AuthManager = Garnish.Base.extend(
{
	remainingSessionTime: null,
	checkRemainingSessionTimer: null,
	showLoginModalTimer: null,
	decrementLogoutWarningInterval: null,

	showingLogoutWarningModal: false,
	showingLoginModal: false,

	logoutWarningModal: null,
	loginModal: null,

	$logoutWarningPara: null,
	$passwordInput: null,
	$passwordSpinner: null,
	$loginBtn: null,
	$loginErrorPara: null,

	/**
	 * Init
	 */
	init: function()
	{
		this.updateRemainingSessionTime(Craft.remainingSessionTime);
	},

	/**
	 * Sets a timer for the next time to check the auth timeout.
	 */
	setCheckRemainingSessionTimer: function(seconds)
	{
		if (this.checkRemainingSessionTimer)
		{
			clearTimeout(this.checkRemainingSessionTimer);
		}

		this.checkRemainingSessionTimer = setTimeout($.proxy(this, 'checkRemainingSessionTime'), seconds*1000);
	},

	/**
	 * Pings the server to see how many seconds are left on the current user session, and handles the response.
	 */
	checkRemainingSessionTime: function(extendSession)
	{
		$.ajax({
			url: Craft.getActionUrl('users/get-remaining-session-time', (extendSession ? null : 'dontExtendSession=1')),
			type: 'GET',
			complete: $.proxy(function(jqXHR, textStatus)
			{
				if (textStatus == 'success' && !isNaN(jqXHR.responseText))
				{
					this.updateRemainingSessionTime(jqXHR.responseText);
				}
				else
				{
					this.updateRemainingSessionTime(-1);
				}
			}, this)
		});
	},

	/**
	 * Updates our record of the auth timeout, and handles it.
	 */
	updateRemainingSessionTime: function(remainingSessionTime)
	{
		this.remainingSessionTime = parseInt(remainingSessionTime);

		// Are we within the warning window?
		if (this.remainingSessionTime != -1 && this.remainingSessionTime < Craft.AuthManager.minSafeSessiotTime)
		{
			// Is there still time to renew the session?
			if (this.remainingSessionTime)
			{
				if (!this.showingLogoutWarningModal)
				{
					// Show the warning modal
					this.showLogoutWarningModal();
				}

				// Will the session expire before the next checkup?
				if (this.remainingSessionTime < Craft.AuthManager.checkInterval)
				{
					if (this.showLoginModalTimer)
					{
						clearTimeout(this.showLoginModalTimer);
					}

					this.showLoginModalTimer = setTimeout($.proxy(this, 'showLoginModal'), this.remainingSessionTime*1000);
				}
			}
			else if (!this.showingLoginModal)
			{
				// Show the login modal
				this.showLoginModal();
			}

			this.setCheckRemainingSessionTimer(Craft.AuthManager.checkInterval);
		}
		else
		{
			// Everything's good!
			this.hideLogoutWarningModal();
			this.hideLoginModal();

			// Will be be within the minSafeSessiotTime before the next update?
			if (this.remainingSessionTime != -1 && this.remainingSessionTime < (Craft.AuthManager.minSafeSessiotTime + Craft.AuthManager.checkInterval))
			{
				this.setCheckRemainingSessionTimer(this.remainingSessionTime - Craft.AuthManager.minSafeSessiotTime + 1);
			}
			else
			{
				this.setCheckRemainingSessionTimer(Craft.AuthManager.checkInterval);
			}
		}
	},

	/**
	 * Shows the logout warning modal.
	 */
	showLogoutWarningModal: function()
	{
		var quickShow;

		if (this.showingLoginModal)
		{
			this.hideLoginModal(true);
			quickShow = true;
		}
		else
		{
			quickShow = false;
		}

		this.showingLogoutWarningModal = true;

		if (!this.logoutWarningModal)
		{
			var $form = $('<form id="logoutwarningmodal" class="modal alert fitted"/>'),
				$body = $('<div class="body"/>').appendTo($form),
				$buttons = $('<div class="buttons right"/>').appendTo($body),
				$logoutBtn = $('<div class="btn">'+Craft.t('Log out now')+'</div>').appendTo($buttons),
				$renewSessionBtn = $('<input type="submit" class="btn submit" value="'+Craft.t('Keep me logged in')+'" />').appendTo($buttons);

			this.$logoutWarningPara = $('<p/>').prependTo($body);

			this.logoutWarningModal = new Garnish.Modal($form, {
				autoShow: false,
				closeOtherModals: false,
				hideOnEsc: false,
				hideOnShadeClick: false,
				shadeClass: 'modal-shade dark',
				onFadeIn: function()
				{
					if (!Garnish.isMobileBrowser(true))
					{
						// Auto-focus the renew button
						setTimeout(function() {
							$renewSessionBtn.focus();
						}, 100);
					}
				}
			});

			this.addListener($logoutBtn, 'activate', 'logout');
			this.addListener($form, 'submit', 'renewSession');
		}

		if (quickShow)
		{
			this.logoutWarningModal.quickShow();
		}
		else
		{
			this.logoutWarningModal.show();
		}

		this.updateLogoutWarningMessage();

		this.decrementLogoutWarningInterval = setInterval($.proxy(this, 'decrementLogoutWarning'), 1000);
	},

	/**
	 * Updates the logout warning message indicating that the session is about to expire.
	 */
	updateLogoutWarningMessage: function()
	{
		this.$logoutWarningPara.text(Craft.t('Your session will expire in {time}.', {
			time: Craft.secondsToHumanTimeDuration(this.remainingSessionTime)
		}));

		this.logoutWarningModal.updateSizeAndPosition();
	},

	decrementLogoutWarning: function()
	{
		if (this.remainingSessionTime > 0)
		{
			this.remainingSessionTime--;
			this.updateLogoutWarningMessage();
		}

		if (this.remainingSessionTime == 0)
		{
			clearInterval(this.decrementLogoutWarningInterval);
		}
	},

	/**
	 * Hides the logout warning modal.
	 */
	hideLogoutWarningModal: function(quick)
	{
		this.showingLogoutWarningModal = false;

		if (this.logoutWarningModal)
		{
			if (quick)
			{
				this.logoutWarningModal.quickHide();
			}
			else
			{
				this.logoutWarningModal.hide();
			}

			if (this.decrementLogoutWarningInterval)
			{
				clearInterval(this.decrementLogoutWarningInterval);
			}
		}
	},

	/**
	 * Shows the login modal.
	 */
	showLoginModal: function()
	{
		var quickShow;

		if (this.showingLogoutWarningModal)
		{
			this.hideLogoutWarningModal(true);
			quickShow = true;
		}
		else
		{
			quickShow = false;
		}

		this.showingLoginModal = true;

		if (!this.loginModal)
		{
			var $form = $('<form id="loginmodal" class="modal alert fitted"/>'),
				$body = $('<div class="body"><h2>'+Craft.t('Your session has ended.')+'</h2><p>'+Craft.t('Enter your password to log back in.')+'</p></div>').appendTo($form),
				$inputContainer = $('<div class="inputcontainer">').appendTo($body),
				$inputsTable = $('<table class="inputs fullwidth"/>').appendTo($inputContainer),
				$inputsRow = $('<tr/>').appendTo($inputsTable),
				$passwordCell = $('<td/>').appendTo($inputsRow),
				$buttonCell = $('<td class="thin"/>').appendTo($inputsRow),
				$passwordWrapper = $('<div class="passwordwrapper"/>').appendTo($passwordCell);

			this.$passwordInput = $('<input type="password" class="text password fullwidth" placeholder="'+Craft.t('Password')+'"/>').appendTo($passwordWrapper);
			this.$passwordSpinner = $('<div class="spinner hidden"/>').appendTo($inputContainer);
			this.$loginBtn = $('<input type="submit" class="btn submit disabled" value="'+Craft.t('Login')+'" />').appendTo($buttonCell);
			this.$loginErrorPara = $('<p class="error"/>').appendTo($body);

			this.loginModal = new Garnish.Modal($form, {
				autoShow: false,
				closeOtherModals: false,
				hideOnEsc: false,
				hideOnShadeClick: false,
				shadeClass: 'modal-shade dark',
				onFadeIn: $.proxy(function()
				{
					if (!Garnish.isMobileBrowser(true))
					{
						// Auto-focus the password input
						setTimeout($.proxy(function() {
							this.$passwordInput.focus();
						}, this), 100);
					}
				}, this),
				onFadeOut: $.proxy(function()
				{
					this.$passwordInput.val('');
				}, this)
			});

			new Craft.PasswordInput(this.$passwordInput, {
				onToggleInput: $.proxy(function($newPasswordInput) {
					this.$passwordInput = $newPasswordInput;
				}, this)
			});

			this.addListener(this.$passwordInput, 'textchange', 'validatePassword');
			this.addListener($form, 'submit', 'login');
		}

		if (quickShow)
		{
			this.loginModal.quickShow();
		}
		else
		{
			this.loginModal.show();
		}
	},

	/**
	 * Hides the login modal.
	 */
	hideLoginModal: function(quick)
	{
		this.showingLoginModal = false;

		if (this.loginModal)
		{
			if (quick)
			{
				this.loginModal.quickHide();
			}
			else
			{
				this.loginModal.hide();
			}
		}
	},

	logout: function()
	{
		var url = Craft.getActionUrl('users/logout');

		$.get(url, $.proxy(function()
		{
			Craft.redirectTo('');
		}, this));
	},

	renewSession: function(ev)
	{
		if (ev)
		{
			ev.preventDefault();
		}

		this.hideLogoutWarningModal();
		this.checkRemainingSessionTime(true);
	},

	validatePassword: function()
	{
		if (this.$passwordInput.val().length >= 6)
		{
			this.$loginBtn.removeClass('disabled');
			return true;
		}
		else
		{
			this.$loginBtn.addClass('disabled');
			return false;
		}
	},

	login: function(ev)
	{
		if (ev)
		{
			ev.preventDefault();
		}

		if (this.validatePassword())
		{
			this.$passwordSpinner.removeClass('hidden');
			this.clearLoginError();

			var data = {
				loginName: Craft.username,
				password: this.$passwordInput.val()
			};

			Craft.postActionRequest('users/login', data, $.proxy(function(response, textStatus)
			{
				this.$passwordSpinner.addClass('hidden');

				if (textStatus == 'success')
				{
					if (response.success)
					{
						this.hideLoginModal();
						this.checkRemainingSessionTime();
					}
					else
					{
						this.showLoginError(response.error);
						Garnish.shake(this.loginModal.$container);

						if (!Garnish.isMobileBrowser(true))
						{
							this.$passwordInput.focus();
						}
					}
				}
				else
				{
					this.showLoginError();
				}

			}, this));
		}
	},

	showLoginError: function(error)
	{
		if (error === null || typeof error == 'undefined')
		{
			error = Craft.t('An unknown error occurred.');
		}

		this.$loginErrorPara.text(error);
		this.loginModal.updateSizeAndPosition();
	},

	clearLoginError: function()
	{
		this.showLoginError('');
	}
},
{
	checkInterval: 60,
	minSafeSessiotTime: 120
});


})(jQuery);

/**
 * CP class
 */
var CP = Garnish.Base.extend(
{
	authManager: null,

	$alerts: null,
	$header: null,
	$headerActionsList: null,
	$siteName: null,
	$nav: null,

	$overflowNavMenuItem: null,
	$overflowNavMenuBtn: null,
	$overflowNavMenu: null,
	$overflowNavMenuList: null,

	$notificationWrapper: null,
	$notificationContainer: null,
	$main: null,
	$content: null,
	$collapsibleTables: null,

	navItems: null,
	totalNavItems: null,
	visibleNavItems: null,
	totalNavWidth: null,
	showingOverflowNavMenu: false,

	fixedNotifications: false,

	runningTaskInfo: null,
	trackTaskProgressTimeout: null,
	taskProgressIcon: null,

	$upgradePromo: null,
	upgradeModal: null,

	init: function()
	{
		// Is this session going to expire?
		if (Craft.remainingSessionTime != 0)
		{
			this.authManager = new Craft.AuthManager();
		}

		// Find all the key elements
		this.$alerts = $('#alerts');
		this.$header = $('#header');
		this.$headerActionsList = this.$header.find('#header-actions');
		this.$siteName = this.$header.find('h2');
		this.$nav = $('#nav');
		this.$notificationWrapper = $('#notifications-wrapper');
		this.$notificationContainer = $('#notifications');
		this.$main = $('#main');
		this.$content = $('#content');
		this.$collapsibleTables = this.$content.find('table.collapsible');
		this.$upgradePromo = $('#upgradepromo > a');

		// Keep the site name contained
		this.onActionItemListResize();
		this.addListener(this.$headerActionsList, 'resize', 'onActionItemListResize');

		// Find all the nav items
		this.navItems = [];
		this.totalNavWidth = CP.baseNavWidth;

		var $navItems = this.$nav.children();
		this.totalNavItems = $navItems.length;
		this.visibleNavItems = this.totalNavItems;

		for (var i = 0; i < this.totalNavItems; i++)
		{
			var $li = $($navItems[i]),
				width = $li.width();

			this.navItems.push($li);
			this.totalNavWidth += width;
		}

		this.addListener(Garnish.$win, 'resize', 'onWindowResize');
		this.onWindowResize();

		this.addListener(Garnish.$win, 'scroll', 'updateFixedNotifications');
		this.updateFixedNotifications();

		// Fade the notification out in two seconds
		var $errorNotifications = this.$notificationContainer.children('.error'),
			$otherNotifications = this.$notificationContainer.children(':not(.error)');

		$errorNotifications.delay(CP.notificationDuration * 2).velocity('fadeOut');
		$otherNotifications.delay(CP.notificationDuration).velocity('fadeOut');

		// Alerts
		if (this.$alerts.length)
		{
			this.initAlerts();
		}

		// Listen for save shortcuts in primary forms
		var $primaryForm = $('form[data-saveshortcut]:first');

		if ($primaryForm.length == 1)
		{
			this.addListener(Garnish.$doc, 'keydown', function(ev)
			{
				if ((ev.metaKey || ev.ctrlKey) && ev.keyCode == Garnish.S_KEY)
				{
					ev.preventDefault();

					// Give other stuff on the page a chance to prepare
					this.trigger('beforeSaveShortcut');

					if ($primaryForm.data('saveshortcut-redirect'))
					{
						$('<input type="hidden" name="redirect" value="'+$primaryForm.data('saveshortcut-redirect')+'"/>').appendTo($primaryForm);
					}

					$primaryForm.submit();
				}
				return true;
			});
		}

		Garnish.$win.on('load', $.proxy(function()
		{
			// Look for forms that we should watch for changes on
			this.$confirmUnloadForms = $('form[data-confirm-unload]');

			if (this.$confirmUnloadForms.length)
			{
				if (!Craft.forceConfirmUnload)
				{
					this.initialFormValues = [];
				}

				for (var i = 0; i < this.$confirmUnloadForms.length; i++)
				{
					var $form = $(this.$confirmUnloadForms);

					if (!Craft.forceConfirmUnload)
					{
						this.initialFormValues[i] = $form.serialize();
					}

					this.addListener($form, 'submit', function()
					{
						this.removeListener(Garnish.$win, 'beforeunload');
					});
				}

				this.addListener(Garnish.$win, 'beforeunload', function(ev)
				{
					for (var i = 0; i < this.$confirmUnloadForms.length; i++)
					{
						if (
							Craft.forceConfirmUnload ||
							this.initialFormValues[i] != $(this.$confirmUnloadForms[i]).serialize()
						)
						{
							var message = Craft.t('Any changes will be lost if you leave this page.');

							if (ev)
							{
								ev.originalEvent.returnValue = message;
							}
							else
							{
								window.event.returnValue = message;
							}

							return message;
						}
					}
				});
			}
		}, this));

		this.addListener(this.$upgradePromo, 'click', 'showUpgradeModal');

		var $wrongEditionModalContainer = $('#wrongedition-modal');

		if ($wrongEditionModalContainer.length)
		{
			new Craft.WrongEditionModal($wrongEditionModalContainer);
		}
	},

	/**
	 * Handles stuff that should happen when the window is resized.
	 */
	onWindowResize: function()
	{
		// Get the new window width
		this.onWindowResize._cpWidth = Math.min(Garnish.$win.width(), CP.maxWidth);

		// Update the responsive nav
		this.updateResponsiveNav();

		// Update any responsive tables
		this.updateResponsiveTables();
	},

	onActionItemListResize: function()
	{
		this.$siteName.css('max-width', 'calc(100% - '+(this.$headerActionsList.width()+14)+'px)');
	},

	updateResponsiveNav: function()
	{
		// Is an overflow menu going to be needed?
		if (this.onWindowResize._cpWidth < this.totalNavWidth)
		{
			// Show the overflow menu button
			if (!this.showingOverflowNavMenu)
			{
				if (!this.$overflowNavMenuBtn)
				{
					// Create it
					this.$overflowNavMenuItem = $('<li/>').appendTo(this.$nav);
					this.$overflowNavMenuBtn = $('<a class="menubtn" title="'+Craft.t('More')+'">…</a>').appendTo(this.$overflowNavMenuItem);
					this.$overflowNavMenu = $('<div id="overflow-nav" class="menu" data-align="right"/>').appendTo(this.$overflowNavMenuItem);
					this.$overflowNavMenuList = $('<ul/>').appendTo(this.$overflowNavMenu);
					new Garnish.MenuBtn(this.$overflowNavMenuBtn);
				}
				else
				{
					this.$overflowNavMenuItem.show();
				}

				this.showingOverflowNavMenu = true;
			}

			// Is the nav too tall?
			if (this.$nav.height() > CP.navHeight)
			{
				// Move items to the overflow menu until the nav is back to its normal height
				do
				{
					this.addLastVisibleNavItemToOverflowMenu();
				}
				while ((this.$nav.height() > CP.navHeight) && (this.visibleNavItems > 0));
			}
			else
			{
				// See if we can fit any more nav items in the main menu
				while ((this.$nav.height() == CP.navHeight) && (this.visibleNavItems < this.totalNavItems))
				{
					this.addFirstOverflowNavItemToMainMenu();
				}

				// Now kick the last one back.
				this.addLastVisibleNavItemToOverflowMenu();
			}
		}
		else
		{
			if (this.showingOverflowNavMenu)
			{
				// Hide the overflow menu button
				this.$overflowNavMenuItem.hide();

				// Move any nav items in the overflow menu back to the main nav menu
				while (this.visibleNavItems < this.totalNavItems)
				{
					this.addFirstOverflowNavItemToMainMenu();
				}

				this.showingOverflowNavMenu = false;
			}
		}
	},

	updateResponsiveTables: function()
	{
		if (!Garnish.isMobileBrowser())
		{
			return;
		}

		this.updateResponsiveTables._contentWidth = this.$content.width();

		for (this.updateResponsiveTables._i = 0; this.updateResponsiveTables._i < this.$collapsibleTables.length; this.updateResponsiveTables._i++)
		{
			this.updateResponsiveTables._$table = $(this.$collapsibleTables[this.updateResponsiveTables._i]);
			this.updateResponsiveTables._check = false;

			if (typeof this.updateResponsiveTables._lastContentWidth != 'undefined')
			{
				this.updateResponsiveTables._isLinear = this.updateResponsiveTables._$table.hasClass('collapsed');

				// Getting wider?
				if (this.updateResponsiveTables._contentWidth > this.updateResponsiveTables._lastContentWidth)
				{
					if (this.updateResponsiveTables._isLinear)
					{
						this.updateResponsiveTables._$table.removeClass('collapsed');
						this.updateResponsiveTables._check = true;
					}
				}
				else
				{
					if (!this.updateResponsiveTables._isLinear)
					{
						this.updateResponsiveTables._check = true;
					}
				}
			}
			else
			{
				this.updateResponsiveTables._check = true;
			}

			if (this.updateResponsiveTables._check)
			{
				if (this.updateResponsiveTables._$table.width() > this.updateResponsiveTables._contentWidth)
				{
					this.updateResponsiveTables._$table.addClass('collapsed');
				}
			}
		}

		this.updateResponsiveTables._lastContentWidth = this.updateResponsiveTables._contentWidth;
	},

	/**
	 * Adds the last visible nav item to the overflow menu.
	 */
	addLastVisibleNavItemToOverflowMenu: function()
	{
		this.navItems[this.visibleNavItems-1].prependTo(this.$overflowNavMenuList);
		this.visibleNavItems--;
	},

	/**
	 * Adds the first overflow nav item back to the main nav menu.
	 */
	addFirstOverflowNavItemToMainMenu: function()
	{
		this.navItems[this.visibleNavItems].insertBefore(this.$overflowNavMenuItem);
		this.visibleNavItems++;
	},

	updateFixedNotifications: function()
	{
		this.updateFixedNotifications._headerHeight = this.$header.height();

		if (Garnish.$win.scrollTop() > this.updateFixedNotifications._headerHeight)
		{
			if (!this.fixedNotifications)
			{
				this.$notificationWrapper.addClass('fixed');
				this.fixedNotifications = true;
			}
		}
		else
		{
			if (this.fixedNotifications)
			{
				this.$notificationWrapper.removeClass('fixed');
				this.fixedNotifications = false;
			}
		}
	},

	/**
	 * Dispays a notification.
	 *
	 * @param string type
	 * @param string message
	 */
	displayNotification: function(type, message)
	{
		var notificationDuration = CP.notificationDuration;

		if (type == 'error')
		{
			notificationDuration *= 2;
		}

		$('<div class="notification '+type+'">'+message+'</div>')
			.appendTo(this.$notificationContainer)
			.hide()
			.velocity('fadeIn', { display: 'inline-block', duration: 'fast' })
			.delay(notificationDuration)
			.velocity('fadeOut');

		this.trigger('displayNotification', {
			notificationType: type,
			message: message
		});
	},

	/**
	 * Displays a notice.
	 *
	 * @param string message
	 */
	displayNotice: function(message)
	{
		this.displayNotification('notice', message);
	},

	/**
	 * Displays an error.
	 *
	 * @param string message
	 */
	displayError: function(message)
	{
		if (!message)
		{
			message = Craft.t('An unknown error occurred.');
		}

		this.displayNotification('error', message);
	},

	fetchAlerts: function()
	{
		var data = {
			path: Craft.path
		};

		Craft.queueActionRequest('app/get-cp-alerts', data, $.proxy(this, 'displayAlerts'));
	},

	displayAlerts: function(alerts)
	{
		if (Garnish.isArray(alerts) && alerts.length)
		{
			this.$alerts = $('<ul id="alerts"/>').insertBefore($('#header'));

			for (var i = 0; i < alerts.length; i++)
			{
				$('<li>'+alerts[i]+'</li>').appendTo(this.$alerts);
			}

			var height = this.$alerts.height();

			this.$alerts.height(0).velocity({ height: height }, 'fast', $.proxy(function()
			{
				this.$alerts.height('auto');
			}, this));

			this.initAlerts();
		}
	},

	initAlerts: function()
	{
		// Is there a domain mismatch?
		var $transferDomainLink = this.$alerts.find('.domain-mismatch:first');

		if ($transferDomainLink.length)
		{
			this.addListener($transferDomainLink, 'click', $.proxy(function(ev)
			{
				ev.preventDefault();

				if (confirm(Craft.t('Are you sure you want to transfer your license to this domain?')))
				{
					Craft.queueActionRequest('app/transfer-license-to-current-domain', $.proxy(function(response, textStatus)
					{
						if (textStatus == 'success')
						{
							if (response.success)
							{
								$transferDomainLink.parent().remove();
								this.displayNotice(Craft.t('License transferred.'));
							}
							else
							{
								Craft.cp.displayError(response.error);
							}
						}

					}, this));
				}
			}, this));
		}

		// Are there any shunnable alerts?
		var $shunnableAlerts = this.$alerts.find('a[class^="shun:"]');

		for (var i = 0; i < $shunnableAlerts.length; i++)
		{
			this.addListener($shunnableAlerts[i], 'click', $.proxy(function(ev)
			{
				ev.preventDefault();

				var $link = $(ev.currentTarget);

				var data = {
					message: $link.prop('className').substr(5)
				};

				Craft.queueActionRequest('app/shun-cp-alert', data, $.proxy(function(response, textStatus)
				{
					if (textStatus == 'success')
					{
						if (response.success)
						{
							$link.parent().remove();
						}
						else
						{
							Craft.cp.displayError(response.error);
						}
					}

				}, this));

			}, this));
		}
	},

	checkForUpdates: function()
	{
		Craft.queueActionRequest('app/check-for-updates', $.proxy(function(info)
		{
			this.displayUpdateInfo(info);

			this.trigger('checkForUpdates', {
				updateInfo: info
			});
		}, this));
	},

	displayUpdateInfo: function(info)
	{
		// Remove the existing header badge, if any
		this.$headerActionsList.children('li.updates').remove();

		if (info.total)
		{
			var updateText;

			if (info.total == 1)
			{
				updateText = Craft.t('1 update available');
			}
			else
			{
				updateText = Craft.t('{num} updates available', { num: info.total });
			}

			// Header badge
			$('<li class="updates'+(info.critical ? ' critical' : '')+'">' +
				'<a data-icon="newstamp" href="'+Craft.getUrl('updates')+'" title="'+updateText+'">' +
					'<span>'+info.total+'</span>' +
				'</a>' +
			'</li>').prependTo(this.$headerActionsList);

			// Footer link
			$('#footer-updates').text(updateText);
		}
	},

	runPendingTasks: function()
	{
		if (Craft.runTasksAutomatically)
		{
			Craft.queueActionRequest('tasks/run-pending-tasks', $.proxy(function(taskInfo, textStatus)
			{
				if (textStatus == 'success')
				{
					this.trackTaskProgress(0);
				}
			}, this));
		}
		else
		{
			this.trackTaskProgress(0);
		}
	},

	trackTaskProgress: function(delay)
	{
		// Ignore if we're already tracking tasks
		if (this.trackTaskProgressTimeout)
		{
			return;
		}

		this.trackTaskProgressTimeout = setTimeout($.proxy(function()
		{
			Craft.queueActionRequest('tasks/get-running-task-info', $.proxy(function(taskInfo, textStatus)
			{
				if (textStatus == 'success')
				{
					this.trackTaskProgressTimeout = null;
					this.setRunningTaskInfo(taskInfo, true);

					if (taskInfo.status == 'running')
					{
						// Check again in one second
						this.trackTaskProgress();
					}
					else if (taskInfo.status == 'pending')
					{
						// Check again in 30 seconds
						this.trackTaskProgress(30000);
					}
				}
			}, this));
		}, this), (typeof delay != typeof undefined ? delay : 1000));
	},

	stopTrackingTaskProgress: function()
	{
		if (this.trackTaskProgressTimeout)
		{
			clearTimeout(this.trackTaskProgressTimeout);
			this.trackTaskProgressTimeout = null;
		}
	},

	setRunningTaskInfo: function(taskInfo, animateIcon)
	{
		this.runningTaskInfo = taskInfo;

		if (taskInfo)
		{
			if (!this.taskProgressIcon)
			{
				this.taskProgressIcon = new TaskProgressIcon();
			}

			if (taskInfo.status == 'running' || taskInfo.status == 'pending')
			{
				this.taskProgressIcon.hideFailMode();
				this.taskProgressIcon.setDescription(taskInfo.description);
				this.taskProgressIcon.setProgress(taskInfo.progress, animateIcon);
			}
			else if (taskInfo.status == 'error')
			{
				this.taskProgressIcon.showFailMode();
			}
		}
		else
		{
			if (this.taskProgressIcon)
			{
				this.taskProgressIcon.hideFailMode();
				this.taskProgressIcon.complete();
				delete this.taskProgressIcon;
			}
		}
	},

	showUpgradeModal: function()
	{
		if (!this.upgradeModal)
		{
			this.upgradeModal = new Craft.UpgradeModal();
		}
		else
		{
			this.upgradeModal.show();
		}
	}
},
{
	maxWidth: 1051, //1024,
	navHeight: 38,
	baseNavWidth: 30,
	notificationDuration: 2000
});

Craft.cp = new CP();


/**
 * Task progress icon class
 */
var TaskProgressIcon = Garnish.Base.extend(
{
	$li: null,
	$a: null,
	hud: null,
	completed: false,
	failMode: false,

	_canvasSupported: null,

	_$bgCanvas: null,
	_$staticCanvas: null,
	_$hoverCanvas: null,
	_$failCanvas: null,

	_staticCtx: null,
	_hoverCtx: null,
	_canvasSize: null,
	_arcPos: null,
	_arcRadius: null,
	_lineWidth: null,

	_arcStartPos: 0,
	_arcEndPos: 0,
	_arcStartStepSize: null,
	_arcEndStepSize: null,
	_arcStep: null,
	_arcStepTimeout: null,
	_arcAnimateCallback: null,

	_progressBar: null,

	init: function()
	{
		this.$li = $('<li/>').prependTo(Craft.cp.$headerActionsList);
		this.$a = $('<a id="taskicon"/>').appendTo(this.$li);

		this._canvasSupported = !!(document.createElement('canvas').getContext);

		if (this._canvasSupported)
		{
			var m = (window.devicePixelRatio > 1 ? 2 : 1);
			this._canvasSize = 30 * m;
			this._arcPos = this._canvasSize / 2;
			this._arcRadius = 7 * m;
			this._lineWidth = 3 * m;

			this._$bgCanvas     = this._createCanvas('bg', '#61666b');
			this._$staticCanvas = this._createCanvas('static', '#d7d9db');
			this._$hoverCanvas  = this._createCanvas('hover', '#fff');
			this._$failCanvas   = this._createCanvas('fail', '#da5a47').hide();

			this._staticCtx = this._$staticCanvas[0].getContext('2d');
			this._hoverCtx = this._$hoverCanvas[0].getContext('2d');

			this._drawArc(this._$bgCanvas[0].getContext('2d'), 0, 1);
			this._drawArc(this._$failCanvas[0].getContext('2d'), 0, 1);
		}
		else
		{
			this._progressBar = new Craft.ProgressBar(this.$a);
			this._progressBar.showProgressBar();
		}

		this.addListener(this.$a, 'click', 'toggleHud');
	},

	setDescription: function(description)
	{
		this.$a.attr('title', description);
	},

	setProgress: function(progress, animate)
	{
		if (this._canvasSupported)
		{
			if (animate)
			{
				this._animateArc(0, progress);
			}
			else
			{
				this._setArc(0, progress);
			}
		}
		else
		{
			this._progressBar.setProgressPercentage(progress * 100);
		}
	},

	complete: function()
	{
		this.completed = true;

		if (this._canvasSupported)
		{
			this._animateArc(0, 1, $.proxy(function()
			{
				this._$bgCanvas.velocity('fadeOut');

				this._animateArc(1, 1, $.proxy(function()
				{
					this.$li.remove();
					this.destroy();
				}, this));
			}, this));
		}
		else
		{
			this._progressBar.setProgressPercentage(100);
			this.$a.velocity('fadeOut');
		}
	},

	showFailMode: function()
	{
		if (this.failMode)
		{
			return;
		}

		this.failMode = true;

		if (this._canvasSupported)
		{
			this._$bgCanvas.hide();
			this._$staticCanvas.hide();
			this._$hoverCanvas.hide();
			this._$failCanvas.show();
		}
		else
		{
			this._progressBar.$progressBar.css('border-color', '#da5a47');
			this._progressBar.$innerProgressBar.css('background-color', '#da5a47');
			this._progressBar.setProgressPercentage(50);
		}

		this.setDescription(Craft.t('Failed task'));
	},

	hideFailMode: function()
	{
		if (!this.failMode)
		{
			return;
		}

		this.failMode = false;

		if (this._canvasSupported)
		{
			this._$bgCanvas.show();
			this._$staticCanvas.show();
			this._$hoverCanvas.show();
			this._$failCanvas.hide();
		}
		else
		{
			this._progressBar.$progressBar.css('border-color', '');
			this._progressBar.$innerProgressBar.css('background-color', '');
			this._progressBar.setProgressPercentage(50);
		}
	},

	toggleHud: function()
	{
		if (!this.hud)
		{
			this.hud = new TaskProgressHUD();
		}
		else
		{
			this.hud.toggle();
		}
	},

	_createCanvas: function(id, color)
	{
		var $canvas = $('<canvas id="taskicon-'+id+'" width="'+this._canvasSize+'" height="'+this._canvasSize+'"/>').appendTo(this.$a),
			ctx = $canvas[0].getContext('2d');

		ctx.strokeStyle = color;
		ctx.lineWidth = this._lineWidth;
		ctx.lineCap = 'round';
		return $canvas;
	},

	_setArc: function(startPos, endPos)
	{
		this._arcStartPos = startPos;
		this._arcEndPos = endPos;

		this._drawArc(this._staticCtx, startPos, endPos);
		this._drawArc(this._hoverCtx, startPos, endPos);
	},

	_drawArc: function(ctx, startPos, endPos)
	{
		ctx.clearRect(0, 0, this._canvasSize, this._canvasSize);
		ctx.beginPath();
		ctx.arc(this._arcPos, this._arcPos, this._arcRadius, (1.5+(startPos*2))*Math.PI, (1.5+(endPos*2))*Math.PI);
		ctx.stroke();
		ctx.closePath();
	},

	_animateArc: function(targetStartPos, targetEndPos, callback)
	{
		if (this._arcStepTimeout)
		{
			clearTimeout(this._arcStepTimeout);
		}

		this._arcStep = 0;
		this._arcStartStepSize = (targetStartPos - this._arcStartPos) / 10;
		this._arcEndStepSize = (targetEndPos - this._arcEndPos) / 10;
		this._arcAnimateCallback = callback;
		this._takeNextArcStep();
	},

	_takeNextArcStep: function()
	{
		this._setArc(this._arcStartPos+this._arcStartStepSize, this._arcEndPos+this._arcEndStepSize);

		this._arcStep++;

		if (this._arcStep < 10)
		{
			this._arcStepTimeout = setTimeout($.proxy(this, '_takeNextArcStep'), 50);
		}
		else if (this._arcAnimateCallback)
		{
			this._arcAnimateCallback();
		}
	}
});

var TaskProgressHUD = Garnish.HUD.extend(
{
	icon: null,

	tasksById: null,
	completedTasks: null,
	updateTasksTimeout: null,

	completed: false,

	init: function()
	{
		this.icon = Craft.cp.taskProgressIcon;
		this.tasksById = {};
		this.completedTasks = [];

		this.base(this.icon.$a);
		this.$body.attr('id', 'tasks-hud');

		// Use the known task as a starting point
		if (Craft.cp.runningTaskInfo && Craft.cp.runningTaskInfo.status != 'error')
		{
			this.showTaskInfo([Craft.cp.runningTaskInfo]);
		}

		this.$hud.trigger('resize');
	},

	onShow: function()
	{
		Craft.cp.stopTrackingTaskProgress();

		this.updateTasks();
		this.base();
	},

	onHide: function()
	{
		if (this.updateTasksTimeout)
		{
			clearTimeout(this.updateTasksTimeout);
		}

		if (!this.completed)
		{
			Craft.cp.trackTaskProgress();
		}

		// Clear out any completed tasks
		if (this.completedTasks.length)
		{
			for (var i = 0; i < this.completedTasks.length; i++)
			{
				this.completedTasks[i].destroy();
			}

			this.completedTasks = [];
		}

		this.base();
	},

	updateTasks: function()
	{
		this.completed = false;

		Craft.postActionRequest('tasks/get-task-info', $.proxy(function(taskInfo, textStatus)
		{
			if (textStatus == 'success')
			{
				this.showTaskInfo(taskInfo);
			}
		}, this));
	},

	showTaskInfo: function(taskInfo)
	{
		// First remove any tasks that have completed
		var newTaskIds = [];

		if (taskInfo)
		{
			for (var i = 0; i < taskInfo.length; i++)
			{
				newTaskIds.push(taskInfo[i].id);
			}
		}

		for (var id in this.tasksById)
		{
			if (!Craft.inArray(id, newTaskIds))
			{
				this.tasksById[id].complete();
				this.completedTasks.push(this.tasksById[id]);
				delete this.tasksById[id];
			}
		}

		// Now display the tasks that are still around
		if (taskInfo && taskInfo.length)
		{
			var anyTasksRunning = false,
				anyTasksFailed = false;

			for (var i = 0; i < taskInfo.length; i++)
			{
				var info = taskInfo[i];

				if (!anyTasksRunning && info.status == 'running')
				{
					anyTasksRunning = true;
				}
				else if (!anyTasksFailed && info.status == 'error')
				{
					anyTasksFailed = true;
				}

				if (this.tasksById[info.id])
				{
					this.tasksById[info.id].updateStatus(info);
				}
				else
				{
					this.tasksById[info.id] = new TaskProgressHUD.Task(this, info);

					// Place it before the next already known task
					for (var j = i + 1; j < taskInfo.length; j++)
					{
						if (this.tasksById[taskInfo[j].id])
						{
							this.tasksById[info.id].$container.insertBefore(this.tasksById[taskInfo[j].id].$container);
							break;
						}
					}
				}
			}

			if (anyTasksRunning)
			{
				this.updateTasksTimeout = setTimeout($.proxy(this, 'updateTasks'), 500);
			}
			else
			{
				this.completed = true;

				if (anyTasksFailed)
				{
					Craft.cp.setRunningTaskInfo({ status: 'error' });
				}
			}
		}
		else
		{
			this.completed = true;
			Craft.cp.setRunningTaskInfo(null);
			this.hide();
		}
	}
});

TaskProgressHUD.Task = Garnish.Base.extend(
{
	hud: null,
	id: null,
	level: null,
	description: null,

	status: null,
	progress: null,

	$container: null,
	$statusContainer: null,
	$descriptionContainer: null,

	_progressBar: null,

	init: function(hud, info)
	{
		this.hud = hud;

		this.id = info.id;
		this.level = info.level;
		this.description = info.description;

		this.$container = $('<div class="task"/>').appendTo(this.hud.$body);
		this.$statusContainer = $('<div class="task-status"/>').appendTo(this.$container);
		this.$descriptionContainer = $('<div class="task-description"/>').appendTo(this.$container).text(info.description);

		this.$container.data('task', this);

		if (this.level != 0)
		{
			this.$container.css('padding-'+Craft.left, 24+(this.level*24));
			$('<div class="indent" data-icon="'+(Craft.orientation == 'ltr' ? 'rarr' : 'larr')+'"/>').appendTo(this.$descriptionContainer);
		}

		this.updateStatus(info);
	},

	updateStatus: function(info)
	{
		if (this.status != info.status)
		{
			this.$statusContainer.empty();
			this.status = info.status;

			switch (this.status)
			{
				case 'pending':
				{
					this.$statusContainer.text(Craft.t('Pending'));
					break;
				}
				case 'running':
				{
					this._progressBar = new Craft.ProgressBar(this.$statusContainer);
					this._progressBar.showProgressBar();
					break;
				}
				case 'error':
				{
					$('<span class="error">'+Craft.t('Failed')+'</span>').appendTo(this.$statusContainer);

					if (this.level == 0)
					{
						var $actionBtn = $('<a class="menubtn error" title="'+Craft.t('Options')+'"/>').appendTo(this.$statusContainer);
						$(
							'<div class="menu">' +
								'<ul>' +
									'<li><a data-action="rerun">'+Craft.t('Try again')+'</a></li>' +
									'<li><a data-action="cancel">'+Craft.t('Cancel')+'</a></li>' +
								'</ul>' +
							'</div>'
						).appendTo(this.$statusContainer);

						new Garnish.MenuBtn($actionBtn, {
							onOptionSelect: $.proxy(this, 'performErrorAction')
						});
					}

					break;
				}
			}
		}

		if (this.status == 'running')
		{
			this._progressBar.setProgressPercentage(info.progress*100);

			if (this.level == 0)
			{
				// Update the task icon
				Craft.cp.setRunningTaskInfo(info, true);
			}
		}
	},

	performErrorAction: function(option)
	{
		// Whatever happens, let's remove any following subtasks
		var $nextTaskContainers = this.$container.nextAll();

		for (var i = 0; i < $nextTaskContainers.length; i++)
		{
			var nextTask = $($nextTaskContainers[i]).data('task');

			if (nextTask && nextTask.level != 0)
			{
				nextTask.destroy();
			}
			else
			{
				break;
			}
		}

		// What option did they choose?
		switch ($(option).data('action'))
		{
			case 'rerun':
			{
				Craft.postActionRequest('tasks/rerun-task', { taskId: this.id }, $.proxy(function(taskInfo, textStatus)
				{
					if (textStatus == 'success')
					{
						this.updateStatus(taskInfo);

						if (this.hud.completed)
						{
							this.hud.updateTasks();
						}
					}
				}, this));
				break;
			}
			case 'cancel':
			{
				Craft.postActionRequest('tasks/delete-task', { taskId: this.id }, $.proxy(function(taskInfo, textStatus)
				{
					if (textStatus == 'success')
					{
						this.destroy();

						if (this.hud.completed)
						{
							this.hud.updateTasks();
						}
					}
				}, this));
			}
		}
	},

	complete: function()
	{
		this.$statusContainer.empty();
		$('<div data-icon="check"/>').appendTo(this.$statusContainer);
	},

	destroy: function()
	{
		if (this.hud.tasksById[this.id])
		{
			delete this.hud.tasksById[this.id];
		}

		this.$container.remove();
		this.base();
	}
});

/**
 * Category index class
 */
Craft.CategoryIndex = Craft.BaseElementIndex.extend(
{
	$newCategoryBtn: null,

	onAfterHtmlInit: function()
	{
		// Get the New Category button
		this.$newCategoryBtn = this.$sidebar.find('> .buttons > .btn');

		this.base();
	},

	getDefaultSourceKey: function()
	{
		// Did they request a specific category group in the URL?
		if (this.settings.context == 'index' && typeof defaultGroupHandle != typeof undefined)
		{
			for (var i = 0; i < this.$sources.length; i++)
			{
				var $source = $(this.$sources[i]);

				if ($source.data('handle') == defaultGroupHandle)
				{
					return $source.data('key');
				}
			}
		}

		return this.base();
	},

	onSelectSource: function()
	{
		if (this.settings.context == 'index')
		{
			// Get the handle of the selected source
			var handle = this.$source.data('handle');

			// Update the URL
			if (typeof history != typeof undefined)
			{
				var uri = 'categories';

				if (handle)
				{
					uri += '/'+handle;
				}

				history.replaceState({}, '', Craft.getUrl(uri));
			}

			// Update the New Category button
			this.$newCategoryBtn.attr('href', Craft.getUrl('categories/'+handle+'/new'));
		}

		this.base();
	}

});

// Register it!
Craft.registerElementIndexClass('craft\\app\\elements\\Category', Craft.CategoryIndex);

/**
 * Category Select input
 */
Craft.CategorySelectInput = Craft.BaseElementSelectInput.extend(
{
	setSettings: function()
	{
		this.base.apply(this, arguments);
		this.settings.sortable = false;
	},

	getModalSettings: function()
	{
		var settings = this.base();
		settings.hideOnSelect = false;
		return settings;
	},

	getElements: function()
	{
		return this.$elementsContainer.find('.element');
	},

	onModalSelect: function(elements)
	{
		// Disable the modal
		this.modal.disable();
		this.modal.disableCancelBtn();
		this.modal.disableSelectBtn();
		this.modal.showFooterSpinner();

		// Get the new category HTML
		var selectedCategoryIds = this.getSelectedElementIds();

		for (var i = 0; i < elements.length; i++)
		{
			selectedCategoryIds.push(elements[i].id);
		}

		var data = {
			categoryIds: selectedCategoryIds,
			locale:      elements[0].locale,
			id:          this.settings.id,
			name:        this.settings.name,
			limit:       this.settings.limit,
		};

		Craft.postActionRequest('elements/get-categories-input-html', data, $.proxy(function(response, textStatus)
		{
			this.modal.enable();
			this.modal.enableCancelBtn();
			this.modal.enableSelectBtn();
			this.modal.hideFooterSpinner();

			if (textStatus == 'success')
			{
				var $newInput = $(response.html),
					$newElementsContainer = $newInput.children('.elements');

				this.$elementsContainer.replaceWith($newElementsContainer);
				this.$elementsContainer = $newElementsContainer;
				this.resetElements();

				for (var i = 0; i < elements.length; i++)
				{
					var element = elements[i],
						$element = this.getElementById(element.id);

					if ($element)
					{
						this.animateElementIntoPlace(element.$element, $element);
					}
				}

				this.updateDisabledElementsInModal();
				this.modal.hide();
				this.onSelectElements();
			}
		}, this));
	},

	removeElement: function($element)
	{
		// Find any descendants this category might have
		var $allCategories = $element.add($element.parent().siblings('ul').find('.element'));

		// Remove our record of them all at once
		this.removeElements($allCategories);

		// Animate them away one at a time
		for (var i = 0; i < $allCategories.length; i++)
		{
			this._animateCategoryAway($allCategories, i);
		}
	},

	_animateCategoryAway: function($allCategories, i)
	{
		var callback;

		// Is this the last one?
		if (i == $allCategories.length - 1)
		{
			callback = $.proxy(function()
			{
				var $li = $allCategories.first().parent().parent(),
					$ul = $li.parent();

				if ($ul[0] == this.$elementsContainer[0] || $li.siblings().length)
				{
					$li.remove();
				}
				else
				{
					$ul.remove();
				}
			}, this);
		}

		var func = $.proxy(function() {
			this.animateElementAway($allCategories.eq(i), callback);
		}, this);

		if (i == 0)
		{
			func();
		}
		else
		{
			setTimeout(func, 100 * i);
		}
	}
});

/**
 * DataTableSorter
 */
Craft.DataTableSorter = Garnish.DragSort.extend(
{
	$table: null,

	init: function(table, settings)
	{
		this.$table = $(table);
		var $rows = this.$table.children('tbody').children(':not(.filler)');

		settings = $.extend({}, Craft.DataTableSorter.defaults, settings);

		settings.container = this.$table.children('tbody');
		settings.helper = $.proxy(this, 'getHelper');
		settings.caboose = '<tr/>';
		settings.axis = Garnish.Y_AXIS;
		settings.magnetStrength = 4;
		settings.helperLagBase = 1.5;

		this.base($rows, settings);
	},

	getHelper: function($helperRow)
	{
		var $helper = $('<div class="'+this.settings.helperClass+'"/>').appendTo(Garnish.$bod),
			$table = $('<table/>').appendTo($helper),
			$tbody = $('<tbody/>').appendTo($table);

		$helperRow.appendTo($tbody);

		// Copy the table width and classes
		$table.width(this.$table.width());
		$table.prop('className', this.$table.prop('className'));

		// Copy the column widths
		var $firstRow = this.$table.find('tr:first'),
			$cells = $firstRow.children(),
			$helperCells = $helperRow.children();

		for (var i = 0; i < $helperCells.length; i++)
		{
			$($helperCells[i]).width($($cells[i]).width());
		}

		return $helper;
	}

},
{
	defaults: {
		handle: '.move',
		helperClass: 'datatablesorthelper'
	}
});

Craft.DeleteUserModal = Garnish.Modal.extend(
{
	id: null,
	userId: null,

	$deleteActionRadios: null,
	$deleteSpinner: null,

	userSelect: null,
	_deleting: false,

	init: function(userId, settings)
	{
		this.id = Math.floor(Math.random()*1000000000);
		this.userId = userId;
		settings = $.extend(Craft.DeleteUserModal.defaults, settings);

		var $form = $(
				'<form class="modal fitted deleteusermodal" method="post" accept-charset="UTF-8">' +
					Craft.getCsrfInput() +
					'<input type="hidden" name="action" value="users/delete-user"/>' +
					(!Garnish.isArray(this.userId) ? '<input type="hidden" name="userId" value="'+this.userId+'"/>' : '') +
					'<input type="hidden" name="redirect" value="'+(Craft.edition == Craft.Pro ? 'users' : 'dashboard')+'"/>' +
				'</form>'
			).appendTo(Garnish.$bod),
			$body = $(
				'<div class="body">' +
					'<p>'+Craft.t('What do you want to do with their content?')+'</p>' +
					'<div class="options">' +
						'<label><input type="radio" name="contentAction" value="transfer"/> '+Craft.t('Transfer it to:')+'</label>' +
						'<div id="transferselect'+this.id+'" class="elementselect">' +
							'<div class="elements"></div>' +
							'<div class="btn add icon dashed">'+Craft.t('Choose a user')+'</div>' +
						'</div>' +
					'</div>' +
					'<div>' +
						'<label><input type="radio" name="contentAction" value="delete"/> '+Craft.t('Delete it')+'</label>' +
					'</div>' +
				'</div>'
			).appendTo($form),
			$buttons = $('<div class="buttons right"/>').appendTo($body),
			$cancelBtn = $('<div class="btn">'+Craft.t('Cancel')+'</div>').appendTo($buttons);

		this.$deleteActionRadios = $body.find('input[type=radio]');
		this.$deleteSubmitBtn = $('<input type="submit" class="btn submit disabled" value="'+(Garnish.isArray(this.userId) ? Craft.t('Delete users') : Craft.t('Delete user'))+'" />').appendTo($buttons);
		this.$deleteSpinner = $('<div class="spinner hidden"/>').appendTo($buttons);

		var idParam;

		if (Garnish.isArray(this.userId))
		{
			idParam = ['and'];

			for (var i = 0; i < this.userId.length; i++)
			{
				idParam.push('not '+this.userId[i]);
			}
		}
		else
		{
			idParam = 'not '+this.userId;
		}

		this.userSelect = new Craft.BaseElementSelectInput({
			id: 'transferselect'+this.id,
			name: 'transferContentTo',
			elementType: 'User',
			criteria: {
				id: idParam
			},
			limit: 1,
			modalSettings: {
				closeOtherModals: false
			},
			onSelectElements: $.proxy(function()
			{
				this.updateSizeAndPosition();

				if (!this.$deleteActionRadios.first().prop('checked'))
				{
					this.$deleteActionRadios.first().click();
				}
				else
				{
					this.validateDeleteInputs();
				}
			}, this),
			onRemoveElements: $.proxy(this, 'validateDeleteInputs'),
			selectable: false,
			editable: false
		});

		this.addListener($cancelBtn, 'click', 'hide');

		this.addListener(this.$deleteActionRadios, 'change', 'validateDeleteInputs');
		this.addListener($form, 'submit', 'handleSubmit');

		this.base($form, settings);
	},

	validateDeleteInputs: function()
	{
		var validates = false;

		if (this.$deleteActionRadios.eq(0).prop('checked'))
		{
			validates = !!this.userSelect.totalSelected;
		}
		else if (this.$deleteActionRadios.eq(1).prop('checked'))
		{
			validates = true;
		}

		if (validates)
		{
			this.$deleteSubmitBtn.removeClass('disabled');
		}
		else
		{
			this.$deleteSubmitBtn.addClass('disabled');
		}

		return validates;
	},

	handleSubmit: function(ev)
	{
		if (this._deleting || !this.validateDeleteInputs())
		{
			ev.preventDefault();
			return;
		}

		this.$deleteSubmitBtn.addClass('active');
		this.$deleteSpinner.removeClass('hidden');
		this.disable();
		this.userSelect.disable();
		this._deleting = true;

		// Let the onSubmit callback prevent the form from getting submitted
		if (this.settings.onSubmit() === false)
		{
			ev.preventDefault();
		}
	},

	onFadeIn: function()
	{
		// Auto-focus the first radio
		if (!Garnish.isMobileBrowser(true))
		{
			this.$deleteActionRadios.first().focus();
		}

		this.base();
	}
},
{
	defaults: {
		onSubmit: $.noop
	}
});

/**
 * Editable table class
 */
Craft.EditableTable = Garnish.Base.extend(
{
	id: null,
	baseName: null,
	columns: null,
	sorter: null,
	biggestId: -1,

	$table: null,
	$tbody: null,
	$addRowBtn: null,

	init: function(id, baseName, columns, settings)
	{
		this.id = id;
		this.baseName = baseName;
		this.columns = columns;
		this.setSettings(settings, Craft.EditableTable.defaults);

		this.$table = $('#'+id);
		this.$tbody = this.$table.children('tbody');

		this.sorter = new Craft.DataTableSorter(this.$table, {
			helperClass: 'editabletablesorthelper',
			copyDraggeeInputValuesToHelper: true
		});

		var $rows = this.$tbody.children();

		for (var i = 0; i < $rows.length; i++)
		{
			new Craft.EditableTable.Row(this, $rows[i]);
		}

		this.$addRowBtn = this.$table.next('.add');
		this.addListener(this.$addRowBtn, 'activate', 'addRow');
	},

	addRow: function()
	{
		var rowId = this.settings.rowIdPrefix+(this.biggestId+1),
			rowHtml = Craft.EditableTable.getRowHtml(rowId, this.columns, this.baseName, {}),
			$tr = $(rowHtml).appendTo(this.$tbody);

		new Craft.EditableTable.Row(this, $tr);
		this.sorter.addItems($tr);

		// Focus the first input in the row
		$tr.find('input,textarea,select').first().focus();

		// onAddRow callback
		this.settings.onAddRow($tr);
	}
},
{
	textualColTypes: ['singleline', 'multiline', 'number'],
	defaults: {
		rowIdPrefix: '',
		onAddRow: $.noop,
		onDeleteRow: $.noop
	},

	getRowHtml: function(rowId, columns, baseName, values)
	{
		var rowHtml = '<tr data-id="'+rowId+'">';

		for (var colId in columns)
		{
			var col = columns[colId],
				name = baseName+'['+rowId+']['+colId+']',
				value = (typeof values[colId] != 'undefined' ? values[colId] : ''),
				textual = Craft.inArray(col.type, Craft.EditableTable.textualColTypes);

			rowHtml += '<td class="'+(textual ? 'textual' : '')+' '+(typeof col['class'] != 'undefined' ? col['class'] : '')+'"' +
			              (typeof col.width != 'undefined' ? ' width="'+col.width+'"' : '') +
			              '>';

			switch (col.type)
			{
				case 'select':
				{
					rowHtml += '<div class="select small"><select name="'+name+'">';

					var hasOptgroups = false;

					for (var key in col.options)
					{
						var option = col.options[key];

						if (typeof option.optgroup != 'undefined')
						{
							if (hasOptgroups)
							{
								rowHtml += '</optgroup>';
							}
							else
							{
								hasOptgroups = true;
							}

							rowHtml += '<optgroup label="'+option.optgroup+'">';
						}
						else
						{
							var optionLabel = (typeof option.label != 'undefined' ? option.label : option),
								optionValue = (typeof option.value != 'undefined' ? option.value : key),
								optionDisabled = (typeof option.disabled != 'undefined' ? option.disabled : false);

							rowHtml += '<option value="'+optionValue+'"'+(optionValue == value ? ' selected' : '')+(optionDisabled ? ' disabled' : '')+'>'+optionLabel+'</option>';
						}
					}

					if (hasOptgroups)
					{
						rowHtml += '</optgroup>';
					}

					rowHtml += '</select></div>';

					break;
				}

				case 'checkbox':
				{
					rowHtml += '<input type="hidden" name="'+name+'">' +
					           '<input type="checkbox" name="'+name+'" value="1"'+(value ? ' checked' : '')+'>';

					break;
				}

				default:
				{
					rowHtml += '<textarea name="'+name+'" rows="1">'+value+'</textarea>';
				}
			}

			rowHtml += '</td>';
		}

		rowHtml += '<td class="thin action"><a class="move icon" title="'+Craft.t('Reorder')+'"></a></td>' +
				'<td class="thin action"><a class="delete icon" title="'+Craft.t('Delete')+'"></a></td>' +
			'</tr>';

		return rowHtml;
	}
});

/**
 * Editable table row class
 */
Craft.EditableTable.Row = Garnish.Base.extend(
{
	table: null,
	id: null,
	niceTexts: null,

	$tr: null,
	$tds: null,
	$textareas: null,
	$deleteBtn: null,

	init: function(table, tr)
	{
		this.table = table;
		this.$tr = $(tr);
		this.$tds = this.$tr.children();

		// Get the row ID, sans prefix
		var id = parseInt(this.$tr.attr('data-id').substr(this.table.settings.rowIdPrefix.length));

		if (id > this.table.biggestId)
		{
			this.table.biggestId = id;
		}

		this.$textareas = $();
		this.niceTexts = [];
		var textareasByColId = {};

		var i = 0;

		for (var colId in this.table.columns)
		{
			var col = this.table.columns[colId];

			if (Craft.inArray(col.type, Craft.EditableTable.textualColTypes))
			{
				$textarea = $('textarea', this.$tds[i]);
				this.$textareas = this.$textareas.add($textarea);

				this.addListener($textarea, 'focus', 'onTextareaFocus');
				this.addListener($textarea, 'mousedown', 'ignoreNextTextareaFocus');

				this.niceTexts.push(new Garnish.NiceText($textarea, {
					onHeightChange: $.proxy(this, 'onTextareaHeightChange')
				}));

				if (col.type == 'singleline' || col.type == 'number')
				{
					this.addListener($textarea, 'keypress', { type: col.type }, 'validateKeypress');
				}

				textareasByColId[colId] = $textarea;
			}

			i++;
		}

		// Now that all of the text cells have been nice-ified, let's normalize the heights
		this.onTextareaHeightChange();

		// Now look for any autopopulate columns
		for (var colId in this.table.columns)
		{
			var col = this.table.columns[colId];

			if (col.autopopulate && typeof textareasByColId[col.autopopulate] != 'undefined' && !textareasByColId[colId].val())
			{
				if (col.autopopulate == 'handle')
				{
					new Craft.HandleGenerator(textareasByColId[colId], textareasByColId[col.autopopulate]);
				}
				else
				{
					new Craft.BaseInputGenerator(textareasByColId[colId], textareasByColId[col.autopopulate]);
				}
			}
		}

		var $deleteBtn = this.$tr.children().last().find('.delete');
		this.addListener($deleteBtn, 'click', 'deleteRow');
	},

	onTextareaFocus: function(ev)
	{
		this.onTextareaHeightChange();

		var $textarea = $(ev.currentTarget);

		if ($textarea.data('ignoreNextFocus'))
		{
			$textarea.data('ignoreNextFocus', false);
			return;
		}

		setTimeout(function()
		{
			var val = $textarea.val();

			// Does the browser support setSelectionRange()?
			if (typeof $textarea[0].setSelectionRange != 'undefined')
			{
				// Select the whole value
				var length = val.length * 2;
				$textarea[0].setSelectionRange(0, length);
			}
			else
			{
				// Refresh the value to get the cursor positioned at the end
				$textarea.val(val);
			}
		}, 0);
	},

	ignoreNextTextareaFocus: function(ev)
	{
		$.data(ev.currentTarget, 'ignoreNextFocus', true);
	},

	validateKeypress: function(ev)
	{
		var keyCode = ev.keyCode ? ev.keyCode : ev.charCode;

		if (!ev.metaKey && !ev.ctrlKey && (
			(keyCode == Garnish.RETURN_KEY) ||
			(ev.data.type == 'number' && !Craft.inArray(keyCode, Craft.EditableTable.Row.numericKeyCodes))
		))
		{
			ev.preventDefault();
		}
	},

	onTextareaHeightChange: function()
	{
		// Keep all the textareas' heights in sync
		var tallestTextareaHeight = -1;

		for (var i = 0; i < this.niceTexts.length; i++)
		{
			if (this.niceTexts[i].height > tallestTextareaHeight)
			{
				tallestTextareaHeight = this.niceTexts[i].height;
			}
		}

		this.$textareas.css('min-height', tallestTextareaHeight);

		// If the <td> is still taller, go with that insted
		var tdHeight = this.$textareas.first().parent().height();

		if (tdHeight > tallestTextareaHeight)
		{
			this.$textareas.css('min-height', tdHeight);
		}
	},

	deleteRow: function()
	{
		this.table.sorter.removeItems(this.$tr);
		this.$tr.remove();

		// onDeleteRow callback
		this.table.settings.onDeleteRow(this.$tr);
	}
},
{
	numericKeyCodes: [9 /* (tab) */ , 8 /* (delete) */ , 37,38,39,40 /* (arrows) */ , 45,91 /* (minus) */ , 46,190 /* period */ , 48,49,50,51,52,53,54,55,56,57 /* (0-9) */ ]
});

Craft.ElementActionTrigger = Garnish.Base.extend(
{
	maxLevels: null,
	newChildUrl: null,
	$trigger: null,
	$selectedItems: null,
	triggerEnabled: true,

	init: function(settings)
	{
		this.setSettings(settings, Craft.ElementActionTrigger.defaults);

		this.$trigger = $('#'+settings.type.replace(/[\[\]\\]+/g, '-')+'-actiontrigger');

		// Do we have a custom handler?
		if (this.settings.activate)
		{
			// Prevent the element index's click handler
			this.$trigger.data('custom-handler', true);

			// Is this a custom trigger?
			if (this.$trigger.prop('nodeName') == 'FORM')
			{
				this.addListener(this.$trigger, 'submit', 'handleTriggerActivation');
			}
			else
			{
				this.addListener(this.$trigger, 'click', 'handleTriggerActivation');
			}
		}

		this.updateTrigger();
		Craft.elementIndex.elementSelect.on('selectionChange', $.proxy(this, 'updateTrigger'));
	},

	updateTrigger: function()
	{
		// Ignore if the last element was just unselected
		if (Craft.elementIndex.elementSelect.totalSelected == 0)
		{
			return;
		}

		if (this.validateSelection())
		{
			this.enableTrigger();
		}
		else
		{
			this.disableTrigger();
		}
	},

	/**
	 * Determines if this action can be performed on the currently selected elements.
	 *
	 * @return bool
	 */
	validateSelection: function()
	{
		var valid = true;
		this.$selectedItems = Craft.elementIndex.elementSelect.$selectedItems;

		if (!this.settings.batch && this.$selectedItems.length > 1)
		{
			valid = false;
		}
		else if (typeof this.settings.validateSelection == 'function')
		{
			valid = this.settings.validateSelection(this.$selectedItems);
		}

		return valid;
	},

	enableTrigger: function()
	{
		if (this.triggerEnabled)
		{
			return;
		}

		this.$trigger.removeClass('disabled');
		this.triggerEnabled = true;
	},

	disableTrigger: function()
	{
		if (!this.triggerEnabled)
		{
			return;
		}

		this.$trigger.addClass('disabled');
		this.triggerEnabled = false;
	},

	handleTriggerActivation: function(ev)
	{
		ev.preventDefault();
		ev.stopPropagation();

		if (this.triggerEnabled)
		{
			this.settings.activate(this.$selectedItems);
		}
	}
},
{
	defaults: {
		type: null,
		batch: true,
		validateSelection: null,
		activate: null
	}
});

/**
 * Element editor
 */
Craft.ElementEditor = Garnish.Base.extend(
{
	$element: null,
	elementId: null,
	locale: null,

	$form: null,
	$fieldsContainer: null,
	$cancelBtn: null,
	$saveBtn: null,
	$spinner: null,

	$localeSelect: null,
	$localeSpinner: null,

	hud: null,

	init: function($element)
	{
		this.$element = $element;
		this.elementId = $element.data('id');

		this.$element.addClass('loading');

		var data = {
			elementId:      this.elementId,
			locale:         this.$element.data('locale'),
			includeLocales: true
		};

		Craft.postActionRequest('elements/get-editor-html', data, $.proxy(this, 'showHud'));
	},

	showHud: function(response, textStatus)
	{
		this.$element.removeClass('loading');

		if (textStatus == 'success')
		{
			var $hudContents = $();

			if (response.locales)
			{
				var $localesContainer = $('<div class="header"/>'),
					$localeSelectContainer = $('<div class="select"/>').appendTo($localesContainer);

				this.$localeSelect = $('<select/>').appendTo($localeSelectContainer);
				this.$localeSpinner = $('<div class="spinner hidden"/>').appendTo($localesContainer);

				for (var i = 0; i < response.locales.length; i++)
				{
					var locale = response.locales[i];
					$('<option value="'+locale.id+'"'+(locale.id == response.locale ? ' selected="selected"' : '')+'>'+locale.name+'</option>').appendTo(this.$localeSelect);
				}

				this.addListener(this.$localeSelect, 'change', 'switchLocale');

				$hudContents = $hudContents.add($localesContainer);
			}

			this.$form = $('<form/>');
			this.$fieldsContainer = $('<div class="fields"/>').appendTo(this.$form);

			this.updateForm(response);

			var $buttonsOuterContainer = $('<div class="footer"/>').appendTo(this.$form);

			this.$spinner = $('<div class="spinner hidden"/>').appendTo($buttonsOuterContainer);

			var $buttonsContainer = $('<div class="buttons right"/>').appendTo($buttonsOuterContainer);
			this.$cancelBtn = $('<div class="btn">'+Craft.t('Cancel')+'</div>').appendTo($buttonsContainer);
			this.$saveBtn = $('<input class="btn submit" type="submit" value="'+Craft.t('Save')+'"/>').appendTo($buttonsContainer);

			$hudContents = $hudContents.add(this.$form);

			this.hud = new Garnish.HUD(this.$element, $hudContents, {
				bodyClass: 'body elementeditor',
				closeOtherHUDs: false
			});

			this.hud.on('hide', $.proxy(function() {
				delete this.hud;
			}, this));

			this.addListener(this.$form, 'submit', 'saveElement');
			this.addListener(this.$cancelBtn, 'click', function() {
				this.hud.hide();
			});
		}
	},

	switchLocale: function()
	{
		var newLocale = this.$localeSelect.val();

		if (newLocale == this.locale)
		{
			return;
		}

		this.$localeSpinner.removeClass('hidden');

		var data = {
			elementId: this.elementId,
			locale:    newLocale
		};

		Craft.postActionRequest('elements/get-editor-html', data, $.proxy(function(response, textStatus)
		{
			this.$localeSpinner.addClass('hidden');

			if (textStatus == 'success')
			{
				this.updateForm(response);
			}
			else
			{
				this.$localeSelect.val(this.locale);
			}
		}, this));
	},

	updateForm: function(response)
	{
		this.locale = response.locale;

		this.$fieldsContainer.html(response.html);

		Garnish.requestAnimationFrame($.proxy(function()
		{
			Craft.appendHeadHtml(response.headHtml);
			Craft.appendFootHtml(response.footHtml);
			Craft.initUiElements(this.$fieldsContainer);
		}, this));
	},

	saveElement: function(ev)
	{
		ev.preventDefault();

		this.$spinner.removeClass('hidden');

		var data = this.$form.serialize();

		Craft.postActionRequest('elements/save-element', data, $.proxy(function(response, textStatus)
		{
			this.$spinner.addClass('hidden');

			if (textStatus == 'success')
			{
				if (textStatus == 'success' && response.success)
				{
					if (this.locale == this.$element.data('locale'))
					{
						// Update the label
						var $title = this.$element.find('.title'),
							$a = $title.find('a');

						if ($a.length && response.cpEditUrl)
						{
							$a.attr('href', response.cpEditUrl);
							$a.text(response.newTitle);
						}
						else
						{
							$title.text(response.newTitle);
						}
					}

					// Update Live Preview
					if (typeof Craft.livePreview != 'undefined')
					{
						Craft.livePreview.updateIframe(true);
					}

					this.closeHud();
				}
				else
				{
					this.updateForm(response);
					Garnish.shake(this.hud.$hud);
				}
			}
		}, this));
	},

	closeHud: function()
	{
		this.hud.hide();
		delete this.hud;
	}
});

/**
 * Entry index class
 */
Craft.EntryIndex = Craft.BaseElementIndex.extend(
{
	$newEntryBtnGroup: null,
	$newEntryMenuBtn: null,
	newEntryLabel: null,

	onAfterHtmlInit: function()
	{
		// Figure out if there are multiple sections that entries can be created in
		this.$newEntryBtnGroup = this.$sidebar.find('> .buttons > .btngroup');

		if (this.$newEntryBtnGroup.length)
		{
			this.$newEntryMenuBtn = this.$newEntryBtnGroup.children('.menubtn');
			this.newEntryLabel = this.$newEntryMenuBtn.text();
		}

		this.base();
	},

	getDefaultSourceKey: function()
	{
		// Did they request a specific section in the URL?
		if (this.settings.context == 'index' && typeof defaultSectionHandle != typeof undefined)
		{
			if (defaultSectionHandle == 'singles')
			{
				return 'singles';
			}
			else
			{
				for (var i = 0; i < this.$sources.length; i++)
				{
					var $source = $(this.$sources[i]);

					if ($source.data('handle') == defaultSectionHandle)
					{
						return $source.data('key');
					}
				}
			}
		}

		return this.base();
	},

	getDefaultSort: function()
	{
		if (Garnish.hasAttr(this.$source, 'data-has-structure'))
		{
			return ['structure', 'asc'];
		}
		else
		{
			return ['postDate', 'desc'];
		}
	},

	onSelectSource: function()
	{
		if (this.settings.context == 'index')
		{
			var handle;

			// Get the handle of the selected source
			if (this.$source.data('key') == 'singles')
			{
				handle = 'singles';
			}
			else
			{
				handle = this.$source.data('handle');
			}

			// Update the URL
			if (typeof history != typeof undefined)
			{
				var uri = 'entries';

				if (handle)
				{
					uri += '/'+handle;
				}

				history.replaceState({}, '', Craft.getUrl(uri));
			}

			// Update the New Entry button
			if (this.$newEntryBtnGroup.length)
			{
				if (handle == 'singles' || !handle)
				{
					if (this.$newEntryBtn)
					{
						this.$newEntryBtn.remove();
						this.$newEntryBtn = null;
						this.$newEntryMenuBtn.addClass('add icon').text(this.newEntryLabel);
					}
				}
				else
				{
					if (this.$newEntryBtn)
					{
						this.$newEntryBtn.remove();
					}
					else
					{
						this.$newEntryMenuBtn.removeClass('add icon').text('');
					}

					this.$newEntryBtn = $('<a class="btn submit add icon"/>').text(this.newEntryLabel).prependTo(this.$newEntryBtnGroup);
					this.$newEntryBtn.attr('href', Craft.getUrl('entries/'+handle+'/new'));
				}
			}
		}

		this.base();
	}

});

// Register it!
Craft.registerElementIndexClass('craft\\app\\elements\\Entry', Craft.EntryIndex);

/**
 * Handle Generator
 */
Craft.EntryUrlFormatGenerator = Craft.BaseInputGenerator.extend(
{
	generateTargetValue: function(sourceVal)
	{
		// Remove HTML tags
		sourceVal = sourceVal.replace("/<(.*?)>/g", '');

		// Make it lowercase
		sourceVal = sourceVal.toLowerCase();

		// Convert extended ASCII characters to basic ASCII
		sourceVal = Craft.asciiString(sourceVal);

		// Handle must start with a letter and end with a letter/number
		sourceVal = sourceVal.replace(/^[^a-z]+/, '');
		sourceVal = sourceVal.replace(/[^a-z0-9]+$/, '');

		// Get the "words"
		var words = Craft.filterArray(sourceVal.split(/[^a-z0-9]+/));

		var urlFormat = words.join('-');

		if (urlFormat && this.settings.suffix)
		{
			urlFormat += this.settings.suffix;
		}

		return urlFormat;
	}
});

Craft.FieldLayoutDesigner = Garnish.Base.extend(
{
	$container: null,
	$tabContainer: null,
	$unusedFieldContainer: null,
	$newTabBtn: null,
	$allFields: null,

	tabGrid: null,
	unusedFieldGrid: null,

	tabDrag: null,
	fieldDrag: null,

	init: function(container, settings)
	{
		this.$container = $(container);
		this.setSettings(settings, Craft.FieldLayoutDesigner.defaults);

		this.$tabContainer = this.$container.children('.fld-tabs');
		this.$unusedFieldContainer = this.$container.children('.unusedfields');
		this.$newTabBtn = this.$container.find('> .newtabbtn-container > .btn');
		this.$allFields = this.$unusedFieldContainer.find('.fld-field');

		// Set up the layout grids
		this.tabGrid = new Craft.Grid(this.$tabContainer, Craft.FieldLayoutDesigner.gridSettings);
		this.unusedFieldGrid = new Craft.Grid(this.$unusedFieldContainer, Craft.FieldLayoutDesigner.gridSettings);

		var $tabs = this.$tabContainer.children();
		for (var i = 0; i < $tabs.length; i++)
		{
			this.initTab($($tabs[i]));
		}

		this.fieldDrag = new Craft.FieldLayoutDesigner.FieldDrag(this);

		if (this.settings.customizableTabs)
		{
			this.tabDrag = new Craft.FieldLayoutDesigner.TabDrag(this);

			this.addListener(this.$newTabBtn, 'activate', 'addTab');
		}
	},

	initTab: function($tab)
	{
		if (this.settings.customizableTabs)
		{
			var $editBtn = $tab.find('.tabs .settings'),
				$menu = $('<div class="menu" data-align="center"/>').insertAfter($editBtn),
				$ul = $('<ul/>').appendTo($menu);

			$('<li><a data-action="rename">'+Craft.t('Rename')+'</a></li>').appendTo($ul);
			$('<li><a data-action="delete">'+Craft.t('Delete')+'</a></li>').appendTo($ul);

			new Garnish.MenuBtn($editBtn, {
				onOptionSelect: $.proxy(this, 'onTabOptionSelect')
			});
		}

		// Don't forget the fields!
		var $fields = $tab.children('.fld-tabcontent').children();

		for (var i = 0; i < $fields.length; i++)
		{
			this.initField($($fields[i]));
		}
	},

	initField: function($field)
	{
		var $editBtn = $field.find('.settings'),
			$menu = $('<div class="menu" data-align="center"/>').insertAfter($editBtn),
			$ul = $('<ul/>').appendTo($menu);

		if ($field.hasClass('fld-required'))
		{
			$('<li><a data-action="toggle-required">'+Craft.t('Make not required')+'</a></li>').appendTo($ul);
		}
		else
		{
			$('<li><a data-action="toggle-required">'+Craft.t('Make required')+'</a></li>').appendTo($ul);
		}

		$('<li><a data-action="remove">'+Craft.t('Remove')+'</a></li>').appendTo($ul);

		new Garnish.MenuBtn($editBtn, {
			onOptionSelect: $.proxy(this, 'onFieldOptionSelect')
		});
	},

	onTabOptionSelect: function(option)
	{
		if (!this.settings.customizableTabs)
		{
			return;
		}

		var $option = $(option),
			$tab = $option.data('menu').$trigger.parent().parent().parent(),
			action = $option.data('action');

		switch (action)
		{
			case 'rename':
			{
				this.renameTab($tab);
				break;
			}
			case 'delete':
			{
				this.deleteTab($tab);
				break;
			}
		}
	},

	onFieldOptionSelect: function(option)
	{
		var $option = $(option),
			$field = $option.data('menu').$trigger.parent(),
			action = $option.data('action');

		switch (action)
		{
			case 'toggle-required':
			{
				this.toggleRequiredField($field, $option);
				break;
			}
			case 'remove':
			{
				this.removeField($field);
				break;
			}
		}
	},

	renameTab: function($tab)
	{
		if (!this.settings.customizableTabs)
		{
			return;
		}

		var $labelSpan = $tab.find('.tabs .tab span'),
			oldName = $labelSpan.text(),
			newName = prompt(Craft.t('Give your tab a name.'), oldName);

		if (newName && newName != oldName)
		{
			$labelSpan.text(newName);
			$tab.find('.id-input').attr('name', this.getFieldInputName(newName));
		}
	},

	deleteTab: function($tab)
	{
		if (!this.settings.customizableTabs)
		{
			return;
		}

		// Find all the fields in this tab
		var $fields = $tab.find('.fld-field');

		for (var i = 0; i < $fields.length; i++)
		{
			var fieldId = $($fields[i]).attr('data-id');
			this.removeFieldById(fieldId);
		}

		this.tabGrid.removeItems($tab);
		this.tabDrag.removeItems($tab);

		$tab.remove();
	},

	toggleRequiredField: function($field, $option)
	{
		if ($field.hasClass('fld-required'))
		{
			$field.removeClass('fld-required');
			$field.find('.required-input').remove();

			setTimeout(function() {
				$option.text(Craft.t('Make required'));
			}, 500);
		}
		else
		{
			$field.addClass('fld-required');
			$('<input class="required-input" type="hidden" name="'+this.settings.requiredFieldInputName+'" value="'+$field.data('id')+'">').appendTo($field);

			setTimeout(function() {
				$option.text(Craft.t('Make not required'));
			}, 500);
		}
	},

	removeField: function($field)
	{
		var fieldId = $field.attr('data-id');

		$field.remove();

		this.removeFieldById(fieldId);
		this.tabGrid.refreshCols(true);
	},

	removeFieldById: function(fieldId)
	{
		var $field = this.$allFields.filter('[data-id='+fieldId+']:first'),
			$group = $field.closest('.fld-tab');

		$field.removeClass('hidden');

		if ($group.hasClass('hidden'))
		{
			$group.removeClass('hidden');
			this.unusedFieldGrid.addItems($group);

			if (this.settings.customizableTabs)
			{
				this.tabDrag.addItems($group);
			}
		}
		else
		{
			this.unusedFieldGrid.refreshCols(true);
		}
	},

	addTab: function()
	{
		if (!this.settings.customizableTabs)
		{
			return;
		}

		var $tab = $('<div class="fld-tab">' +
						'<div class="tabs">' +
							'<div class="tab sel draggable">' +
								'<span>Tab '+(this.tabGrid.$items.length+1)+'</span>' +
								'<a class="settings icon" title="'+Craft.t('Rename')+'"></a>' +
							'</div>' +
						'</div>' +
						'<div class="fld-tabcontent"></div>' +
					'</div>').appendTo(this.$tabContainer);

		this.tabGrid.addItems($tab);
		this.tabDrag.addItems($tab);

		this.initTab($tab);
	},

	getFieldInputName: function(tabName)
	{
		return this.settings.fieldInputName.replace(/__TAB_NAME__/g, Craft.encodeUriComponent(tabName));
	}
},
{
	gridSettings: {
		itemSelector: '.fld-tab:not(.hidden)',
		minColWidth: 240,
		percentageWidths: false,
		fillMode: 'grid',
		snapToGrid: 30
	},
	defaults: {
		customizableTabs: true,
		fieldInputName: 'fieldLayout[__TAB_NAME__][]',
		requiredFieldInputName: 'requiredFields[]'
	}
});


Craft.FieldLayoutDesigner.BaseDrag = Garnish.Drag.extend(
{
	designer: null,
	$insertion: null,
	showingInsertion: false,
	$caboose: null,
	draggingUnusedItem: false,
	addToTabGrid: false,

	/**
	 * Constructor
	 */
	init: function(designer, settings)
	{
		this.designer = designer;

		// Find all the items from both containers
		var $items = this.designer.$tabContainer.find(this.itemSelector)
			.add(this.designer.$unusedFieldContainer.find(this.itemSelector));

		this.base($items, settings);
	},

	/**
	 * On Drag Start
	 */
	onDragStart: function()
	{
		this.base();

		// Are we dragging an unused item?
		this.draggingUnusedItem = this.$draggee.hasClass('unused');

		// Create the insertion
		this.$insertion = this.getInsertion();

		// Add the caboose
		this.addCaboose();
		this.$items = $().add(this.$items.add(this.$caboose));

		if (this.addToTabGrid)
		{
			this.designer.tabGrid.addItems(this.$caboose);
		}

		// Swap the draggee with the insertion if dragging a selected item
		if (this.draggingUnusedItem)
		{
			this.showingInsertion = false;
		}
		else
		{
			// Actually replace the draggee with the insertion
			this.$insertion.insertBefore(this.$draggee);
			this.$draggee.detach();
			this.$items = $().add(this.$items.not(this.$draggee).add(this.$insertion));
			this.showingInsertion = true;

			if (this.addToTabGrid)
			{
				this.designer.tabGrid.removeItems(this.$draggee);
				this.designer.tabGrid.addItems(this.$insertion);
			}
		}

		this.setMidpoints();
	},

	/**
	 * Append the caboose
	 */
	addCaboose: $.noop,

	/**
	 * Returns the item's container
	 */
	getItemContainer: $.noop,

	/**
	 * Tests if an item is within the tab container.
	 */
	isItemInTabContainer: function($item)
	{
		return (this.getItemContainer($item)[0] == this.designer.$tabContainer[0]);
	},

	/**
	 * Sets the item midpoints up front so we don't have to keep checking on every mouse move
	 */
	setMidpoints: function()
	{
		for (var i = 0; i < this.$items.length; i++)
		{
			var $item = $(this.$items[i]);

			// Skip the unused tabs
			if (!this.isItemInTabContainer($item))
			{
				continue;
			}

			var offset = $item.offset();

			$item.data('midpoint', {
				left: offset.left + $item.outerWidth() / 2,
				top:  offset.top + $item.outerHeight() / 2
			});
		}
	},

	/**
	 * On Drag
	 */
	onDrag: function()
	{
		// Are we hovering over the tab container?
		if (this.draggingUnusedItem && !Garnish.hitTest(this.mouseX, this.mouseY, this.designer.$tabContainer))
		{
			if (this.showingInsertion)
			{
				this.$insertion.remove();
				this.$items = $().add(this.$items.not(this.$insertion));
				this.showingInsertion = false;

				if (this.addToTabGrid)
				{
					this.designer.tabGrid.removeItems(this.$insertion);
				}
				else
				{
					this.designer.tabGrid.refreshCols(true);
				}

				this.setMidpoints();
			}
		}
		else
		{
			// Is there a new closest item?
			this.onDrag._closestItem = this.getClosestItem();

			if (this.onDrag._closestItem != this.$insertion[0])
			{
				if (this.showingInsertion &&
					($.inArray(this.$insertion[0], this.$items) < $.inArray(this.onDrag._closestItem, this.$items)) &&
					($.inArray(this.onDrag._closestItem, this.$caboose) == -1)
				)
				{
					this.$insertion.insertAfter(this.onDrag._closestItem);
				}
				else
				{
					this.$insertion.insertBefore(this.onDrag._closestItem);
				}

				this.$items = $().add(this.$items.add(this.$insertion));
				this.showingInsertion = true;

				if (this.addToTabGrid)
				{
					this.designer.tabGrid.addItems(this.$insertion);
				}
				else
				{
					this.designer.tabGrid.refreshCols(true);
				}

				this.setMidpoints();
			}
		}

		this.base();
	},

	/**
	 * Returns the closest item to the cursor.
	 */
	getClosestItem: function()
	{
		this.getClosestItem._closestItem = null;
		this.getClosestItem._closestItemMouseDiff = null;

		for (this.getClosestItem._i = 0; this.getClosestItem._i < this.$items.length; this.getClosestItem._i++)
		{
			this.getClosestItem._$item = $(this.$items[this.getClosestItem._i]);

			// Skip the unused tabs
			if (!this.isItemInTabContainer(this.getClosestItem._$item))
			{
				continue;
			}

			this.getClosestItem._midpoint = this.getClosestItem._$item.data('midpoint');
			this.getClosestItem._mouseDiff = Garnish.getDist(this.getClosestItem._midpoint.left, this.getClosestItem._midpoint.top, this.mouseX, this.mouseY);

			if (this.getClosestItem._closestItem === null || this.getClosestItem._mouseDiff < this.getClosestItem._closestItemMouseDiff)
			{
				this.getClosestItem._closestItem = this.getClosestItem._$item[0];
				this.getClosestItem._closestItemMouseDiff = this.getClosestItem._mouseDiff;
			}
		}

		return this.getClosestItem._closestItem;
	},

	/**
	 * On Drag Stop
	 */
	onDragStop: function()
	{
		if (this.showingInsertion)
		{
			this.$insertion.replaceWith(this.$draggee);
			this.$items = $().add(this.$items.not(this.$insertion).add(this.$draggee));

			if (this.addToTabGrid)
			{
				this.designer.tabGrid.removeItems(this.$insertion);
				this.designer.tabGrid.addItems(this.$draggee);
			}
		}

		// Drop the caboose
		this.$items = this.$items.not(this.$caboose);
		this.$caboose.remove();

		if (this.addToTabGrid)
		{
			this.designer.tabGrid.removeItems(this.$caboose);
		}

		// "show" the drag items, but make them invisible
		this.$draggee.css({
			display:    this.draggeeDisplay,
			visibility: 'hidden'
		});

		this.designer.tabGrid.refreshCols(true);
		this.designer.unusedFieldGrid.refreshCols(true);

		// return the helpers to the draggees
		this.returnHelpersToDraggees();

		this.base();
	}
});


Craft.FieldLayoutDesigner.TabDrag = Craft.FieldLayoutDesigner.BaseDrag.extend(
{
	itemSelector: '> div.fld-tab',
	addToTabGrid: true,

	/**
	 * Constructor
	 */
	init: function(designer)
	{
		var settings = {
			handle: '.tab'
		};

		this.base(designer, settings);
	},

	/**
	 * Append the caboose
	 */
	addCaboose: function()
	{
		this.$caboose = $('<div class="fld-tab fld-tab-caboose"/>').appendTo(this.designer.$tabContainer);
	},

	/**
	 * Returns the insertion
	 */
	getInsertion: function()
	{
		var $tab = this.$draggee.find('.tab');

		return $('<div class="fld-tab fld-insertion" style="height: '+this.$draggee.height()+'px;">' +
					'<div class="tabs"><div class="tab sel draggable" style="width: '+$tab.width()+'px; height: '+$tab.height()+'px;"></div></div>' +
					'<div class="fld-tabcontent" style="height: '+this.$draggee.find('.fld-tabcontent').height()+'px;"></div>' +
				'</div>');
	},

	/**
	 * Returns the item's container
	 */
	getItemContainer: function($item)
	{
		return $item.parent();
	},

	/**
	 * On Drag Stop
	 */
	onDragStop: function()
	{
		if (this.draggingUnusedItem && this.showingInsertion)
		{
			// Create a new tab based on that field group
			var $tab = this.$draggee.clone().removeClass('unused'),
				tabName = $tab.find('.tab span').text();

			$tab.find('.fld-field').removeClass('unused');

			// Add the edit button
			$tab.find('.tabs .tab').append('<a class="settings icon" title="'+Craft.t('Edit')+'"></a>');

			// Remove any hidden fields
			var $fields = $tab.find('.fld-field'),
				$hiddenFields = $fields.filter('.hidden').remove();

			$fields = $fields.not($hiddenFields);
			$fields.prepend('<a class="settings icon" title="'+Craft.t('Edit')+'"></a>');

			for (var i = 0; i < $fields.length; i++)
			{
				var $field = $($fields[i]),
					inputName = this.designer.getFieldInputName(tabName);

				$field.append('<input class="id-input" type="hidden" name="'+inputName+'" value="'+$field.data('id')+'">');
			}

			this.designer.fieldDrag.addItems($fields);

			this.designer.initTab($tab);

			// Set the unused field group and its fields to hidden
			this.$draggee.css({ visibility: 'inherit', display: 'field' }).addClass('hidden');
			this.$draggee.find('.fld-field').addClass('hidden');

			// Set this.$draggee to the clone, as if we were dragging that all along
			this.$draggee = $tab;

			// Remember it for later
			this.addItems($tab);

			// Update the grids
			this.designer.tabGrid.addItems($tab);
			this.designer.unusedFieldGrid.removeItems(this.$draggee);
		}

		this.base();
	}
});


Craft.FieldLayoutDesigner.FieldDrag = Craft.FieldLayoutDesigner.BaseDrag.extend(
{
	itemSelector: '> div.fld-tab .fld-field',

	/**
	 * Append the caboose
	 */
	addCaboose: function()
	{
		this.$caboose = $();

		var $fieldContainers = this.designer.$tabContainer.children().children('.fld-tabcontent');

		for (var i = 0; i < $fieldContainers.length; i++)
		{
			var $caboose = $('<div class="fld-tab fld-tab-caboose"/>').appendTo($fieldContainers[i]);
			this.$caboose = this.$caboose.add($caboose);
		}
	},

	/**
	 * Returns the insertion
	 */
	getInsertion: function()
	{
		return $('<div class="fld-field fld-insertion" style="height: '+this.$draggee.height()+'px;"/>');
	},

	/**
	 * Returns the item's container
	 */
	getItemContainer: function($item)
	{
		return $item.parent().parent().parent();
	},

	/**
	 * On Drag Stop
	 */
	onDragStop: function()
	{
		if (this.draggingUnusedItem && this.showingInsertion)
		{
			// Create a new field based on that one
			var $field = this.$draggee.clone().removeClass('unused');
			$field.prepend('<a class="settings icon" title="'+Craft.t('Edit')+'"></a>');
			this.designer.initField($field);

			// Hide the unused field
			this.$draggee.css({ visibility: 'inherit', display: 'field' }).addClass('hidden');

			// Hide the group too?
			if (this.$draggee.siblings(':not(.hidden)').length == 0)
			{
				var $group = this.$draggee.parent().parent();
				$group.addClass('hidden');
				this.designer.unusedFieldGrid.removeItems($group);
			}

			// Set this.$draggee to the clone, as if we were dragging that all along
			this.$draggee = $field;

			// Remember it for later
			this.addItems($field);
		}

		if (this.showingInsertion)
		{
			// Find the field's new tab name
			var tabName = this.$insertion.parent().parent().find('.tab span').text(),
				inputName = this.designer.getFieldInputName(tabName);

			if (this.draggingUnusedItem)
			{
				this.$draggee.append('<input class="id-input" type="hidden" name="'+inputName+'" value="'+this.$draggee.data('id')+'">');
			}
			else
			{
				this.$draggee.find('.id-input').attr('name', inputName);
			}
		}

		this.base();
	}
});

/**
 * FieldToggle
 */
Craft.FieldToggle = Garnish.Base.extend(
{
	$toggle: null,
	targetPrefix: null,
	targetSelector: null,
	reverseTargetSelector: null,

	_$target: null,
	_$reverseTarget: null,
	type: null,

	init: function(toggle)
	{
		this.$toggle = $(toggle);

		// Is this already a field toggle?
		if (this.$toggle.data('fieldtoggle'))
		{
			Garnish.log('Double-instantiating a field toggle on an element');
			this.$toggle.data('fieldtoggle').destroy();
		}

		this.$toggle.data('fieldtoggle', this);

		this.type = this.getType();

		if (this.type == 'select')
		{
			this.targetPrefix = (this.$toggle.attr('data-target-prefix') || '');
		}
		else
		{
			this.targetSelector = this.normalizeTargetSelector(this.$toggle.data('target'));
			this.reverseTargetSelector = this.normalizeTargetSelector(this.$toggle.data('reverse-target'));
		}

		this.findTargets();

		if (this.type == 'link')
		{
			this.addListener(this.$toggle, 'click', 'onToggleChange');
		}
		else
		{
			this.addListener(this.$toggle, 'change', 'onToggleChange');
		}
	},

	normalizeTargetSelector: function(selector)
	{
		if (selector && !selector.match(/^[#\.]/))
		{
			selector = '#'+selector;
		}

		return selector;
	},

	getType: function()
	{
		if (this.$toggle.prop('nodeName') == 'INPUT' && this.$toggle.attr('type').toLowerCase() == 'checkbox')
		{
			return 'checkbox';
		}
		else if (this.$toggle.prop('nodeName') == 'SELECT')
		{
			return 'select';
		}
		else if (this.$toggle.prop('nodeName') == 'A')
		{
			return 'link';
		}
		else if (this.$toggle.prop('nodeName') == 'DIV' && this.$toggle.hasClass('lightswitch'))
		{
			return 'lightswitch';
		}
	},

	findTargets: function()
	{
		if (this.type == 'select')
		{
			this._$target = $(this.normalizeTargetSelector(this.targetPrefix+this.getToggleVal()));
		}
		else
		{
			if (this.targetSelector)
			{
				this._$target = $(this.targetSelector);
			}

			if (this.reverseTargetSelector)
			{
				this._$reverseTarget = $(this.reverseTargetSelector);
			}
		}
	},

	getToggleVal: function()
	{
		if (this.type == 'lightswitch')
		{
			return this.$toggle.children('input').val();
		}
		else
		{
			return Garnish.getInputPostVal(this.$toggle).replace(/[\[\]\\]+/g, '-');
		}
	},

	onToggleChange: function()
	{
		if (this.type == 'select')
		{
			this.hideTarget(this._$target);
			this.findTargets();
			this.showTarget(this._$target);
		}
		else
		{
			if (this.type == 'link')
			{
				this.onToggleChange._show = this.$toggle.hasClass('collapsed') || !this.$toggle.hasClass('expanded');
			}
			else
			{
				this.onToggleChange._show = !!this.getToggleVal();
			}

			if (this.onToggleChange._show)
			{
				this.showTarget(this._$target);
				this.hideTarget(this._$reverseTarget);
			}
			else
			{
				this.hideTarget(this._$target);
				this.showTarget(this._$reverseTarget);
			}

			delete this.onToggleChange._show;
		}
	},

	showTarget: function($target)
	{
		if ($target && $target.length)
		{
			this.showTarget._currentHeight = $target.height();

			$target.removeClass('hidden');

			if (this.type != 'select')
			{
				if (this.type == 'link')
				{
					this.$toggle.removeClass('collapsed');
					this.$toggle.addClass('expanded');
				}

				$target.height('auto');
				this.showTarget._targetHeight = $target.height();
				$target.css({
					height: this.showTarget._currentHeight,
					overflow: 'hidden'
				});

				$target.velocity('stop');

				$target.velocity({ height: this.showTarget._targetHeight }, 'fast', function()
				{
					$target.css({
						height: '',
						overflow: ''
					});
				});

				delete this.showTarget._targetHeight;
			}

			delete this.showTarget._currentHeight;

			// Trigger a resize event in case there are any grids in the target that need to initialize
			Garnish.$win.trigger('resize');
		}
	},

	hideTarget: function($target)
	{
		if ($target && $target.length)
		{
			if (this.type == 'select')
			{
				$target.addClass('hidden');
			}
			else
			{
				if (this.type == 'link')
				{
					this.$toggle.removeClass('expanded');
					this.$toggle.addClass('collapsed');
				}

				$target.css('overflow', 'hidden');
				$target.velocity('stop');
				$target.velocity({ height: 0 }, 'fast', function()
				{
					$target.addClass('hidden');
				});
			}
		}
	}
});

Craft.Grid = Garnish.Base.extend(
{
	$container: null,

	$items: null,
	items: null,
	totalCols: null,
	colPctWidth: null,
	sizeUnit: null,

	possibleItemColspans: null,
	possibleItemPositionsByColspan: null,

	itemPositions: null,
	itemColspansByPosition: null,

	layouts: null,
	layout: null,
	itemHeights: null,
	leftPadding: null,

	init: function(container, settings)
	{
		this.$container = $(container);

		this.setSettings(settings, Craft.Grid.defaults);

		if (this.settings.mode == 'pct')
		{
			this.sizeUnit = '%';
		}
		else
		{
			this.sizeUnit = 'px';
		}

		this.$items = this.$container.children(this.settings.itemSelector);
		this.setItems();
		this.refreshCols(true);

		// Adjust them when the container is resized
		this.addListener(this.$container, 'resize', 'refreshCols');

		// Trigger a window resize event in case anything needs to adjust itself, now that the items are layed out.
		Garnish.requestAnimationFrame(function() {
			Garnish.$win.trigger('resize');
		});
	},

	addItems: function(items)
	{
		this.$items = $().add(this.$items.add(items));
		this.setItems();
		this.refreshCols(true);
	},

	removeItems: function(items)
	{
		this.$items = $().add(this.$items.not(items));
		this.setItems();
		this.refreshCols(true);
	},

	setItems: function()
	{
		this.setItems._ = {};

		this.items = [];

		for (this.setItems._.i = 0; this.setItems._.i < this.$items.length; this.setItems._.i++)
		{
			this.items.push($(this.$items[this.setItems._.i]));
		}

		delete this.setItems._;
	},

	refreshCols: function(force)
	{
		if (!this.items.length)
		{
			return;
		}

		this.refreshCols._ = {};

		// Check to see if the grid is actually visible
		this.refreshCols._.oldHeight = this.$container[0].style.height;
		this.$container[0].style.height = 1;
		this.refreshCols._.scrollHeight = this.$container[0].scrollHeight;
		this.$container[0].style.height = this.refreshCols._.oldHeight;

		if (this.refreshCols._.scrollHeight == 0)
		{
			delete this.refreshCols._;
			return;
		}

		if (this.settings.cols)
		{
			this.refreshCols._.totalCols = this.settings.cols;
		}
		else
		{
			this.refreshCols._.totalCols = Math.floor(this.$container.width() / this.settings.minColWidth);
		}

		if (this.refreshCols._.totalCols == 0)
		{
			this.refreshCols._.totalCols = 1;
		}

		// Same number of columns as before?
		if (force !== true && this.totalCols === this.refreshCols._.totalCols)
		{
			delete this.refreshCols._;
			return;
		}

		this.totalCols = this.refreshCols._.totalCols;

		if (this.settings.fillMode == 'grid')
		{
			this.refreshCols._.itemIndex = 0;

			while (this.refreshCols._.itemIndex < this.items.length)
			{
				// Append the next X items and figure out which one is the tallest
				this.refreshCols._.tallestItemHeight = -1;
				this.refreshCols._.colIndex = 0;

				for (this.refreshCols._.i = this.refreshCols._.itemIndex; (this.refreshCols._.i < this.refreshCols._.itemIndex + this.totalCols && this.refreshCols._.i < this.items.length); this.refreshCols._.i++)
				{
					this.refreshCols._.itemHeight = this.items[this.refreshCols._.i].height('auto').height();

					if (this.refreshCols._.itemHeight > this.refreshCols._.tallestItemHeight)
					{
						this.refreshCols._.tallestItemHeight = this.refreshCols._.itemHeight;
					}

					this.refreshCols._.colIndex++;
				}

				if (this.settings.snapToGrid)
				{
					this.refreshCols._.remainder = this.refreshCols._.tallestItemHeight % this.settings.snapToGrid;

					if (this.refreshCols._.remainder)
					{
						this.refreshCols._.tallestItemHeight += this.settings.snapToGrid - this.refreshCols._.remainder;
					}
				}

				// Now set their heights to the tallest one
				for (this.refreshCols._.i = this.refreshCols._.itemIndex; (this.refreshCols._.i < this.refreshCols._.itemIndex + this.totalCols && this.refreshCols._.i < this.items.length); this.refreshCols._.i++)
				{
					this.items[this.refreshCols._.i].height(this.refreshCols._.tallestItemHeight);
				}

				// set the this.refreshCols._.itemIndex pointer to the next one up
				this.refreshCols._.itemIndex += this.totalCols;
			}
		}
		else
		{
			this.removeListener(this.$items, 'resize');

			// If there's only one column, sneak out early
			if (this.totalCols == 1)
			{
				this.$container.height('auto');
				this.$items
					.show()
					.css({
						position: 'relative',
						width: 'auto',
						top: 0
					})
					.css(Craft.left, 0);

				delete this.refreshCols._;
				return;
			}
			else
			{
				this.$items.css('position', 'absolute');
			}

			if (this.settings.mode == 'pct')
			{
				this.colPctWidth = (100 / this.totalCols);
			}

			// The setup

			this.layouts = [];

			this.itemPositions = [];
			this.itemColspansByPosition = [];

			// Figure out all of the possible colspans for each item,
			// as well as all the possible positions for each item at each of its colspans

			this.possibleItemColspans = [];
			this.possibleItemPositionsByColspan = [];
			this.itemHeightsByColspan = [];

			for (this.refreshCols._.item = 0; this.refreshCols._.item < this.items.length; this.refreshCols._.item++)
			{
				this.possibleItemColspans[this.refreshCols._.item] = [];
				this.possibleItemPositionsByColspan[this.refreshCols._.item] = {};
				this.itemHeightsByColspan[this.refreshCols._.item] = {};

				this.refreshCols._.$item = this.items[this.refreshCols._.item].show();
				this.refreshCols._.positionRight = (this.refreshCols._.$item.data('position') == 'right');
				this.refreshCols._.positionLeft = (this.refreshCols._.$item.data('position') == 'left');
				this.refreshCols._.minColspan = (this.refreshCols._.$item.data('colspan') ? this.refreshCols._.$item.data('colspan') : (this.refreshCols._.$item.data('min-colspan') ? this.refreshCols._.$item.data('min-colspan') : 1));
				this.refreshCols._.maxColspan = (this.refreshCols._.$item.data('colspan') ? this.refreshCols._.$item.data('colspan') : (this.refreshCols._.$item.data('max-colspan') ? this.refreshCols._.$item.data('max-colspan') : this.totalCols));

				if (this.refreshCols._.minColspan > this.totalCols) this.refreshCols._.minColspan = this.totalCols;
				if (this.refreshCols._.maxColspan > this.totalCols) this.refreshCols._.maxColspan = this.totalCols;

				for (this.refreshCols._.colspan = this.refreshCols._.minColspan; this.refreshCols._.colspan <= this.refreshCols._.maxColspan; this.refreshCols._.colspan++)
				{
					// Get the height for this colspan
					this.refreshCols._.$item.css('width', this.getItemWidth(this.refreshCols._.colspan) + this.sizeUnit);
					this.itemHeightsByColspan[this.refreshCols._.item][this.refreshCols._.colspan] = this.refreshCols._.$item.outerHeight();

					this.possibleItemColspans[this.refreshCols._.item].push(this.refreshCols._.colspan);
					this.possibleItemPositionsByColspan[this.refreshCols._.item][this.refreshCols._.colspan] = [];

					if (this.refreshCols._.positionLeft)
					{
						this.refreshCols._.minPosition = 0;
						this.refreshCols._.maxPosition = 0;
					}
					else if (this.refreshCols._.positionRight)
					{
						this.refreshCols._.minPosition = this.totalCols - this.refreshCols._.colspan;
						this.refreshCols._.maxPosition = this.refreshCols._.minPosition;
					}
					else
					{
						this.refreshCols._.minPosition = 0;
						this.refreshCols._.maxPosition = this.totalCols - this.refreshCols._.colspan;
					}

					for (this.refreshCols._.position = this.refreshCols._.minPosition; this.refreshCols._.position <= this.refreshCols._.maxPosition; this.refreshCols._.position++)
					{
						this.possibleItemPositionsByColspan[this.refreshCols._.item][this.refreshCols._.colspan].push(this.refreshCols._.position);
					}
				}
			}

			// Find all the possible layouts

			this.refreshCols._.colHeights = [];

			for (this.refreshCols._.i = 0; this.refreshCols._.i < this.totalCols; this.refreshCols._.i++)
			{
				this.refreshCols._.colHeights.push(0);
			}

			this.createLayouts(0, [], [], this.refreshCols._.colHeights, 0);

			// Now find the layout that looks the best.

			// First find the layouts with the highest number of used columns
			this.refreshCols._.layoutTotalCols = [];

			for (this.refreshCols._.i = 0; this.refreshCols._.i < this.layouts.length; this.refreshCols._.i++)
			{
				this.refreshCols._.layoutTotalCols[this.refreshCols._.i] = 0;

				for (this.refreshCols._.j = 0; this.refreshCols._.j < this.totalCols; this.refreshCols._.j++)
				{
					if (this.layouts[this.refreshCols._.i].colHeights[this.refreshCols._.j])
					{
						this.refreshCols._.layoutTotalCols[this.refreshCols._.i]++;
					}
				}
			}

			this.refreshCols._.highestTotalCols = Math.max.apply(null, this.refreshCols._.layoutTotalCols);

			// Filter out the ones that aren't using as many columns as they could be
			for (this.refreshCols._.i = this.layouts.length - 1; this.refreshCols._.i >= 0; this.refreshCols._.i--)
			{
				if (this.refreshCols._.layoutTotalCols[this.refreshCols._.i] != this.refreshCols._.highestTotalCols)
				{
					this.layouts.splice(this.refreshCols._.i, 1);
				}
			}

			// Find the layout(s) with the least overall height
			this.refreshCols._.layoutHeights = [];

			for (this.refreshCols._.i = 0; this.refreshCols._.i < this.layouts.length; this.refreshCols._.i++)
			{
				this.refreshCols._.layoutHeights.push(Math.max.apply(null, this.layouts[this.refreshCols._.i].colHeights));
			}

			this.refreshCols._.shortestHeight = Math.min.apply(null, this.refreshCols._.layoutHeights);
			this.refreshCols._.shortestLayouts = [];
			this.refreshCols._.emptySpaces = [];

			for (this.refreshCols._.i = 0; this.refreshCols._.i < this.refreshCols._.layoutHeights.length; this.refreshCols._.i++)
			{
				if (this.refreshCols._.layoutHeights[this.refreshCols._.i] == this.refreshCols._.shortestHeight)
				{
					this.refreshCols._.shortestLayouts.push(this.layouts[this.refreshCols._.i]);

					// Now get its total empty space, including any trailing empty space
					this.refreshCols._.emptySpace = this.layouts[this.refreshCols._.i].emptySpace;

					for (this.refreshCols._.j = 0; this.refreshCols._.j < this.totalCols; this.refreshCols._.j++)
					{
						this.refreshCols._.emptySpace += (this.refreshCols._.shortestHeight - this.layouts[this.refreshCols._.i].colHeights[this.refreshCols._.j]);
					}

					this.refreshCols._.emptySpaces.push(this.refreshCols._.emptySpace);
				}
			}

			// And the layout with the least empty space is...
			this.layout = this.refreshCols._.shortestLayouts[$.inArray(Math.min.apply(null, this.refreshCols._.emptySpaces), this.refreshCols._.emptySpaces)];

			// Figure out the left padding based on the number of empty columns
			this.refreshCols._.totalEmptyCols = 0;

			for (this.refreshCols._.i = this.layout.colHeights.length-1; this.refreshCols._.i >= 0; this.refreshCols._.i--)
			{
				if (this.layout.colHeights[this.refreshCols._.i] == 0)
				{
					this.refreshCols._.totalEmptyCols++;
				}
				else
				{
					break;
				}
			}

			this.leftPadding = this.getItemWidth(this.refreshCols._.totalEmptyCols) / 2;

			if (this.settings.mode == 'fixed')
			{
				this.leftPadding += (this.$container.width() - (this.settings.minColWidth * this.totalCols)) / 2;
			}

			// Set the item widths and left positions
			for (this.refreshCols._.i = 0; this.refreshCols._.i < this.items.length; this.refreshCols._.i++)
			{
				this.items[this.refreshCols._.i]
					.css('width', this.getItemWidth(this.layout.colspans[this.refreshCols._.i]) + this.sizeUnit)
					.css(Craft.left, this.leftPadding + this.getItemWidth(this.layout.positions[this.refreshCols._.i]) + this.sizeUnit);
			}

			// If every item is at position 0, then let them lay out au naturel
			if (this.isSimpleLayout())
			{

				this.$container.height('auto');
				this.$items.css('position', 'relative');
			}
			else
			{
				this.$items.css('position', 'absolute');

				// Now position the items
				this.positionItems();

				// Update the positions as the items' heigthts change
				this.addListener(this.$items, 'resize', 'onItemResize');
			}
		}

		delete this.refreshCols._;
	},

	getItemWidth: function(colspan)
	{
		if (this.settings.mode == 'pct')
		{
			return (this.colPctWidth * colspan);
		}
		else
		{
			return (this.settings.minColWidth * colspan);
		}
	},

	createLayouts: function(item, prevPositions, prevColspans, prevColHeights, prevEmptySpace)
	{
		(new Craft.Grid.LayoutGenerator(this)).createLayouts(item, prevPositions, prevColspans, prevColHeights, prevEmptySpace);
	},

	isSimpleLayout: function()
	{
		this.isSimpleLayout._ = {};

		for (this.isSimpleLayout._.i = 0; this.isSimpleLayout._.i < this.layout.positions.length; this.isSimpleLayout._.i++)
		{
			if (this.layout.positions[this.isSimpleLayout._.i] != 0)
			{
				delete this.isSimpleLayout._;
				return false;
			}
		}

		delete this.isSimpleLayout._;
		return true;
	},

	positionItems: function()
	{
		this.positionItems._ = {};

		this.positionItems._.colHeights = [];

		for (this.positionItems._.i = 0; this.positionItems._.i < this.totalCols; this.positionItems._.i++)
		{
			this.positionItems._.colHeights.push(0);
		}

		for (this.positionItems._.i = 0; this.positionItems._.i < this.items.length; this.positionItems._.i++)
		{
			this.positionItems._.endingCol = this.layout.positions[this.positionItems._.i] + this.layout.colspans[this.positionItems._.i] - 1;
			this.positionItems._.affectedColHeights = [];

			for (this.positionItems._.col = this.layout.positions[this.positionItems._.i]; this.positionItems._.col <= this.positionItems._.endingCol; this.positionItems._.col++)
			{
				this.positionItems._.affectedColHeights.push(this.positionItems._.colHeights[this.positionItems._.col]);
			}

			this.positionItems._.top = Math.max.apply(null, this.positionItems._.affectedColHeights);
			this.items[this.positionItems._.i].css('top', this.positionItems._.top);

			// Now add the new heights to those columns
			for (this.positionItems._.col = this.layout.positions[this.positionItems._.i]; this.positionItems._.col <= this.positionItems._.endingCol; this.positionItems._.col++)
			{
				this.positionItems._.colHeights[this.positionItems._.col] = this.positionItems._.top + this.itemHeightsByColspan[this.positionItems._.i][this.layout.colspans[this.positionItems._.i]];
			}
		}

		// Set the container height
		this.removeListener(this.$container, 'height');
		this.$container.height(Math.max.apply(null, this.positionItems._.colHeights));
		this.addListener(this.$container, 'height', 'refreshCols');

		delete this.positionItems._;
	},

	onItemResize: function(ev)
	{
		this.onItemResize._ = {};

		// Prevent this from bubbling up to the container, which has its own resize listener
		ev.stopPropagation();

		this.onItemResize._.item = $.inArray(ev.currentTarget, this.$items);

		if (this.onItemResize._.item != -1)
		{
			// Update the height and reposition the items
			this.onItemResize._.newHeight = this.items[this.onItemResize._.item].outerHeight();

			if (this.onItemResize._.newHeight != this.itemHeightsByColspan[this.onItemResize._.item][this.layout.colspans[this.onItemResize._.item]])
			{
				this.itemHeightsByColspan[this.onItemResize._.item][this.layout.colspans[this.onItemResize._.item]] = this.onItemResize._.newHeight;
				this.positionItems();
			}
		}

		delete this.onItemResize._;
	}
},
{
	defaults: {
		itemSelector: '.item',
		cols: null,
		minColWidth: 320,
		mode: 'pct',
		fillMode: 'top',
		colClass: 'col',
		snapToGrid: null
	}
});


Craft.Grid.LayoutGenerator = Garnish.Base.extend(
{
	grid: null,
	_: null,

	init: function(grid)
	{
		this.grid = grid;
	},

	createLayouts: function(item, prevPositions, prevColspans, prevColHeights, prevEmptySpace)
	{
		this._ = {};

		// Loop through all possible colspans
		for (this._.c = 0; this._.c < this.grid.possibleItemColspans[item].length; this._.c++)
		{
			this._.colspan = this.grid.possibleItemColspans[item][this._.c];

			// Loop through all the possible positions for this colspan,
			// and find the one that is closest to the top

			this._.tallestColHeightsByPosition = [];

			for (this._.p = 0; this._.p < this.grid.possibleItemPositionsByColspan[item][this._.colspan].length; this._.p++)
			{
				this._.position = this.grid.possibleItemPositionsByColspan[item][this._.colspan][this._.p];

				this._.colHeightsForPosition = [];
				this._.endingCol = this._.position + this._.colspan - 1;

				for (this._.col = this._.position; this._.col <= this._.endingCol; this._.col++)
				{
					this._.colHeightsForPosition.push(prevColHeights[this._.col]);
				}

				this._.tallestColHeightsByPosition[this._.p] = Math.max.apply(null, this._.colHeightsForPosition);
			}

			// And the shortest position for this colspan is...
			this._.p = $.inArray(Math.min.apply(null, this._.tallestColHeightsByPosition), this._.tallestColHeightsByPosition);
			this._.position = this.grid.possibleItemPositionsByColspan[item][this._.colspan][this._.p];

			// Now log the colspan/position placement
			this._.positions = prevPositions.slice(0);
			this._.colspans = prevColspans.slice(0);
			this._.colHeights = prevColHeights.slice(0);
			this._.emptySpace = prevEmptySpace;

			this._.positions.push(this._.position);
			this._.colspans.push(this._.colspan);

			// Add the new heights to those columns
			this._.tallestColHeight = this._.tallestColHeightsByPosition[this._.p];
			this._.endingCol = this._.position + this._.colspan - 1;

			for (this._.col = this._.position; this._.col <= this._.endingCol; this._.col++)
			{
				this._.emptySpace += this._.tallestColHeight - this._.colHeights[this._.col];
				this._.colHeights[this._.col] = this._.tallestColHeight + this.grid.itemHeightsByColspan[item][this._.colspan];
			}

			// If this is the last item, create the layout
			if (item == this.grid.items.length-1)
			{
				this.grid.layouts.push({
					positions:  this._.positions,
					colspans:   this._.colspans,
					colHeights: this._.colHeights,
					emptySpace: this._.emptySpace
				});
			}
			else
			{
				// Dive deeper
				this.grid.createLayouts(item+1, this._.positions, this._.colspans, this._.colHeights, this._.emptySpace);
			}
		}

		delete this._;
	}

});
/**
 * Handle Generator
 */
Craft.HandleGenerator = Craft.BaseInputGenerator.extend(
{
	generateTargetValue: function(sourceVal)
	{
		// Remove HTML tags
		var handle = sourceVal.replace("/<(.*?)>/g", '');

		// Remove inner-word punctuation
		handle = handle.replace(/['"‘’“”\[\]\(\)\{\}:]/g, '');

		// Make it lowercase
		handle = handle.toLowerCase();

		// Convert extended ASCII characters to basic ASCII
		handle = Craft.asciiString(handle);

		// Handle must start with a letter
		handle = handle.replace(/^[^a-z]+/, '');

		// Get the "words"
		var words = Craft.filterArray(handle.split(/[^a-z0-9]+/)),
			handle = '';

		// Make it camelCase
		for (var i = 0; i < words.length; i++)
		{
			if (i == 0)
			{
				handle += words[i];
			}
			else
			{
				handle += words[i].charAt(0).toUpperCase()+words[i].substr(1);
			}
		}

		return handle;
	}
});

/**
 * postParameters     - an object of POST data to pass along with each Ajax request
 * modalClass         - class to add to the modal window to allow customization
 * uploadButton       - jQuery object of the element that should open the file chooser
 * uploadAction       - upload to this location (in form of "controller/action")
 * deleteButton       - jQuery object of the element that starts the image deletion process
 * deleteMessage      - confirmation message presented to the user for image deletion
 * deleteAction       - delete image at this location (in form of "controller/action")
 * cropAction         - crop image at this (in form of "controller/action")
 * areaToolOptions    - object with some options for the area tool selector
 *   aspectRatio      - aspect ration to enforce in form of "width:height". If empty, then select area is freeform
 *   initialRectangle - object with options for the initial rectangle
 *     mode           - if set to auto, then the part selected will be the maximum size in the middle of image
 *     x1             - top left x coordinate of th rectangle, if the mode is not set to auto
 *     x2             - bottom right x coordinate of th rectangle, if the mode is not set to auto
 *     y1             - top left y coordinate of th rectangle, if the mode is not set to auto
 *     y2             - bottom right y coordinate of th rectangle, if the mode is not set to auto
 *
 * onImageDelete     - callback to call when image is deleted. First parameter will contain response data.
 * onImageSave       - callback to call when an cropped image is saved. First parameter will contain response data.
 */


/**
 * Image Upload tool.
 */
Craft.ImageUpload = Garnish.Base.extend(
{
	_imageHandler: null,

	init: function(settings)
	{
		this.setSettings(settings, Craft.ImageUpload.defaults);
		this._imageHandler = new Craft.ImageHandler(settings);
	}
},
{
	$modalContainerDiv: null,

	defaults: {
		postParameters: {},

		modalClass: "",
		uploadButton: {},
		uploadAction: "",

		deleteButton: {},
		deleteMessage: "",
		deleteAction: "",

		cropAction:"",

		areaToolOptions:
		{
			aspectRatio: "1:1",
			initialRectangle: {
				mode: "auto",
				x1: 0,
				x2: 0,
				y1: 0,
				y2: 0
			}
		},

		onImageDelete: function(response)
		{
			location.reload();
		},
		onImageSave: function(response)
		{
			location.reload();
		}
	}
});


Craft.ImageHandler = Garnish.Base.extend(
{
	modal: null,
	progressBar: null,
	$container: null,

	init: function(settings)
	{
		this.setSettings(settings);

		var _this = this;

		var element = settings.uploadButton;
		var $uploadInput = $('<input type="file" name="image-upload" id="image-upload" />').hide().insertBefore(element);

		this.progressBar = new Craft.ProgressBar($('<div class="progress-shade"></div>').insertBefore(element));
		this.progressBar.$progressBar.css({
			top: Math.round(element.outerHeight() / 2) - 6
		});

		this.$container = element.parent();

		var options = {
			url: Craft.getActionUrl(this.settings.uploadAction),
			fileInput: $uploadInput,

			element:    this.settings.uploadButton[0],
			action:     Craft.actionUrl + '/' + this.settings.uploadAction,
			formData:   typeof this.settings.postParameters === 'object' ? this.settings.postParameters : {},
			events:     {
				fileuploadstart: $.proxy(function()
				{
					this.$container.addClass('uploading');
					this.progressBar.resetProgressBar();
					this.progressBar.showProgressBar();
				}, this),
				fileuploadprogressall: $.proxy(function(data)
				{
					var progress = parseInt(data.loaded / data.total * 100, 10);
					this.progressBar.setProgressPercentage(progress);
				}, this),
				fileuploaddone: $.proxy(function(event, data)
				{
					this.progressBar.hideProgressBar();
					this.$container.removeClass('uploading');

					var response = data.result;

					if (Craft.ImageUpload.$modalContainerDiv == null)
					{
						Craft.ImageUpload.$modalContainerDiv = $('<div class="modal fitted"></div>').addClass(settings.modalClass).appendTo(Garnish.$bod);
					}

					if (response.html)
					{
						Craft.ImageUpload.$modalContainerDiv.empty().append(response.html);

						if (!this.modal)
						{
							this.modal = new Craft.ImageModal(Craft.ImageUpload.$modalContainerDiv, {
								postParameters: settings.postParameters,
								cropAction:     settings.cropAction
							});

							this.modal.imageHandler = _this;
						}
						else
						{
							this.modal.show();
						}

						this.modal.bindButtons();
						this.modal.addListener(this.modal.$saveBtn, 'click', 'saveImage');
						this.modal.addListener(this.modal.$cancelBtn, 'click', 'cancel');

						this.modal.removeListener(Garnish.Modal.$shade, 'click');

						setTimeout($.proxy(function()
						{
							Craft.ImageUpload.$modalContainerDiv.find('img').load($.proxy(function()
							{
								var profileTool = new Craft.ImageAreaTool(settings.areaToolOptions);
								profileTool.showArea(this.modal);
								this.modal.cropAreaTool = profileTool;
							}, this));
						}, this), 1);
					}
				}, this)
			},
			acceptFileTypes: /(jpg|jpeg|gif|png)/
		};

		// If CSRF protection isn't enabled, these won't be defined.
		if (typeof Craft.csrfTokenName !== 'undefined' && typeof Craft.csrfTokenValue !== 'undefined')
		{
			// Add the CSRF token
			options.formData[Craft.csrfTokenName] = Craft.csrfTokenValue;
		}

		this.uploader = new Craft.Uploader(element, options);


		$(settings.deleteButton).click(function()
		{
			if (confirm(settings.deleteMessage))
			{
				$(this).parent().append('<div class="blocking-modal"></div>');
				Craft.postActionRequest(settings.deleteAction, settings.postParameters, $.proxy(function(response, textStatus)
				{
					if (textStatus == 'success')
					{
						_this.onImageDelete.apply(_this, [response]);
					}

				}, this));

			}
		});
		$(settings.uploadButton).on('click', function(event)
		{
			$(this).siblings('input[type=file]').click();
		});

	},

	onImageSave: function(data)
	{
		this.settings.onImageSave.apply(this, [data]);
	},

	onImageDelete: function(data)
	{
		this.settings.onImageDelete.apply(this, [data]);
	}
});


Craft.ImageModal = Garnish.Modal.extend(
{
	$container: null,
	$saveBtn: null,
	$cancelBtn: null,

	areaSelect: null,
	factor: null,
	source: null,
	_postParameters: null,
	_cropAction: "",
	imageHandler: null,
	originalWidth: 0,
	originalHeight: 0,
	constraint: 0,
	cropAreaTool: null,


	init: function($container, settings)
	{
		this.cropAreaTool = null;
		this.base($container, settings);
		this._postParameters = settings.postParameters;
		this._cropAction = settings.cropAction;
		this.addListener(this.$container, 'resize', $.proxy(this, '_onResize'));
		this.addListener(Garnish.$bod, 'resize', $.proxy(this, '_onResize'));
	},

	_onResize: function ()
	{
		var $img = this.$container.find('img'),
			leftDistance = parseInt(this.$container.css('left'), 10),
			topDistance = parseInt(this.$container.css('top'), 10);

		var quotient = this.originalWidth / this.originalHeight,
			leftAvailable = leftDistance - 10,
			topAvailable = topDistance - 10;

		if (leftAvailable / quotient > topAvailable)
		{
			newWidth = this.$container.width() + (topAvailable * quotient);
		}
		else
		{
			newWidth = this.$container.width() + leftAvailable;
		}

		// Set the size so that the image always fits into a constraint x constraint box
		newWidth = Math.min(newWidth, this.constraint, this.constraint * quotient, this.originalWidth);
		this.$container.width(newWidth);

		var factor = newWidth / this.originalWidth,
			newHeight = this.originalHeight * factor;

		$img.height(newHeight).width(newWidth);
		this.factor = factor;
		if (this.cropAreaTool)
		{
			$img.imgAreaSelect({instance: true}).update();
		}
	},

	bindButtons: function()
	{
		this.$saveBtn = this.$container.find('.submit:first');
		this.$cancelBtn = this.$container.find('.cancel:first');
	},

	cancel: function()
	{
		this.hide();
		this.areaSelect.setOptions({remove: true, hide: true, disable: true});
		this.$container.empty();
	},

	saveImage: function()
	{
		var selection = this.areaSelect.getSelection();
		var params = {
			x1: Math.round(selection.x1 / this.factor),
			x2: Math.round(selection.x2 / this.factor),
			y1: Math.round(selection.y1 / this.factor),
			y2: Math.round(selection.y2 / this.factor),
			source: this.source
		};

		params = $.extend(this._postParameters, params);

		Craft.postActionRequest(this._cropAction, params, $.proxy(function(response, textStatus)
		{
			if (textStatus == 'success')
			{
				if (response.error)
				{
					Craft.cp.displayError(response.error);
				}
				else
				{
					this.imageHandler.onImageSave.apply(this.imageHandler, [response]);
				}
			}

			this.hide();
			this.$container.empty();
			this.areaSelect.setOptions({remove: true, hide: true, disable: true});


		}, this));

		this.areaSelect.setOptions({disable: true});
		this.removeListener(this.$saveBtn, 'click');
		this.removeListener(this.$cancelBtn, 'click');

		this.$container.find('.crop-image').fadeTo(50, 0.5);
	}

});


Craft.ImageAreaTool = Garnish.Base.extend(
{
	$container: null,

	init: function(settings)
	{
		this.$container = Craft.ImageUpload.$modalContainerDiv;
		this.setSettings(settings);
	},

	showArea: function(referenceObject)
	{
		var $target = this.$container.find('img');


		var areaOptions = {
			aspectRatio: this.settings.aspectRatio,
			maxWidth: $target.width(),
			maxHeight: $target.height(),
			instance: true,
			resizable: true,
			show: true,
			persistent: true,
			handles: true,
			parent: $target.parent(),
			classPrefix: 'imgareaselect'
		};

		var areaSelect = $target.imgAreaSelect(areaOptions);

		var x1 = this.settings.initialRectangle.x1;
		var x2 = this.settings.initialRectangle.x2;
		var y1 = this.settings.initialRectangle.y1;
		var y2 = this.settings.initialRectangle.y2;

		if (this.settings.initialRectangle.mode == "auto")
		{
			var proportions = this.settings.aspectRatio.split(":");
			var rectangleWidth = 0;
			var rectangleHeight = 0;


			// [0] - width proportion, [1] - height proportion
			if (proportions[0] > proportions[1])
			{
				rectangleWidth = $target.width();
				rectangleHeight = rectangleWidth * proportions[1] / proportions[0];
			} else if (proportions[0] > proportions[1])
			{
				rectangleHeight = $target.height();
				rectangleWidth = rectangleHeight * proportions[0] / proportions[1];
			} else {
				rectangleHeight = rectangleWidth = Math.min($target.width(), $target.height());
			}
			x1 = Math.round(($target.width() - rectangleWidth) / 2);
			y1 = Math.round(($target.height() - rectangleHeight) / 2);
			x2 = x1 + rectangleWidth;
			y2 = y1 + rectangleHeight;

		}
		areaSelect.setSelection(x1, y1, x2, y2);
		areaSelect.update();

		referenceObject.areaSelect = areaSelect;
		referenceObject.factor = $target.data('factor');
		referenceObject.originalHeight = $target.attr('height') / referenceObject.factor;
		referenceObject.originalWidth = $target.attr('width') / referenceObject.factor;
		referenceObject.constraint = $target.data('constraint');
		referenceObject.source = $target.attr('src').split('/').pop();
		referenceObject.updateSizeAndPosition();
	}
});

/**
 * Info icon class
 */
Craft.InfoIcon = Garnish.Base.extend(
{
	$icon: null,
	hud: null,

	init: function(icon)
	{
		this.$icon = $(icon);

		this.addListener(this.$icon, 'click', 'showHud');
	},

	showHud: function()
	{
		if (!this.hud)
		{
			this.hud = new Garnish.HUD(this.$icon, this.$icon.html(), {
				hudClass: 'hud info-hud'
			});
		}
		else
		{
			this.hud.show();
		}
	}
});

/**
 * Light Switch
 */
Craft.LightSwitch = Garnish.Base.extend(
{
	settings: null,
	$outerContainer: null,
	$innerContainer: null,
	$input: null,
	small: false,
	on: null,
	dragger: null,

	dragStartMargin: null,

	init: function(outerContainer, settings)
	{
		this.$outerContainer = $(outerContainer);

		// Is this already a lightswitch?
		if (this.$outerContainer.data('lightswitch'))
		{
			Garnish.log('Double-instantiating a lightswitch on an element');
			this.$outerContainer.data('lightswitch').destroy();
		}

		this.$outerContainer.data('lightswitch', this);

		this.small = this.$outerContainer.hasClass('small');

		this.setSettings(settings, Craft.LightSwitch.defaults);

		this.$innerContainer = this.$outerContainer.find('.lightswitch-container:first');
		this.$input = this.$outerContainer.find('input:first');

		// If the input is disabled, go no further
		if (this.$input.prop('disabled'))
		{
			return;
		}

		this.on = this.$outerContainer.hasClass('on');

		this.addListener(this.$outerContainer, 'mousedown', '_onMouseDown');
		this.addListener(this.$outerContainer, 'keydown', '_onKeyDown');

		this.dragger = new Garnish.BaseDrag(this.$outerContainer, {
			axis:                 Garnish.X_AXIS,
			ignoreHandleSelector: null,
			onDragStart:          $.proxy(this, '_onDragStart'),
			onDrag:               $.proxy(this, '_onDrag'),
			onDragStop:           $.proxy(this, '_onDragStop')
		});
	},

	turnOn: function()
	{
		this.$outerContainer.addClass('dragging');

		var animateCss = {};
		animateCss['margin-'+Craft.left] = 0;
		this.$innerContainer.velocity('stop').velocity(animateCss, Craft.LightSwitch.animationDuration, $.proxy(this, '_onSettle'));

		this.$input.val(this.settings.value);
		this.$outerContainer.addClass('on');
		this.on = true;
		this.onChange();
	},

	turnOff: function()
	{
		this.$outerContainer.addClass('dragging');

		var animateCss = {};
		animateCss['margin-'+Craft.left] = this._getOffMargin();
		this.$innerContainer.velocity('stop').velocity(animateCss, Craft.LightSwitch.animationDuration, $.proxy(this, '_onSettle'));

		this.$input.val('');
		this.$outerContainer.removeClass('on');
		this.on = false;
		this.onChange();
	},

	toggle: function(event)
	{
		if (!this.on)
		{
			this.turnOn();
		}
		else
		{
			this.turnOff();
		}
	},

	onChange: function()
	{
		this.trigger('change');
		this.settings.onChange();
		this.$outerContainer.trigger('change');
	},

	_onMouseDown: function()
	{
		this.addListener(Garnish.$doc, 'mouseup', '_onMouseUp');
	},

	_onMouseUp: function()
	{
		this.removeListener(Garnish.$doc, 'mouseup');

		// Was this a click?
		if (!this.dragger.dragging)
		{
			this.toggle();
		}
	},

	_onKeyDown: function(event)
	{
		switch (event.keyCode)
		{
			case Garnish.SPACE_KEY:
			{
				this.toggle();
				event.preventDefault();
				break;
			}
			case Garnish.RIGHT_KEY:
			{
				if (Craft.orientation == 'ltr')
				{
					this.turnOn();
				}
				else
				{
					this.turnOff();
				}

				event.preventDefault();
				break;
			}
			case Garnish.LEFT_KEY:
			{
				if (Craft.orientation == 'ltr')
				{
					this.turnOff();
				}
				else
				{
					this.turnOn();
				}

				event.preventDefault();
				break;
			}
		}
	},

	_getMargin: function()
	{
		return parseInt(this.$innerContainer.css('margin-'+Craft.left));
	},

	_onDragStart: function()
	{
		this.$outerContainer.addClass('dragging');
		this.dragStartMargin = this._getMargin();
	},

	_onDrag: function()
	{
		var margin;

		if (Craft.orientation == 'ltr')
		{
			margin = this.dragStartMargin + this.dragger.mouseDistX;
		}
		else
		{
			margin = this.dragStartMargin - this.dragger.mouseDistX;
		}

		if (margin < this._getOffMargin())
		{
			margin = this._getOffMargin();
		}
		else if (margin > 0)
		{
			margin = 0;
		}

		this.$innerContainer.css('margin-'+Craft.left, margin);
	},

	_onDragStop: function()
	{
		var margin = this._getMargin();

		if (margin > (this._getOffMargin() / 2))
		{
			this.turnOn();
		}
		else
		{
			this.turnOff();
		}
	},

	_onSettle: function()
	{
		this.$outerContainer.removeClass('dragging');
	},

	destroy: function()
	{
		this.base();
		this.dragger.destroy();
	},

	_getOffMargin: function()
	{
		return (this.small ? -9 : -11);
	}

}, {
	animationDuration: 100,
	defaults: {
        value: '1',
		onChange: $.noop
	}
});

(function($) {


Craft.LivePreview = Garnish.Base.extend(
{
	$extraFields: null,
	$trigger: null,
	$spinner: null,
	$shade: null,
	$editor: null,
	$dragHandle: null,
	$iframeContainer: null,
	$iframe: null,
	$fieldPlaceholder: null,

	previewUrl: null,
	basePostData: null,
	inPreviewMode: false,
	fields: null,
	lastPostData: null,
	updateIframeInterval: null,
	loading: false,
	checkAgain: false,

	dragger: null,
	dragStartEditorWidth: null,

	_handleSuccessProxy: null,
	_handleErrorProxy: null,

	_scrollX: null,
	_scrollY: null,

	_editorWidth: null,
	_editorWidthInPx: null,

	init: function(settings)
	{
		this.setSettings(settings, Craft.LivePreview.defaults);

		// Should preview requests use a specific URL?
		// This won't affect how the request gets routed (the action param will override it),
		// but it will allow the templates to change behavior based on the request URI.
		if (this.settings.previewUrl)
		{
			this.previewUrl = this.settings.previewUrl;
		}
		else
		{
			this.previewUrl = Craft.baseSiteUrl.replace(/\/+$/, '') + '/';
		}

		// Load the preview over SSL if the current request is
		if (document.location.protocol == 'https:')
		{
			this.previewUrl = this.previewUrl.replace(/^http:/, 'https:');
		}

		// Set the base post data
		this.basePostData = $.extend({
			action: this.settings.previewAction,
			livePreview: true
		}, this.settings.previewParams);

		if (Craft.csrfTokenName)
		{
			this.basePostData[Craft.csrfTokenName] = Craft.csrfTokenValue;
		}

		this._handleSuccessProxy = $.proxy(this, 'handleSuccess');
		this._handleErrorProxy = $.proxy(this, 'handleError');

		// Find the DOM elements
		this.$extraFields = $(this.settings.extraFields);
		this.$trigger = $(this.settings.trigger);
		this.$spinner = this.settings.spinner ? $(this.settings.spinner) : this.$trigger.find('.spinner');
		this.$fieldPlaceholder = $('<div/>');

		// Set the initial editor width
		this.editorWidth = Craft.getLocalStorage('LivePreview.editorWidth', Craft.LivePreview.defaultEditorWidth);

		// Event Listeners
		this.addListener(this.$trigger, 'activate', 'toggle');

		Craft.cp.on('beforeSaveShortcut', $.proxy(function()
		{
			if (this.inPreviewMode)
			{
				this.moveFieldsBack();
			}
		}, this));
	},

	get editorWidth()
	{
		return this._editorWidth;
	},

	get editorWidthInPx()
	{
		return this._editorWidthInPx;
	},

	set editorWidth(width)
	{
		var inPx;

		// Is this getting set in pixels?
		if (width >= 1)
		{
			inPx = width;
			width /= Garnish.$win.width();
		}
		else
		{
			inPx = Math.round(width * Garnish.$win.width());
		}

		// Make sure it's no less than the minimum
		if (inPx < Craft.LivePreview.minEditorWidthInPx)
		{
			inPx = Craft.LivePreview.minEditorWidthInPx;
			width = inPx / Garnish.$win.width();
		}

		this._editorWidth = width;
		this._editorWidthInPx = inPx;
	},

	toggle: function()
	{
		if (this.inPreviewMode)
		{
			this.exit();
		}
		else
		{
			this.enter();
		}
	},

	enter: function()
	{
		if (this.inPreviewMode)
		{
			return;
		}

		this.trigger('beforeEnter');

		$(document.activeElement).blur();

		if (!this.$editor)
		{
			this.$shade = $('<div class="modal-shade dark"></div>').appendTo(Garnish.$bod).css('z-index', 2);
			this.$editor = $('<div class="lp-editor"></div>').appendTo(Garnish.$bod);
			this.$iframeContainer = $('<div class="lp-iframe-container" />').appendTo(Garnish.$bod);
			this.$iframe = $('<iframe class="lp-iframe" frameborder="0" />').appendTo(this.$iframeContainer);
			this.$dragHandle = $('<div class="lp-draghandle"></div>').appendTo(Garnish.$bod);

			var $header = $('<header class="header"></header>').appendTo(this.$editor),
				$closeBtn = $('<div class="btn">'+Craft.t('Done')+'</div>').appendTo($header),
				$heading = $('<h1>'+Craft.t('Live Preview')+'</h1>').appendTo($header);

			this.dragger = new Garnish.BaseDrag(this.$dragHandle, {
				axis:          Garnish.X_AXIS,
				onDragStart:   $.proxy(this, '_onDragStart'),
				onDrag:        $.proxy(this, '_onDrag'),
				onDragStop:    $.proxy(this, '_onDragStop')
			});

			this.addListener($closeBtn, 'click', 'exit');
		}

		// Set the sizes
		this.handleWindowResize();
		this.addListener(Garnish.$win, 'resize', 'handleWindowResize');

		this.$editor.css(Craft.left, -this.editorWidthInPx+'px');
		this.$editor.css('width', this.editorWidthInPx+'px');

		this.$iframeContainer.css(Craft.right, -this.getIframeWidth());

		// Move all the fields into the editor rather than copying them
		// so any JS that's referencing the elements won't break.
		this.fields = [];
		var $fields = $(this.settings.fields);

		for (var i= 0; i < $fields.length; i++)
		{
			var $field = $($fields[i]),
				$clone = this._getClone($field);

			// It's important that the actual field is added to the DOM *after* the clone,
			// so any radio buttons in the field get deselected from the clone rather than the actual field.
			this.$fieldPlaceholder.insertAfter($field);
			$field.detach();
			this.$fieldPlaceholder.replaceWith($clone);
			$field.appendTo(this.$editor);

			this.fields.push({
				$field: $field,
				$clone: $clone
			});
		}

		if (this.updateIframe())
		{
			this.$spinner.removeClass('hidden');
			this.addListener(this.$iframe, 'load', function()
			{
				this.slideIn();
				this.removeListener(this.$iframe, 'load');
			});
		}
		else
		{
			this.slideIn();
		}

		this.inPreviewMode = true;
		this.trigger('enter');
	},

	handleWindowResize: function()
	{
		// Reset the width so the min width is enforced
		this.editorWidth = this.editorWidth;

		// Update the editor/iframe sizes
		this.updateWidths();
	},

	slideIn: function()
	{
		$('html').addClass('noscroll');
		this.$spinner.addClass('hidden');

		this.$shade.velocity('fadeIn');

		this.$editor.show().velocity('stop').animateLeft(0, 'slow', $.proxy(function()
		{
			this.trigger('slideIn');
			Garnish.$win.trigger('resize');
		}, this));
		this.$iframeContainer.show().velocity('stop').animateRight(0, 'slow', $.proxy(function()
		{
			this.updateIframeInterval = setInterval($.proxy(this, 'updateIframe'), 1000);

			this.addListener(Garnish.$bod, 'keyup', function(ev)
			{
				if (ev.keyCode == Garnish.ESC_KEY)
				{
					this.exit();
				}
			});
		}, this));
	},

	exit: function()
	{
		if (!this.inPreviewMode)
		{
			return;
		}

		this.trigger('beforeExit');

		$('html').removeClass('noscroll');

		this.removeListener(Garnish.$win, 'resize');
		this.removeListener(Garnish.$bod, 'keyup');

		if (this.updateIframeInterval)
		{
			clearInterval(this.updateIframeInterval);
		}

		this.moveFieldsBack();

		var windowWidth = Garnish.$win.width();

		this.$shade.delay(200).velocity('fadeOut');

		this.$editor.velocity('stop').animateLeft(-this.editorWidthInPx, 'slow', $.proxy(function()
		{
			for (var i = 0; i < this.fields.length; i++)
			{
				this.fields[i].$newClone.remove();
			}
			this.$editor.hide();
			this.trigger('slideOut');
		}, this));

		this.$iframeContainer.velocity('stop').animateRight(-this.getIframeWidth(), 'slow', $.proxy(function()
		{
			this.$iframeContainer.hide();
		}, this));

		this.inPreviewMode = false;
		this.trigger('exit');
	},

	moveFieldsBack: function()
	{
		for (var i = 0; i < this.fields.length; i++)
		{
			var field = this.fields[i];
			field.$newClone = this._getClone(field.$field);

			// It's important that the actual field is added to the DOM *after* the clone,
			// so any radio buttons in the field get deselected from the clone rather than the actual field.
			this.$fieldPlaceholder.insertAfter(field.$field);
			field.$field.detach();
			this.$fieldPlaceholder.replaceWith(field.$newClone);
			field.$clone.replaceWith(field.$field);
		}

		Garnish.$win.trigger('resize');
	},

	getIframeWidth: function()
	{
		return Garnish.$win.width()-this.editorWidthInPx;
	},

	updateWidths: function()
	{
		this.$editor.css('width', this.editorWidthInPx+'px');
		this.$dragHandle.css(Craft.left, this.editorWidthInPx+'px');
		this.$iframeContainer.width(this.getIframeWidth());
	},

	updateIframe: function(force)
	{
		if (force)
		{
			this.lastPostData = null;
		}

		if (!this.inPreviewMode)
		{
			return false;
		}

		if (this.loading)
		{
			this.checkAgain = true;
			return false;
		}

		// Has the post data changed?
		var postData = $.extend(Garnish.getPostData(this.$editor), Garnish.getPostData(this.$extraFields));

		if (!this.lastPostData || !Craft.compare(postData, this.lastPostData))
		{
			this.lastPostData = postData;
			this.loading = true;

			var $doc = $(this.$iframe[0].contentWindow.document);

			this._scrollX = $doc.scrollLeft();
			this._scrollY = $doc.scrollTop();

			$.ajax({
				url: this.previewUrl,
				method: 'POST',
				data: $.extend({}, postData, this.basePostData),
				success: this._handleSuccessProxy,
				error: this._handleErrorProxy
			});

			return true;
		}
		else
		{
			return false;
		}
	},

	handleSuccess: function(data, textStatus, jqXHR)
	{
		var html = data +
			'<script type="text/javascript">window.scrollTo('+this._scrollX+', '+this._scrollY+');</script>';

		// Set the iframe to use the same bg as the iframe body,
		// to reduce the blink when reloading the DOM
		this.$iframe.css('background', $(this.$iframe[0].contentWindow.document.body).css('background'));

		this.$iframe[0].contentWindow.document.open();
		this.$iframe[0].contentWindow.document.write(html);
		this.$iframe[0].contentWindow.document.close();

		this.onResponse();
	},

	handleError: function(jqXHR, textStatus, errorThrown)
	{
		this.onResponse();
	},

	onResponse: function()
	{
		this.loading = false;

		if (this.checkAgain)
		{
			this.checkAgain = false;
			this.updateIframe();
		}
	},

	_getClone: function($field)
	{
		var $clone = $field.clone();

		// clone() won't account for input values that have changed since the original HTML set them
		Garnish.copyInputValues($field, $clone);

		// Remove any id= attributes
		$clone.attr('id', '');
		$clone.find('[id]').attr('id', '');

		return $clone;
	},

	_onDragStart: function()
	{
		this.dragStartEditorWidth = this.editorWidthInPx;
		this.$iframeContainer.addClass('dragging');
	},

	_onDrag: function()
	{
		if (Craft.orientation == 'ltr')
		{
			this.editorWidth = this.dragStartEditorWidth + this.dragger.mouseDistX;
		}
		else
		{
			this.editorWidth = this.dragStartEditorWidth - this.dragger.mouseDistX;
		}

		this.updateWidths();
	},

	_onDragStop: function()
	{
		this.$iframeContainer.removeClass('dragging');
		Craft.setLocalStorage('LivePreview.editorWidth', this.editorWidth);
	}
},
{
	defaultEditorWidth: 0.33,
	minEditorWidthInPx: 200,

	defaults: {
		trigger: '.livepreviewbtn',
		spinner: null,
		fields: null,
		extraFields: null,
		previewUrl: null,
		previewAction: null,
		previewParams: {}
	}
});

Craft.LivePreview.init = function(settings)
{
	Craft.livePreview = new Craft.LivePreview(settings);
};


})(jQuery);

/**
 * Pane class
 */
Craft.Pane = Garnish.Base.extend(
{
	$pane: null,
	$content: null,
	$sidebar: null,
	$sidebarBtn: null,

	tabs: null,
	selectedTab: null,
	hasSidebar: null,
	showingSidebar: null,
	peekingSidebar: null,
	fixedSidebar: null,

	init: function(pane)
	{
		this.$pane = $(pane);

		// Is this already a pane?
		if (this.$pane.data('pane'))
		{
			Garnish.log('Double-instantiating a pane on an element');
			this.$pane.data('pane').destroy();
		}

		this.$pane.data('pane', this);

		this.$content = this.$pane.find('.content:not(.hidden):first');

		// Initialize the tabs
		var $tabsContainer = this.$pane.children('.tabs'),
			$tabs = $tabsContainer.find('a');

		if ($tabs.length)
		{
			this.tabs = {};

			// Find the tabs that link to a div on the page
			for (var i = 0; i < $tabs.length; i++)
			{
				var $tab = $($tabs[i]),
					href = $tab.attr('href');

				if (href && href.charAt(0) == '#')
				{
					this.tabs[href] = {
						$tab: $tab,
						$target: $(href)
					};

					this.addListener($tab, 'activate', 'selectTab');
				}

				if (!this.selectedTab && $tab.hasClass('sel'))
				{
					this.selectedTab = href;
				}
			}

			if (document.location.hash && typeof this.tabs[document.location.hash] != 'undefined')
			{
				this.tabs[document.location.hash].$tab.trigger('activate');
			}
			else if (!this.selectedTab)
			{
				$($tabs[0]).trigger('activate');
			}
		}

		this.initContent();
	},

	/**
	 * Selects a tab.
	 */
	selectTab: function(ev)
	{
		if (!this.selectedTab || ev.currentTarget != this.tabs[this.selectedTab].$tab[0])
		{
			// Hide the selected tab
			this.deselectTab();

			var $tab = $(ev.currentTarget).addClass('sel');
			this.selectedTab = $tab.attr('href');

			var $target = this.tabs[this.selectedTab].$target;
			$target.removeClass('hidden');

			if ($target.hasClass('content'))
			{
				if (this.hasSidebar)
				{
					this.removeListener(this.$content, 'resize');
					this.removeListener(this.$sidebar, 'resize');
					this.removeListener(Garnish.$win, 'scroll resize');
				}

				this.$content = $target;
				this.initContent();
			}

			Garnish.$win.trigger('resize');
		}
	},

	/**
	 * Deselects the current tab.
	 */
	deselectTab: function()
	{
		if (this.selectedTab)
		{
			this.tabs[this.selectedTab].$tab.removeClass('sel');
			this.tabs[this.selectedTab].$target.addClass('hidden');
		}
	},

	initContent: function()
	{
		this.hasSidebar = this.$content.hasClass('has-sidebar');

		if (this.hasSidebar)
		{
			this.$sidebar = this.$content.children('.sidebar');

			this.showingSidebar = true;
			this.updateResponsiveSidebar();
			this.addListener(this.$content, 'resize', function()
			{
				this.updateResponsiveSidebar();
				this.updateSidebarStyles();
			});

			this.addListener(this.$sidebar, 'resize', 'setMinContentSizeForSidebar');
			this.setMinContentSizeForSidebar();

			this.addListener(Garnish.$win, 'scroll resize', 'updateSidebarStyles');
			this.updateSidebarStyles();
		}
	},

	updateResponsiveSidebar: function()
	{
		if (this.$content.width() + parseInt(this.$content.css('margin-'+Craft.left)) < Craft.Pane.minContentWidthForSidebar)
		{
			if (this.showingSidebar)
			{
				this.hideSidebar();
			}
		}
		else
		{
			if (!this.showingSidebar)
			{
				this.showSidebar();
			}
		}
	},

	showSidebar: function()
	{
		this.$content.removeClass('hiding-sidebar');
		this.$sidebarBtn.remove();
		this.showingSidebar = true;
		this.updateSidebarStyles();
		this.setMinContentSizeForSidebar();

		if (this.peekingSidebar)
		{
			this.stopPeeking();
		}
	},

	hideSidebar: function()
	{
		this.$content.addClass('hiding-sidebar');

		this.$sidebarBtn = $('<a class="show-sidebar" title="'+Craft.t('Show sidebar')+'"></a>').appendTo(this.$content);
		this.addListener(this.$sidebarBtn, 'click', 'togglePeekingSidebar');

		this.showingSidebar = false;
		this.setMinContentSizeForSidebar();
	},

	togglePeekingSidebar: function()
	{
		if (this.peekingSidebar)
		{
			this.stopPeeking();
		}
		else
		{
			this.startPeeking();
		}

		this.setMinContentSizeForSidebar();
	},

	startPeeking: function()
	{
		this.$content.animateLeft(194, 'fast');
		this.$sidebarBtn.addClass('showing').attr('title', Craft.t('Hide sidebar'));
		this.peekingSidebar = true;
		this.updateSidebarStyles();

		this.addListener(this.$sidebar, 'click', $.proxy(function(ev)
		{
			if (ev.target.nodeName == 'A')
			{
				this.togglePeekingSidebar();
			}
		}, this));
	},

	stopPeeking: function()
	{
		this.$content.animateLeft(0, 'fast');
		this.$sidebarBtn.removeClass('showing').attr('title', Craft.t('Show sidebar'));
		this.peekingSidebar = false;

		this.removeListener(this.$sidebar, 'click');
	},

	setMinContentSizeForSidebar: function()
	{
		if (this.showingSidebar || this.peekingSidebar)
		{
			this.setMinContentSizeForSidebar._minHeight = this.$sidebar.prop('scrollHeight') - 48;
		}
		else
		{
			this.setMinContentSizeForSidebar._minHeight = 0;
		}

		this.$content.css('min-height', this.setMinContentSizeForSidebar._minHeight);
	},

	updateSidebarStyles: function()
	{
		if (this.showingSidebar || this.peekingSidebar)
		{
			this.updateSidebarStyles._styles = {};

			this.updateSidebarStyles._scrollTop = Garnish.$win.scrollTop();
			this.updateSidebarStyles._contentOffset = this.$content.offset().top;
			this.updateSidebarStyles._contentHeight = this.$content.height() - 24;
			this.updateSidebarStyles._windowHeight = Garnish.$win.height();

			// Have we scrolled passed the top of the content div?
			if (this.updateSidebarStyles._scrollTop > this.updateSidebarStyles._contentOffset - 24)
			{
				// Set the top position to the difference
				this.updateSidebarStyles._styles.position = 'fixed';
				this.updateSidebarStyles._styles.top = '24px';
			}
			else
			{
				this.updateSidebarStyles._styles.position = 'absolute';
				this.updateSidebarStyles._styles.top = 'auto';
			}

			// Now figure out how tall the sidebar can be
			this.updateSidebarStyles._styles.maxHeight = Math.min(
				this.updateSidebarStyles._contentHeight - (this.updateSidebarStyles._scrollTop - this.updateSidebarStyles._contentOffset),
				this.updateSidebarStyles._windowHeight - 48
			);

			this.$sidebar.css(this.updateSidebarStyles._styles);
		}
	},

	destroy: function()
	{
		this.base();
		this.$pane.data('pane', null);
	}
},
{
	minContentWidthForSidebar: 514 // 320 + 194
});

/**
 * Password Input
 */
Craft.PasswordInput = Garnish.Base.extend(
{
	$passwordInput: null,
	$textInput: null,
	$currentInput: null,

	$showPasswordToggle: null,
	showingPassword: null,

	init: function(passwordInput, settings)
	{
		this.$passwordInput = $(passwordInput);
		this.settings = $.extend({}, Craft.PasswordInput.defaults, settings);

		// Is this already a password input?
		if (this.$passwordInput.data('passwordInput'))
		{
			Garnish.log('Double-instantiating a password input on an element');
			this.$passwordInput.data('passwordInput').destroy();
		}

		this.$passwordInput.data('passwordInput', this);

		this.$showPasswordToggle = $('<a/>').hide();
		this.$showPasswordToggle.addClass('password-toggle');
		this.$showPasswordToggle.insertAfter(this.$passwordInput);
		this.addListener(this.$showPasswordToggle, 'mousedown', 'onToggleMouseDown');
		this.hidePassword();
	},

	setCurrentInput: function($input)
	{
		if (this.$currentInput)
		{
			// Swap the inputs, while preventing the focus animation
			$input.addClass('focus');
			this.$currentInput.replaceWith($input);
			$input.focus();
			$input.removeClass('focus');

			// Restore the input value
			$input.val(this.$currentInput.val());
		}

		this.$currentInput = $input;

		this.addListener(this.$currentInput, 'keypress,keyup,change,blur', 'onInputChange');
	},

	updateToggleLabel: function(label)
	{
		this.$showPasswordToggle.text(label);
	},

	showPassword: function()
	{
		if (this.showingPassword)
		{
			return;
		}

		if (!this.$textInput)
		{
			this.$textInput = this.$passwordInput.clone(true);
			this.$textInput.attr('type', 'text');
		}

		this.setCurrentInput(this.$textInput);
		this.updateToggleLabel(Craft.t('Hide'));
		this.showingPassword = true;
	},

	hidePassword: function()
	{
		// showingPassword could be null, which is acceptable
		if (this.showingPassword === false)
		{
			return;
		}

		this.setCurrentInput(this.$passwordInput);
		this.updateToggleLabel(Craft.t('Show'));
		this.showingPassword = false;

		// Alt key temporarily shows the password
		this.addListener(this.$passwordInput, 'keydown', 'onKeyDown');
	},

	togglePassword: function()
	{
		if (this.showingPassword)
		{
			this.hidePassword();
		}
		else
		{
			this.showPassword();
		}

		this.settings.onToggleInput(this.$currentInput);
	},

	onKeyDown: function(ev)
	{
		if (ev.keyCode == Garnish.ALT_KEY && this.$currentInput.val())
		{
			this.showPassword();
			this.$showPasswordToggle.hide();
			this.addListener(this.$textInput, 'keyup', 'onKeyUp');
		}
	},

	onKeyUp: function(ev)
	{
		ev.preventDefault();

		if (ev.keyCode == Garnish.ALT_KEY)
		{
			this.hidePassword();
			this.$showPasswordToggle.show();
		}
	},

	onInputChange: function()
	{
		if (this.$currentInput.val())
		{
			this.$showPasswordToggle.show();
		}
		else
		{
			this.$showPasswordToggle.hide();
		}
	},

	onToggleMouseDown: function(ev)
	{
		// Prevent focus change
		ev.preventDefault();

		if (this.$currentInput[0].setSelectionRange)
		{
			var selectionStart = this.$currentInput[0].selectionStart,
				selectionEnd   = this.$currentInput[0].selectionEnd;

			this.togglePassword();
			this.$currentInput[0].setSelectionRange(selectionStart, selectionEnd);
		}
		else
		{
			this.togglePassword();
		}
	}
},
{
	defaults: {
		onToggleInput: $.noop
	}
});

/**
 * File Manager.
 */
Craft.ProgressBar = Garnish.Base.extend(
{
    $progressBar: null,
    $innerProgressBar: null,

    _itemCount: 0,
    _processedItemCount: 0,

    init: function($element)
    {
		this.$progressBar = $('<div class="progressbar pending hidden"/>').appendTo($element);
		this.$innerProgressBar = $('<div class="progressbar-inner"/>').appendTo(this.$progressBar);

        this.resetProgressBar();
    },

    /**
     * Reset the progress bar
     */
    resetProgressBar: function()
    {
		// Since setting the progress percentage implies that there is progress to be shown
		// It removes the pending class - we must add it back.
		this.setProgressPercentage(100);
		this.$progressBar.addClass('pending');

		// Reset all the counters
		this.setItemCount(1);
        this.setProcessedItemCount(0);
    },

    /**
     * Fade to invisible, hide it using a class and reset opacity to visible
     */
    hideProgressBar: function()
    {
        this.$progressBar.fadeTo('fast', 0.01, $.proxy(function() {
            this.$progressBar.addClass('hidden').fadeTo(1, 1, $.noop);
        }, this));
    },

    showProgressBar: function()
    {
        this.$progressBar.removeClass('hidden');
    },

    setItemCount: function(count)
    {
        this._itemCount = count;
    },

    incrementItemCount: function(count)
    {
        this._itemCount += count;
    },

    setProcessedItemCount: function(count)
    {
        this._processedItemCount = count;
    },

    incrementProcessedItemCount: function(count)
    {
        this._processedItemCount += count;
    },

    updateProgressBar: function()
    {
        // Only fools would allow accidental division by zero.
        this._itemCount = Math.max(this._itemCount, 1);

        var width = Math.min(100, Math.round(100 * this._processedItemCount / this._itemCount));

        this.setProgressPercentage(width);
    },

    setProgressPercentage: function(percentage, animate)
    {
		if (percentage == 0)
		{
			this.$progressBar.addClass('pending');
		}
		else
		{
			this.$progressBar.removeClass('pending');

            if (animate)
            {
                this.$innerProgressBar.velocity('stop').velocity({ width: percentage+'%' }, 'fast');
            }
            else
            {
                this.$innerProgressBar.velocity('stop').width(percentage+'%');
            }
		}
    }
});

/**
 * File Manager.
 */
Craft.PromptHandler = Garnish.Base.extend({

    $modalContainerDiv: null,
    $prompt: null,
    $promptApplyToRemainingContainer: null,
    $promptApplyToRemainingCheckbox: null,
    $promptApplyToRemainingLabel: null,
	$pomptChoices: null,


    _prompts: [],
    _promptBatchCallback: $.noop,
    _promptBatchReturnData: [],
    _promptBatchNum: 0,

    init: function()
    {

    },

    resetPrompts: function()
    {
        this._prompts = [];
        this._promptBatchCallback = $.noop;
        this._promptBatchReturnData = [];
        this._promptBatchNum = 0;
    },

    addPrompt: function(prompt)
    {
        this._prompts.push(prompt);
    },

    getPromptCount: function()
    {
        return this._prompts.length;
    },

    showBatchPrompts: function(callback)
    {
        this._promptBatchCallback = callback;
        this._promptBatchReturnData = [];
        this._promptBatchNum = 0;

        this._showNextPromptInBatch();
    },

    _showNextPromptInBatch: function()
    {
        var prompt = this._prompts[this._promptBatchNum].prompt,
            remainingInBatch = this._prompts.length - (this._promptBatchNum + 1);

        this._showPrompt(prompt.message, prompt.choices, $.proxy(this, '_handleBatchPromptSelection'), remainingInBatch);
    },

    /**
     * Handles a prompt choice selection.
     *
     * @param choice
     * @param applyToRemaining
     * @private
     */
    _handleBatchPromptSelection: function(choice, applyToRemaining)
    {
        var prompt = this._prompts[this._promptBatchNum],
            remainingInBatch = this._prompts.length - (this._promptBatchNum + 1);

        // Record this choice
        var choiceData = $.extend(prompt, {choice: choice});
        this._promptBatchReturnData.push(choiceData);

        // Are there any remaining items in the batch?
        if (remainingInBatch)
        {
            // Get ready to deal with the next prompt
            this._promptBatchNum++;

            // Apply the same choice to the remaining items?
            if (applyToRemaining)
            {
                this._handleBatchPromptSelection(choice, true);
            }
            else
            {
                // Show the next prompt
                this._showNextPromptInBatch();
            }
        }
        else
        {
            // All done! Call the callback
            if (typeof this._promptBatchCallback == 'function')
            {
                this._promptBatchCallback(this._promptBatchReturnData);
            }
        }
    },

    /**
     * Show the user prompt with a given message and choices, plus an optional "Apply to remaining" checkbox.
     *
     * @param string message
     * @param array choices
     * @param function callback
     * @param int itemsToGo
     */
    _showPrompt: function(message, choices, callback, itemsToGo)
    {
        this._promptCallback = callback;

        if (this.modal == null) {
            this.modal = new Garnish.Modal({closeOtherModals: false});
        }

        if (this.$modalContainerDiv == null) {
            this.$modalContainerDiv = $('<div class="modal fitted prompt-modal"></div>').addClass().appendTo(Garnish.$bod);
        }

        this.$prompt = $('<div class="body"></div>').appendTo(this.$modalContainerDiv.empty());

        this.$promptMessage = $('<p class="prompt-msg"/>').appendTo(this.$prompt);

		this.$promptChoices = $('<div class="options"></div>').appendTo(this.$prompt);

		this.$promptApplyToRemainingContainer = $('<label class="assets-applytoremaining"/>').appendTo(this.$prompt).hide();
		this.$promptApplyToRemainingCheckbox = $('<input type="checkbox"/>').appendTo(this.$promptApplyToRemainingContainer);
		this.$promptApplyToRemainingLabel = $('<span/>').appendTo(this.$promptApplyToRemainingContainer);

		this.$promptButtons = $('<div class="buttons right"/>').appendTo(this.$prompt);

        this.modal.setContainer(this.$modalContainerDiv);

        this.$promptMessage.html(message);

		var $cancelButton = $('<div class="btn">'+Craft.t('Cancel')+'</div>').appendTo(this.$promptButtons),
			$submitBtn = $('<input type="submit" class="btn submit disabled" value="'+Craft.t('OK')+'" />').appendTo(this.$promptButtons);

        for (var i = 0; i < choices.length; i++)
        {
            var $radioButtonHtml = $('<div><label><input type="radio" name="promptAction" value="'+choices[i].value+'"/> '+choices[i].title+'</label></div>').appendTo(this.$promptChoices),
				$radioButton = $radioButtonHtml.find('input');

			this.addListener($radioButton, 'click', function(ev)
			{
				$submitBtn.removeClass('disabled');
			});
        }

		this.addListener($submitBtn, 'activate', function(ev)
		{
			var choice = $(ev.currentTarget).parents('.modal').find('input[name=promptAction]:checked').val(),
				applyToRemaining = this.$promptApplyToRemainingCheckbox.prop('checked');

			this._selectPromptChoice(choice, applyToRemaining);
		});

		this.addListener($cancelButton, 'activate', function(ev)
		{
			var choice = 'cancel',
				applyToRemaining = this.$promptApplyToRemainingCheckbox.prop('checked');

			this._selectPromptChoice(choice, applyToRemaining);
		});

		if (itemsToGo)
        {
            this.$promptApplyToRemainingContainer.show();
            this.$promptApplyToRemainingLabel.html(' ' + Craft.t('Apply this to the {number} remaining conflicts?', {number: itemsToGo}));
        }

        this.modal.show();
        this.modal.removeListener(Garnish.Modal.$shade, 'click');
        this.addListener(Garnish.Modal.$shade, 'click', '_cancelPrompt');

    },

    /**
     * Handles when a user selects one of the prompt choices.
     *
     * @param choice
     * @param applyToRemaining
     * @private
     */
    _selectPromptChoice: function(choice, applyToRemaining)
    {
        this.$prompt.fadeOut('fast', $.proxy(function() {
            this.modal.hide();
            this._promptCallback(choice, applyToRemaining);
        }, this));
    },

    /**
     * Cancels the prompt.
     */
    _cancelPrompt: function()
    {
        this._selectPromptChoice('cancel', true);
    }
});
/**
 * Slug Generator
 */
Craft.SlugGenerator = Craft.BaseInputGenerator.extend(
{
	generateTargetValue: function(sourceVal)
	{
		// Remove HTML tags
		sourceVal = sourceVal.replace(/<(.*?)>/g, '');

		// Remove inner-word punctuation
		sourceVal = sourceVal.replace(/['"‘’“”\[\]\(\)\{\}:]/g, '');

		// Make it lowercase
		sourceVal = sourceVal.toLowerCase();

		if (Craft.limitAutoSlugsToAscii)
		{
			// Convert extended ASCII characters to basic ASCII
			sourceVal = Craft.asciiString(sourceVal);
		}

		// Get the "words". Split on anything that is not alphanumeric.
		var words = Craft.filterArray(XRegExp.matchChain(sourceVal, [XRegExp('[\\p{L}\\p{N}]+')]));

		if (words.length)
		{
			return words.join(Craft.slugWordSeparator);
		}
		else
		{
			return '';
		}
	}
});

/**
 * Structure class
 */
Craft.Structure = Garnish.Base.extend(
{
	id: null,

	$container: null,
	state: null,
	structureDrag: null,

	/**
	 * Init
	 */
	init: function(id, container, settings)
	{
		this.id = id;
		this.$container = $(container);
		this.setSettings(settings, Craft.Structure.defaults);

		// Is this already a structure?
		if (this.$container.data('structure'))
		{
			Garnish.log('Double-instantiating a structure on an element');
			this.$container.data('structure').destroy();
		}

		this.$container.data('structure', this);

		this.state = {};

		if (this.settings.storageKey)
		{
			$.extend(this.state, Craft.getLocalStorage(this.settings.storageKey, {}));
		}

		if (typeof this.state.collapsedElementIds == 'undefined')
		{
			this.state.collapsedElementIds = [];
		}

		var $parents = this.$container.find('ul').prev('.row');

		for (var i = 0; i < $parents.length; i++)
		{
			var $row = $($parents[i]),
				$li = $row.parent(),
				$toggle = $('<div class="toggle" title="'+Craft.t('Show/hide children')+'"/>').prependTo($row);

			if ($.inArray($row.children('.element').data('id'), this.state.collapsedElementIds) != -1)
			{
				$li.addClass('collapsed');
			}

			this.initToggle($toggle);
		}

		if (this.settings.sortable)
		{
			this.structureDrag = new Craft.StructureDrag(this, this.settings.maxLevels);
		}

		if (this.settings.newChildUrl)
		{
			this.initNewChildMenus(this.$container.find('.add'));
		}
	},

	initToggle: function($toggle)
	{
		$toggle.click($.proxy(function(ev)
		{
			var $li = $(ev.currentTarget).closest('li'),
				elementId = $li.children('.row').find('.element:first').data('id'),
				viewStateKey = $.inArray(elementId, this.state.collapsedElementIds);

			if ($li.hasClass('collapsed'))
			{
				$li.removeClass('collapsed');

				if (viewStateKey != -1)
				{
					this.state.collapsedElementIds.splice(viewStateKey, 1);
				}
			}
			else
			{
				$li.addClass('collapsed');

				if (viewStateKey == -1)
				{
					this.state.collapsedElementIds.push(elementId);
				}
			}

			if (this.settings.storageKey)
			{
				Craft.setLocalStorage(this.settings.storageKey, this.state);
			}

		}, this));
	},

	initNewChildMenus: function($addBtns)
	{
		this.addListener($addBtns, 'click', 'onNewChildMenuClick');
	},

	onNewChildMenuClick: function(ev)
	{
		var $btn = $(ev.currentTarget);

		if (!$btn.data('menubtn'))
		{
			var elementId = $btn.parent().children('.element').data('id'),
				newChildUrl = Craft.getUrl(this.settings.newChildUrl, 'parentId='+elementId),
				$menu = $('<div class="menu"><ul><li><a href="'+newChildUrl+'">'+Craft.t('New child')+'</a></li></ul></div>').insertAfter($btn);

			var menuBtn = new Garnish.MenuBtn($btn);
			menuBtn.showMenu();
		}
	},

	getIndent: function(level)
	{
		return Craft.Structure.baseIndent + (level-1) * Craft.Structure.nestedIndent;
	},

	addElement: function($element)
	{
		var $li = $('<li data-level="1"/>').appendTo(this.$container),
			$row = $('<div class="row" style="margin-'+Craft.left+': -'+Craft.Structure.baseIndent+'px; padding-'+Craft.left+': '+Craft.Structure.baseIndent+'px;">').appendTo($li);

		$row.append($element);

		if (this.settings.sortable)
		{
			$row.append('<a class="move icon" title="'+Craft.t('Move')+'"></a>');
			this.structureDrag.addItems($li);
		}

		if (this.settings.newChildUrl)
		{
			var $addBtn = $('<a class="add icon" title="'+Craft.t('New Child')+'"></a>').appendTo($row);
			this.initNewChildMenus($addBtn);
		}

		$row.css('margin-bottom', -30);
		$row.velocity({ 'margin-bottom': 0 }, 'fast');
	},

	removeElement: function($element)
	{
		var $li = $element.parent().parent();

		if (this.settings.sortable)
		{
			this.structureDrag.removeItems($li);
		}

		if (!$li.siblings().length)
		{
			var $parentUl = $li.parent();
		}

		$li.css('visibility', 'hidden').velocity({ marginBottom: -$li.height() }, 'fast', $.proxy(function()
		{
			$li.remove();

			if (typeof $parentUl != 'undefined')
			{
				this._removeUl($parentUl);
			}
		}, this));
	},

	_removeUl: function($ul)
	{
		$ul.siblings('.row').children('.toggle').remove();
		$ul.remove();
	}
},
{
	baseIndent: 8,
	nestedIndent: 35,

	defaults: {
		storageKey:  null,
		sortable:    false,
		newChildUrl: null,
		maxLevels:   null
	}
});

/**
 * Structure drag class
 */
Craft.StructureDrag = Garnish.Drag.extend(
{
	structure: null,
	maxLevels: null,
	draggeeLevel: null,

	$helperLi: null,
	$targets: null,
	draggeeHeight: null,

	init: function(structure, maxLevels)
	{
		this.structure = structure;
		this.maxLevels = maxLevels;

		this.$insertion = $('<li class="draginsertion"/>');

		var $items = this.structure.$container.find('li');

		this.base($items, {
			handle: '.element:first, .move:first',
			helper: $.proxy(this, 'getHelper')
		});
	},

	getHelper: function($helper)
	{
		this.$helperLi = $helper;
		var $ul = $('<ul class="structure draghelper"/>').append($helper);
		$helper.css('padding-'+Craft.left, this.$draggee.css('padding-'+Craft.left));
		$helper.find('.move').removeAttr('title');
		return $ul;
	},

	onDragStart: function()
	{
		this.$targets = $();

		// Recursively find each of the targets, in the order they appear to be in
		this.findTargets(this.structure.$container);

		// How deep does the rabbit hole go?
		this.draggeeLevel = 0;
		var $level = this.$draggee;
		do {
			this.draggeeLevel++;
			$level = $level.find('> ul > li');
		} while($level.length);

		// Collapse the draggee
		this.draggeeHeight = this.$draggee.height();
		this.$draggee.velocity({
			height: 0
		}, 'fast', $.proxy(function() {
			this.$draggee.addClass('hidden');
		}, this));
		this.base();

		this.addListener(Garnish.$doc, 'keydown', function(ev)
		{
			if (ev.keyCode == Garnish.ESC_KEY)
			{
				this.cancelDrag();
			}
		});
	},

	findTargets: function($ul)
	{
		var $lis = $ul.children().not(this.$draggee);

		for (var i = 0; i < $lis.length; i++)
		{
			var $li = $($lis[i]);
			this.$targets = this.$targets.add($li.children('.row'));

			if (!$li.hasClass('collapsed'))
			{
				this.findTargets($li.children('ul'));
			}
		}
	},

	onDrag: function()
	{
		if (this._.$closestTarget)
		{
			this._.$closestTarget.removeClass('draghover');
			this.$insertion.remove();
		}

		// First let's find the closest target
		this._.$closestTarget = null;
		this._.closestTargetPos = null;
		this._.closestTargetYDiff = null;
		this._.closestTargetOffset = null;
		this._.closestTargetHeight = null;

		for (this._.i = 0; this._.i < this.$targets.length; this._.i++)
		{
			this._.$target = $(this.$targets[this._.i]);
			this._.targetOffset = this._.$target.offset();
			this._.targetHeight = this._.$target.outerHeight();
			this._.targetYMidpoint = this._.targetOffset.top + (this._.targetHeight / 2);
			this._.targetYDiff = Math.abs(this.mouseY - this._.targetYMidpoint);

			if (this._.i == 0 || (this.mouseY >= this._.targetOffset.top + 5 && this._.targetYDiff < this._.closestTargetYDiff))
			{
				this._.$closestTarget = this._.$target;
				this._.closestTargetPos = this._.i;
				this._.closestTargetYDiff = this._.targetYDiff;
				this._.closestTargetOffset = this._.targetOffset;
				this._.closestTargetHeight = this._.targetHeight;
			}
			else
			{
				// Getting colder
				break;
			}
		}

		if (!this._.$closestTarget)
		{
			return;
		}

		// Are we hovering above the first row?
		if (this._.closestTargetPos == 0 && this.mouseY < this._.closestTargetOffset.top + 5)
		{
			this.$insertion.prependTo(this.structure.$container);
		}
		else
		{
			this._.$closestTargetLi = this._.$closestTarget.parent();
			this._.closestTargetLevel = this._.$closestTargetLi.data('level');

			// Is there a next row?
			if (this._.closestTargetPos < this.$targets.length - 1)
			{
				this._.$nextTargetLi = $(this.$targets[this._.closestTargetPos+1]).parent();
				this._.nextTargetLevel = this._.$nextTargetLi.data('level');
			}
			else
			{
				this._.$nextTargetLi = null;
				this._.nextTargetLevel = null;
			}

			// Are we hovering between this row and the next one?
			this._.hoveringBetweenRows = (this.mouseY >= this._.closestTargetOffset.top + this._.closestTargetHeight - 5);

			/**
			 * Scenario 1: Both rows have the same level.
			 *
			 *     * Row 1
			 *     ----------------------
			 *     * Row 2
			 */

			if (this._.$nextTargetLi && this._.nextTargetLevel == this._.closestTargetLevel)
			{
				if (this._.hoveringBetweenRows)
				{
					if (!this.maxLevels || this.maxLevels >= (this._.closestTargetLevel + this.draggeeLevel - 1))
					{
						// Position the insertion after the closest target
						this.$insertion.insertAfter(this._.$closestTargetLi);
					}

				}
				else
				{
					if (!this.maxLevels || this.maxLevels >= (this._.closestTargetLevel + this.draggeeLevel))
					{
						this._.$closestTarget.addClass('draghover');
					}
				}
			}

			/**
			 * Scenario 2: Next row is a child of this one.
			 *
			 *     * Row 1
			 *     ----------------------
			 *         * Row 2
			 */

			else if (this._.$nextTargetLi && this._.nextTargetLevel > this._.closestTargetLevel)
			{
				if (!this.maxLevels || this.maxLevels >= (this._.nextTargetLevel + this.draggeeLevel - 1))
				{
					if (this._.hoveringBetweenRows)
					{
						// Position the insertion as the first child of the closest target
						this.$insertion.insertBefore(this._.$nextTargetLi);
					}
					else
					{
						this._.$closestTarget.addClass('draghover');
						this.$insertion.appendTo(this._.$closestTargetLi.children('ul'));
					}
				}
			}

			/**
			 * Scenario 3: Next row is a child of a parent node, or there is no next row.
			 *
			 *         * Row 1
			 *     ----------------------
			 *     * Row 2
			 */

			else
			{
				if (this._.hoveringBetweenRows)
				{
					// Determine which <li> to position the insertion after
					this._.draggeeX = this.mouseX - this.targetItemMouseDiffX;

					if (Craft.orientation == 'rtl')
					{
						this._.draggeeX += this.$helperLi.width();
					}

					this._.$parentLis = this._.$closestTarget.parentsUntil(this.structure.$container, 'li');
					this._.$closestParentLi = null;
					this._.closestParentLiXDiff = null;
					this._.closestParentLevel = null;

					for (this._.i = 0; this._.i < this._.$parentLis.length; this._.i++)
					{
						this._.$parentLi = $(this._.$parentLis[this._.i]);
						this._.parentLiX = this._.$parentLi.offset().left;

						if (Craft.orientation == 'rtl')
						{
							this._.parentLiX += this._.$parentLi.width();
						}

						this._.parentLiXDiff = Math.abs(this._.parentLiX - this._.draggeeX);
						this._.parentLevel = this._.$parentLi.data('level');

						if ((!this.maxLevels || this.maxLevels >= (this._.parentLevel + this.draggeeLevel - 1)) && (
							!this._.$closestParentLi || (
								this._.parentLiXDiff < this._.closestParentLiXDiff &&
								(!this._.$nextTargetLi || this._.parentLevel >= this._.nextTargetLevel)
							)
						))
						{
							this._.$closestParentLi = this._.$parentLi;
							this._.closestParentLiXDiff = this._.parentLiXDiff;
							this._.closestParentLevel = this._.parentLevel;
						}
					}

					if (this._.$closestParentLi)
					{
						this.$insertion.insertAfter(this._.$closestParentLi);
					}
				}
				else
				{
					if (!this.maxLevels || this.maxLevels >= (this._.closestTargetLevel + this.draggeeLevel))
					{
						this._.$closestTarget.addClass('draghover');
					}
				}
			}
		}
	},

	cancelDrag: function()
	{
		this.$insertion.remove();

		if (this._.$closestTarget)
		{
			this._.$closestTarget.removeClass('draghover');
		}

		this.onMouseUp();
	},

	onDragStop: function()
	{
		// Are we repositioning the draggee?
		if (this._.$closestTarget && (this.$insertion.parent().length || this._.$closestTarget.hasClass('draghover')))
		{
			var $draggeeParent,
				moved;

			// Are we about to leave the draggee's original parent childless?
			if (!this.$draggee.siblings().length)
			{
				$draggeeParent = this.$draggee.parent();
			}

			if (this.$insertion.parent().length)
			{
				// Make sure the insertion isn't right next to the draggee
				var $closestSiblings = this.$insertion.next().add(this.$insertion.prev());

				if ($.inArray(this.$draggee[0], $closestSiblings) == -1)
				{
					this.$insertion.replaceWith(this.$draggee);
					moved = true;
				}
				else
				{
					this.$insertion.remove();
					moved = false;
				}
			}
			else
			{
				var $ul = this._.$closestTargetLi.children('ul');

				// Make sure this is a different parent than the draggee's
				if (!$draggeeParent || !$ul.length || $ul[0] != $draggeeParent[0])
				{
					if (!$ul.length)
					{
						var $toggle = $('<div class="toggle" title="'+Craft.t('Show/hide children')+'"/>').prependTo(this._.$closestTarget);
						this.structure.initToggle($toggle);

						$ul = $('<ul>').appendTo(this._.$closestTargetLi);
					}
					else if (this._.$closestTargetLi.hasClass('collapsed'))
					{
						this._.$closestTarget.children('.toggle').trigger('click');
					}

					this.$draggee.appendTo($ul);
					moved = true;
				}
				else
				{
					moved = false;
				}
			}

			// Remove the class either way
			this._.$closestTarget.removeClass('draghover');

			if (moved)
			{
				// Now deal with the now-childless parent
				if ($draggeeParent)
				{
					this.structure._removeUl($draggeeParent);
				}

				// Has the level changed?
				var newLevel = this.$draggee.parentsUntil(this.structure.$container, 'li').length + 1;

				if (newLevel != this.$draggee.data('level'))
				{
					// Correct the helper's padding if moving to/from level 1
					if (this.$draggee.data('level') == 1)
					{
						var animateCss = {};
						animateCss['padding-'+Craft.left] = 38;
						this.$helperLi.velocity(animateCss, 'fast');
					}
					else if (newLevel == 1)
					{
						var animateCss = {};
						animateCss['padding-'+Craft.left] = Craft.Structure.baseIndent;
						this.$helperLi.velocity(animateCss, 'fast');
					}

					this.setLevel(this.$draggee, newLevel);
				}

				// Make it real
				var $element = this.$draggee.children('.row').children('.element');

				var data = {
					structureId: this.structure.id,
					elementId:   $element.data('id'),
					locale:      $element.data('locale'),
					prevId:      this.$draggee.prev().children('.row').children('.element').data('id'),
					parentId:    this.$draggee.parent('ul').parent('li').children('.row').children('.element').data('id')
				};

				Craft.postActionRequest('structures/move-element', data, function(response, textStatus)
				{
					if (textStatus == 'success')
					{
						Craft.cp.displayNotice(Craft.t('New order saved.'));
					}

				});
			}
		}

		// Animate things back into place
		this.$draggee.velocity('stop').removeClass('hidden').velocity({
			height: this.draggeeHeight
		}, 'fast', $.proxy(function() {
			this.$draggee.css('height', 'auto');
		}, this));

		this.returnHelpersToDraggees();

		this.base();
	},

	setLevel: function($li, level)
	{
		$li.data('level', level);

		var indent = this.structure.getIndent(level);

		var css = {};
		css['margin-'+Craft.left] = '-'+indent+'px';
		css['padding-'+Craft.left] = indent+'px';
		this.$draggee.children('.row').css(css);

		var $childLis = $li.children('ul').children();

		for (var i = 0; i < $childLis.length; i++)
		{
			this.setLevel($($childLis[i]), level+1);
		}
	}

});

Craft.StructureTableSorter = Garnish.DragSort.extend({

	// Properties
	// =========================================================================

	elementIndex: null,
	structureId: null,
	maxLevels: null,

	_helperMargin: null,

	_$firstRowCells: null,
	_$titleHelperCell: null,

	_titleHelperCellOuterWidth: null,

	_ancestors: null,
	_updateAncestorsFrame: null,
	_updateAncestorsProxy: null,

	_draggeeLevel: null,
	_draggeeLevelDelta: null,
	draggingLastElements: null,
	_loadingDraggeeLevelDelta: false,

	_targetLevel: null,
	_targetLevelBounds: null,

	_positionChanged: null,

	// Public methods
	// =========================================================================

	/**
	 * Constructor
	 */
	init: function(elementIndex, $elements, settings)
	{
		this.elementIndex = elementIndex;
		this.structureId = this.elementIndex.$table.data('structure-id');
		this.maxLevels = parseInt(this.elementIndex.$table.attr('data-max-levels'));

		settings = $.extend({}, Craft.StructureTableSorter.defaults, settings, {
			handle:           '.move',
			collapseDraggees: true,
			singleHelper:     true,
			helperSpacingY:   2,
			magnetStrength:   4,
			helper:           $.proxy(this, 'getHelper'),
			helperLagBase:    1.5,
			axis:             Garnish.Y_AXIS
		});

		this.base($elements, settings);
	},

	/**
	 * Start Dragging
	 */
	startDragging: function()
	{
		this._helperMargin = Craft.StructureTableSorter.HELPER_MARGIN + (this.elementIndex.actions ? 24 : 0);
		this.base();
	},

	/**
	 * Returns the draggee rows (including any descendent rows).
	 */
	findDraggee: function()
	{
		this._draggeeLevel = this._targetLevel = this.$targetItem.data('level');
		this._draggeeLevelDelta = 0;

		var $draggee = $(this.$targetItem),
			$nextRow = this.$targetItem.next();

		while ($nextRow.length)
		{
			// See if this row is a descendant of the draggee
			var nextRowLevel = $nextRow.data('level');

			if (nextRowLevel <= this._draggeeLevel)
			{
				break;
			}

			// Is this the deepest descendant we've seen so far?
			var nextRowLevelDelta = nextRowLevel - this._draggeeLevel;

			if (nextRowLevelDelta > this._draggeeLevelDelta)
			{
				this._draggeeLevelDelta = nextRowLevelDelta;
			}

			// Add it and prep the next row
			$draggee = $draggee.add($nextRow);
			$nextRow = $nextRow.next();
		}

		// Are we dragging the last elements on the page?
		this.draggingLastElements = !$nextRow.length;

		// Do we have a maxLevels to enforce,
		// and does it look like this draggee has descendants we don't know about yet?
		if (
			this.maxLevels &&
			this.draggingLastElements &&
			this.elementIndex.morePending
		)
		{
			// Only way to know the true descendant level delta is to ask PHP
			this._loadingDraggeeLevelDelta = true;

			var data = this._getAjaxBaseData(this.$targetItem);

			Craft.postActionRequest('structures/get-element-level-delta', data, $.proxy(function(response, textStatus)
			{
				if (textStatus == 'success')
				{
					this._loadingDraggeeLevelDelta = false;

					if (this.dragging)
					{
						this._draggeeLevelDelta = response.delta;
						this.drag(false);
					}
				}
			}, this));
		}

		return $draggee;
	},

	/**
	 * Returns the drag helper.
	 */
	getHelper: function($helperRow)
	{
		var $outerContainer = $('<div class="elements datatablesorthelper"/>').appendTo(Garnish.$bod),
			$innerContainer = $('<div class="tableview"/>').appendTo($outerContainer),
			$table = $('<table class="data"/>').appendTo($innerContainer),
			$tbody = $('<tbody/>').appendTo($table);

		$helperRow.appendTo($tbody);

		// Copy the column widths
		this._$firstRowCells = this.elementIndex.$elementContainer.children('tr:first').children();
		var $helperCells = $helperRow.children();

		for (var i = 0; i < $helperCells.length; i++)
		{
			var $helperCell = $($helperCells[i]);

			// Skip the checkbox cell
			if (Garnish.hasAttr($helperCell, 'data-checkboxcell'))
			{
				$helperCell.remove();
				continue;
			}

			// Hard-set the cell widths
			var $firstRowCell = $(this._$firstRowCells[i]),
				width = $firstRowCell.width();

			$firstRowCell.width(width);
			$helperCell.width(width);

			// Is this the title cell?
			if (Garnish.hasAttr($firstRowCell, 'data-titlecell'))
			{
				this._$titleHelperCell = $helperCell;

				var padding = parseInt($firstRowCell.css('padding-'+Craft.left));
				this._titleHelperCellOuterWidth = width + padding - (this.elementIndex.actions ? 12 : 0);

				$helperCell.css('padding-'+Craft.left, Craft.StructureTableSorter.BASE_PADDING);
			}
		}

		return $outerContainer;
	},

	/**
	 * Returns whether the draggee can be inserted before a given item.
	 */
	canInsertBefore: function($item)
	{
		if (this._loadingDraggeeLevelDelta)
		{
			return false;
		}

		return (this._getLevelBounds($item.prev(), $item) !== false);
	},

	/**
	 * Returns whether the draggee can be inserted after a given item.
	 */
	canInsertAfter: function($item)
	{
		if (this._loadingDraggeeLevelDelta)
		{
			return false;
		}

		return (this._getLevelBounds($item, $item.next()) !== false);
	},

	// Events
	// -------------------------------------------------------------------------

	/**
	 * On Drag Start
	 */
	onDragStart: function()
	{
		// Get the initial set of ancestors, before the item gets moved
		this._ancestors = this._getAncestors(this.$targetItem, this.$targetItem.data('level'));

		// Set the initial target level bounds
		this._setTargetLevelBounds();

		// Check to see if we should load more elements now
		this.elementIndex.maybeLoadMore();

		this.base();
	},

	/**
	 * On Drag
	 */
	onDrag: function()
	{
		this.base();
		this._updateIndent();
	},

	/**
	 * On Insertion Point Change
	 */
	onInsertionPointChange: function()
	{
		this._setTargetLevelBounds();
		this._updateAncestorsBeforeRepaint();
		this.base();
	},

	/**
	 * On Drag Stop
	 */
	onDragStop: function()
	{
		this._positionChanged = false;
		this.base();

		// Update the draggee's padding if the position just changed
		// ---------------------------------------------------------------------

		if (this._targetLevel != this._draggeeLevel)
		{
			var levelDiff = this._targetLevel - this._draggeeLevel;

			for (var i = 0; i < this.$draggee.length; i++)
			{
				var $draggee = $(this.$draggee[i]),
					oldLevel = $draggee.data('level'),
					newLevel = oldLevel + levelDiff,
					padding = Craft.StructureTableSorter.BASE_PADDING + (this.elementIndex.actions ? 14 : 0) + this._getLevelIndent(newLevel);

				$draggee.data('level', newLevel);
				$draggee.find('.element').data('level', newLevel);
				$draggee.children('[data-titlecell]:first').css('padding-'+Craft.left, padding);
			}

			this._positionChanged = true;
		}

		// Keep in mind this could have also been set by onSortChange()
		if (this._positionChanged)
		{
			// Tell the server about the new position
			// -----------------------------------------------------------------

			var data = this._getAjaxBaseData(this.$draggee);

			// Find the previous sibling/parent, if there is one
			var $prevRow = this.$draggee.first().prev();

			while ($prevRow.length)
			{
				var prevRowLevel = $prevRow.data('level');

				if (prevRowLevel == this._targetLevel)
				{
					data.prevId = $prevRow.data('id');
					break;
				}

				if (prevRowLevel < this._targetLevel)
				{
					data.parentId = $prevRow.data('id');

					// Is this row collapsed?
					var $toggle = $prevRow.find('> td > .toggle');

					if (!$toggle.hasClass('expanded'))
					{
						// Make it look expanded
						$toggle.addClass('expanded');

						// Add a temporary row
						var $spinnerRow = this.elementIndex._createSpinnerRowAfter($prevRow);

						// Remove the target item
						if (this.elementIndex.elementSelect)
						{
							this.elementIndex.elementSelect.removeItems(this.$targetItem);
						}

						this.removeItems(this.$targetItem);
						this.$targetItem.remove();
						this.elementIndex._totalVisible--;
					}

					break;
				}

				$prevRow = $prevRow.prev();
			}

			Craft.postActionRequest('structures/move-element', data, $.proxy(function(response, textStatus)
			{
				if (textStatus == 'success')
				{
					Craft.cp.displayNotice(Craft.t('New position saved.'));
					this.onPositionChange();

					// Were we waiting on this to complete so we can expand the new parent?
					if ($spinnerRow && $spinnerRow.parent().length)
					{
						$spinnerRow.remove();
						this.elementIndex._expandElement($toggle, true);
					}

					// See if we should run any pending tasks
					Craft.cp.runPendingTasks();
				}
			}, this));
		}
	},

	onSortChange: function()
	{
		if (this.elementIndex.elementSelect)
		{
			this.elementIndex.elementSelect.resetItemOrder();
		}

		this._positionChanged = true;
		this.base();
	},

	onPositionChange: function()
	{
		Garnish.requestAnimationFrame($.proxy(function()
		{
			this.trigger('positionChange');
			this.settings.onPositionChange();
		}, this));
	},

	onReturnHelpersToDraggees: function()
	{
		this._$firstRowCells.css('width', '');

		// If we were dragging the last elements on the page and ended up loading any additional elements in,
		// there could be a gap between the last draggee item and whatever now comes after it.
		// So remove the post-draggee elements and possibly load up the next batch.
		if (this.draggingLastElements && this.elementIndex.morePending)
		{
			// Update the element index's record of how many items are actually visible
			this.elementIndex._totalVisible += (this.newDraggeeIndexes[0] - this.oldDraggeeIndexes[0]);

			var $postDraggeeItems = this.$draggee.last().nextAll();

			if ($postDraggeeItems.length)
			{
				this.removeItems($postDraggeeItems);
				$postDraggeeItems.remove();
				this.elementIndex.maybeLoadMore();
			}
		}

		this.base();
	},

	// Private methods
	// =========================================================================

	/**
	 * Returns the min and max levels that the draggee could occupy between
	 * two given rows, or false if it’s not going to work out.
	 */
	_getLevelBounds: function($prevRow, $nextRow)
	{
		// Can't go any lower than the next row, if there is one
		if ($nextRow && $nextRow.length)
		{
			this._getLevelBounds._minLevel = $nextRow.data('level');
		}
		else
		{
			this._getLevelBounds._minLevel = 1;
		}

		// Can't go any higher than the previous row + 1
		if ($prevRow && $prevRow.length)
		{
			this._getLevelBounds._maxLevel = $prevRow.data('level') + 1;
		}
		else
		{
			this._getLevelBounds._maxLevel = 1;
		}

		// Does this structure have a max level?
		if (this.maxLevels)
		{
			// Make sure it's going to fit at all here
			if (
				this._getLevelBounds._minLevel != 1 &&
				this._getLevelBounds._minLevel + this._draggeeLevelDelta > this.maxLevels
			)
			{
				return false;
			}

			// Limit the max level if we have to
			if (this._getLevelBounds._maxLevel + this._draggeeLevelDelta > this.maxLevels)
			{
				this._getLevelBounds._maxLevel = this.maxLevels - this._draggeeLevelDelta;

				if (this._getLevelBounds._maxLevel < this._getLevelBounds._minLevel)
				{
					this._getLevelBounds._maxLevel = this._getLevelBounds._minLevel;
				}
			}
		}

		return {
			min: this._getLevelBounds._minLevel,
			max: this._getLevelBounds._maxLevel
		};
	},

	/**
	 * Determines the min and max possible levels at the current draggee's position.
	 */
	_setTargetLevelBounds: function()
	{
		this._targetLevelBounds = this._getLevelBounds(
			this.$draggee.first().prev(),
			this.$draggee.last().next()
		);
	},

	/**
	 * Determines the target level based on the current mouse position.
	 */
	_updateIndent: function(forcePositionChange)
	{
		// Figure out the target level
		// ---------------------------------------------------------------------

		// How far has the cursor moved?
		this._updateIndent._mouseDist = this.realMouseX - this.mousedownX;

		// Flip that if this is RTL
		if (Craft.orientation == 'rtl')
		{
			this._updateIndent._mouseDist *= -1;
		}

		// What is that in indentation levels?
		this._updateIndent._indentationDist = Math.round(this._updateIndent._mouseDist / Craft.StructureTableSorter.LEVEL_INDENT);

		// Combine with the original level to get the new target level
		this._updateIndent._targetLevel = this._draggeeLevel + this._updateIndent._indentationDist;

		// Contain it within our min/max levels
		if (this._updateIndent._targetLevel < this._targetLevelBounds.min)
		{
			this._updateIndent._indentationDist += (this._targetLevelBounds.min - this._updateIndent._targetLevel);
			this._updateIndent._targetLevel = this._targetLevelBounds.min;
		}
		else if (this._updateIndent._targetLevel > this._targetLevelBounds.max)
		{
			this._updateIndent._indentationDist -= (this._updateIndent._targetLevel - this._targetLevelBounds.max);
			this._updateIndent._targetLevel = this._targetLevelBounds.max;
		}

		// Has the target level changed?
		if (this._targetLevel !== (this._targetLevel = this._updateIndent._targetLevel))
		{
			// Target level is changing, so update the ancestors
			this._updateAncestorsBeforeRepaint();
		}

		// Update the UI
		// ---------------------------------------------------------------------

		// How far away is the cursor from the exact target level distance?
		this._updateIndent._targetLevelMouseDiff = this._updateIndent._mouseDist - (this._updateIndent._indentationDist * Craft.StructureTableSorter.LEVEL_INDENT);

		// What's the magnet impact of that?
		this._updateIndent._magnetImpact = Math.round(this._updateIndent._targetLevelMouseDiff / 15);

		// Put it on a leash
		if (Math.abs(this._updateIndent._magnetImpact) > Craft.StructureTableSorter.MAX_GIVE)
		{
			this._updateIndent._magnetImpact = (this._updateIndent._magnetImpact > 0 ? 1 : -1) * Craft.StructureTableSorter.MAX_GIVE;
		}

		// Apply the new margin/width
		this._updateIndent._closestLevelMagnetIndent = this._getLevelIndent(this._targetLevel) + this._updateIndent._magnetImpact;
		this.helpers[0].css('margin-'+Craft.left, this._updateIndent._closestLevelMagnetIndent + this._helperMargin);
		this._$titleHelperCell.width(this._titleHelperCellOuterWidth - (this._updateIndent._closestLevelMagnetIndent + Craft.StructureTableSorter.BASE_PADDING));
	},

	/**
	 * Returns the indent size for a given level
	 */
	_getLevelIndent: function(level)
	{
		return (level - 1) * Craft.StructureTableSorter.LEVEL_INDENT;
	},

	/**
	 * Returns the base data that should be sent with StructureController Ajax requests.
	 */
	_getAjaxBaseData: function($row)
	{
		return {
			structureId: this.structureId,
			elementId:   $row.data('id'),
			locale:      $row.find('.element:first').data('locale')
		};
	},

	/**
	 * Returns a row's ancestor rows
	 */
	_getAncestors: function($row, targetLevel)
	{
		this._getAncestors._ancestors = [];

		if (targetLevel != 0)
		{
			this._getAncestors._level = targetLevel;
			this._getAncestors._$prevRow = $row.prev();

			while (this._getAncestors._$prevRow.length)
			{
				if (this._getAncestors._$prevRow.data('level') < this._getAncestors._level)
				{
					this._getAncestors._ancestors.unshift(this._getAncestors._$prevRow);
					this._getAncestors._level = this._getAncestors._$prevRow.data('level');

					// Did we just reach the top?
					if (this._getAncestors._level == 0)
					{
						break;
					}
				}

				this._getAncestors._$prevRow = this._getAncestors._$prevRow.prev();
			}
		}

		return this._getAncestors._ancestors;
	},

	/**
	 * Prepares to have the ancestors updated before the screen is repainted.
	 */
	_updateAncestorsBeforeRepaint: function()
	{
		if (this._updateAncestorsFrame)
		{
			Garnish.cancelAnimationFrame(this._updateAncestorsFrame);
		}

		if (!this._updateAncestorsProxy)
		{
			this._updateAncestorsProxy = $.proxy(this, '_updateAncestors');
		}

		this._updateAncestorsFrame = Garnish.requestAnimationFrame(this._updateAncestorsProxy);
	},

	_updateAncestors: function()
	{
		this._updateAncestorsFrame = null;

		// Update the old ancestors
		// -----------------------------------------------------------------

		for (this._updateAncestors._i = 0; this._updateAncestors._i < this._ancestors.length; this._updateAncestors._i++)
		{
			this._updateAncestors._$ancestor = this._ancestors[this._updateAncestors._i];

			// One less descendant now
			this._updateAncestors._$ancestor.data('descendants', this._updateAncestors._$ancestor.data('descendants') - 1);

			// Is it now childless?
			if (this._updateAncestors._$ancestor.data('descendants') == 0)
			{
				// Remove its toggle
				this._updateAncestors._$ancestor.find('> td > .toggle:first').remove();
			}
		}

		// Update the new ancestors
		// -----------------------------------------------------------------

		this._updateAncestors._newAncestors = this._getAncestors(this.$targetItem, this._targetLevel);

		for (this._updateAncestors._i = 0; this._updateAncestors._i < this._updateAncestors._newAncestors.length; this._updateAncestors._i++)
		{
			this._updateAncestors._$ancestor = this._updateAncestors._newAncestors[this._updateAncestors._i];

			// One more descendant now
			this._updateAncestors._$ancestor.data('descendants', this._updateAncestors._$ancestor.data('descendants') + 1);

			// Is this its first child?
			if (this._updateAncestors._$ancestor.data('descendants') == 1)
			{
				// Create its toggle
				$('<span class="toggle expanded" title="'+Craft.t('Show/hide children')+'"></span>')
					.insertAfter(this._updateAncestors._$ancestor.find('> td .move:first'));

			}
		}

		this._ancestors = this._updateAncestors._newAncestors;

		delete this._updateAncestors._i;
		delete this._updateAncestors._$ancestor;
		delete this._updateAncestors._newAncestors;
	}
},

// Static Properties
// =============================================================================

{
	BASE_PADDING: 36,
	HELPER_MARGIN: -7,
	LEVEL_INDENT: 44,
	MAX_GIVE: 22,

	defaults: {
		onPositionChange: $.noop
	}
});

/**
 * Tag select input
 */
Craft.TagSelectInput = Craft.BaseElementSelectInput.extend(
{
	searchTimeout: null,
	searchMenu: null,

	$container: null,
	$elementsContainer: null,
	$elements: null,
	$addTagInput: null,
	$spinner: null,

	_ignoreBlur: false,

	init: function(settings)
	{
		// Normalize the settings
		// ---------------------------------------------------------------------

		// Are they still passing in a bunch of arguments?
		if (!$.isPlainObject(settings))
		{
			// Loop through all of the old arguments and apply them to the settings
			var normalizedSettings = {},
				args = ['id', 'name', 'tagGroupId', 'sourceElementId'];

			for (var i = 0; i < args.length; i++)
			{
				if (typeof arguments[i] != typeof undefined)
				{
					normalizedSettings[args[i]] = arguments[i];
				}
				else
				{
					break;
				}
			}

			settings = normalizedSettings;
		}

		this.base($.extend({}, Craft.TagSelectInput.defaults, settings));

		this.$addTagInput = this.$container.children('.add').children('.text');
		this.$spinner = this.$addTagInput.next();

		this.addListener(this.$addTagInput, 'textchange', $.proxy(function()
		{
			if (this.searchTimeout)
			{
				clearTimeout(this.searchTimeout);
			}

			this.searchTimeout = setTimeout($.proxy(this, 'searchForTags'), 500);
		}, this));

		this.addListener(this.$addTagInput, 'keypress', function(ev)
		{
			if (ev.keyCode == Garnish.RETURN_KEY)
			{
				ev.preventDefault();

				if (this.searchMenu)
				{
					this.selectTag(this.searchMenu.$options[0]);
				}
			}
		});

		this.addListener(this.$addTagInput, 'focus', function()
		{
			if (this.searchMenu)
			{
				this.searchMenu.show();
			}
		});

		this.addListener(this.$addTagInput, 'blur', function()
		{
			if (this._ignoreBlur)
			{
				this._ignoreBlur = false;
				return;
			}

			setTimeout($.proxy(function()
			{
				if (this.searchMenu)
				{
					this.searchMenu.hide();
				}
			}, this), 1);
		});
	},

	// No "add" button
	getAddElementsBtn: $.noop,

	searchForTags: function()
	{
		if (this.searchMenu)
		{
			this.killSearchMenu();
		}

		var val = this.$addTagInput.val();

		if (val)
		{
			this.$spinner.removeClass('hidden');

			var excludeIds = [];

			for (var i = 0; i < this.$elements.length; i++)
			{
				var id = $(this.$elements[i]).data('id');

				if (id)
				{
					excludeIds.push(id);
				}
			}

			if (this.settings.sourceElementId)
			{
				excludeIds.push(this.settings.sourceElementId);
			}

			var data = {
				search:     this.$addTagInput.val(),
				tagGroupId: this.settings.tagGroupId,
				excludeIds: excludeIds
			};

			Craft.postActionRequest('tags/search-for-tags', data, $.proxy(function(response, textStatus)
			{
				this.$spinner.addClass('hidden');

				if (textStatus == 'success')
				{
					var $menu = $('<div class="menu tagmenu"/>').appendTo(Garnish.$bod),
						$ul = $('<ul/>').appendTo($menu);

					for (var i = 0; i < response.tags.length; i++)
					{
						var $li = $('<li/>').appendTo($ul);
						$('<a data-icon="tag"/>').appendTo($li).text(response.tags[i].title).data('id', response.tags[i].id);
					}

					if (!response.exactMatch)
					{
						var $li = $('<li/>').appendTo($ul);
						$('<a data-icon="+"/>').appendTo($li).text(data.search);
					}

					$ul.find('> li:first-child > a').addClass('hover');

					this.searchMenu = new Garnish.Menu($menu, {
						attachToElement: this.$addTagInput,
						onOptionSelect: $.proxy(this, 'selectTag')
					});

					this.addListener($menu, 'mousedown', $.proxy(function()
					{
						this._ignoreBlur = true;
					}, this));

					this.searchMenu.show();
				}

			}, this));
		}
		else
		{
			this.$spinner.addClass('hidden');
		}
	},

	selectTag: function(option)
	{
		var $option = $(option),
			id = $option.data('id'),
			title = $option.text();

		var $element = $('<div class="element removable" data-id="'+id+'" data-editable/>').appendTo(this.$elementsContainer),
			$input = $('<input type="hidden" name="'+this.settings.name+'[]" value="'+id+'"/>').appendTo($element);

		$('<a class="delete icon" title="'+Craft.t('Remove')+'"></a>').appendTo($element);
		$('<span class="label">'+title+'</span>').appendTo($element);

		var margin = -($element.outerWidth()+10);
		this.$addTagInput.css('margin-'+Craft.left, margin+'px');

		var animateCss = {};
		animateCss['margin-'+Craft.left] = 0;
		this.$addTagInput.velocity(animateCss, 'fast');

		this.$elements = this.$elements.add($element);

		this.addElements($element);

		this.killSearchMenu();
		this.$addTagInput.val('');
		this.$addTagInput.focus();

		if (!id)
		{
			// We need to create the tag first
			$element.addClass('loading disabled');

			var data = {
				groupId: this.settings.tagGroupId,
				title: title
			};

			Craft.postActionRequest('tags/create-tag', data, $.proxy(function(response, textStatus)
			{
				if (textStatus == 'success' && response.success)
				{
					$element.attr('data-id', response.id);
					$input.val(response.id);

					$element.removeClass('loading disabled');
				}
				else
				{
					this.removeElement($element);

					if (textStatus == 'success')
					{
						// Some sort of validation error that still resulted in  a 200 response. Shouldn't be possible though.
						Craft.cp.displayError(Craft.t('An unknown error occurred.'));
					}
				}
			}, this));
		}
	},

	killSearchMenu: function()
	{
		this.searchMenu.hide();
		this.searchMenu.destroy();
		this.searchMenu = null;
	}
},
{
	defaults: {
		tagGroupId: null
	}
});

/**
 * Craft Upgrade Modal
 */
Craft.UpgradeModal = Garnish.Modal.extend(
{
	$container: null,
	$body: null,
	$compareScreen: null,
	$checkoutScreen: null,
	$successScreen: null,

	$checkoutForm: null,
	$checkoutLogo: null,
	$checkoutPrice: null,
	$checkoutSubmitBtn: null,
	$checkoutSpinner: null,
	$checkoutFormError: null,
	$checkoutSecure: null,
	clearCheckoutFormTimeout: null,
	$ccNameInput: null,
	$ccNumInput: null,
	$ccMonthInput: null,
	$ccYearInput: null,
	$ccCvcInput: null,
	submittingPurchase: false,

	editions: null,
	edition: null,

	init: function(settings)
	{
		this.$container = $('<div id="upgrademodal" class="modal loading"/>').appendTo(Garnish.$bod),

		this.base(this.$container, $.extend({
			resizable: true
		}, settings));

		Craft.postActionRequest('app/get-upgrade-modal', $.proxy(function(response, textStatus)
		{
			this.$container.removeClass('loading');

			if (textStatus == 'success')
			{
				if (response.success)
				{
					this.editions = response.editions;

					this.$container.append(response.modalHtml);

					this.$compareScreen     = this.$container.children('#upgrademodal-compare');
					this.$checkoutScreen    = this.$container.children('#upgrademodal-checkout');
					this.$successScreen     = this.$container.children('#upgrademodal-success');

					this.$checkoutLogo      = this.$checkoutScreen.find('.logo:first');
					this.$checkoutPrice     = this.$checkoutScreen.find('.price:first');
					this.$checkoutForm      = this.$checkoutScreen.find('form:first');
					this.$checkoutSubmitBtn = this.$checkoutForm.find('.submit:first');
					this.$checkoutSpinner   = this.$checkoutForm.find('.spinner:first');
					this.$ccNameInput       = this.$checkoutForm.find('#cc-name');
					this.$ccNumInput        = this.$checkoutForm.find('#cc-num');
					this.$ccMonthInput      = this.$checkoutForm.find('#cc-month');
					this.$ccYearInput       = this.$checkoutForm.find('#cc-year');
					this.$ccCvcInput        = this.$checkoutForm.find('#cc-cvc');
					this.$checkoutSecure    = this.$checkoutScreen.find('.secure:first');

					var $buyBtns = this.$compareScreen.find('.buybtn');
					this.addListener($buyBtns, 'click', 'onBuyBtnClick');

					var $testBtns = this.$compareScreen.find('.btn.test');
					this.addListener($testBtns, 'click', 'onTestBtnClick');

					this.addListener(this.$checkoutForm, 'submit', 'submitPurchase');

					var $cancelCheckoutBtn = this.$checkoutScreen.find('#upgrademodal-cancelcheckout');
					this.addListener($cancelCheckoutBtn, 'click', 'cancelCheckout');
				}
				else
				{
					var error;

					if (response.error)
					{
						error = response.error;
					}
					else
					{
						error = Craft.t('An unknown error occurred.');
					}

					this.$container.append('<div class="body">'+error+'</div>');
				}

				// Include Stripe.js
				$('<script type="text/javascript" src="https://js.stripe.com/v1/"></script>').appendTo(Garnish.$bod);
			}
		}, this));
	},

	onHide: function()
	{
		this.clearCheckoutFormInABit();
		this.base();
	},

	onBuyBtnClick: function(ev)
	{
		var $btn = $(ev.currentTarget);
		this.edition = $btn.data('edition');

		var editionInfo = this.editions[this.edition],
			width = this.getWidth();

		switch (this.edition)
		{
			case 1:
			{
				this.$checkoutLogo.attr('class', 'logo craftclient').text('Craft Client');
				break;
			}
			case 2:
			{
				this.$checkoutLogo.attr('class', 'logo craftpro').text('Craft Pro');
				break;
			}
		}

		if (editionInfo.salePrice)
		{
			this.$checkoutPrice.html('<span class="listedprice">'+editionInfo.formattedPrice+'</span> '+editionInfo.formattedSalePrice);
		}
		else
		{
			this.$checkoutPrice.html(editionInfo.formattedPrice);
		}

		if (this.clearCheckoutFormTimeout)
		{
			clearTimeout(this.clearCheckoutFormTimeout);
		}

		this.$compareScreen.velocity('stop').animateLeft(-width, 'fast', $.proxy(function()
		{
			this.$compareScreen.addClass('hidden');
		}, this));

		this.$checkoutScreen.velocity('stop').css(Craft.left, width).removeClass('hidden').animateLeft(0, 'fast');
	},

	onTestBtnClick: function(ev)
	{
		var data = {
			edition: $(ev.currentTarget).data('edition')
		};

		Craft.postActionRequest('app/test-upgrade', data, $.proxy(function(response, textStatus)
		{
			if (textStatus == 'success')
			{
				var width = this.getWidth();

				this.$compareScreen.velocity('stop').animateLeft(-width, 'fast', $.proxy(function()
				{
					this.$compareScreen.addClass('hidden');
				}, this));

				this.onUpgrade();
			}
		}, this));
	},

	cancelCheckout: function()
	{
		var width = this.getWidth();

		this.$compareScreen.velocity('stop').removeClass('hidden').animateLeft(0, 'fast');
		this.$checkoutScreen.velocity('stop').animateLeft(width, 'fast', $.proxy(function()
		{
			this.$checkoutScreen.addClass('hidden');
		}, this));

		this.clearCheckoutFormInABit();
	},

	submitPurchase: function(ev)
	{
		ev.preventDefault();

		if (this.submittingPurchase)
		{
			return;
		}

		this.cleanupCheckoutForm();

		var pkg = ev.data.pkg;

		// Get the CC data
		var ccData = {
			name:      this.$ccNameInput.val(),
		    number:    this.$ccNumInput.val(),
		    exp_month: this.$ccMonthInput.val(),
		    exp_year:  this.$ccYearInput.val(),
		    cvc:       this.$ccCvcInput.val()
		};

		// Validate it
		var validates = true;

		if (!ccData.name)
		{
			validates = false;
			this.$ccNameInput.addClass('error');
		}

		if (!Stripe.validateCardNumber(ccData.number))
		{
			validates = false;
			this.$ccNumInput.addClass('error');
		}

		if (!Stripe.validateExpiry(ccData.exp_month, ccData.exp_year))
		{
			validates = false;
			this.$ccMonthInput.addClass('error');
			this.$ccYearInput.addClass('error');
		}

		if (!Stripe.validateCVC(ccData.cvc))
		{
			validates = false;
			this.$ccCvcInput.addClass('error');
		}

		if (validates)
		{
			this.submittingPurchase = true;

			// Get a CC token from Stripe.js
			this.$checkoutSubmitBtn.addClass('active');
			this.$checkoutSpinner.removeClass('hidden');

			Stripe.setPublishableKey(Craft.UpgradeModal.stripeApiKey);
			Stripe.createToken(ccData, $.proxy(function(status, response)
			{
				if (!response.error)
				{
					// Pass the token along to Elliott to charge the card
					var data = {
						ccTokenId:     response.id,
						edition:       this.edition,
						expectedPrice: (this.editions[this.edition].salePrice ? this.editions[this.edition].salePrice : this.editions[this.edition].price)
					};

					Craft.postActionRequest('app/purchase-upgrade', data, $.proxy(this, 'onPurchaseUpgrade'));
				}
				else
				{
					this.onPurchaseResponse();
					this.showError(response.error.message);
					Garnish.shake(this.$checkoutForm, 'left');
				}
			}, this));
		}
		else
		{
			Garnish.shake(this.$checkoutForm, 'left');
		}
	},

	onPurchaseResponse: function()
	{
		this.submittingPurchase = false;
		this.$checkoutSubmitBtn.removeClass('active');
		this.$checkoutSpinner.addClass('hidden');
	},

	onPurchaseUpgrade: function(response, textStatus)
	{
		this.onPurchaseResponse();

		if (textStatus == 'success')
		{
			if (response.success)
			{
				var width = this.getWidth();

				this.$checkoutScreen.velocity('stop').animateLeft(-width, 'fast', $.proxy(function()
				{
					this.$checkoutScreen.addClass('hidden');
				}, this));

				this.onUpgrade();
			}
			else
			{
				if (response.errors)
				{
					var errorText = '';

					for (var i in response.errors)
					{
						if (errorText)
						{
							errorText += '<br>';
						}

						errorText += response.errors[i];
					}

					this.showError(errorText);
				}
				else
				{
					var errorText = Craft.t('An unknown error occurred.');
				}

				Garnish.shake(this.$checkoutForm, 'left');
			}
		}
	},

	showError: function(error)
	{
		this.$checkoutFormError = $('<p class="error centeralign">'+error+'</p>').insertBefore(this.$checkoutSecure);
	},

	onUpgrade: function()
	{
		this.$successScreen.css(Craft.left, this.getWidth()).removeClass('hidden').animateLeft(0, 'fast');

		var $refreshBtn = this.$successScreen.find('.btn:first');
		this.addListener($refreshBtn, 'click', function()
		{
			location.reload();
		});

		this.trigger('upgrade');
	},

	cleanupCheckoutForm: function()
	{
		this.$checkoutForm.find('.error').removeClass('error');

		if (this.$checkoutFormError)
		{
			this.$checkoutFormError.remove();
			this.$checkoutFormError = null;
		}
	},

	clearCheckoutForm: function()
	{
		this.$ccNameInput.val('');
	    this.$ccNumInput.val('');
	    this.$ccMonthInput.val('');
	    this.$ccYearInput.val('');
	    this.$ccCvcInput.val('');
	},

	clearCheckoutFormInABit: function()
	{
		// Clear the CC info after a period of inactivity
		this.clearCheckoutFormTimeout = setTimeout(
			$.proxy(this, 'clearCheckoutForm'),
			Craft.UpgradeModal.clearCheckoutFormTimeoutDuration
		);
	}
},
{
	stripeApiKey: 'pk_J2nJpozDxit0V6wYuT8xSvCKArONs',
	clearCheckoutFormTimeoutDuration: 30000 // 1000 x 60 x 5
});

/**
 * File Manager.
 */
Craft.Uploader = Garnish.Base.extend(
{
	uploader: null,
	allowedKinds: null,
	$element: null,
	settings: null,
	_rejectedFiles: {},
	_extensionList: null,
	_totalFileCounter: 0,
	_validFileCounter: 0,

	init: function($element, settings)
	{
		this._rejectedFiles = {"size": [], "type": [], "limit": []};
		this.$element = $element;
		this.allowedKinds = null;
		this._extensionList = null;
		this._totalFileCounter = 0;
		this._validFileCounter = 0;

		settings = $.extend({}, this.defaultSettings, settings);

		var events = settings.events;
		delete settings.events;

		if (settings.allowedKinds && settings.allowedKinds.length)
		{
			if (typeof settings.allowedKinds == "string")
			{
				settings.allowedKinds = [settings.allowedKinds];
			}

			this.allowedKinds = settings.allowedKinds;
			delete settings.allowedKinds;
		}

		settings.autoUpload = false;

		this.uploader = $element.fileupload(settings);
		for (var event in events)
		{
			this.uploader.on(event, events[event]);
		}

		this.settings = settings;

		this.uploader.on('fileuploadadd', $.proxy(this, 'onFileAdd'));
	},

	/**
	 * Set uploader parameters.
	 */
	setParams: function(paramObject)
	{
		// If CSRF protection isn't enabled, these won't be defined.
		if (typeof Craft.csrfTokenName !== 'undefined' && typeof Craft.csrfTokenValue !== 'undefined')
		{
			// Add the CSRF token
			paramObject[Craft.csrfTokenName] = Craft.csrfTokenValue;
		}

		this.uploader.fileupload('option', {formData: paramObject});
	},

	/**
	 * Get the number of uploads in progress.
	 */
	getInProgress: function()
	{
		return this.uploader.fileupload('active');
	},

	/**
	 * Return true, if this is the last upload.
	 */
	isLastUpload: function()
	{
		// Processing the last file or not processing at all.
		return this.getInProgress() < 2;
	},

	/**
	 * Called on file add.
	 */
	onFileAdd: function(e, data)
	{
		e.stopPropagation();

		var validateExtension = false;

		if (this.allowedKinds)
		{
			if (!this._extensionList)
			{
				this._extensionList = [];

				for (var i = 0; i < this.allowedKinds.length; i++)
				{
					var allowedKind = this.allowedKinds[i];

					for (var j = 0; j < Craft.fileKinds[allowedKind].length; j++)
					{
						var ext = Craft.fileKinds[allowedKind][j];
						this._extensionList.push(ext);
					}
				}
			}
			validateExtension = true;
		}

		// Make sure that file API is there before relying on it
		data.process().done($.proxy(function()
		{
			var file = data.files[0];
			var pass = true;
			if (validateExtension)
			{

				var matches = file.name.match(/\.([a-z0-4_]+)$/i);
				var fileExtension = matches[1];
				if ($.inArray(fileExtension.toLowerCase(), this._extensionList) == -1)
				{
					pass = false;
					this._rejectedFiles.type.push('“' + file.name + '”');
				}
			}

			if (file.size > this.settings.maxFileSize)
			{
				this._rejectedFiles.size.push('“' + file.name + '”');
				pass = false;
			}

			// If the validation has passed for this file up to now, check if we're not hitting any limits
			if (pass && typeof this.settings.canAddMoreFiles == "function" && !this.settings.canAddMoreFiles(this._validFileCounter))
			{
				this._rejectedFiles.limit.push('“' + file.name + '”');
				pass = false;
			}

			if (pass)
			{
				this._validFileCounter++;
				data.submit();
			}

			if (++this._totalFileCounter == data.originalFiles.length)
			{
				this._totalFileCounter = 0;
				this._validFileCounter = 0;
				this.processErrorMessages();
			}

		}, this));

		return true;
	},

	/**
	 * Process error messages.
	 */
	processErrorMessages: function()
	{
		if (this._rejectedFiles.type.length)
		{
			var str;

			if (this._rejectedFiles.type.length == 1)
			{
				str = "The file {files} could not be uploaded. The allowed file kinds are: {kinds}.";
			}
			else
			{
				str = "The files {files} could not be uploaded. The allowed file kinds are: {kinds}.";
			}

			str = Craft.t(str, {files: this._rejectedFiles.type.join(", "), kinds: this.allowedKinds.join(", ")});
			this._rejectedFiles.type = [];
			alert(str);
		}

		if (this._rejectedFiles.size.length)
		{
			var str;

			if (this._rejectedFiles.size.length == 1)
			{
				str = "The file {files} could not be uploaded, because it exceeds the maximum upload size of {size}.";
			}
			else
			{
				str = "The files {files} could not be uploaded, because they exceeded the maximum upload size of {size}.";
			}

			str = Craft.t(str, {files: this._rejectedFiles.size.join(", "), size: this.humanFileSize(Craft.maxUploadSize)});
			this._rejectedFiles.size = [];
			alert(str);
		}

		if (this._rejectedFiles.limit.length)
		{
			var str;

			if (this._rejectedFiles.limit.length == 1)
			{
				str = "The file {files} could not be uploaded, because the field limit has been reached.";
			}
			else
			{
				str = "The files {files} could not be uploaded, because the field limit has been reached.";
			}

			str = Craft.t(str, {files: this._rejectedFiles.limit.join(", ")});
			this._rejectedFiles.limit = [];
			alert(str);
		}
	},

	humanFileSize: function (bytes, si)
	{
		var threshold = 1024;

		if (bytes < threshold)
		{
			return bytes + ' B';
		}

		var units = ['kB','MB','GB','TB','PB','EB','ZB','YB'];

		var u = -1;

		do
		{
			bytes = bytes /threshold;
			++u;
		}
		while(bytes >= threshold);

		return bytes.toFixed(1)+' '+units[u];
	},

	defaultSettings: {
		dropZone: null,
		pasteZone: null,
		fileInput: null,
		sequentialUploads: true,
		maxFileSize: Craft.maxUploadSize,
		allowedKinds: null,
		events: {},
		canAddMoreFiles: null
	}
});

Craft.WrongEditionModal = Garnish.Modal.extend(
{
	upgradeModal: null,

	init: function($container)
	{
		this.base($container.removeClass('hidden'));

		this.$switchBtn = $('#wrongedition-switchbtn');
		this.$upgradeBtn = $('#wrongedition-upgradebtn');

		this.addListener(this.$switchBtn, 'click', 'switchToLicensedEdition');
		this.addListener(this.$upgradeBtn, 'click', 'showUpgradeModal');
	},

	show: function()
	{
		this.base();

		// Can't get out of this one
		this.removeAllListeners(this.$shade);
		Garnish.escManager.unregister(this);
	},

	switchToLicensedEdition: function()
	{
		this.$switchBtn.addClass('disabled');
		this.$upgradeBtn.addClass('disabled');

		this.removeAllListeners(this.$switchBtn);
		this.removeAllListeners(this.$upgradeBtn);

		Craft.postActionRequest('app/switch-to-licensed-edition', $.proxy(function(response, textStatus)
		{
			location.reload();
		}, this));
	},

	showUpgradeModal: function()
	{
		if (!this.upgradeModal)
		{
			this.upgradeModal = new Craft.UpgradeModal({
				closeOtherModals: false
			});

			this.upgradeModal.on('upgrade', $.proxy(function()
			{
				this.hide();
			}, this));
		}
		else
		{
			this.upgradeModal.show();
		}
	}
});

})(jQuery);
