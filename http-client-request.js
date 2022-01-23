function getQuery(url){
    const queryParams = {} , index = url.indexOf("?");
    new URLSearchParams(url.substring(index))
        .forEach((value, key) => {
            queryParams[key] = value;
        })
    return [queryParams,index];
} 

export class HttpRequest {
    async get(url = "") {
        const [queryParams,index] = getQuery(url);
        return {
            data: await (await fetch(url)).json(),
            method: this.get.name.toUpperCase(),
            url,
            ok: true,
            statusCode: 200,
            queryParams: index !== -1 ? queryParams : null
        }
    }
    async post(url = "", init = {body: null}) {
        const [queryParams,index] = getQuery(url);
        return {
            data: await (await fetch(url, {
                body: init.body,
                method: this.post.name.toUpperCase(),
                headers: {
                    'Content-Type': 'application/json',
                    'charset': 'UTF-8'
                },
            })).json(),
            method: this.post.name.toUpperCase(),
            url,
            ok: true,
            statusCode: 201,
            queryParams: index !== -1 ? queryParams : null
        }
    }
    async put(url = "", id , init = {body: null}) {
        const [queryParams,index] = getQuery(url);
        return {
            data: await (await fetch(`${url}/${id}`, {
                body: init.body,
                method: this.put.name.toUpperCase(),
                headers: {
                    'Content-Type': 'application/json',
                    'charset': 'UTF-8'
                },
            })).json(),
            method: this.put.name.toUpperCase(),
            url: `${url}/${id}`,
            ok: true,
            statusCode: 204,
            queryParams: index !== -1 ? queryParams : null
        }
    }
    async delete(url = "", id) {
        const [queryParams,index] = getQuery(url);
        return {
            data: await (await fetch(`${url}/${id}`, {
                method: this.delete.name.toUpperCase(),
                headers: {
                    'Content-Type': 'application/json',
                    'charset': 'UTF-8'
                },
            })).json(),
            method: this.delete.name.toUpperCase(),
            url: `${url}/${id}`,
            ok: true,
            statusCode: 202,
            queryParams: index !== -1 ? queryParams : null
        }
    }
    toJSON(object) {
        return JSON.stringify(object)
    }
}