'use strict';
module.exports = function(app) {
    let ctrl = require('./serverController');

    app.route('/')
        .get(ctrl.showIndex);

    app.route('/enrollAdmin')
        .get(ctrl.enrollAdmin);

    app.route('/enrollUser/:userId')
        .get(ctrl.enrollUser);

    app.route('/query/:userId/:functionName/:parameters')
        .get(ctrl.queryMethod);

    app.route('/query/:userId/:functionName/')
        .get(ctrl.queryMethodNoParameters);

    app.route('/invoke/:userId/:functionName/:parameters')
        .get(ctrl.invoke);
};