export default function (state = 'default', action) {
	switch (action.type) {
		case 'CHANGE_NAVBAR':
			state = '!:adapt';
			return state;
		
		case 'REVERT_NAVBAR':
			state = '!:revert';
			return state;

		default: return state;
	}
}