

export const createProject = (project) => {
    return(dispatch,getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();
       const profile = getState().firebase.profile; // acces the profile properties this way 
       const authorId = getState().firebase.auth.uid;
       
       //const userinfo = getState().this.state;
       
        console.log(profile)
        firestore.collection('projects').add({//just passes an object to the .add method then puts it in the projects collection on firebase boi 
            ...project,
           authorFirstName: profile.firstName,
           authorLastName: profile.lastName,
           authorId: authorId, 
           selectedFile:null,
            createdAt: new Date()
        }).then(()=> {
            dispatch({type: 'CREATE_PROJECT',project})
        }).catch((err) => {
            dispatch({type:'CREATE_PROJECT_ERROR', err});
        })
    }
};