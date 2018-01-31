export default function (state = {}, action) {
	switch (action.type) {
		case 'SUBMIT_FORM':
			console.log(action.payload);
			return { ...state }
		default: return state;
	}
}