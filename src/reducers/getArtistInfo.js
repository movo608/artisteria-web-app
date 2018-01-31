export default function(state = {}, action) {
	switch(action.type) {
		case 'GET_ARTIST_INFO':
			const { data } = action.payload.data;
			
			state.id = data.id;
			state.category = data.category;
			state.description = data.description;
			state.image1 = data.image1;
			state.image2 = data.image2;
			state.name = data.name;

			return { ...state };
		default: return state;
	}
}