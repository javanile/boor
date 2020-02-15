'use strict';

const chai = require('chai')
const { foreach } = require('../');

describe('Sync object testing', function () {

    it('Loop through object attribute names', function () {
        let timeline = ''
        let values = { a: 0, b: 1, c: 2 }
        foreach(values, (key) => {
            timeline += key.toUpperCase()
        }, (key) => {
            timeline += '_' + key
        }).then((key) => {
            timeline += '.' + key
        }).then((key) => {
            timeline += ',' + key
        })
        chai.assert.equal(timeline, 'ABC_c.c,c')
    })

    it('Loop through array values', function () {
        let timeline = '';
        let values = { a: 0, b: 1, c: 2 }
        foreach(values, (value) => {
            timeline += -value + ''
        }, (value) => {
            timeline += '_' + value
        }).then((value) => {
            timeline += '.' + value
        }).then((value) => {
            timeline += ',' + value
        })
        chai.assert.equal(timeline, '0-1-2_2.2,2')
    });

    it('Loop through key-value pairs', function () {
        let timeline = '';
        let values = { a: 0, b: 1, c: 2 }
        foreach(values, (key, value) => {
            timeline += key.toUpperCase() + value
        }, (key, value) => {
            timeline += '_' + key + value
        }).then((key, value) => {
            timeline += '.' + key + value
        }).then((key, value) => {
            timeline += ',' + key + value
        })
        chai.assert.equal(timeline, 'A0B1C2_c2.c2,c2')
    })

})
