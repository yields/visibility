
/**
 * document.
 */

var doc = document;

/**
 * Execute the provided `fn`
 * when the page visibility changes.
 *
 * if a function is not provided an
 * api will be returned of 3 methods
 * that each accept a callback that will
 * be invoked.
 *
 * example:
 *
 *          // option a
 *          visiblity(function (e, state) {
 *            if ('prerender' == state) dostuff();
 *          });
 *
 *          // option b
 *          visiblity()
 *            .prerender(function (e) {})
 *            .visible(function (e) {})
 *            .hidden(function (e) {});
 *
 * @param {Function} fn optional
 * @return {Object} api
 */

exports = module.exports = function (fn) {
  var vendors = ['ms', 'moz', 'webkit']
    , event = 'visibilitychange'
    , state = 'VisibilityState'
    , len = vendors.length
    , curr;

  // not supported.
  if (!doc.addEventListener) return exports;

  // capture prefix.
  while (curr = vendors[--len]) {
    if (doc[curr + state]) {
      event = curr + event;
      state = curr + state;
      break;
    }
  }

  // attach handle.
  doc.addEventListener(event, function (e) {
    var cb = fn;

    // delegate
    if (cb) return cb(e, doc[state]);

    // fn
    switch (doc[state]) {
      case 'prerender':
        cb = exports._prerender;
        break;
      case 'visible':
        cb = exports._visible;
        break;
      case 'hidden':
        cb = exports._hidden;
        break;
    }

    console.log(cb);
    cb && cb(e);
  }, false);

  // api
  return exports;
};

/**
 * Set prerender callback.
 *
 * example:
 *
 *      visibility()
 *         .prerender(function (e) {});
 *
 * @param {Function} fn
 * @return {visibility}
 */

exports.prerender = function (fn) {
  exports._prerender = fn;
  return exports;
};

/**
 * Set visible callback.
 *
 * example:
 *
 *      visibility()
 *        .visible(function (e) {});
 *
 * @param {Function} fn
 * @return {visibility}
 */

exports.visible = function (fn) {
  exports._visible = fn;
  return exports;
};

/**
 * Set hidden callback.
 *
 * example:
 *
 *      visibility()
 *        .hidden(function (e) {});
 *
 * @param {Function} fn
 * @return {visibility}
 */

exports.hidden = function (fn) {
  exports._hidden = fn;
  return exports;
};
