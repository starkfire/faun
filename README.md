# Faun

### A Node.js ORM for interacting with FaunaDB without FQL

_If I'll be honest, I don't even know if this is an ORM or ODM, but whatever._

## Usage

### Setup Client
```js
const client = new FaunaClient({ secret: process.env.FAUNA_SECRET_KEY });
```

### Create Database
```js
let res = await client.createDatabase('helloworld');
```

### Get Database
```js
let res = await client.getDatabase('helloworld');
```

### Rename Database
```js
let res = await client.renameDatabase('helloworld', 'hello');
```

### Delete Database
```js
let res = await client.deleteDatabase('hello');
```

## Contributing
Feel free to make pull requests and submit issues. 

(i mean, do you even want to?) 👉👈

## License

[MIT](https://github.com/starkfire/faunadb-orm/blob/main/LICENSE)
