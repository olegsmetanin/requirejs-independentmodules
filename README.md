requirejs-independentmudules
=============

Show how to build dependent modules independently

## Install

```shell
npm install
grunt connect
open http://localhost:9000
```

## Production mode

Build modules

```shell
grunt
```

Uncomment packages definitions in index.html

```javascript
	require.config({
		packages: [
			{
				name: "common",
				location: "common.rel"
			}
		], packages: [
			{
				name: "newmodule",
				location: "newmodule.rel"
			}
		]

	});
```



