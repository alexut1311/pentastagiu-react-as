import {
    SHOW_LOADER,
    HIDE_LOADER,
    OPEN_EDIT_MODE,
    HIDE_EDIT_MODE
} from "../Actions/ui";


export function uiReducer(state = {
    showSpinner: false,
    setEditMode: false
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
        case OPEN_EDIT_MODE:
            return { ...state,
                setEditMode: true
            }
        case HIDE_EDIT_MODE:
            return { ...state,
                setEditMode: false
            }
        default:
            return state;
    }

}