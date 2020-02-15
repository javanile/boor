'use strict';

const chai = require('chai')
const { foreach } = require('../')

describe('Sync string testing', function () {

    it('Loop through string char index', function () {
        let timeline = ''
        let string = 'abc'
        foreach(string, (index) => {
            timeline += -index + ''
        }, (index) => {
            timeline += '_' + index
        }).then((index) => {
            timeline += '.' + index
        }).then((index) => {
            timeline += ',' + index
        })
        chai.assert.equal(timeline, '0-1-2_2.2,2')
    })

    it('Loop through string chars', function () {
        let timeline = ''
        let string = 'abc'
        foreach(string, (char) => {
            timeline += char.toUpperCase()
        }, (char) => {
            timeline += '_' + char
        }).then((char) => {
            timeline += '.' + char
        }).then((char) => {
            timeline += ',' + char
        })
        chai.assert.equal(timeline, 'ABC_c.c,c')
    })

    it('Loop through string index-char pairs', function () {
        let timeline = ''
        let string = 'abc'
        foreach(string, (index, char) => {
            timeline += -index + char.toUpperCase()
        }, (index, char) => {
            timeline += '_' + index + char
        }).then((index, char) => {
            timeline += '.' + index + char
        }).then((index, char) => {
            timeline += ',' + index + char
        })
        chai.assert.equal(timeline, '0A-1B-2C_2c.2c,2c')
    })

})
