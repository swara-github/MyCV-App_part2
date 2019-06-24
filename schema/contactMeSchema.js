
contactMeSchema = new SimpleSchema({


    name: {
        type: String,
        label: "Name*"
    },

    email: {
        type: SimpleSchema.RegEx.Email,
        label: "Email*"
    },

    message: {
        type: String,
        label: "Message*",
        max: 1000,
        autoform:{
            placeholder: "Leave me a message. (1000 chars)"

        }
    }

})
