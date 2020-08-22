const initialState = false

export const themeReducer = (state = initialState, action) => {
    if (action.type == 'switch_theme') {
        return action.payload
    }
    return state;
}