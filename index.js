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
    foreach: function (iterable, statament) {
        var type = statament.length;

        for (var key in iterable) {
            if (iterable.hasOwnProperty(key)) {
                if (type === 1) {
                    statament(iterable[key])
                } else {
                    statament(key, iterable[key])
                }
            }
        }
    }
}
