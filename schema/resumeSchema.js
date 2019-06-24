resumeSchema = new SimpleSchema({

    firstName: {
        type: String,
        label: "First Name",
        max: 10
        

    },

    lastName: {
        type: String,
        label: "Last Name",
        max:10
    },

    aboutMe: {
        type: String,
        label: "About Me",
        max:1000
        
    },

    email: {
        type:  SimpleSchema.RegEx.Email,
    },

    //profile pic
    imageDataSrc: {
        type:String,
        optional:true,
        autoform:{
            type:"hidden"
        }, 
        label: "Upload Profile Pic"

    },

    //resume
    resumeFileName:{
        type: String,
        optional:true,
        autoform:{
            type:"hidden"
        },
        label:"Upload Resume"

    },
    

    //experience
    experience: {
        type: Array,
        label:""
        
    },

    "experience.$": {
        type: Object,
        label: "Experience Details below -"
    },

    "experience.$.post": {
        type: String,
        label: "Post",
        max:30

    },

    "experience.$.company": {
        type: String,
        label:"Company",
        max:30
    },
    "experience.$.project": {
        type: String,
        label:"Project Name",
        max:30
    },
    "experience.$.role": {
        type: String,
        label:"Role",
        max:30
    },
    "experience.$.duration": {
        type:Object,
        label:"Duration"
    },
   "experience.$.duration.from": {
        type:Number,
        label:"From Year",
        min:1990,
        max:2019

    },
    "experience.$.duration.till": {
        type:Number,
        label: "Till Year",
        min:1990,
        max:2019
    },


    //education

    education: {
        type: Array,
        label:""

    },
    "education.$": {
        type: Object,
        label:"Education Details below -"
    },
    "education.$.clg": {
        label: "School/College/University",
        type: String,
        max:30
    },
    "education.$.degree": {
        type: String,
        label:"Degree",
        max:30
    },
    "education.$.gpa": {
        type: Number,
        label:"GPA",
        min:0,
        max: 10
    },
    "education.$.year": {
        type: Number,
        label:"Passing year",
        min: 1900,
        max: 2019
    },

    //skills

    skills: {

        type: Array,
        label:""
    },
    "skills.$":{
        type:Object,
        label:"Skills Details below -"
    },
    "skills.$.text":{
        type:String,
        label:"My Skill",
        max:100
    },
    interests:{
        type:Array,
        label:""
    },


    //interests


    "interests.$": {
        type: Object,
        label:"Interests Details below -"
    },
    "interests.$.text":{
        type:String,
        label:"My interests",
        max:100
    },

    //Awards
    awards: {
        type: Array,
        label:""
    },
    "awards.$": {
        type: Object,
        label:"Award Details below -"
    },
    "awards.$.name": {
        type: String,
        label:"Award Name",
        max:30
    },
    "awards.$.year": {
        type: Number,
        label:"Year you received",
        min:1990,
        max:2019
    },
    "awards.$.place": {
        type: String,
        label:"Place",
        max:30

    }

});