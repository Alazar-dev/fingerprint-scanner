import axios from "axios";
import { CAPTURE_BODY, IP } from "../../../config.js";

let deviceId;

async function forBiorugged() {
  const url = `${IP}:${i}/device`;
  console.log("DEVICE_DISC_URL", url);
  try {
    let response = await axios.request({
      url: url,
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

forBiorugged();

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
  const url = `${IP}:${fingerprintDevicePort}/capture`;
  console.log("CAPTURE_URL", url);
  try {
    let biometricBase64Data;
    const data = await axios.request({
      url: url,
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