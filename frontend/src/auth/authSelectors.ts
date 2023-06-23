import { RootState } from './authStore.ts'

export const getToken = (state: RootState) => state.auth.token
export const getError = (state: RootState) => state.auth.error

export const isLoading = (state: RootState) => state.auth.isLoading
