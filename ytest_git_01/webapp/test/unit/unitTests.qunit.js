/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"ytest_git_01/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});