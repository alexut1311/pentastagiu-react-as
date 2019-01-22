export const SHOW_LOADER = '[ui] Show spinner';
export const HIDE_LOADER = '[ui] Hide spinner';
export const OPEN_EDIT_MODE = '[ui] Open edit mode';
export const HIDE_EDIT_MODE = '[ui] Hide edit mode';

export const showLoader = () => ({
    type: SHOW_LOADER
})

export const hideLoader = () => ({
    type: HIDE_LOADER
})

export const openEditMode = () => ({
    type: OPEN_EDIT_MODE
})

export const closeEditMode = () => ({
    type: HIDE_EDIT_MODE
})