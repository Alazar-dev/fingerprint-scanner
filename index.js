import { capture } from "./lib/capture.js";
import { stream } from "./lib/stream.js";
import { findPort } from "./lib/findPort.js";
export { capture, stream, findPort };


export default async function fingerprint() {
    const fingerprintDevicePort = await findPort();
    stream({ fingerprintDevicePort });
    const data = await capture({ fingerprintDevicePort });
    console.log("data is", data);
    return data;
}