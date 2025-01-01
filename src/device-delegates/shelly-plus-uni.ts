import { DeviceDelegate } from './base';
import { ShellyPlus } from 'shellies-ng';

/**
 * Minimal delegate for Shelly Plus Uni (SNSN-0043X)
 */
export class ShellyPlusUniDelegate extends DeviceDelegate {
  protected setup() {
    // Cast the device to a generic ShellyPlus,
    // since we don't have a dedicated "ShellyPlusUni" interface.
    const d = this.device as ShellyPlus;

    // Expose one on/off switch in HomeKit:
    this.addSwitch(d.switch0, { single: true });
  }
}

// 1) A minimal "DeviceClass" object for SNSN-0043X
const ShellyPlusUniClass = {
  model: 'SNSN-0043X',
} as const;

// 2) Register your delegate so the plugin recognizes the device model
DeviceDelegate.registerDelegate(
  ShellyPlusUniDelegate,
  ShellyPlusUniClass,
);
