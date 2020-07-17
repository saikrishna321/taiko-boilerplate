import DesktopFlow from './DesktopFlow'
import MobileFlow from './MobileFlow'

export default class FlowManager {
   constructor() {
       if(process.env.TAIKO_EMULATE_DEVICE) {
           return new MobileFlow();
       } else {
           return new DesktopFlow()
       }
   }
}