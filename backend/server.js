const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Ruta para enviar correos electrónicos
app.post('/send-email', (req, res) => {
  const { nombre, apellido, email, numeroTelefono, provincia, ciudad, direccion, asunto } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Variable de entorno para el correo electrónico
      pass: process.env.EMAIL_PASS  // Variable de entorno para la contraseña
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: EMAIL_USER, // Correo electrónico de destino
    subject: 'Nuevo formulario enviado',
    text: `
      Nombre: ${nombre} ${apellido}
      Correo Electrónico: ${email}
      Teléfono: ${numeroTelefono}
      Provincia: ${provincia}
      Ciudad: ${ciudad}
      Dirección: ${direccion}
      Asunto: ${asunto}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Correo enviado: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});