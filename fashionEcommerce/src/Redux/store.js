
import {configureStore} from '@reduxjs/toolkit'
import authSliceReducer from './Slices/AuthSlices'

const store = configureStore({
    reducer: {
        auth:authSliceReducer
    },
    devtool:true
})

export default store;