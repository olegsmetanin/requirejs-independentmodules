require.config({

	paths: {
		'newmodule/leaflet': 'newmodule/vendor/leaflet-0.6.4/leaflet',
		'newmodule/leaflet.awesome': 'newmodule/vendor/leaflet.awesome-markers-2.0.1/dist/leaflet.awesome-markers.min',
		'text': 'common/vendor/requirejs.text/text'
	},

	shim: {
		'newmodule/leaflet.awesome': {
			deps: ['newmodule/leaflet']
		}
	},

	map: {
		'*': {
			'css': 'common/vendor/require-css-0.1.0/css'
		}
	}
});