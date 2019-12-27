'use strict';

const Antl = use('Antl')

class Session {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      email: 'required|email',
      password: 'required'
    }
  }

  get messages () {
    return Antl.forLocale(this.ctx.locale).list('validation')
  }
}

module.exports = Session
