const mdxString = `function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* @jsx mdx */
var _frontmatter = {
  "order": 4,
  "title": "What else",
  "type": "now"
};

var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return mdx("div", props);
  };
};

var layoutProps = {
  _frontmatter: _frontmatter
};
var MDXLayout = "wrapper";
return function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return mdx(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), mdx("li", null, "The Hub coffee + Tetsu Kasuya edition Hario V60"), mdx("li", null, "Playing cornole with my wife and kids"), mdx("li", null, "Perfecting my margarita"), mdx("li", null, "Building a UI component library"));
}
;
MDXContent.isMDXComponent = true;`;

export default mdxString;
