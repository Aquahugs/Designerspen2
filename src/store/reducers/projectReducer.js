const initState = { //place holder later we want to get this from the database right?
    projects: [
        {id:'1', title:'im looking for eggs', content: 'dooke oke odead dwa d'},
        {id:'2', title:'im looking for ', content: 'dooke oke odead dwa d'},
        {id:'3', title:'im looking ', content: 'dooke oke odead dwa d'}
    ]

}

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT' :
            console.log('Project has been added ', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
        console.log('create project error', action.err);
        return state;
        default:
            return state; 
    }
  
} 

export default projectReducer