/*!
 * Boor!!
 *
 * Copyright(c) 2016-2017 Javanile.org
 * MIT Licensed
 */

/**
 *
 * @param iterable
 * @param modifier
 * @param statement
 */
function foreach(iterable, loopStatement, thenStatement) {

    let promise = {
        then: function(statement) {

        }
    }

    if (typeof thenStatement === 'function') {
        promise.then(thenStatement)
    }

    if (typeof loopStatement === 'undefined') {
        statement = modifier
        modifier = statement.length > 1 ? 'pairs' : 'values'
    }

    for (let key in iterable) {
        if (iterable.hasOwnProperty(key)) {
            if (modifier === 'keys') {
                statement(key)
            } else if (modifier === 'values') {
                statement(iterable[key])
            } else {
                statement(key, iterable[key])
            }
        }
    }

    return promise
}

//
module.exports = { foreach }
