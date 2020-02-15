'use strict';

const chai = require('chai')
const { foreach } = require('../')

describe('Async string testing', function () {
    this.timeout(10000)

    it('Loop through string char index', function (done) {
        let timeline = ''
        let string = 'abc'
        foreach(string, (index, next) => {
            setTimeout(() => {
                timeline += (-index + '').toUpperCase()
                next(index)
            }, 2000)
        }, (index) => {
            timeline += '_' + index
        }).then((index) => {
            timeline += '.' + index
        }).then((index) => {
            timeline += ',' + index
            chai.assert.equal(timeline, '0-1-2_2.2,2')
            done()
        })
    })

    it('Loop through string chars', function (done) {
        let timeline = ''
        let string = 'abc'
        foreach(string, (char, next) => {
            setTimeout(() => {
                timeline += char.toUpperCase()
                next(char)
            }, 2000)
        }, (char) => {
            timeline += '_' + char
        }).then((char) => {
            timeline += '.' + char
        }).then((char) => {
            timeline += ',' + char
            chai.assert.equal(timeline, 'ABC_c.c,c')
            done()
        })
    })

    it('Loop through string index-char pairs', function (done) {
        let timeline = ''
        let string = 'abc'
        foreach(string, (index, char, next) => {
            setTimeout(() => {
                timeline += index + char.toUpperCase()
                next(index, char)
            }, 2000)
        }, (index, char) => {
            timeline += '_' + index + char
        }).then((index, char) => {
            timeline += '.' + index + char
        }).then((index, char) => {
            timeline += ',' + index + char
            chai.assert.equal(timeline, '0A1B2C_2c.2c,2c')
            done()
        })
    })

})
