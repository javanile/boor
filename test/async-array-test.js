'use strict';

const chai = require('chai')
const { foreach } = require('../');

describe('Async testing', function () {
    this.timeout(10000)

    it('test standard array', function (done) {
        let values = ['a', 'b', 'c']
        let timeline = '';
        foreach(values, (key, value, next) => {
            console.log(key, value, next)
            setTimeout(() => {
                timeline += value.toUpperCase()
                next()
            }, 2000)
        }).then(() => {
            chai.assert.equal(timeline, 'ABC')
            done()
        })
    });

});
