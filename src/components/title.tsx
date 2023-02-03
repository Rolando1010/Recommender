const Title = ({ children }: { children: string }) => {
    return (<>
        <h1>{children}</h1>
        <style jsx>{`
            h1 {
                text-align: center;
                background: linear-gradient(to right, var(--primary-1) 0%, var(--light-1) 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                margin: 25px 0;
                font-size: 32px;
            }
        `}</style>
    </>);
}

export default Title;