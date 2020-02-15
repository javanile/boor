'use strict';

const chai = require('chai')
const { foreach } = require('../');

describe('Async array testing', function () {
    this.timeout(10000)

    it('Loop through array keys', function (done) {
        let timeline = '';
        let values = ['a', 'b', 'c']
        foreach(values, (key, next) => {
            setTimeout(() => {
                timeline += (key + '').toUpperCase()
                next(key)
            }, 2000)
        }, (key) => {
            timeline += '_' + key
        }).then((key) => {
            timeline += '.' + key
        }).then((key) => {
            timeline += ',' + key
            chai.assert.equal(timeline, '012_2.2,2')
            done()
        })
    });

    it('Loop through array values', function (done) {
        let timeline = '';
        let values = ['a', 'b', 'c']
        foreach(values, (value, next) => {
            setTimeout(() => {
                timeline += (value + '').toUpperCase()
                next(value)
            }, 2000)
        }, (value) => {
            timeline += '_' + value
        }).then((value) => {
            timeline += '.' + value
        }).then((value) => {
            timeline += ',' + value
            chai.assert.equal(timeline, 'ABC_c.c,c')
            done()
        })
    });

    it('Loop through key-value pairs', function (done) {
        let timeline = '';
        let values = ['a', 'b', 'c']
        foreach(values, (key, value, next) => {
            setTimeout(() => {
                timeline += key + value.toUpperCase()
                next(key, value)
            }, 2000)
        }, (key, value) => {
            timeline += '_' + key + value
        }).then((key, value) => {
            timeline += '.' + key + value
        }).then((key, value) => {
            timeline += ',' + key + value
            chai.assert.equal(timeline, '0A1B2C_2c.2c,2c')
            done()
        })
    });

});
