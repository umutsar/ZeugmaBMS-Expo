// BLEService.js
import { BleManager } from 'react-native-ble-plx';

// BLEManager'ı singleton olarak oluşturun
class BLEServiceInstance {
  constructor() {
    this.manager = new BleManager();
  }
}

export const BLEService = new BLEServiceInstance();
