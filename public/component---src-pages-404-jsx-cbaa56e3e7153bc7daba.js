(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    133: function(e, n, l) {
      'use strict';
      l.r(n);
      var t = l(0),
        r = l.n(t),
        a = l(145),
        u = l(154),
        c = l(156),
        o = l.n(c);
      n.default = function() {
        return r.a.createElement(
          'div',
          null,
          r.a.createElement(
            a.a,
            null,
            r.a.createElement(
              u.a,
              null,
              r.a.createElement(
                'div',
                { className: o.a.frawn },
                r.a.createElement('h3', null, '|wWw|'),
                r.a.createElement('h1', null, '4 oh 4'),
                r.a.createElement('h2', null, 'Whoops. ')
              ),
              r.a.createElement('br', null),
              r.a.createElement('br', null),
              r.a.createElement('br', null),
              r.a.createElement('br', null),
              r.a.createElement('br', null),
              r.a.createElement('br', null),
              r.a.createElement('h2', null, ' Looks like a dead end.'),
              r.a.createElement(
                'p',
                null,
                'Sadness.',
                ' ',
                r.a.createElement('br', null),
                ' ',
                'Coffee´s on me.'
              )
            )
          )
        );
      };
    },
    139: function(e, n, l) {
      var t;
      !(function() {
        'use strict';
        var l = {}.hasOwnProperty;
        function r() {
          for (var e = [], n = 0; n < arguments.length; n++) {
            var t = arguments[n];
            if (t) {
              var a = typeof t;
              if ('string' === a || 'number' === a) e.push(t);
              else if (Array.isArray(t) && t.length) {
                var u = r.apply(null, t);
                u && e.push(u);
              } else if ('object' === a)
                for (var c in t) l.call(t, c) && t[c] && e.push(c);
            }
          }
          return e.join(' ');
        }
        e.exports
          ? ((r.default = r), (e.exports = r))
          : void 0 ===
              (t = function() {
                return r;
              }.apply(n, [])) || (e.exports = t);
      })();
    },
    141: function(e, n) {
      e.exports = function(e, n) {
        if (null == e) return {};
        var l,
          t,
          r = {},
          a = Object.keys(e);
        for (t = 0; t < a.length; t++)
          (l = a[t]), n.indexOf(l) >= 0 || (r[l] = e[l]);
        return r;
      };
    },
    145: function(e, n, l) {
      'use strict';
      var t = l(0),
        r = l.n(t),
        a = l(139),
        u = l.n(a),
        c = l(146),
        o = l.n(c);
      n.a = function(e) {
        var n = e.children,
          l = e.className,
          t = e.firstItem,
          a = u()(t ? o.a.first : o.a.fullscreen, l);
        return r.a.createElement('div', { className: a }, n);
      };
    },
    146: function(e, n, l) {
      e.exports = {
        fullscreen: 'fullscreen-module--fullscreen--1vZfK',
        first:
          'fullscreen-module--first--_yoFF fullscreen-module--fullscreen--1vZfK',
      };
    },
    154: function(e, n, l) {
      'use strict';
      l(28);
      var t = l(141),
        r = l.n(t),
        a = l(0),
        u = l.n(a),
        c = l(139),
        o = l.n(c),
        s = l(155),
        i = l.n(s);
      n.a = function(e) {
        var n = e.children,
          l = e.className,
          t = r()(e, ['children', 'className']);
        return u.a.createElement(
          'section',
          Object.assign({}, t, { className: o()(i.a.contentPage, l) }),
          n
        );
      };
    },
    155: function(e, n, l) {
      e.exports = {
        contentPage: 'styles-module--contentPage--3brSw',
        content: 'styles-module--content--2gEBQ',
      };
    },
    156: function(e, n, l) {
      e.exports = {
        intro: 'index-module--intro--1wqAK',
        welcome: 'index-module--welcome--1fYTo',
        link: 'index-module--link--3a3Th',
        icon: 'index-module--icon--185dI',
        frawn: 'index-module--frawn--3rBYI',
        playground: 'index-module--playground--6Cpn9',
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-404-jsx-cbaa56e3e7153bc7daba.js.map
