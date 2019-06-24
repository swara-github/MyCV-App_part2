Template.education.helpers({

    educationData: function () {

        let educationData = Session.get('resumeData')
        if(educationData){

            return educationData && educationData.education;

        }
        /* else{

            return Resume.findOne({
                firstName: 'Swaranjali'
            }).education;
            
        } */
        
        // this is returning a hard coded value.
        // we now have all this data in the db
        // so we will now write a find query here
        // and return the result of that query.
        
        /* let educationData = Resume.findOne({firstName: "Swaranjali"});;
        // console.log('Porifle from resume collection: ', myProfileData)

        return educationData && educationData.education;

         */
        

        /*return (
            
            [

                {
                    clg: "University of Colorado Boulder",
                    degree: "Bachelor of Science",
                    course: "Computer Science - Web Development Track",
                    gpa: "3.23",
                    year: "ugust 2006 - May 2010"
                },

                {
                    clg: "James Buchanan High School",
                    degree: "",
                    course: "Technology Magnet Program",
                    gpa: " 3.56",
                    year: "August 2002 - May 2006"
                }

            ]
        )*/
    }

});