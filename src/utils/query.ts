const queryStringToString = (queryString: string | string[] | undefined) => {
    if(!queryString) return "";
    if(Array.isArray(queryString)) return queryString[0];
    return queryString;
}

export {
    queryStringToString
}