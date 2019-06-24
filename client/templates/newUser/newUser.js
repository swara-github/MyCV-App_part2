/// ------- Autoform Hooks --------------------------------

AutoForm.addHooks(['editUserForm', 'insertUserForm'], {

    before: {

        // Replace `formType` with the form `type` attribute to which this hook applies
        'method-update': function (doc) {
            doc.$unset && delete doc.$unset;
            // Potentially alter the doc
            doc.$set.imageDataSrc = Session.get('imageDataSrc')

            doc.$set.resumeFileName = Session.get('resumeFileName');

            // save the file in the public folder by calling the server side method to do it
            if (Session.get('resumeFile')) {
                let fileContent = Session.get('resumeFile');
                Meteor.call('saveCVAsFile', fileContent.fileResult, fileContent.fileName, fileContent.encoding);

                //fileContent.fileResult is not getting any value 
            }

            // console.log('this is before updating the doc. we are injecting the image field\'s value')
            // Then return it or pass it to this.result()
            return doc;
            //return false; (synchronous, cancel)
            //this.result(doc); (asynchronous)
            //this.result(false); (asynchronous, cancel)
        },

        'method': function (doc) {
            doc.$unset && delete doc.$unset;
            // Potentially alter the doc
            doc.imageDataSrc = Session.get('imageDataSrc')

            doc.resumeFileName = Session.get('resumeFileName');

            // save the file in the public folder by calling the server side method to do it
            if (Session.get('resumeFile')) {
                let file = Session.get('resumeFile');
                Meteor.call('saveCVAsFile', file.fileResult, file.fileName, file.encoding);
            }

            //  console.log('this is before inserting the doc. we are injecting the image field\'s value')
            // Then return it or pass it to this.result()
            return doc;
            //return false; (synchronous, cancel)
            //this.result(doc); (asynchronous)
            //this.result(false); (asynchronous, cancel)
        },


    },
    onSuccess: function (formType, result) {

        if (formType == 'method-update' && result) {
            Modal.show('alertBox')
            Session.set('resumeData', Resume.findOne(result))


        }
        if (formType == 'method' && result) {
            Modal.show('alertBox')
            Session.set('resumeData', Resume.findOne(result))
        }

        Modal.hide('newUser');
    }
});

//----------------Helpers --------------------------------


Template.newUser.helpers({
    getFormID: function () {
        if (Session.get('isEditResume')) {

            return "editUserForm"
        }

        return "insertUserForm"
    },

    getMethodType: function () {
        if (Session.get('isEditResume')) {

            return "method-update"
        }

        return "method"
    },

    // will return the doc of the user who is being updated.

    updateDoc: function () {
        if (Session.get('isEditResume')) {
            return Session.get('resumeData') // resume data session will always be set and it contains our target doc
        }
    }
});


/// ------- Events--------------------------------





Template.newUser.events({

    //for uploading image
    'change #importImage': function (event, template) {
        event.preventDefault();
        console.log('img changed')

        //conversion of images to base64

        var file = event.target.files[0];
        console.log(event.target.files)

        var reader = new FileReader();
        reader.onload = function (event) {
            //console.log("file contents are: ", event.target.result)
            var result = event.target.result
            Session.set('imageDataSrc', result)

            console.log('img is set')


        };

        reader.readAsDataURL(file);
    },

    //for uploading resume


    'change #importResume': function (event) {
        event.preventDefault();

        // define and initialize variables
        var fileReader = new FileReader();
        var method = 'readAsBinaryString';
        var encoding = 'binary';
        var type = 'binary';
        var fileName = event.target.files[0].name;


        console.log('filename: ', event.target.files[0].name)

        fileReader.onload = function (file) {
            // console.log("reading the file...", file)

            // store the entire file blob in the session. this will be used in the autoform hooks method.
            Session.set('resumeFile', {fileResult: file.srcElement.result, fileName: event.target.files[0].name, encoding: encoding});
           // Session.set('resumeFileName', fileName);
            // Meteor.call('saveCVAsFile', file.srcElement.result, event.target.files[0].name, encoding);
        }

        // call the reader!
       fileReader[method](event.target.files[0]);
   
        // eg:
        //fileReader.readAsBinaryString(blob)
    }

});


/// ------- Destroyer  --------------------------------
// each time u close the modal, onDestroyed will get called.

Template.newUser.onDestroyed(function () {
    console.log("boom");
    if (Session.get('isEditResume')) {
        Session.set('isEditResume', undefined)
    }
});