import { configureStore } from '@reduxjs/toolkit';
import appReducer from '@/lib/features/appSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// Function to create the Redux store
export const makeStore = () => {
    return configureStore({
        reducer: {
            app: appReducer, // Add more reducers here if needed
        },
        devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in dev mode
    });
};

// Store Type Definitions
export type AppStore = ReturnType<typeof makeStore>; // Store type
export type RootState = ReturnType<AppStore['getState']>; // RootState type
export type AppDispatch = AppStore['dispatch']; // Dispatch type

// Custom hooks for better TypeScript support
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
