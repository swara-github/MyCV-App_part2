Template.layout.onCreated(function() { 
     
    this.subscribe('resume', () => {

        if(Session.equals('resumeData', undefined)){
            var resumeDetails = Resume.findOne({firstName: "Swaranjali", lastName: "Panhalkar"}); 
            console.log('resume details is: ', resumeDetails);
            Session.set('resumeData', resumeDetails);

        }
     
     })
   

});