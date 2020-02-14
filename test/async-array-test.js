'use strict';

const chai = require('chai')
const { foreach } = require('../');

describe('Async testing', function () {
    this.timeout(10000)

    /*
    it('Loop through array keys', function (done) {
        let values = ['a', 'b', 'c']
        let timeline = '';
        foreach(values, (key, next) => {
            console.log(key, next)
            setTimeout(() => {
                timeline += (key + '').toUpperCase()
                next(key)
            }, 2000)
        }, (key) => {
            console.log(key)
            timeline += '_' + key
        }).then((key) => {
            timeline += '.' + key
        }).then((key) => {
            timeline += ',' + key
            chai.assert.equal(timeline, '012_2.2,2')
            done()
        })
    });*/

    it('Loop through key-value pairs', function (done) {
        let values = ['a', 'b', 'c']
        let timeline = '';
        foreach(values, (key, value, next) => {
            //console.log(key, value, next)
            setTimeout(() => {
                timeline += key + value.toUpperCase()
                next()
            }, 2000)
        }, () => {
            timeline += '_'
        }).then(() => {
            timeline += '.'
        }).then(() => {
            chai.assert.equal(timeline, '0A1B2C_.')
            done()
        })
    });

});
