// *******************************
//        OS Controller
// *******************************

var os = require('os');
var fs = require('fs');
require('dotenv').config();

  try{
      // get folder path from .env file;
    var folderName = process.env.FILE_PATH;
     
    // check if same name folder exist; create a file and save os srting in it.  
    const saveFile = () => {
      return new Promise(resolve => {
        if (!fs.existsSync(folderName)) {
          fs.mkdirSync(folderName)
        }
        fs.writeFile(process.env.FILE_PATH + "OSInfo.txt", JSON.stringify(os.cpus()),
        function (err) { 
                 });
      })
    }

    const awaitFile = async () => {
      await saveFile()
    }
    
    awaitFile()

    console.log('done !!');
  }catch(e){
    console.log("error:"+e);
  }
