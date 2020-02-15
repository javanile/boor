'use strict';

const chai = require('chai')
const { foreach } = require('../');

describe('Sync array testing', function () {

    it('Loop through array keys', function () {
        let timeline = ''
        let values = ['a', 'b', 'c']
        foreach(values, (key) => {
            timeline += (-key + '').toUpperCase()
        }, (key) => {
            timeline += '_' + key
        }).then((key) => {
            timeline += '.' + key
        }).then((key) => {
            timeline += ',' + key
        })
        chai.assert.equal(timeline, '0-1-2_2.2,2')
    })

    it('Loop through array values', function () {
        let timeline = '';
        let values = ['a', 'b', 'c']
        foreach(values, (value) => {
            timeline += (value + '').toUpperCase()
        }, (value) => {
            timeline += '_' + value
        }).then((value) => {
            timeline += '.' + value
        }).then((value) => {
            timeline += ',' + value
        })
        chai.assert.equal(timeline, 'ABC_c.c,c')
    });

    it('Loop through key-value pairs', function () {
        let timeline = '';
        let values = ['a', 'b', 'c']
        foreach(values, (key, value) => {
            timeline += key + value.toUpperCase()
        }, (key, value) => {
            timeline += '_' + key + value
        }).then((key, value) => {
            timeline += '.' + key + value
        }).then((key, value) => {
            timeline += ',' + key + value
        })
        chai.assert.equal(timeline, '0A1B2C_2c.2c,2c')
    });

});
