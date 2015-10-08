export default class BaseAdapter {

  constructor() {}

  connect() {}

  reconnect() {}

  close() {}

  login(username, password, replyHandler) {}

  send(address, message, replyHandler, failureHandler) {}

  publish(address, message) {  }

  registerHandler(address, handler) {  }

  unregisterHandler(address, handler) {}

  readyState() {}

  getOptions() {
    return {};
  }

  // empty: can be overriden by externals
  onopen() {}

  // empty: can be overriden by externals
  onclose() {}

}