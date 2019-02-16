(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    135: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        r = n.n(a),
        i = n(148),
        s = n(144),
        o = n(149),
        l = n(151),
        u = n(174),
        c = n.n(u);
      t.default = function() {
        return r.a.createElement(
          'div',
          null,
          r.a.createElement(
            i.a,
            { className: c.a.work, firstItem: !0 },
            r.a.createElement(o.a, null),
            r.a.createElement(
              s.a,
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
                      l.a,
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
                      l.a,
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
    139: function(e, t, n) {
      'use strict';
      var a = n(7);
      (t.__esModule = !0),
        (t.withPrefix = p),
        (t.navigateTo = t.replace = t.push = t.navigate = t.default = void 0);
      var r = a(n(143)),
        i = a(n(145)),
        s = a(n(6)),
        o = a(n(47)),
        l = a(n(48)),
        u = a(n(4)),
        c = a(n(0)),
        f = n(17),
        d = n(141);
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
              (0, l.default)(
                (0, o.default)((0, o.default)(n)),
                'defaultGetProps',
                function(e) {
                  return e.isCurrent
                    ? {
                        className: [n.props.className, n.props.activeClassName]
                          .filter(Boolean)
                          .join(' '),
                        style: (0, i.default)(
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
                (0, o.default)((0, o.default)(n))
              )),
              n
            );
          }
          (0, s.default)(t, e);
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
                s = void 0 === a ? this.defaultGetProps : a,
                o = t.onClick,
                l = t.onMouseEnter,
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
                (0, i.default)(
                  {
                    to: v,
                    state: u,
                    getProps: s,
                    innerRef: this.handleRef,
                    onMouseEnter: function(e) {
                      l && l(e),
                        ___loader.hovering((0, d.parsePath)(n).pathname);
                    },
                    onClick: function(t) {
                      return (
                        o && o(t),
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
      h.propTypes = (0, i.default)({}, m, {
        innerRef: u.default.func,
        onClick: u.default.func,
        to: u.default.string.isRequired,
        replace: u.default.bool,
      });
      var v = c.default.forwardRef(function(e, t) {
        return c.default.createElement(h, (0, i.default)({ innerRef: t }, e));
      });
      t.default = v;
      var g = function(e, t) {
        window.___navigate(p(e), t);
      };
      t.navigate = g;
      var y = function(e) {
        console.warn(
          'The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'
        ),
          window.___push(p(e));
      };
      t.push = y;
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
          y(e)
        );
      };
    },
    140: function(e, t, n) {
      var a;
      !(function() {
        'use strict';
        var n = {}.hasOwnProperty;
        function r() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var a = arguments[t];
            if (a) {
              var i = typeof a;
              if ('string' === i || 'number' === i) e.push(a);
              else if (Array.isArray(a) && a.length) {
                var s = r.apply(null, a);
                s && e.push(s);
              } else if ('object' === i)
                for (var o in a) n.call(a, o) && a[o] && e.push(o);
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
    141: function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'graphql', function() {
          return h;
        }),
        n.d(t, 'StaticQueryContext', function() {
          return d;
        }),
        n.d(t, 'StaticQuery', function() {
          return p;
        }),
        n.d(t, 'useStaticQuery', function() {
          return m;
        });
      var a = n(0),
        r = n.n(a),
        i = n(4),
        s = n.n(i),
        o = n(139),
        l = n.n(o);
      n.d(t, 'Link', function() {
        return l.a;
      }),
        n.d(t, 'withPrefix', function() {
          return o.withPrefix;
        }),
        n.d(t, 'navigate', function() {
          return o.navigate;
        }),
        n.d(t, 'push', function() {
          return o.push;
        }),
        n.d(t, 'replace', function() {
          return o.replace;
        }),
        n.d(t, 'navigateTo', function() {
          return o.navigateTo;
        });
      var u = n(142),
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
        },
        m = function(e) {
          r.a.useContext;
          var t = r.a.useContext(d);
          if (t[e] && t[e].data) return t[e].data;
          throw new Error(
            'The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues'
          );
        };
      function h() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.'
        );
      }
      p.propTypes = {
        data: s.a.object,
        query: s.a.string.isRequired,
        render: s.a.func,
        children: s.a.func,
      };
    },
    142: function(e, t, n) {
      var a;
      e.exports = ((a = n(146)) && a.default) || a;
    },
    143: function(e, t) {
      e.exports = function(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = {},
          i = Object.keys(e);
        for (a = 0; a < i.length; a++)
          (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r;
      };
    },
    144: function(e, t, n) {
      'use strict';
      var a = n(0),
        r = n.n(a),
        i = n(140),
        s = n.n(i),
        o = n(154),
        l = n.n(o);
      t.a = function(e) {
        var t = e.children,
          n = e.className;
        return r.a.createElement('div', { className: s()(l.a.wrapper, n) }, t);
      };
    },
    145: function(e, t) {
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
    146: function(e, t, n) {
      'use strict';
      n.r(t);
      n(28);
      var a = n(0),
        r = n.n(a),
        i = n(4),
        s = n.n(i),
        o = n(49),
        l = n(2),
        u = function(e) {
          var t = e.location,
            n = l.default.getResourcesForPathnameSync(t.pathname);
          return r.a.createElement(
            o.a,
            Object.assign({ location: t, pageResources: n }, n.json)
          );
        };
      (u.propTypes = {
        location: s.a.shape({ pathname: s.a.string.isRequired }).isRequired,
      }),
        (t.default = u);
    },
    147: function(e, t, n) {
      'use strict';
      n(150)('link', function(e) {
        return function(t) {
          return e(this, 'a', 'href', t);
        };
      });
    },
    148: function(e, t, n) {
      'use strict';
      var a = n(0),
        r = n.n(a),
        i = n(140),
        s = n.n(i),
        o = n(152),
        l = n.n(o);
      t.a = function(e) {
        var t = e.children,
          n = e.className,
          a = e.firstItem,
          i = s()(a ? l.a.first : l.a.fullscreen, n);
        return r.a.createElement('div', { className: i }, t);
      };
    },
    149: function(e, t, n) {
      'use strict';
      n(147);
      var a = n(0),
        r = n.n(a),
        i = n(141),
        s = n(155),
        o = n.n(s),
        l = n(144);
      t.a = function() {
        return r.a.createElement(
          'header',
          { className: o.a.header },
          r.a.createElement(
            l.a,
            null,
            r.a.createElement(
              'div',
              { className: o.a.inner },
              r.a.createElement(
                'h1',
                { className: o.a.title },
                r.a.createElement(
                  i.Link,
                  { className: o.a.link, to: '/' },
                  'Frank Richard Semakula'
                )
              ),
              r.a.createElement(
                'div',
                { className: o.a.menu },
                r.a.createElement(
                  i.Link,
                  { className: o.a.link, to: '/about' },
                  r.a.createElement('span', null, 'About')
                ),
                r.a.createElement(
                  i.Link,
                  { className: o.a.link, to: '/work' },
                  r.a.createElement('span', null, 'Work')
                )
              )
            )
          )
        );
      };
    },
    150: function(e, t, n) {
      var a = n(13),
        r = n(23),
        i = n(15),
        s = /"/g,
        o = function(e, t, n, a) {
          var r = String(i(e)),
            o = '<' + t;
          return (
            '' !== n &&
              (o += ' ' + n + '="' + String(a).replace(s, '&quot;') + '"'),
            o + '>' + r + '</' + t + '>'
          );
        };
      e.exports = function(e, t) {
        var n = {};
        (n[e] = t(o)),
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
    151: function(e, t, n) {
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
  },
]);
//# sourceMappingURL=component---src-pages-work-index-jsx-2ab48779ce6c34164881.js.map
