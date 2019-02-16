(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    134: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        r = n.n(a),
        o = n(145),
        i = n(142),
        l = n(148),
        s = n(153),
        u = n(173),
        c = n.n(u);
      t.default = function() {
        return r.a.createElement(
          'div',
          null,
          r.a.createElement(
            o.a,
            { className: c.a.work, firstItem: !0 },
            r.a.createElement(l.a, null),
            r.a.createElement(
              i.a,
              null,
              r.a.createElement('h3', null, 'My work.'),
              r.a.createElement(
                'div',
                { className: 'work' },
                r.a.createElement('p', { className: '' }, 'COMMERCIAL'),
                r.a.createElement('br', null),
                r.a.createElement(
                  'div',
                  { className: 'project som' },
                  r.a.createElement(
                    'h2',
                    { className: 'underline' },
                    r.a.createElement(
                      'a',
                      {
                        href: 'https://info.firstagenda.com/state-of-meetings',
                      },
                      'State of Meetings'
                    )
                  ),
                  r.a.createElement(
                    'p',
                    null,
                    'Internship at FirstAgenda. Display of the meeting landscape in Denmark 2018 Version 1.0'
                  ),
                  r.a.createElement('p', null, ' ')
                ),
                r.a.createElement('hr', null),
                r.a.createElement(
                  'p',
                  { className: '' },
                  'PERSONAL PLAYGROUND'
                ),
                r.a.createElement('br', null),
                r.a.createElement(
                  'div',
                  { className: 'project movie' },
                  r.a.createElement(
                    'h2',
                    { className: 'underline' },
                    r.a.createElement(
                      'a',
                      { href: 'https://moviedb.frankrs.dk/' },
                      'Movie Database'
                    )
                  )
                ),
                r.a.createElement(
                  'div',
                  { className: 'project quote' },
                  r.a.createElement(
                    'h2',
                    { className: 'underline' },
                    r.a.createElement(
                      s.a,
                      { to: 'https://frankrs-quote.surge.sh' },
                      'Quote Generator'
                    )
                  ),
                  r.a.createElement(
                    'p',
                    null,
                    'Uses',
                    ' ',
                    r.a.createElement(
                      'a',
                      {
                        href: 'https://www.quotesondesign.com',
                        className: 'underline',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      },
                      'QuotesOnDesign'
                    ),
                    ' ',
                    'API to fetch content'
                  )
                ),
                r.a.createElement('br', null),
                r.a.createElement(
                  'div',
                  { className: 'project wiki' },
                  r.a.createElement(
                    'h2',
                    { className: 'underline' },
                    r.a.createElement(
                      s.a,
                      { to: 'https://frankrs-wiki.surge.sh' },
                      'Wikipedia Searcher'
                    )
                  )
                )
              )
            )
          )
        );
      };
    },
    138: function(e, t, n) {
      'use strict';
      var a = n(7);
      (t.__esModule = !0),
        (t.withPrefix = p),
        (t.navigateTo = t.replace = t.push = t.navigate = t.default = void 0);
      var r = a(n(141)),
        o = a(n(150)),
        i = a(n(6)),
        l = a(n(47)),
        s = a(n(48)),
        u = a(n(4)),
        c = a(n(0)),
        f = n(21),
        d = n(140);
      function p(e) {
        return (function(e) {
          return e.replace(/\/+/g, '/');
        })('/' + e);
      }
      var m = {
          activeClassName: u.default.string,
          activeStyle: u.default.object,
        },
        h = (function(e) {
          function t(t) {
            var n;
            (n = e.call(this, t) || this),
              (0, s.default)(
                (0, l.default)((0, l.default)(n)),
                'defaultGetProps',
                function(e) {
                  return e.isCurrent
                    ? {
                        className: [n.props.className, n.props.activeClassName]
                          .filter(Boolean)
                          .join(' '),
                        style: (0, o.default)(
                          {},
                          n.props.style,
                          n.props.activeStyle
                        ),
                      }
                    : null;
                }
              );
            var a = !1;
            return (
              'undefined' != typeof window &&
                window.IntersectionObserver &&
                (a = !0),
              (n.state = { IOSupported: a }),
              (n.handleRef = n.handleRef.bind(
                (0, l.default)((0, l.default)(n))
              )),
              n
            );
          }
          (0, i.default)(t, e);
          var n = t.prototype;
          return (
            (n.componentDidUpdate = function(e, t) {
              this.props.to === e.to ||
                this.state.IOSupported ||
                ___loader.enqueue((0, d.parsePath)(this.props.to).pathname);
            }),
            (n.componentDidMount = function() {
              this.state.IOSupported ||
                ___loader.enqueue((0, d.parsePath)(this.props.to).pathname);
            }),
            (n.handleRef = function(e) {
              var t,
                n,
                a,
                r = this;
              this.props.innerRef && this.props.innerRef(e),
                this.state.IOSupported &&
                  e &&
                  ((t = e),
                  (n = function() {
                    ___loader.enqueue((0, d.parsePath)(r.props.to).pathname);
                  }),
                  (a = new window.IntersectionObserver(function(e) {
                    e.forEach(function(e) {
                      t === e.target &&
                        (e.isIntersecting || e.intersectionRatio > 0) &&
                        (a.unobserve(t), a.disconnect(), n());
                    });
                  })).observe(t));
            }),
            (n.render = function() {
              var e = this,
                t = this.props,
                n = t.to,
                a = t.getProps,
                i = void 0 === a ? this.defaultGetProps : a,
                l = t.onClick,
                s = t.onMouseEnter,
                u = (t.activeClassName, t.activeStyle, t.innerRef, t.state),
                m = t.replace,
                h = (0, r.default)(t, [
                  'to',
                  'getProps',
                  'onClick',
                  'onMouseEnter',
                  'activeClassName',
                  'activeStyle',
                  'innerRef',
                  'state',
                  'replace',
                ]);
              var v = p(n);
              return c.default.createElement(
                f.Link,
                (0, o.default)(
                  {
                    to: v,
                    state: u,
                    getProps: i,
                    innerRef: this.handleRef,
                    onMouseEnter: function(e) {
                      s && s(e),
                        ___loader.hovering((0, d.parsePath)(n).pathname);
                    },
                    onClick: function(t) {
                      return (
                        l && l(t),
                        0 !== t.button ||
                          e.props.target ||
                          t.defaultPrevented ||
                          t.metaKey ||
                          t.altKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          (t.preventDefault(), g(n, { state: u, replace: m })),
                        !0
                      );
                    },
                  },
                  h
                )
              );
            }),
            t
          );
        })(c.default.Component);
      h.propTypes = (0, o.default)({}, m, {
        innerRef: u.default.func,
        onClick: u.default.func,
        to: u.default.string.isRequired,
        replace: u.default.bool,
      });
      var v = c.default.forwardRef(function(e, t) {
        return c.default.createElement(h, (0, o.default)({ innerRef: t }, e));
      });
      t.default = v;
      var g = function(e, t) {
        window.___navigate(p(e), t);
      };
      t.navigate = g;
      var w = function(e) {
        console.warn(
          'The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'
        ),
          window.___push(p(e));
      };
      t.push = w;
      t.replace = function(e) {
        console.warn(
          'The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'
        ),
          window.___replace(p(e));
      };
      t.navigateTo = function(e) {
        return (
          console.warn(
            'The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'
          ),
          w(e)
        );
      };
    },
    139: function(e, t, n) {
      var a;
      !(function() {
        'use strict';
        var n = {}.hasOwnProperty;
        function r() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var a = arguments[t];
            if (a) {
              var o = typeof a;
              if ('string' === o || 'number' === o) e.push(a);
              else if (Array.isArray(a) && a.length) {
                var i = r.apply(null, a);
                i && e.push(i);
              } else if ('object' === o)
                for (var l in a) n.call(a, l) && a[l] && e.push(l);
            }
          }
          return e.join(' ');
        }
        e.exports
          ? ((r.default = r), (e.exports = r))
          : void 0 ===
              (a = function() {
                return r;
              }.apply(t, [])) || (e.exports = a);
      })();
    },
    140: function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'graphql', function() {
          return m;
        }),
        n.d(t, 'StaticQueryContext', function() {
          return d;
        }),
        n.d(t, 'StaticQuery', function() {
          return p;
        });
      var a = n(0),
        r = n.n(a),
        o = n(4),
        i = n.n(o),
        l = n(138),
        s = n.n(l);
      n.d(t, 'Link', function() {
        return s.a;
      }),
        n.d(t, 'withPrefix', function() {
          return l.withPrefix;
        }),
        n.d(t, 'navigate', function() {
          return l.navigate;
        }),
        n.d(t, 'push', function() {
          return l.push;
        }),
        n.d(t, 'replace', function() {
          return l.replace;
        }),
        n.d(t, 'navigateTo', function() {
          return l.navigateTo;
        });
      var u = n(143),
        c = n.n(u);
      n.d(t, 'PageRenderer', function() {
        return c.a;
      });
      var f = n(29);
      n.d(t, 'parsePath', function() {
        return f.a;
      });
      var d = r.a.createContext({}),
        p = function(e) {
          return r.a.createElement(d.Consumer, null, function(t) {
            return e.data || (t[e.query] && t[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : t[e.query].data)
              : r.a.createElement('div', null, 'Loading (StaticQuery)');
          });
        };
      function m() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.'
        );
      }
      p.propTypes = {
        data: i.a.object,
        query: i.a.string.isRequired,
        render: i.a.func,
        children: i.a.func,
      };
    },
    141: function(e, t) {
      e.exports = function(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = {},
          o = Object.keys(e);
        for (a = 0; a < o.length; a++)
          (n = o[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r;
      };
    },
    142: function(e, t, n) {
      'use strict';
      var a = n(0),
        r = n.n(a),
        o = n(139),
        i = n.n(o),
        l = n(147),
        s = n.n(l);
      t.a = function(e) {
        var t = e.children,
          n = e.className;
        return r.a.createElement('div', { className: i()(s.a.wrapper, n) }, t);
      };
    },
    143: function(e, t, n) {
      var a;
      e.exports = ((a = n(151)) && a.default) || a;
    },
    144: function(e, t, n) {
      'use strict';
      n(149)('link', function(e) {
        return function(t) {
          return e(this, 'a', 'href', t);
        };
      });
    },
    145: function(e, t, n) {
      'use strict';
      var a = n(0),
        r = n.n(a),
        o = n(139),
        i = n.n(o),
        l = n(146),
        s = n.n(l);
      t.a = function(e) {
        var t = e.children,
          n = e.className,
          a = e.firstItem,
          o = i()(a ? s.a.first : s.a.fullscreen, n);
        return r.a.createElement('div', { className: o }, t);
      };
    },
    146: function(e, t, n) {
      e.exports = {
        fullscreen: 'fullscreen-module--fullscreen--1vZfK',
        first:
          'fullscreen-module--first--_yoFF fullscreen-module--fullscreen--1vZfK',
      };
    },
    147: function(e, t, n) {
      e.exports = { wrapper: 'wrapper-module--wrapper--21qA0' };
    },
    148: function(e, t, n) {
      'use strict';
      n(144);
      var a = n(0),
        r = n.n(a),
        o = n(140),
        i = n(152),
        l = n.n(i),
        s = n(142);
      t.a = function() {
        return r.a.createElement(
          'header',
          { className: l.a.header },
          r.a.createElement(
            s.a,
            null,
            r.a.createElement(
              'div',
              { className: l.a.inner },
              r.a.createElement(
                'h1',
                { className: l.a.title },
                r.a.createElement(
                  o.Link,
                  { className: l.a.link, to: '/' },
                  'Frank Richard Semakula'
                )
              ),
              r.a.createElement(
                'div',
                { className: l.a.menu },
                r.a.createElement(
                  o.Link,
                  { className: l.a.link, to: '/about' },
                  r.a.createElement('span', null, 'About')
                ),
                r.a.createElement(
                  o.Link,
                  { className: l.a.link, to: '/work' },
                  r.a.createElement('span', null, 'Work')
                )
              )
            )
          )
        );
      };
    },
    149: function(e, t, n) {
      var a = n(13),
        r = n(23),
        o = n(15),
        i = /"/g,
        l = function(e, t, n, a) {
          var r = String(o(e)),
            l = '<' + t;
          return (
            '' !== n &&
              (l += ' ' + n + '="' + String(a).replace(i, '&quot;') + '"'),
            l + '>' + r + '</' + t + '>'
          );
        };
      e.exports = function(e, t) {
        var n = {};
        (n[e] = t(l)),
          a(
            a.P +
              a.F *
                r(function() {
                  var t = ''[e]('"');
                  return t !== t.toLowerCase() || t.split('"').length > 3;
                }),
            'String',
            n
          );
      };
    },
    150: function(e, t) {
      function n() {
        return (
          (e.exports = n =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          n.apply(this, arguments)
        );
      }
      e.exports = n;
    },
    151: function(e, t, n) {
      'use strict';
      n.r(t);
      n(28);
      var a = n(0),
        r = n.n(a),
        o = n(4),
        i = n.n(o),
        l = n(49),
        s = n(2),
        u = function(e) {
          var t = e.location,
            n = s.default.getResourcesForPathnameSync(t.pathname);
          return r.a.createElement(
            l.a,
            Object.assign({ location: t, pageResources: n }, n.json)
          );
        };
      (u.propTypes = {
        location: i.a.shape({ pathname: i.a.string.isRequired }).isRequired,
      }),
        (t.default = u);
    },
    152: function(e, t, n) {
      e.exports = {
        header: 'header-module--header--L1ZnK',
        inner: 'header-module--inner--HGK1V',
        title: 'header-module--title--EMxyd',
        menu: 'header-module--menu--ZYk9A',
        link: 'header-module--link--1g7Q7',
      };
    },
    153: function(e, t, n) {
      'use strict';
      n(28);
      var a = n(0),
        r = n.n(a);
      t.a = function(e) {
        return r.a.createElement(
          'a',
          Object.assign({}, e, {
            href: e.to,
            target: '_blank',
            rel: 'noopener noreferrer',
          }),
          e.children
        );
      };
    },
    173: function(e, t, n) {
      e.exports = { work: 'work-module--work--1_7jf' };
    },
  },
]);
//# sourceMappingURL=component---src-pages-work-index-jsx-9e68aaf4ee80331585ee.js.map
