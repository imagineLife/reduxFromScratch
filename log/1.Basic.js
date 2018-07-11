import { createStore } from "redux";

//was 4.
const mainReducer = function(state=0, action){
//9
	if(action.type === "INC"){
		return state+action.payload;
	}

//11
	if(action.type === "DEC"){
		return state-action.payload;
	}
}

//6. Make an initial store
const initialState = {
	name:'Jake',
	age: '31',
	height: "5'7",
	hobbies: ["guitar", 'software dev', 'cooking'],
	myInt: 0
}

//5.
const devstore = createStore(mainReducer, 0)

//7. subscribe
devstore.subscribe(() => {
	console.log('store changed ->', devstore.getState())
}) 

//8.
devstore.dispatch({type: "INC", payload: 14})
devstore.dispatch({type: "INC", payload: 23})
devstore.dispatch({type: "INC", payload: 11})

//11.
devstore.dispatch({type: "DEC", payload: 31})

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
