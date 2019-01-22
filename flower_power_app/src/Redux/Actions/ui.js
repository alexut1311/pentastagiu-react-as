export const SHOW_LOADER = '[ui] Show spinner';
export const HIDE_LOADER = '[ui] Hide spinner';


export const showLoader = () => ({
    type: SHOW_LOADER
})

export const hideLoader = () => ({
    type: HIDE_LOADER
})