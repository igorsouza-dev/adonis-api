'use strict';

const Mail = use('Mail')
const Helpers = use('Helpers')
const Env = use('Env')
const TaskHook = (exports = module.exports = {})

TaskHook.sendNewTaskMail = async taskInstance => {
  if (!taskInstance.user_id && !taskInstance.dirty.user_id) return
  const { title } = taskInstance
  const { email, username } = await taskInstance.user().fetch()
  const file = await taskInstance.file().fetch()
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
};
