//Template.experience.onRendered(function() {
// console.log("onredered experience   ")
//s});


Template.experience.helpers({

    experienceData:function(){


        let experienceData = Session.get('resumeData')
        if(experienceData){

            return experienceData && experienceData.experience;

        }


    //let exp = Resume.findOne({firstName: "Swaranjali"});
   /*  let experienceData = Resume.findOne({firstName: "Swaranjali"});
        // console.log('Porifle from resume collection: ', myProfileData)

    return experienceData && experienceData.experience; */

  // return exp && exp.experience;

    /**
     * experienceData: [{
            post: "Senior Web Developer",
            company: "Intelitec Solutions",
            role: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring",
            duration:"March 2013 - Present"
        },
        {
            post: "Web Developer",
            company: "Intelitec Solutions",
            role: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line",
            duration:"December 2011 - March 2013"
        },
        {
            post: "Junior Web Designer",
            company: "Shout! Media Productions",
            role: "Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration",
            duration:"July 2010 - December 2011"
        },
        {
            post: "Web Design Intern",
            company: "Shout! Media Productions",
            role: "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C newUser after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.",
            duration:"September 2008 - June 2010"
        }
      
    ]
     */
}
});
