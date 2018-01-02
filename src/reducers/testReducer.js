export default function(state = {data: false, payload: 'no_reducer'}) {
	state.data = true;
	state.payload = 'reducer_found';

	return { ...state };
}