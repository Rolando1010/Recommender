import Link from "next/link";

export default async ({ children }: any) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();
    console.log("fetch de datos");
    return <>{json.map((d: any) =>
        <Link href={`/test/${d.id}`} key={d.id}>{d.name}</Link>
    )}{children}</>;
}