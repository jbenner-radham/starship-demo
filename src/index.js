"use strict";

module.exports = function () {
	const pkg = require("./../package.json");
	
	return pkg.version;
};
