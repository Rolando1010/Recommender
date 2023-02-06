const queryStringToString = (queryString: string | string[] | undefined) => {
    if(!queryString) return "";
    if(Array.isArray(queryString)) return queryString[0];
    return queryString;
}

const extractListFromText = (text: string) => {
    return text.split("\n").reduce((acc: {name: string, description: string}[], el) => {
        let nameBeginPosition = 0;
        const nameLastPosition = el.includes(":") ? el.indexOf(":") : el.length;
        if(el[0] === "-"){
            nameBeginPosition = el[1] === " " ? 2 : 1;
        }
        else if(el[0] !== " " && Number.isInteger(Number(el[0]))){
            nameBeginPosition = el.indexOf(".") + 2;
        }
        const newElement = {
            name: el.slice(nameBeginPosition, nameLastPosition),
            description: el.slice(nameLastPosition + 1).trim()
        };
        if(
            newElement.name &&
            !acc.some(acc => acc.name === newElement.name) &&
            !(el.includes(":") && !newElement.description)
        ){
            return [...acc, newElement];
        }
        return acc;
    }, []);
}

export {
    queryStringToString,
    extractListFromText
}