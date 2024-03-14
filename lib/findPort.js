import axios from 'axios';
import {IP, DEVICE_DISC_METHOD, DEVICE_DISC_TYPE} from "../../../config.js";

let fingerprintDevicePort;

export async function findPort() {
    for (let i = 4501; i <= 4599; i++) {
        try {
            let response = await axios.request({
                url: `${IP}:${i}/device`,
                method: DEVICE_DISC_METHOD,
                data: {
                    type: DEVICE_DISC_TYPE
                }
            });


            if (response.statusText === "OK") {
                fingerprintDevicePort = i;
                console.log(`Fingerprint device is ${response.data[0].deviceStatus}`);
                return i;
            }
        } catch (error) {
            console.error(`Device is not running on port ${i}`);
        }
    }

    return fingerprintDevicePort;
}

findPort();
