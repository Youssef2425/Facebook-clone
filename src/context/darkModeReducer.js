const DarkModeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGEL' : {
      return {
        darkMode : !state.darkMode,
      };
    }
      default :
      return state;
  }
}

export default DarkModeReducer;