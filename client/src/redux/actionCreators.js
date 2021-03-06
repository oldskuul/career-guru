import {
    INIT_CARDS,
    INIT_USER_CARDS,
    ADD_CARDS,
    UPDATE_USERDATA,
    RESET_USERDATA,
    DELETE_CARDS,
    AUTH_SUCСESSFULLY,
    LOGOUT,
    ERROR,
    INIT_TEST,
    RIGHT_ANSWERS,
    RESULT_COUNTER,
    REST_TO_FINISH,
    RESET_RESULTS,
    SHUFFLE,
    TEST_PROGRESS,
    ADD_FAVORITES,
    CLEAR_SHUFFLE
} from "./actionTypes";

//ADMIN
export const initCardsAC = (cards) => ({
    type: INIT_CARDS,
    payload: cards,
});

export const addCardsAC = (card) => ({
    type: ADD_CARDS,
    payload: card,
});

export const deleteCardsAC = (card) => ({
    type: DELETE_CARDS,
    payload: card,
})
export const initTestAC = (data) => ({
    type: INIT_TEST,
    payload: data
})

export const answerAC = (data) => ({
    type: RIGHT_ANSWERS,
    payload: data
})

export const resultPlusOneAC = () => ({
    type: RESULT_COUNTER,
})

export const restToFinishAC = () => ({
    type: REST_TO_FINISH,
})

export const resetResultsAC = () => ({
    type: RESET_RESULTS,
})
export const testProgressAC = () => ({
    type: TEST_PROGRESS,
})

export const updateUserStatsAC = (data) => ({
    type: UPDATE_USERDATA,
    payload: data
})
export const addFavStateAC = (data) => ({
    type: ADD_FAVORITES,
    payload: data
})

export const resetUserStatsAC = () => ({
    type: RESET_USERDATA,
})

export const userQuestionCardsAC = (cards) => ({
    type: INIT_USER_CARDS,
    payload: cards,
});

export const shuffleAC = (data) => ({
    type: SHUFFLE,
    payload: data,
});

export const clearAC = () => ({
    type: CLEAR_SHUFFLE
})

export const authSucсessAC = (payload) => ({type: AUTH_SUCСESSFULLY, payload});

export const logoutAC = () => ({type: LOGOUT});
export const errorAC = (payload) => ({type: ERROR, payload});
