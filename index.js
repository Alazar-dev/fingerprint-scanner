import { capture } from "./lib/capture.js";
import { stream } from "./lib/stream.js";
import { findPort } from "./lib/findPort.js";


async function main() {
    const fingerprintDevicePort = await findPort();

    stream({fingerprintDevicePort});
    const data = await capture({fingerprintDevicePort});
    console.log("data is", data);
}

main();