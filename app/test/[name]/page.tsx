export default async ({ params, searchParams }: any) => {
    const {name} = params;
    const response = await fetch("https://jsonplaceholder.typicode.com/users/"+name);
    const json = await response.json();
    return <h1>{json.name}</h1>
}