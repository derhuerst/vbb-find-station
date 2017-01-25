# vbb-find-station

**Search for a VBB station.** Computed from [open](http://daten.berlin.de/datensaetze/vbb-fahrplandaten-januar-2017-bis-dezember-2017) [GTFS](https://developers.google.com/transit/gtfs/) [data](https://vbb-gtfs.jannisr.de/).

*Note*: [vbb-find-stations](https://github.com/derhuerst/vbb-find-stations) provides all stations that match the query. vbb-find-station then returns the most relevant one.

[![npm version](https://img.shields.io/npm/v/vbb-find-station.svg)](https://www.npmjs.com/package/vbb-find-station)
[![build status](https://img.shields.io/travis/derhuerst/vbb-find-station.svg)](https://travis-ci.org/derhuerst/vbb-find-station)
[![dependency status](https://img.shields.io/david/derhuerst/vbb-find-station.svg)](https://david-dm.org/derhuerst/vbb-find-station)
[![dev dependency status](https://img.shields.io/david/dev/derhuerst/vbb-find-station.svg)](https://david-dm.org/derhuerst/vbb-find-station#info=devDependencies)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/vbb-find-station.svg)
[![gitter channel](https://badges.gitter.im/derhuerst/vbb-rest.svg)](https://gitter.im/derhuerst/vbb-rest)


## Installing

```shell
npm install vbb-find-station
```


## Usage

```javascript
const find = require('vbb-find-station')
find('Seestr')
.then((s) => console.log(s.id, s.name))
// todo
```


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/vbb-find-station/issues).
