Template.awards.helpers({
    awardlist: 
    function() { 
        //let awardData = Resume.findOne({firstName: "Swaranjali"});
        let awardData = Session.get('resumeData')
        if(awardData){

            return awardData && awardData.awards;

        }
    }

//        const a = [

       /**  name: "Google Analytics Certified Developer",
            year: 2005,
            place: "No idea"
        },
        {
            name: "Mobile Web Specialist - Google Certification",
            year: 2016,
            place: "wonderland"
        },
        {
            name: "Emerging Tech Competition",
            year: 2009,
            place: "University of Colorado Boulder"
        },
        {
            name: "Hackathon",
            year: 2009,
            place: "James Buchanan High School"
        }*/ 
           


    
    // do something else here
    // if(something )
    // then 
    //return a;

    //awardsData:function(name){
    //  return awardlist;
    //}
});