import { configureStore } from '@reduxjs/toolkit'
import { usersSlice } from '../modules/users/users.slice'

export const extraArgument = {
 
};

export const store = configureStore({
    reducer: {
        [usersSlice.name]: usersSlice.reducer,
    },
})
