const initState = {
    users: [
        {
            id: '1',
            name: 'Nguyen'
        },
        {
            id: '2',
            name: 'Mai'
        }
    ],
    posts: []
}

const rootReducer = (state = initState, action) => {

    switch(action.type) {
        case 'Delete_user':
          let users = state.users;
          users = users.filter(item => item.id !== action.payload.id)
          return { ...state, users };
        case 'Create_user' :
            let id = Math.floor(Math.random() * 1000000);
            let user = {
                id: id,
                name: `name ${id}`
            }
            return {
                ...state, users: [ ...state.users, user ]
            }
        default:
            return  state;
      }

    
}

export default rootReducer;