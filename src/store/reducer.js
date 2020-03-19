

const initrig = {
    useremail: 'ceejay@gmail.com',
    userrig : {
        CPU: 'Intel i3',
        GPU: 'R7 240',
        RAM: '8 GB',
        HD: '256 GB',
        OS: 'Windows 10'
    }
}



const reducer = (state = initrig, action) => {
    if(action.type === 'USERRIG') {
        return {
            ...state.userrig,
            userrig: {
                CPU: 'Intel i9',
                GPU: 'Geforce gt610',
                RAM: '8 GB',
                HD: '256 GB',
                OS: 'Windows 10'
            }
        }
    }

    if(action.type === 'USERRSET') {
        return {
            useremail: action.value
        }
    }
    return state;
};



export default reducer;