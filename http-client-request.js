export class HttpRequest {
    async get(endpoint = "",init = {headers: null}) {
        return {
            data: await (await fetch(endpoint,{
                headers: {
                    'Content-Type': 'application/json',
                    'charset': 'UTF-8',
                    ...init.headers
                },
            })).json()
        }
    }
    async post(endpoint = "", init = {headers: null,body: null}) {
        return {
            data: await (await fetch(endpoint, {
                body: init.body,
                method: this.post.name.toUpperCase(),
                headers: {
                    'Content-Type': 'application/json',
                    'charset': 'UTF-8',
                    ...init.headers
                },
            })).json()
        }
    }
    async put(endpoint = "", init = {headers: null,body: null}) {
        return {
            data: await (await fetch(endpoint, {
                body: init.body,
                method: this.put.name.toUpperCase(),
                headers: {
                    'Content-Type': 'application/json',
                    'charset': 'UTF-8',
                    ...init.headers
                },
            })).json()
        }
    }
    async delete(endpoint = "", init = {headers: null}) {
        return {
            data: await (await fetch(endpoint, {
                method: this.delete.name.toUpperCase(),
                headers: {
                    'Content-Type': 'application/json',
                    'charset': 'UTF-8',
                    ...init.headers
                }
            })).json()
        }
    }
    toJSON(object) {
        return JSON.stringify(object)
    }
}