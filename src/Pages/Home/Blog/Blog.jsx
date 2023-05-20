
const Blog = () => {
    return (
        <div className="my-4 container mx-auto ">
            <h1 className="text-2xl"><span className="text-4xl">1.</span> What is an access token and refresh token? How do they work and where should we store them on the client-side? </h1>
            <p><span className="text-3xl">Ans:-</span> Access token and refresh token should not be stored in the local/session storage, because they are not a place for any sensitive data. Hence I would store the access token in a httpOnly cookie (even though there is CSRF) and I need it for most of my requests to the Resource Server anyway.</p>
            <br />
            <h1 className="text-2xl"><span className="text-4xl">2.</span> Compare SQL and NoSQL databases? </h1>
            <p><span className="text-3xl">Ans:-</span> SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            <br />
            <h1 className="text-2xl"><span className="text-4xl">3.</span>What is express js? What is Nest JS ?</h1>
            <p><span className="text-3xl">Ans:-</span> Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.</p>
            <br />
            <h1 className="text-2xl"><span className="text-4xl">3.</span>What is MongoDB aggregate and how does it work?</h1>
            <p><span className="text-3xl">Ans:-</span> What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
        </div>
    );
};

export default Blog;