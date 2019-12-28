'use strict';

const Mail = use('Mail')
const Helpers = use('Helpers')
const Env = use('Env')

class NewTaskMail {
  static get concurrency () {
    return 1
  }

  static get key () {
    return 'NewTaskMail-job';
  }

  async handle ({ email, username, title, file }) {
    console.log(`Job started: ${NewTaskMail.key}`)
    await Mail.send(
      ['emails.new_task'],
      { username, title, hasAttachment: !!file },
      message => {
        message
          .to(email)
          .from(Env.get('MAIL_FROM'), 'Igor | Adonis')
          .subject('New Task for you')
        if (file) {
          message.attach(Helpers.tmpPath(`uploads/${file.file}`), {
            filename: file.name
          })
        }
      }
    )
  }
}

module.exports = NewTaskMail
