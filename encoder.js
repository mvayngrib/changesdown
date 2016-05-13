module.exports = function encoder (name) {
  if (name.encode) return name.encode

  switch (name) {
    case 'binary':
    return function (val) {
      return new Buffer(val)
    }

    case 'utf-8':
    case 'utf8':
    return function (val) {
      return val
    }

    case 'json':
    return function (val) {
      return JSON.stringify(val)
    }
  }
}
