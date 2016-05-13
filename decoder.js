module.exports = function decoder (name) {
  if (name.decode) return name.decode

  switch (name) {
    case 'binary':
    return function (val) {
      return val
    }

    case 'utf-8':
    case 'utf8':
    return function (val) {
      return val.toString()
    }

    case 'json':
    return function (val) {
      return JSON.parse(val.toString())
    }
  }
}
