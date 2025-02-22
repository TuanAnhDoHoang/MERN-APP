import { createReducer } from "@reduxjs/toolkit";
import { changeHeartColor } from "./actions";
import { blogApi } from "../App";

const initial: blogApi = {
    blogs: [
        { id: 1, heartColor: false, NumberOfHeart: 0 },
        { id: 2, heartColor: false, NumberOfHeart: 0 },
        { id: 3, heartColor: false, NumberOfHeart: 0 },
        { id: 4, heartColor: false, NumberOfHeart: 0 },
        { id: 5, heartColor: false, NumberOfHeart: 0 },
    ]
};
interface actionType {
    type: string;
    payload: {
        id: number
    }
}
const reducer = createReducer(initial, (builder) => {
    builder
        .addCase(changeHeartColor, (state, action: actionType) => {
            state.blogs[action.payload.id - 1].heartColor = !state.blogs[action.payload.id - 1].heartColor;
            if (state.blogs[action.payload.id - 1].heartColor === false) {
                state.blogs[action.payload.id - 1].NumberOfHeart -= 1;
            }
            else {

                state.blogs[action.payload.id - 1].NumberOfHeart += 1;
            }
        });
});
export default reducer;