import { FETCH_WEATHER } from "../actions/index";

// think about the data structure that will hold your data
// then architect the reducer state
export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      // Avoid direct state mutation in redux
      // Below SHOULD NOT BE DONE
      // return state.push(action.payload.data);
      // 
      // Instead we can do this
      // return state.concat([action.payload.data]);
      // or this
      // if ( action.payload.data)
      return [ action.payload.data, ...state ];

  }
  return state;
}