// Import core components
// ...

// Import our components
import store from 'db/store'
import * as Storage from 'toolkits/storage'
import { name, clearExample, updateExampleFromStorage } from './slices/example'

export default function storage() {
  window.addEventListener('storage', (e) => {
    // The storage was cleared somehow
    // Reset all slices
    if (!e.key) {
      store.dispatch(clearExample())
      return true
    }

    // Check if keys either aren't ours or the values weren't updated
    if (!e.key.startsWith(Storage.namespace)) return true
    if (e.oldValue === e.newValue) return true

    const [, key, ...path] = e.key.split('.')

    if (key !== name) return true

    // Update the appropriate slice
    try {
      store.dispatch(updateExampleFromStorage({ [path.join('.')]: JSON.parse(e.newValue) }))
    } catch (err) {
      console.warn(err)
      store.dispatch(updateExampleFromStorage({ [path.join('.')]: null }))
    }

    return true
  })
}
