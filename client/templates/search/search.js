//---------------Helpers -----------------------

Template.search.helpers({

    options: function () {
        /* const resumeArray = Resume.find().fetch();
        const optionsArray = [];

        for(var i=0; i< resumeArray.length; i++){
            let optionsObject = {label: resumeArray[i].firstName, value: resumeArray[i]._id};
            optionsArray.push(optionsObject);
        }
        return optionsArray; */

        return Resume.find().map(record => ({ label: record.firstName, value: record._id }));

    }
});


//--------------Events ------------------------------

Template.search.events({

    //searchbox -> search profile

    'change #resumeSearchBox': function (event, template) {

        var resumeDetails = Resume.findOne({ _id: event.target.value });
        var check = Resume.findOne({ _id: event.target.value });
        //   console.log('resume details is: ', resumeDetails);
        if (resumeDetails != check) {
            Session.set('resumeData', resumeDetails);


        }
        // will contain resume data of the target search
        else {
            Session.set('resumeData', undefined)
            Modal.show('newUser')
            $('[name="firstName"]').val(event.target.value)
            var name = event.target.value;

            var result = name.split(" ");
            $('[name="firstName"]').val(result[0])
            $('[name="lastName"]').val(result[1])

        }
    },

    //button - Upload profile
    'click #upload': function () {

        Modal.show('newUser')
    }
});