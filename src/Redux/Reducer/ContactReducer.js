const initialState = [
  {
    id: 1,
    name: "Reza Habibi",
    email: "rezhabibi72@gamil.com",
    number: "09354535833",
  },
  {
    id: 2,
    name: "Hasan Habibi",
    email: "hasanhabibi73@gamil.com",
    number: "09365004997",
  },
];

const ContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add_Contact":
      state = [...state, action.payload];

      return state;

    case "Update_Contact":
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;
    case "Remove_Contact":
      const filterState = state.filter((contact) => contact.id !== action.payload && contact)
      
      state=filterState
      return state;
    default:
      return state;
  }
};

export default ContactReducer;
