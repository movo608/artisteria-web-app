export default function(state = {}, action) {
	switch (action.type) {
		case 'GET_MENTOR_INFO':
			const { data } = action.payload.data;

			state.id = data.id;
			state.name = data.name;
			state.category = data.category;
			state.image1 = data.image1;
			state.image2 = data.image2;
			state.description = data.description;
			return { ...state };

		default: return state;
	}
}