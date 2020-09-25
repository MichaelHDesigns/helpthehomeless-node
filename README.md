Helpthehomeless Node
============

A Helpthehomeless full node for building applications and services with Node.js. A node is extensible and can be configured to run additional services. At the minimum a node has an interface to [Helpthehomeless Core (helpthehomelessd) v0.14.0](https://github.com/Altcoin-Cash/helpthehomelesscoin/tree/v0.14.0.x) for more advanced address queries. Additional services can be enabled to make a node more useful such as exposing new APIs, running a block explorer and wallet service.

## Usages

### As a standalone server

```bash
git clone https://github.com/Altcoin-Cash/helpthehomeless-node
cd helpthehomeless-node
npm install
./bin/helpthehomeless-node start
```

When running the start command, it will seek for a .helpthehomeless folder with a helpthehomeless-node.json conf file.
If it doesn't exist, it will create it, with basic task to connect to helpthehomelessd.

Some plugins are available :

- Insight-API : `./bin/helpthehomeless-node addservice @Altcoin-Cash/insight-api`
- Insight-UI : `./bin/helpthehomeless-node addservice @Altcoin-Cash/insight-ui`

You also might want to add these index to your helpthehomeless.conf file :
```
-addressindex
-timestampindex
-spentindex
```

### As a library

```bash
npm install @Altcoin-Cash/helpthehomeless-node
```

```javascript
const helpthehomeless = require('@Altcoin-Cash/helpthehomeless-node');
const config = require('./helpthehomeless-node.json');

let node = helpthehomeless.scaffold.start({ path: "", config: config });
node.on('ready', function() {
    //Helpthehomeless core started
    helpthehomelessd.on('tx', function(txData) {
        let tx = new helpthehomeless.lib.Transaction(txData);
    });
});
```

## Prerequisites

- Helpthehomeless Core (helpthehomelessd) (v0.14.0) with support for additional indexing *(see above)*
- Node.js v8+
- ZeroMQ *(libzmq3-dev for Ubuntu/Debian or zeromq on OSX)*
- ~20GB of disk storage
- ~1GB of RAM

## Configuration

Helpthehomeless includes a Command Line Interface (CLI) for managing, configuring and interfacing with your Helpthehomeless Node.

```bash
helpthehomeless-node create -d <helpthehomeless-data-dir> mynode
cd mynode
helpthehomeless-node install <service>
helpthehomeless-node install https://github.com/yourname/helloworld
helpthehomeless-node start
```

This will create a directory with configuration files for your node and install the necessary dependencies.

Please note that [Helpthehomeless Core](https://github.com/Altcoin-Cash/helpthehomelesscoin/tree/master) needs to be installed first.

For more information about (and developing) services, please see the [Service Documentation](docs/services.md).

## Add-on Services

There are several add-on services available to extend the functionality of Bitcore:

- [Insight API](https://github.com/Altcoin-Cash/insight-api/tree/master)
- [Insight UI](https://github.com/Altcoin-Cash/insight-ui/tree/master)
- [Bitcore Wallet Service](https://github.com/Altcoin-Cash/helpthehomeless-wallet-service/tree/master)

## Documentation

- [Upgrade Notes](docs/upgrade.md)
- [Services](docs/services.md)
  - [Helpthehomelessd](docs/services/helpthehomelessd.md) - Interface to Helpthehomeless Core
  - [Web](docs/services/web.md) - Creates an express application over which services can expose their web/API content
- [Development Environment](docs/development.md) - Guide for setting up a development environment
- [Node](docs/node.md) - Details on the node constructor
- [Bus](docs/bus.md) - Overview of the event bus constructor
- [Release Process](docs/release.md) - Information about verifying a release and the release process.


## Setting up dev environment (with Insight)

Prerequisite : Having a helpthehomelessd node already runing `helpthehomelessd --daemon`.

Helpthehomeless-node : `git clone https://github.com/Altcoin-Cash/helpthehomeless-node -b develop`
Insight-api (optional) : `git clone https://github.com/Altcoin-Cash/insight-api -b develop`
Insight-UI (optional) : `git clone https://github.com/Altcoin-Cash/insight-ui -b develop`

Install them :
```
cd helpthehomeless-node && npm install \
 && cd ../insight-ui && npm install \
 && cd ../insight-api && npm install && cd ..
```

Symbolic linking in parent folder :
```
npm link ../insight-api
npm link ../insight-ui
```

Start with `./bin/helpthehomeless-node start` to first generate a ~/.helpthehomeless/helpthehomeless-node.json file.
Append this file with `"@Altcoin-Cash/insight-ui"` and `"@Altcoin-Cash/insight-api"` in the services array.

## Contributing

Please send pull requests for bug fixes, code optimization, and ideas for improvement. For more information on how to contribute, please refer to our [CONTRIBUTING](https://github.com/Altcoin-Cash/helpthehomelesscoin/blob/master/CONTRIBUTING.md) file.

## License

Code released under [the MIT license](https://github.com/Altcoin-Cash/helpthehomeless-node/blob/master/LICENSE).

Copyright 2020 Help The Homeless Developers
Copyright 2016-2018 Dasg Core Group, Inc.

- bitcoin: Copyright (c) 2009-2015 Bitcoin Core Developers (MIT License)
