import Layout from "src/layouts/main";
import SearchForm from "src/pages/pages/search-form";

const PagesLayout = ({ children, params }: {children: React.ReactNode, params: {search: string}}) => {
    const { search } = params;
    
    return(
        <Layout>
            <SearchForm search={search}/>
            {children}
        </Layout>
    );
}

export default PagesLayout;