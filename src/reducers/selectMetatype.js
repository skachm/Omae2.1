/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
const initialState = 'human';

const metatypeReducer = (state=initialState, action) => {
	const actionsToTake = {
		SELECT_METATYPE: () => {
			return action.parameter;
		},

		DEFAULT: () => { return state; }
	};
	return (actionsToTake[action.type] || actionsToTake.DEFAULT)();
};

module.exports = metatypeReducer;
