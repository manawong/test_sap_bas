/*global QUnit*/

sap.ui.define([
	"ytest_git_01/controller/MyView1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MyView1 Controller");

	QUnit.test("I should test the MyView1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
