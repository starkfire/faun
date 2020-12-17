const faunadb = require('faunadb');
const q = faunadb.query;

class FaunaClient {
    constructor(opts = {}) {
        this.client = new faunadb.Client(opts);
    }

    createDatabase(name, options = {}) {
        let param_object = { name: name }
        
        if (options.hasOwnProperty('data')) {
            param_object.data = options.data
        }

        if (options.hasOwnProperty('priority')) {
            param_object.priority = options.priority
        }

        return this.client.query(
            q.CreateDatabase(param_object)
        )
    }

    getDatabase(name) {
        return this.client.query(
            q.Get(
                q.Database(name)
            )
        )
    }

    deleteDatabase(name) {
        return this.client.query(
            q.Delete(
                q.Database(name)
            )
        )
    }
    
    renameDatabase(name, new_name) {
        return this.client.query(
            q.Update(
                q.Database(name), { name: new_name }
            )
        )
    }
}

module.exports = FaunaClient;