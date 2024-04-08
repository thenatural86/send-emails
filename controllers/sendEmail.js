const nodemailer = require('nodemailer')

const sendEmail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount()

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'addison16@ethereal.email',
      pass: '2tkBXjX1dx2j393VxJ',
    },
  })

  const info = await transporter.sendMail({
    from: '"Test Person" <testperson@gmail.com>',
    to: 'bar@exmple.com',
    subject: 'Hello World',
    text: 'Hello World',
    html: '<h2>Sending Emails with Node.js',
  })

  res.json(info)
}

module.exports = sendEmail
