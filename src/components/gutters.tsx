const GutterContainer = ({ children }: { children: React.ReactNode }) => <>
    <section>
        {children}
    </section>
    <style jsx>{`
        section {
            display: flex;
            flex-wrap: wrap;
        }

        @media (max-width: 800px){
            section {
                flex-direction: column;
            }
        }
    `}</style>
</>;

const Gutter = ({ children }: { children: React.ReactNode }) => <>
    <article>
        {children}
    </article>
    <style jsx>{`
        article {
            flex: 1;
        }
    `}</style>
</>;

export {
    GutterContainer,
    Gutter
}