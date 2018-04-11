/*!
 * Boor
 *
 * Copyright(c) 2016-2017 Javanile.org
 * MIT Licensed
 */

module.exports = {

    /**
     *
     */
    foreach: function (iterable, modifier, statement) {
        if (typeof statement === 'undefined') {
            statement = modifier
            modifier = statement.length > 1 ? 'pairs' : 'values'
        }
        for (var key in iterable) {
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
    }
}
