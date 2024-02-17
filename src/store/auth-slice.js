import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    auth: {},
    expiredRefresh: false,
    persist: window.localStorage.getItem("persist") === "true" || false
};

export const authSlice = createSlice({
    name: 'authSlice',
    initialState: initialAuthState,
    reducers: {
        getAuthInfo(state,action) {
            state.auth = { ...action.payload }
        },
        getRefreshToken(state,action) {
            state.auth = { ...state.auth, accessToken: action.payload.accessToken, roles: action.payload.roles }
        },
        getExpiredRefresh(state,action) {
            state.expiredRefresh = action.payload;
        },
        removeExpiredRefresh(state,action) {
            state.expiredRefresh = action.payload;
        },
        logOut(state) {
            state.auth = {};
        },
        getPersist(state) {
            state.persist = !state.persist
        }
    }
});

export const authSliceAction = authSlice.actions;