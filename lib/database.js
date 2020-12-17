const faunadb = require('faunadb');
const q = faunadb.query;

class Database {

    constructor(client) {
        this.client = client
    }

    create(name, options = {}) {
        let param_object = { name: name };

        if (options.hasOwnProperty('data')) {
            param_object.data = options.data;
        }

        if (options.hasOwnProperty('priority')) {
            param_object.priority = options.priority;
        }

        return this.client.query(
            q.CreateDatabase(param_object)
        )
    }

    get_all() {
        return this.client.query(
            q.Paginate(
                q.Databases()
            )
        )
    }

    get(name) {
        return this.client.query(
            q.Get(
                q.Database(name)
            )
        )
    }

    delete(name) {
        return this.client.query(
            q.Delete(
                q.Database(name)
            )
        )
    }

    rename(name, new_name) {
        return this.client.query(
            q.Update(
                q.Database(name), { name: new_name }
            )
        )
    }
}

module.exports = Database