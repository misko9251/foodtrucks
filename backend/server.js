const express = require('express');
const app = express()
const cors = require('cors')
const MongoStore = require('connect-mongo')
const passport = require('passport')
const session = require('express-session')
const connectDB = require('./config/db')
const nodemailer = require('nodemailer')
const truckRoutes = require('./routes/truckRoutes')
const authRoutes = require('./routes/authRoutes')
require('dotenv').config({path: './config/.env'})
require('./config/passport')(passport)

connectDB()

// Middleware
app.use(express.urlencoded({limit: '50mb', extended: true }));    // use express to parse the form data
app.use(express.json({limit: '50mb'}));    // use express to parse json data
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

// Store sessions as cookies
app.use(
    session({
        secret: 'keyboardcat', // set the secret key for the session
        resave: false,  // don't save session if unmodified
        saveUninitialized: false,   // don't create session until something stored
        store: MongoStore.create({mongoUrl:process.env.MONGO_STRING})
    }))

// Set passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Routes

app.use('/trucks', truckRoutes)
app.use('/auth', authRoutes)
app.get('/getUser', (req, res)=>{
    const authenticated = req.isAuthenticated()
    // res.status(200).json({authenticated: authenticated})
    res.send(authenticated)
})

// Contact
const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PW
  },
});

app.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: process.env.EMAIL,
      subject: "STFU Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });

contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

app.listen(process.env.PORT, (req, res)=>{
    console.log(`Server running on Port ${process.env.PORT}`)
})