import axios from 'axios'
import {CAPTURE_BODY, IP} from "../config.js";

export async function capture({ fingerprintDevicePort }) {

  let biometricBase64Data;
    const data = await axios.request({
      url: `${IP}:${fingerprintDevicePort}/capture`,
      method: 'RCAPTURE',
      data: CAPTURE_BODY
    });

    biometricBase64Data = data.data.biometrics[0].data;
    return biometricBase64Data;
  }
