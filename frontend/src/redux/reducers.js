const initialState = {
    contacts: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [...state.contacts, action.payload],
            };
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload),
            };
        case 'UPDATE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.map(contact =>
                    contact.id === action.payload.id ? action.payload : contact
                ),
            };
        default:
            return state;
    }
};

export default reducer;
