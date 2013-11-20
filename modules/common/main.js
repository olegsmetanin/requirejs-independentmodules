
require.config({
	paths: {
		'jquery': 'common/vendor/jquery-2.0.3/jquery-2.0.3.min',
		'bootstrap': 'common/vendor/bootstrap-3.0.2/js/bootstrap.min',
		'text': 'common/vendor/requirejs.text/text'
	},

	shim: {
		'jquery': [],
		'bootstrap': {
			deps: ['jquery']
		}
	},

	map: {
		'*': {
			'css': 'common/vendor/require-css-0.1.0/css'
		}
	}
});