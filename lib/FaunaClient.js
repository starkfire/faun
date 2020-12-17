const faunadb = require('faunadb');

const Database = require('./database')

class FaunaClient {
    constructor(opts = {}) {
        this.client = new faunadb.Client(opts);
        this.database = new Database(this.client);
    }

    createDatabase(name, options = {}) {
        return this.database.create(name, options);
    }

    getAllDatabase() {
        return this.database.get_all();
    }

    getDatabase(name) {
        return this.database.get(name);
    }

    deleteDatabase(name) {
        return this.database.delete(name);
    }

    renameDatabase(name, new_name) {
        return this.database.rename(name, new_name);
    }
}

module.exports = FaunaClient;