import { NextApiRequest } from "next";

const getServerSideProps = ({ query }: NextApiRequest) => {
    const { search } = query;
    return {redirect: {destination: `tecnologias/${search || "_"}`}}
};

export { getServerSideProps };

export default () => null;