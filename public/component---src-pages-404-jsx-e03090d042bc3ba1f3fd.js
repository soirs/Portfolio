(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    133: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        r = n.n(a),
        o = n(140),
        i = n(147),
        l = n(154),
        u = n(156),
        s = n.n(u);
      t.default = function() {
        return r.a.createElement(
          'div',
          null,
          r.a.createElement(
            'h2',
            { className: 'underline' },
            r.a.createElement(o.Link, { to: '/' }, 'Back to my Portfolio')
          ),
          r.a.createElement(
            i.a,
            null,
            r.a.createElement(
              l.a,
              null,
              r.a.createElement(
                'div',
                { className: s.a.frawn },
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
    138: function(e, t, n) {
      'use strict';
      var a = n(7);
      (t.__esModule = !0),
        (t.withPrefix = p),
        (t.navigateTo = t.replace = t.push = t.navigate = t.default = void 0);
      var r = a(n(142)),
        o = a(n(144)),
        i = a(n(6)),
        l = a(n(47)),
        u = a(n(48)),
        s = a(n(4)),
        c = a(n(0)),
        d = n(17),
        f = n(140);
      function p(e) {
        return (function(e) {
          return e.replace(/\/+/g, '/');
        })('/' + e);
      }
      var h = {
          activeClassName: s.default.string,
          activeStyle: s.default.object,
        },
        m = (function(e) {
          function t(t) {
            var n;
            (n = e.call(this, t) || this),
              (0, u.default)(
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
                ___loader.enqueue((0, f.parsePath)(this.props.to).pathname);
            }),
            (n.componentDidMount = function() {
              this.state.IOSupported ||
                ___loader.enqueue((0, f.parsePath)(this.props.to).pathname);
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
                    ___loader.enqueue((0, f.parsePath)(r.props.to).pathname);
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
                u = t.onMouseEnter,
                s = (t.activeClassName, t.activeStyle, t.innerRef, t.state),
                h = t.replace,
                m = (0, r.default)(t, [
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
                d.Link,
                (0, o.default)(
                  {
                    to: v,
                    state: s,
                    getProps: i,
                    innerRef: this.handleRef,
                    onMouseEnter: function(e) {
                      u && u(e),
                        ___loader.hovering((0, f.parsePath)(n).pathname);
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
                          (t.preventDefault(), y(n, { state: s, replace: h })),
                        !0
                      );
                    },
                  },
                  m
                )
              );
            }),
            t
          );
        })(c.default.Component);
      m.propTypes = (0, o.default)({}, h, {
        innerRef: s.default.func,
        onClick: s.default.func,
        to: s.default.string.isRequired,
        replace: s.default.bool,
      });
      var v = c.default.forwardRef(function(e, t) {
        return c.default.createElement(m, (0, o.default)({ innerRef: t }, e));
      });
      t.default = v;
      var y = function(e, t) {
        window.___navigate(p(e), t);
      };
      t.navigate = y;
      var g = function(e) {
        console.warn(
          'The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'
        ),
          window.___push(p(e));
      };
      t.push = g;
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
          g(e)
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
          return h;
        }),
        n.d(t, 'StaticQueryContext', function() {
          return f;
        }),
        n.d(t, 'StaticQuery', function() {
          return p;
        });
      var a = n(0),
        r = n.n(a),
        o = n(4),
        i = n.n(o),
        l = n(138),
        u = n.n(l);
      n.d(t, 'Link', function() {
        return u.a;
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
      var s = n(141),
        c = n.n(s);
      n.d(t, 'PageRenderer', function() {
        return c.a;
      });
      var d = n(29);
      n.d(t, 'parsePath', function() {
        return d.a;
      });
      var f = r.a.createContext({}),
        p = function(e) {
          return r.a.createElement(f.Consumer, null, function(t) {
            return e.data || (t[e.query] && t[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : t[e.query].data)
              : r.a.createElement('div', null, 'Loading (StaticQuery)');
          });
        };
      function h() {
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
    141: function(e, t, n) {
      var a;
      e.exports = ((a = n(145)) && a.default) || a;
    },
    142: function(e, t) {
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
    144: function(e, t) {
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
    145: function(e, t, n) {
      'use strict';
      n.r(t);
      n(28);
      var a = n(0),
        r = n.n(a),
        o = n(4),
        i = n.n(o),
        l = n(49),
        u = n(2),
        s = function(e) {
          var t = e.location,
            n = u.default.getResourcesForPathnameSync(t.pathname);
          return r.a.createElement(
            l.a,
            Object.assign({ location: t, pageResources: n }, n.json)
          );
        };
      (s.propTypes = {
        location: i.a.shape({ pathname: i.a.string.isRequired }).isRequired,
      }),
        (t.default = s);
    },
    147: function(e, t, n) {
      'use strict';
      var a = n(0),
        r = n.n(a),
        o = n(139),
        i = n.n(o),
        l = n(148),
        u = n.n(l);
      t.a = function(e) {
        var t = e.children,
          n = e.className,
          a = e.firstItem,
          o = i()(a ? u.a.first : u.a.fullscreen, n);
        return r.a.createElement('div', { className: o }, t);
      };
    },
    148: function(e, t, n) {
      e.exports = {
        fullscreen: 'fullscreen-module--fullscreen--1vZfK',
        first:
          'fullscreen-module--first--_yoFF fullscreen-module--fullscreen--1vZfK',
      };
    },
    154: function(e, t, n) {
      'use strict';
      n(28);
      var a = n(142),
        r = n.n(a),
        o = n(0),
        i = n.n(o),
        l = n(139),
        u = n.n(l),
        s = n(155),
        c = n.n(s);
      t.a = function(e) {
        var t = e.children,
          n = e.className,
          a = r()(e, ['children', 'className']);
        return i.a.createElement(
          'section',
          Object.assign({}, a, { className: u()(c.a.contentPage, n) }),
          t
        );
      };
    },
    155: function(e, t, n) {
      e.exports = {
        contentPage: 'styles-module--contentPage--3brSw',
        content: 'styles-module--content--2gEBQ',
      };
    },
    156: function(e, t, n) {
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
//# sourceMappingURL=component---src-pages-404-jsx-e03090d042bc3ba1f3fd.js.map
