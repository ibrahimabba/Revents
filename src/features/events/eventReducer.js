import createReducer from "../../app/common/util/reducerUtils"
import {CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT, FETCH_EVENTS} from './eventConstants'

 const initialState = []

const createEvent = (state, payload) => {
    return [...state, payload.event]
}

const updateEvent = (state, payload) => {
    return [
        ...state.filter(event => event.id !== payload.event.id), payload.event
    ]
}

const deleteEvent = (state, payload) => {
    return [
        ...state.filter(event => event.id !== payload.eventId)
    ]
}

const fetchEvents = (state, payload) =>{
  return payload.events
}


// export const createReducer = (initialState, fnMap) => {
//     return( state = initialState, {type, payload}) => {
//         const handler = fnMap[type];

//         return handler ? handler(state, payload) : state
//     }
// }

export default createReducer(initialState, {
    [CREATE_EVENT]: createEvent,
    [UPDATE_EVENT]: updateEvent,
    [DELETE_EVENT]: deleteEvent,
    [FETCH_EVENTS]: fetchEvents
}) 