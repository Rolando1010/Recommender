enum Method {
    GET = "GET",
    POST = "POST"
}

const request = <T, U>(method: Method, url: string, body: T | null): Promise<U> => {
    return new Promise(resolve => {
        fetch(url, {
            method,
            body: body && JSON.stringify(body),
            headers: {"Content-Type": "application/json"}
        }).then(response => response.json()).then(resolve);
    });
}

const requests = {
    get: (url: string) => request(Method.GET, url, null),
    post: <T, U>(url: string, body: T) => request<T, U>(Method.POST, url, body)
}

export default requests;