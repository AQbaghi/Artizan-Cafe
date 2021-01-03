const path= require('path');
const express= require('express');
const sgMail = require('@sendgrid/mail')
// paths to express config directories


//setting app to express method for use
const app= express();
const port= process.env.PORT || 3000


  app.use(express.static(path.join(__dirname, 'client')));
 
  app.get(`/book/:name/:email/:datetime/:numberofpersons`, (req, res)=>{
       console.log(req.params)

      sgMail.setApiKey('API')
      const msg = {
        to: req.params.email, // Change to your recipient
        from: 'aqbaghi@atomiccode.uk', // Change to your verified sender
        subject: 'Reservations at Artizan Cafe',
        text: `Dear ${req.params.name}, Sorry to inform you but your reservations for ${req.params.numberofpersons} at ${req.params.datetime} in Artizan Cafe is temporarily closed due to new COVID_19 regulations. however you can stop by and get some takeaway coffee if you'd like :)`,
      }
      sgMail
        .send(msg)
        .then(() => {
          console.log('Email sent')
        })
        .catch((error) => {
          console.error(error)
  })

       res.send({good: 'good'})
  })
  

//listening to the server
app.listen(port, ()=>{
    console.log('web server up and running...');
});

// 

