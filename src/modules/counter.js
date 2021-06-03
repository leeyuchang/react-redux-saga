import { put, all, takeLatest, delay } from 'redux-saga/effects'

const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

const INCREASE_ASYNC = 'counter/INCREASE_ASYNC'
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC'

export const increase = (msg) => ({ type: INCREASE, action: msg })
export const decrease = (msg) => ({ type: DECREASE, action: msg })
export const increaseAsync = () => ({ type: INCREASE_ASYNC })
export const decreaseAsync = () => ({ type: DECREASE_ASYNC })

const {log} = console

function* increaseSaga({ action }) {
  log(action)
  yield delay(1000)
  yield put(increaseAsync())
}

function* decreaseSaga({ action }) {
  log(action)
  yield delay(1000)
  yield put(decreaseAsync())
}

export function* counterSaga() {
  yield takeLatest(INCREASE, increaseSaga)
  yield takeLatest(DECREASE, decreaseSaga)
}

export default function counter(state = 0, action) {
  switch (action.type) {
    case INCREASE_ASYNC:
      return state + 1
    case DECREASE_ASYNC:
      return state - 1
    default:
      return state
  }
}

export function* rootSaga() {
  yield all([counterSaga()])
}
