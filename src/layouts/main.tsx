const Layout = ({ children }: { children: React.ReactNode}) => {
    return(<>
        <main>
            {children}
        </main>
        <style jsx>{`
            main {
                max-width: 800px;
                margin: 0 auto;
                padding: 0 15px;
            }
        `}</style>
    </>);
}

export default Layout;