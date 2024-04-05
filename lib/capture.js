import axios from "axios";
import { CAPTURE_BODY, IP } from "../config.js";

let deviceId;

async function forLuxton() {
  try {
    let response = await axios.request({
      url: `${IP}:${i}/device`,
      method: DEVICE_DISC_METHOD,
      data: {
        type: DEVICE_DISC_TYPE,
      },
    });

    deviceId = response?.data[0].deviceId;
    return response?.data[0]?.deviceId;
  } catch (e) {
    deviceId = "";
  }
}

forLuxton();

const newData = {
  ...CAPTURE_BODY,
  bio: [
    {
      ...CAPTURE_BODY.bio[0],
      deviceId: deviceId,
    },
    ...CAPTURE_BODY.bio.slice(1),
  ],
};

export async function capture({ fingerprintDevicePort }) {
  try {
    let biometricBase64Data;
    const data = await axios.request({
      url: `${IP}:${fingerprintDevicePort}/capture`,
      method: "RCAPTURE",
      data: newData,
    });

    biometricBase64Data = data.data.biometrics[0].data;
    return biometricBase64Data;
  } catch (e) {
    console.log("ERR:", e.message);
    return e.message;
  }
}