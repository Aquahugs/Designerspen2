const functions = require('firebase-functions');
const os = require ('os');
const path = require ('path')
const admin = require('firebase-admin');
const spawn = require('child-process-promise').spawn;
const cors = require ('cors')({origin:true});
const Busboy = require ('busboy');
const fs = require ('fs');

const projectId = 'designerspen2';
const keyFilename = 'designerspen2-firebase-adminsdk-sn18o-b9b1d5ff18.json'

const {Storage} = require('@google-cloud/storage');


admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello dookie but");
 });

 const createNotification = (notification => {
   return admin.firestore().collection('notifications')
   .add(notification)
   .then( doc => console.log('notification added',doc));
 })

 exports.projectCreated = functions.firestore
 .document('projects/{projectId}')
 .onCreate( doc => { //listens for a project to be added to the store     
  const project = doc.data();
  const notification = {
    content:'Added a new project',
    user: `${project.authorFirstName} ${project.authorLastName}`,
    time: admin.firestore.FieldValue.serverTimestamp()
  }

  return createNotification(notification);

 });

 exports.userJoined = functions.auth.user() //Notifcation trigger for when new user signs up 
 .onCreate(user => {

    return admin.firestore().collection('users') 
    .doc(user.uid).get().then(doc => { // doc basically means particular document within a parameter 
        
      const newUser = doc.data();
      const notification = {
        content:'Joined the community',
        user: `${newUser.firstName} ${newUser.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
      }

      return createNotification(notification);
    }) 

 });

 

  const storage = new Storage({
  keyFilename:keyFilename,
  projectId:projectId
  });

// The name for the new bucket
//const bucketName = 'designerspen2.appspot.com';

// Creates the new bucket
//storage
  //.createBucket(bucketName)
  //.then(() => {
    //console.log(`Bucket ${bucketName} created.`);
  //})
  //.catch(err => {
    //console.error('ERROR:', err);
  //});


 exports.onFileChange = functions.storage.object().onFinalize (event => { //resize cloud function
  console.log(event);
  const bucket = event.bucket;
  const contentType = event.contentType;
  const filePath = event.name;
  console.log('file change detected, function execution started');
  

    if (event.resourceState === 'not_exists') {
      console.log('We deleted a file, exit...');
      return;
    }

    if (path.basename(filePath).startsWith('resized-')) {
        console.log('We already renamed that file!');
        return;
    }
    const destBucket = storage.bucket(bucket);
    const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath));
    const metadata = { contentType: contentType };
    return destBucket.file(filePath).download({
        destination: tmpFilePath
    }).then(() => {
        return spawn('convert', [tmpFilePath, '-resize', '500x500', tmpFilePath]);
    }).then(() => {
        return destBucket.upload(tmpFilePath, {
            destination: 'resized-' + path.basename(filePath),
            metadata: metadata
        })
    });
})

exports.onFileDeletion = functions.storage.object().onDelete (event => { // file delection cloud function
  console.log(event);
  return;
});


// trying to store a file onto firebase storage through an http request cloud function 
//'my head hurts trying to do this
exports.uploadFile = functions.https.onRequest((req, res) => {
  
  cors(req,res, () => {
    if (req.method != 'POST') { //only allowing post request
      return res.status(500).json({
        message: 'Not allowed'
      });
    }

    const busboy = new Busboy ({headers: req.headers});
    let uploadData = null;

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
      const filepath = path.join(os.tmpdir(), filename);
      uploadData = {file:filepath, type:mimetype};
      file.pipe(fs.createWriteStream(filepath));
    });

    busboy.on('finish', () => {

      const bucket = admin.storage().bucket();
      bucket.upload(uploadData.file, {
        uploadType:'media',
        metadata: {
          metadata: {
            contentType: uploadData.type
          }
        }
      }).then(() => {
        res.status(400).json ({
          message:'it works '
        });
      })   
      .catch(err => {
          res.status(500).json ({
          error:err
        });
      }) 
    });

    busboy.end(req.rawBody);

    
  })
});
 