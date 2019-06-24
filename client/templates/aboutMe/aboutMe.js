
Template.aboutMe.onRendered(function () {
    console.log('onRendered');
    

    Tracker.autorun(function() { 
         
        var aboutMe = Session.get('resumeData') && Session.get('resumeData').aboutMe; 
        
        if (aboutMe) {
    
            aboutMe = aboutMe.replace(/\n/g, '</p><p>') // global replace using regex
    
            aboutMe = '<p>' + aboutMe + '</p>'
            //console.log('aboutme from rendered: ', aboutMe)
            $('#aboutMeDiv').empty();
            $('#aboutMeDiv').append(aboutMe);
        }
    });
    
});

Template.aboutMe.helpers({ 


nameAndEmail: function(){
    
    if(Session.get('resumeData')){
        return {
            firstName: Session.get('resumeData').firstName,
            lastName: Session.get('resumeData').lastName,
            email: Session.get('resumeData').email
        }
    }
    
},

    CV: function () {

        let resumeData = Session.get('resumeData')
        if (resumeData) {
            return {

                href: '/resources/' + resumeData.resumeFileName,
                linkName: 'Download CV'
            }
        }


},

aboutMeData: function(){

    /* var aboutMe = Session.get('resumeData') && Session.get('resumeData').aboutMe;
  
    aboutMe = aboutMe.replace(/\n/g, '</p><p>') // global replace using regex

    aboutMe =  '<p>' + aboutMe + '</p>' 
   // console.log(aboutMe)
    $('#aboutMeDiv').empty();
    $('#aboutMeDiv').append(aboutMe); */
}
     
});


Template.aboutMe.events({ 
    'click #cv': function() { 
        //let resumeData = Session.get('resumeData')
       //  return resumeData.resumeDataSrc 
       //how to store this
    } 
});