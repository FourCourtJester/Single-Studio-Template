// Import our components
import OBSTraffic from 'workers/obs/traffic'
import VelcroTraffic from 'workers/velcro/traffic'

const obs = OBSTraffic.getInstance()
const velcro = VelcroTraffic.getInstance()

// Events

// obs.addEvent('CurrentProgramSceneChanged', (ws, response) => {
//   velcro.action('update', { 'variables.foo.bar': 'val' })
// })

// velcro.addEvent('variables.foo.bar', (response) => console.log(response))

// Requests

// obs.addAction('ShowItemHatTrick', (ws) => {
//   const sceneName = 'Game'
//   const sourceName = 'Video - Hat Trick'

//   return Promise.resolve()
//     .then(() => ws.call('GetSceneItemId', { sceneName, sourceName }))
//     .then((response) => {
//       if (!response) return false

//       const { sceneItemId } = response
//       const sceneItemEnabled = true

//       ws.call('SetSceneItemEnabled', { sceneName, sceneItemId, sceneItemEnabled })
//     })
// })

// obs.addAction('SetSceneToGame', (ws) => ws.call('SetCurrentProgramScene', { sceneName: 'Game' }))

export const actions = obs.getActions()
export const events = obs.getEvents()
