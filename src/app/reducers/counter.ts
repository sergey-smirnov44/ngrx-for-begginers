import { createAction, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';

export const inc = createAction('[COUNTER] inc')
export const dec = createAction('[COUNTER] dec')
export const clear = createAction('[COUNTER] clear')

export interface CounterState {
  count: number
}

export const initialState: CounterState = {
  count: 10
}

export const counterReducer = createReducer(
  initialState,
  on(inc, state => ({
    ...state,
    count: state.count + 1
  })),
  on(dec, state => ({
    ...state,
    count: state.count - 1
  })),
  on(clear, state => ({
    ...state,
    count: 0
  })),
)

export const featureSelector =
  createFeatureSelector<CounterState>('counter')

export const countSelector = createSelector(
  featureSelector,
  state => state.count
)
