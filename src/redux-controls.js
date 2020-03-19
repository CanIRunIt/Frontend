const redux = require('redux');
const createStore = redux.createStore;

//Reducer
const rootReducer = (state = Init, action) => {
    if(action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if(action.type === 'PLUS_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
};

//Store
const store = createStore(rootReducer);
console.log(store.getState());



//Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'PLUS_COUNTER', value: 10});
console.log(store.getState());


//Subscription
store.subscribe(() => {
    console.log('[Subscripion]', store.getState());
})