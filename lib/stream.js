import axios from "axios";
import {
  DEVICE_ID,
  DEVICE_SUB_ID,
  IP,
  STREAM_TIMEOUT,
} from "../../../config.js";

export function stream({ fingerprintDevicePort }) {
  try {
    return axios.request({
      url: `${IP}:${fingerprintDevicePort}/stream`,
      method: "STREAM",
      data: {
        deviceId: DEVICE_ID,
        deviceSubId: DEVICE_SUB_ID,
        timeout: STREAM_TIMEOUT,
      },
    });
  } catch (e) {
    console.log("ERR:", e.message);
    return e.message;
  }
}
