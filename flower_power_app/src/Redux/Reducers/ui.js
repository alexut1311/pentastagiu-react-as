import {
    SHOW_LOADER,
    HIDE_LOADER
} from "../Actions/ui";


export function uiReducer(state = {
    showSpinner: false
}, action) {

    switch (action.type) {
        case SHOW_LOADER:
            return { ...state,
                showSpinner: true
            }
        case HIDE_LOADER:
            return { ...state,
                showSpinner: false
            }
        default:
            return state;
    }

}