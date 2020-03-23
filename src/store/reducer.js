

const initrig = {
    useremail: '',
    userrig : {
        CPU: 'Intel i3',
        GPU: 'R7 240',
        RAM: '8 GB',
        HD: '256 GB',
        OS: 'Windows 10'
    },
    cpu: 'Intel i3',
    gpu: 'R7 240',
    ram: '8 gb'

}



const reducer = (state = initrig, action) => {
    if(action.type === 'USERRIG') {
        return {
            ...state.userrig,
            userrig: {
                CPU: action.value,
                GPU: 'Geforce gt610',
                RAM: '8 GB',
                HD: '256 GB',
                OS: 'Windows 10'
            }
        }
    }

    if(action.type === 'USERRSET') {
        return {
            ...state.useremail,
            useremail: action.value
        }
    }

    if(action.type === 'MYRIGSET') {
        return {
            ...state.userrig,
            userrig: {
                /* CPU: action.value.cpu,
                GPU: action.value.gpu,
                RAM: action.value.ram, */
                CPU: action.cpu,
                GPU: action.gpu,
                RAM: action.ram
            }
        }
    }



    if(action.type === 'GAMECPU') {
        return {
            ...state,
            cpu: action.value[0],
            gpu: action.value[1],
            ram: action.value[2],
        }
    }

    if(action.type === 'GAMEGPU') {
        return {
            ...state.gpu,
            gpu: action.value
        }
    }

    if(action.type === 'GAMEMEM') {
        return {
            ...state.ram,
            ram: action.value
        }
    }


    return state;
};



export default reducer;