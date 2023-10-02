// Import core components
import { createSlice } from '@reduxjs/toolkit'

// Import our components
import * as Utils from 'toolkits/utils'
import * as Storage from 'toolkits/storage'

const name = 'example'
const initialState = {}
const undef = undefined

function _remove(state, paths) {
  // Attempt to remove each path
  paths.forEach((path) => {
    const parts = path.split('.')
    const key = parts.pop()
    const obj = parts.length ? Utils.getObjValue(state, parts.join('.')) : state

    // If Object, remove all children keys from Storage
    if (typeof obj[key] === 'object') {
      Storage.removeObj([name, path], obj[key])
    }

    if (obj) delete obj[key]
    Storage.remove([name, path])
  })
}

function _update(state, fields, propagate = false) {
  Utils.getObjPaths(fields, (path, val) => {
    Utils.setObjValue(state, path, val)
    if (propagate) Storage.set([name, path], val)
  })
}

function getState() {
  try {
    const persistentState = Storage.getAll(name) || {}
    return Utils.getObjValue(persistentState, name) || {}
  } catch (err) {
    console.error(err)
    return initialState
  }
}

// Example Slice
const example = createSlice({
  name,
  initialState: getState(),
  reducers: {
    clear: () => initialState,
    remove: (state, { payload: paths }) => _remove(state, paths),
    update: (state, { payload: fields }) => _update(state, fields),
    updateLocal: (state, { payload: fields }) => _update(state, fields, false),
    updateFromStorage: (state, { payload: fields }) =>
      fields.new === null ? _remove(state, [fields.path]) : _update(state, { [fields.path]: fields.new }, false),
  },
})

// Slice name
export { name }

// Reducer functions
export const {
  clear: clearExample,
  remove: removeExample,
  update: updateExample,
  updateLocal: updateExampleLocal,
  updateFromStorage: updateExampleFromStorage,
} = example.actions

// Selector functions
export const selector = (state, path) => {
  const val = Utils.getObjValue(state[name], path)
  return typeof val === 'number' ? val : val || undef
}

// export const { reducer } = api
export default example.reducer
