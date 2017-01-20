/**
 * Created by kt on 2017/1/20.
 */
require.config({
	baseUrl: '',
	shim: {
		$: {
			exports: 'zepto'
		},
		_: {
			exports: '_'
		},
		B: {
			deps: [
				'_',
				'$'
			],
			exports: 'Backbone'
		}
	},
	paths: {
		'$': 'src/zepto',
		'_': 'src/underscore',
		'B': 'src/backbone'
	}
});
requirejs(['B'], function (b) {
});