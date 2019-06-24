

Template.editProfile.events({ 
    'click #edit': function(event, template) { 
    
      
      if(Session.get('resumeData').firstName=="Swaranjali")
      { 
          Modal.show('rejectBox') // do not allow original user's content to edit
      }

      else{
        Modal.show('newUser');
        Session.set('isEditResume', true)

     }
         // we are setting edit to true here    
        // tell autoform that this is edit and not insert
    
   }

});
