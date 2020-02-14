"use strict";

const chai = require("chai")
const foreach = require("../");

describe("Async test", function () {

    it("test standard array", function (done) {
        let values = ['a', 'b', 'c']
        let timeline = '';
        foreach(values, (value) => {
            setTimeout(() => {
                timeline += value.toUpperCase()
            }, 2000)
        }).then(() => {

        })
    });

});