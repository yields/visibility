
# visibility

  Sane page visibility API

## Installation

    $ component install yields/visibility

## API

### visibility([fn])

```javascript
visibility(function (e, state) {
  if ('visible' == state) dostuff();
});
```

### visible(fn)

Execute the given `fn` when the page is visible.
```javascript
visibility()
  .visible(function (e) {});
```

### hidden(fn)

Execute the given `fn` when the page is hidden.
```javascript
visibility()
  .hidden(function (e) {});
```

### prerender(fn)

Execute the given `fn` on prerender.

```javascript
visibility()
  .prerender(function () {});
```

## todo

  * add tests.
  * test in all browsers, currently tested only in Chrome.


## License

  MIT
