# fingerprint-scanner

## Installation

In a node.js environment:
```
npm i fingerprint-scanner
```

## Usage

```
import fingerprint from 'fingerprint-scanner'

const data = fingerprint();

// if successful, data will be returned in a base64 format
```
### To do it manually:
    import { findPort, stream, capture } from 'fingerprint scanner';

    const devicePort = findPort();

    async function scan({devicePort}) {
        stream();
        await data = capture({devicePort});
        return data;
    }

## Why?

fingerprint-scanner makes streaming and capturing fingerprint easier for JavaScript developers by taking the hassle out of working with finding device port streaming and capturing.

 * Finds available port which the fingerprint SDK is currently running.
 * Stream fingerprint and makes available for caputure (it helps to visualize the streaming).
 * Captures and returns fingerprint data in a base64 format.