import { TYPES } from "../actions/marketQuotesActions";

export const quotesInitialState = {
    allData: []
}

export function quotesReducer(state, action) {
    switch (action.type) {
        case TYPES.GET_DATA: {

        }
    
        default:
            return state;
    }
}