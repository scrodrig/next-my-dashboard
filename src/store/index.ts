import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/CounterSlice'
import { useDispatch, useSelector } from 'react-redux'
import pokemonsReducer from './pokemons/pokemonSlice'
import { localStorateMiddleware } from './middlewares/local-storage-middleware'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonsReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(localStorateMiddleware) as any
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
