import { combineReducers, createStore } from "redux";

//6. Make an initial store
const initialState = {
	user:{
		name:'Jake',
		age: 31,
		height: "5'7",
	},
	hobbies: ["guitar", 'software dev'],
	myInt: 0
}

//Break into its own file
const userReducer = (state=initialState.user, action) => {
	switch(action.type){
		case ("CHANGE_NAME"):
			state = Object.assign({}, state, {name: action.payload});
			break;

		case ("CHANGE_AGE"):
			state = Object.assign({}, state, {age: action.payload});
	}
	return state;
}

//Break into its own file
const hobbiesReducer = (state=initialState.hobbies, action) => {
	switch(action.type){
		case ("ADD_HOBBY"):
			state = [...state, action.payload]
		break;
	}
	return state;
}

//Break into its own file
const reducedReducers = combineReducers({
	user: userReducer,
	hobbies: hobbiesReducer
})

const devstore = createStore(reducedReducers)

//7. subscribe
devstore.subscribe(() => {
	console.log('store changed ->', devstore.getState())
}) 

//8.
devstore.dispatch({type: "CHANGE_NAME", payload: 'Tom'})
devstore.dispatch({type: "ADD_HOBBY", payload: 'cooking'})
devstore.dispatch({type: "CHANGE_AGE", payload: 14})
devstore.dispatch({type: "CHANGE_NAME", payload: 'sally'})

/*
NOTES
1.  install redux
	npm i -S redux
2.Redux NOT part of react. just works well with react
3. import createStore from redux
4. make reducer
5. make store
	give store initial state
	const store = createStore(reducer, initialState)
6. make an initial state
7. set store.subscribe!
8. create first dispatch command
	store.dispatch({type: "INC", payload: 1})

WILL NOTWORK RIGHT NOW

9. update reducer
	FROM 
		const mainReducer = () => {}
	TO
		const mainReducer = (state, action) => {
		
		}

	NOTE: 
		REDUCER CHANGES THE STATE, based on the command from action.

10. Fill in reducer
	include the if inc
	NOTE: to get this to work, I had to make state, in reducer, have initial value
	this is comperable to building an initial state 
	 and setting state to state=initialState in reducer
11. Add a decrement to reducer and dispatch a decrement object
12. Make the reducer READ the action payload
	return state+action.payload;

	NOTES: in dispatch action, action HAS to have 'type' keyword
	payload can be whatever i want

	NOTICE:
	a user dispatches an action.
		the action is'read' by the reducer and updates the store
			WITHOUT the user 'updating' the store directly
			VERY interesting!




*/
