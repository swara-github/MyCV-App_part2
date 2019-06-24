Meteor.methods({

    insertUpdateUserMethod: function(doc, id){
        
        if(id == undefined && doc){
            // this is insert...
            return Resume.insert(doc); // will return the id of the newly inserted doc.
        }

        if(id && doc && doc.$set){
            // this is an update to an existing mongo doc.

            var result = Resume.update(id, doc); // will return the number of docs updated
            if(result){
                return id;
            }
            
        }
        
        console.log(doc);

    },


    saveCVAsFile: function(blob, fileName, encoding) {
      
        // absolute path to the /public folder in meteor
        var path = process.env['METEOR_SHELL_DIR'] + '/../../../public/resources/';
        var fs = require('fs');
  
        console.log("the name is: ", fileName)
        console.log("the name is: ", blob)
       
        // if filename contains space, replace it by _
        // or else we need to handle the space in a href. 
        // it's better to handle it here
  
        fileName = fileName.replace(' ', '_');
  
  
  
        console.log(process.env['METEOR_SHELL_DIR'])
        console.log("path to save : ", path + fileName)
  
          // write the file using node's fs
          fs.writeFile(path + fileName, blob, encoding, function(err) {
            if (err) {
              console.log(err)
              throw (new Meteor.Error(500, 'Failed to save file.', err));
            } else {
              console.log('The file ' + fileName + ' (' + encoding + ') was saved to ' + path);
            }
          }); 
      
         
        }
  
 
    
});