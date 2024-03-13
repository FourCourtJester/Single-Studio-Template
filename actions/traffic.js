// Import our components
import OBSTraffic from 'workers/obs/traffic'

const obs = OBSTraffic.getInstance()

// Events

// Requests

export const traffic = {
  obs: {
    actions: obs.getActions(),
    events: obs.getEvents(),
  },
}
