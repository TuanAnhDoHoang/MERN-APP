import { createAction } from "@reduxjs/toolkit";
const changeHeartColor = createAction('changeHeartColor', function prepare(id: number) {
    return {
        payload: {
            id: id
        }
    }
});

export { changeHeartColor };