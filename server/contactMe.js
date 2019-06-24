Meteor.methods({
  contactMeMethod: function (doc) {
    console.log(doc)

       name= doc.name;
       email= doc.email;
       msg= doc.message;
      
    Meteor.call
    ('sendEmail', 
    ['2016mc19504@wilp.bits-pilani.ac.in',  //to
    email, //from
   // cc,
     "Query raised", //subject
      msg]); //msg

   Meteor.call('checkMethod');

  return true
},

  
  sendEmail: function (to, from, subject, text) {

    this.unblock();

         Email.send({
        to:'2016mc19504@wilp.bits-pilani.ac.in',
        from:email,
    //    cc:cc,
        subject:"Query raised by " + name,
        text:msg
      }
    
    );
  },

  checkMethod: function(){
    Email.send({
      to:email,
      from:'no-reply@smtp.mailgun.org',
  //    cc:cc,
      subject:"Thank you for contacting me",
      text:"Hello, \n Thank you for contacting me. \n I'll get back to you shortly \n \n Thanks,\n Swaranjali "
    }
  
  );
  }
  });

