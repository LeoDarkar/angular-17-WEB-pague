const nodemailer = require('nodemailer');

exports.sendEmail = (req, res) => {
  const { nombre, apellido, email, numeroTelefono, provincia, ciudad, direccion, asunto } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tu-email@gmail.com',
      pass: 'tu-contraseña'
    }
  });

  const mailOptions = {
    from: 'tu-email@gmail.com',
    to: 'leyundavid@gmail.com',
    subject: 'Nuevo formulario enviado',
    text: `
      Nombre: ${nombre} ${apellido}
      Correo Electrónico: ${email}
      Provincia: ${provincia}
      Ciudad: ${ciudad}
      Teléfono: ${numeroTelefono}
      Dirección: ${direccion}
      Asunto: ${asunto}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.send('Correo enviado: ' + info.response);
  });
};