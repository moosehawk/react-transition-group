"use strict";

exports.__esModule = true;
exports.withTransitionGroup = withTransitionGroup;
exports.Provider = exports.transitionGroupContextPropType = void 0;

var PropTypes = _interopRequireWildcard(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _mapContextToProps = _interopRequireDefault(require("react-context-toolbox/lib/mapContextToProps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _React$createContext = _react.default.createContext(null),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

exports.Provider = Provider;
var transitionGroupContextPropType = PropTypes.shape({
  isMounting: PropTypes.bool.isRequired
});
exports.transitionGroupContextPropType = transitionGroupContextPropType;

function withTransitionGroup(ComponentToWrap) {
  return (0, _mapContextToProps.default)(Consumer, function (value) {
    return {
      transitionGroup: value
    };
  }, ComponentToWrap);
}