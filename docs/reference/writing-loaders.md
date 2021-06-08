---
sidebar_position: 2
---

# Writing loaders

First initialize a folder as a nodejs package. Its name should follow `meml-loader-[Language name]`. Add the following code to the file.

```ts
class Loader {
  // -----------------------------------------------------------------------------
  // Configuration variables

  // Configuration variables
  supportsWebImport = false
  supportsLocalImport = false
  supportsDestructureImport = false
  supportContentImport = false

  // A regexp that matches against the file extension
  fileMatch = new RegExp('.+\\.foo')
  // The name of your file loader
  name = 'meml-loader-[Language name]'

  // -----------------------------------------------------------------------------
  // Import functions
  //
  // Note: all import functions must be async or error out when called

  // Destructure imports
  // (import (something1, something2) from 'somefile')
  //
  // Expected to return Promise<Map<string, string | ComponentDefinition>>
  webDestructureImport(pathContents, path, toImport, production) {
    throw new Error('Method not implemented.')
  }

  // Content Import
  // (import 'somefile')
  //
  // Expected to return Promise<string>
  webContentImport(pathContents, path, production) {
    throw new Error('Method not implemented.')
  }

  // Destructure imports
  // (import (something1, something2) from 'somefile')
  //
  // Expected to return Promise<Map<string, string | ComponentDefinition>>
  localDestructureImport(pathContents, path, toImport, production) {
    throw new Error('Method not implemented.')
  }

  // Content Import
  // (import 'somefile')
  //
  // Expected to return Promise<string>
  async localContentImport(pathContents, path, production) {
    return pathContents
  }
}
```

Then export it as `MEMLLoader`:

```js
module.exports = {
  MEMLLoader: Loader,
}
```

Publish to npm
