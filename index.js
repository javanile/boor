/*!
 * Boor!!
 *
 * Copyright(c) 2016-2017 Javanile.org
 * MIT Licensed
 */

const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
const ARGUMENT_NAMES = /([^\s,]+)/g;
const KEY_NAMES = ['key', 'index', 'i', 'j', 'k']
const NEXT_NAMES = ['next', 'done', 'than']

/**
 *
 * @param func
 * @returns {RegExpMatchArray}
 */
function getFunctionArgumentNames(func) {
    let funcString = func.toString().replace(STRIP_COMMENTS, '')
    let argumentNames = funcString.slice(funcString.indexOf('(') + 1, funcString.indexOf(')')).match(ARGUMENT_NAMES)
    if (argumentNames === null) { result = [] }
    return argumentNames
}

/**
 *
 * @param iterable
 * @param modifier
 * @param statement
 */
function foreach(iterable, loopStatement, thenStatement) {
    let useAsync = false
    let loopArguments = getFunctionArgumentNames(loopStatement)
    let modifier = loopArguments.length < 2 && KEY_NAMES.indexOf(loopArguments[0]) === -1 ? 'value' : 'key'

    if (loopArguments.length === 2) {
        modifier = 'key,value'
        if (NEXT_NAMES.indexOf(loopArguments[1]) !== -1)  {
            useAsync = true
            modifier = KEY_NAMES.indexOf(loopArguments[0]) !== -1 ? 'key,next' : 'value,next'
        }
    } else {
        useAsync = true
        modifier = 'key,value,next'
    }

    if (useAsync) {
        let keys = []
        for (let key in iterable) {
            if (iterable.hasOwnProperty(key)) {
                keys.push(key)
            }
        }

        let index = 0
        function next() {
            if (++index < keys.length) {
                iterate()
            } else {
                thenPromise.resolve.apply(null, arguments);
            }
        }

        function iterate() {
            switch (modifier) {
                case 'key,next': loopStatement(keys[index], next); break;
                case 'value,next': loopStatement(iterable[keys[index]], next); break;
                case 'key,value,next': loopStatement(keys[index], iterable[keys[index]], next); break;
                default: loopStatement(keys[index], iterable[keys[index]], next); break;
            }
        }

        iterate()
    } else {
        for (let key in iterable) {
            if (iterable.hasOwnProperty(key)) {
                switch (modifier) {
                    case 'key': loopStatement(key); break;
                    case 'value': loopStatement(iterable[key]); break;
                    default: loopStatement(key, iterable[key]); break;
                }
            }
        }
    }

    let thenPromise = {
        statements: [],
        then: function (statement) {
            if (useAsync) {
                this.statements.push(statement)
            } else {
                statement.apply(null, arguments);
            }
            return this
        },
        resolve: function () {
            if (useAsync) {
                for (let i in this.statements) {
                    let statement = this.statements[i]
                    console.log("--", arguments)
                    statement.apply(null, arguments);
                }
            }
        }
    }

    if (typeof thenStatement === 'function') {
        thenPromise.then(thenStatement)
    }

    return thenPromise
}

//
module.exports = { foreach }
