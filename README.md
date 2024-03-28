# fingerprint-scanner
## Why?

fingerprint-scanner makes streaming and capturing fingerprint easier for JavaScript developers by taking the hassle out of working with finding device port streaming and capturing.

 * Finds available port which the fingerprint SDK is currently running.
 * Stream fingerprint and makes available for caputure (it helps to visualize the streaming).
 * Captures and returns fingerprint data in a base64 format.

 * More details are available here: [MDS-Specification](https://docs.mosip.io/1.1.5/biometrics/mosip-device-service-specification) 
 <br>
 <br>

## Installation

In a node.js environment:
```
npm i fingerprint-scanner
```
<br>

## Usage


- Add config.js in root folder and add the following <br>


```
export const DEVICE_DISC_METHOD = "MOSIPDISC";
export const DEVICE_DISC_TYPE = "Finger";
export const IP = "http://localhost";
export const STREAM_TIMEOUT = '10000'
export const DEVICE_ID = '1'
export const DEVICE_SUB_ID = '1'
export const CAPTURE_BODY = {
  env: 'Production',
  purpose: 'Registration',
  specVersion: '0.9.5',   
  captureTime: new Date().toISOString(),
  domainUri: '127.0.0.1:4503',
  timeout: '30000',
  transactionId: '1',
  bio: [
    {
      type: 'Finger',
      count: 1,
      bioSubType: ["Left IndexFinger"],
      requestedScore: '10',
      deviceId: '1',
      deviceSubId: 1,
      previousHash: '',
      exception: ["Left MiddleFinger", "Left RingFinger", "Left LittleFinger"],
    },
  ],
}

```


```
import fingerprint from 'fingerprint-scanner'

const data = fingerprint();

// if successful, data will be returned in a base64 format
```

### There are two requests that run in the background and `stream`, and `capture` and the `config.js` file contains the payloads for the two requests.

* stream
```
{
  "deviceId": "Internal Id",
  "deviceSubId": "Specific device sub Id",
  "timeout": "Timeout for stream"
}
```
- capture
```
{
  "env":  "Target environment",
  "purpose": "Auth or Registration",
  "specVersion": "Expected MDS spec version",
  "timeout": "Timeout for registration capture",
  "captureTime": "Time of capture request in ISO format",
  "transactionId": "Transaction Id for the current capture",
  "bio": [
    {
      "type": "Type of the biometric data",
      "count":  "Finger/Iris count, in case of face max, is set to 1",
      "bioSubType": ["Array of subtypes"], //Optional
      "exception": ["Finger or Iris to be excluded"],
      "requestedScore": "Expected quality score that should match to complete a successful capture",
      "deviceId": "Internal Id",
      "deviceSubId": "Specific device Id",
      "previousHash": "Hash of the previous block"
    }
  ],
  "customOpts": {
    //max of 50 key-value pairs. This is so that vendor-specific parameters can be sent if necessary. The values cannot be hardcoded and have to be configured by the apps server and should be modifiable upon need by the applications. Vendors are free to include additional parameters and fine-tuning parameters. None of these values should go undocumented by the vendor. No sensitive data should be available in the customOpts.
  }
}

```

So the ``


### To do it manually:
    import { findPort, stream, capture } from 'fingerprint scanner';

    const devicePort = findPort();

    async function scan() {
        stream({devicePort});
        await data = capture({devicePort});
        return data;
    }
