export const reducer = (state, action) => {
  console.log(state, action)
  switch (action.type) {
    case 'ADD_USER':
      console.log()
      return {
        ...state,
        users: [...state.users, action.user],
        isModalOpen: true,
        modalContent: 'User added',
      }
    case 'NO_USERNAME':
      return {
        ...state,
        isModalOpen: true,
        modalContent: 'A user must have a name',
      }
    case 'CLOSE_MODAL':
      return {
        ...state,
        isModalOpen: false,
      }
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.userId),
        isModalOpen: true,
        modalContent: 'user removed',
      }
    default:
      return state
  }
}

export const initialState = {
  users: [],
  isModalOpen: false,
  modalContent: 'modal',
}
