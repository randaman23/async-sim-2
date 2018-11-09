const initialState = {
   properties: {}
}

const ADD_NAME = 'ADD_NAME'


export default function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_NAME:
        return {
            properties: Object.assign({}, state, action.payload)
        }
        default: 
        return state
    }
}