class AlertBoxManager {
  _defaultRef = null;
  register(_ref) {
    if (!this._defaultRef && '_id' in _ref) {
      this._defaultRef = _ref;
    }
  }
  unregister(_ref) {
    if (!!this._defaultRef && this._defaultRef._id === _ref._id) {
      this._defaultRef = null;
    }
  }
  getDefault() {
    return this._defaultRef;
  }
}

export default new AlertBoxManager();
