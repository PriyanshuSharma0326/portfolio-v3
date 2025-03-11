import { configureStore } from '@reduxjs/toolkit';
import appReducer from '@/app/_lib/features/appSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const makeStore = () => {
    return configureStore({
        reducer: {
            app: appReducer,
        },
        devTools: process.env.NODE_ENV !== 'production',
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
