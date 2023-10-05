// Reducers
import reducer, { name } from './slices/example'

// Storage
import storage from './storage'

const reducers = { [name]: reducer }

export { reducers, storage }
