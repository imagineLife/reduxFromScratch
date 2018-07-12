import { combineReducers, createStore, applyMiddleware } from "redux";

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

const logger = (store) => (next) => (action) => {
	console.log('action fired!');
	console.log(action.type);
	next(action)
}

const middleware = applyMiddleware(logger);

const devstore = createStore(reducedReducers, middleware)

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
adding middleware
0. import applyMiddleware from redux

1. add third command to createStore command

2. create middleware function
	const middleware = applyMiddleware(logger);

3.create the actual middleware function
	const logger = (store) => (next) => (action) => {
		console.log('action fired!')
		console.log(action.type)
	}

4.



*/
