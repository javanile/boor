'use strict';

const chai = require('chai')
const { foreach } = require('../');

describe('Sync testing', function () {

    it('Loop through array values', function () {
        let values = ['a', 'b', 'c']
        let timeline = '';
        foreach(values, (value) => {
            timeline += value.toUpperCase()
        })
        chai.assert.equal(timeline, 'ABC')
    });

    /*
    it('Loop through key-value pairs', function () {
        let values = ['a', 'b', 'c']
        let timeline = '';
        foreach(values, (key, value) => {
            timeline += key + value.toUpperCase()
        })
        chai.assert.equal(timeline, '0A1B2C')
    });
     */
});
