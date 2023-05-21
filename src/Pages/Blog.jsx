import useTitle from "../Utils/UseTitle";

const Blog = () => {
    useTitle('Blog')
    return (
      
    <div className="p-8">
      <div className="bg-white p-4 rounded-lg shadow-xl py-8 mt-12">
        <h4 className="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">
          FAQ
        </h4>
        <p className="text-center text-gray-600 text-sm mt-2">
          Here are some of the frequently asked questions
        </p>
        <div className="space-y-12 px-2 xl:px-16 mt-12">
          <div className="mt-4 flex">
            <div>
              <div className="flex items-center h-16 border-l-4 border-blue-600">
                <span className="text-4xl text-blue-600 px-4">Q.</span>
              </div>
              <div className="flex items-center h-16 border-l-4 border-gray-400">
                <span className="text-4xl text-gray-400 px-4">A.</span>
              </div>
            </div>
            <div>
              <div className="flex items-center h-16">
                <span className="text-lg text-blue-600 font-bold">
                  What is an access token and refresh token? How do they work
                  and where should we store them on the client-side?
                </span>
              </div>
              <div className="flex items-center py-2">
                <span className="text-gray-500">
                  An access token is like a special pass that allows you to
                  access certain things, like a ticket to enter a concert. It
                  proves that you are allowed to access specific information or
                  perform certain actions on a website or app. <br />A refresh
                  token is like a secret code that helps you get a new access
                  token when the old one expires, so you can continue accessing
                  the website or app without needing to log in again. <br />
                  To store these tokens on the client-side (in a web browser or
                  app), they are usually kept in a secure storage called
                  "cookies" or "local storage" so that the website or app can
                  remember who you are and what you can access without asking
                  you to log in again and again.
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex">
            <div>
              <div className="flex items-center h-16 border-l-4 border-blue-600">
                <span className="text-4xl text-blue-600 px-4">Q.</span>
              </div>
              <div className="flex items-center h-16 border-l-4 border-gray-400">
                <span className="text-4xl text-gray-400 px-4">A.</span>
              </div>
            </div>
            <div>
              <div className="flex items-center h-16">
                <span className="text-lg text-blue-600 font-bold">
                  Compare SQL and NoSQL databases?
                </span>
              </div>
              <div className="flex items-center py-2">
                <span className="text-gray-500">
                  SQL Databases: <br />
                  SQL databases are like organized file cabinets with predefined
                  structures. They use a structured query language (SQL) to
                  interact with the data. These databases have a fixed schema,
                  meaning the structure and organization of data are defined
                  beforehand. They are suitable for handling structured data
                  with well-defined relationships between tables. SQL databases
                  are commonly used in traditional applications where data
                  consistency and strict schemas are important. <br />
                  <br />
                  NoSQL Databases: <br />
                  NoSQL databases, on the other hand, are like flexible
                  containers that can store data in various formats. They don't
                  rely on a fixed schema and allow for more dynamic and flexible
                  data models. They are suitable for handling unstructured,
                  semi-structured, or rapidly changing data. NoSQL databases can
                  handle large amounts of data and provide scalability and high
                  performance. They are often used in modern applications that
                  require flexible data models and need to handle a high volume
                  of data with varying structures.
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex">
            <div>
              <div className="flex items-center h-16 border-l-4 border-blue-600">
                <span className="text-4xl text-blue-600 px-4">Q.</span>
              </div>
              <div className="flex items-center h-16 border-l-4 border-gray-400">
                <span className="text-4xl text-gray-400 px-4">A.</span>
              </div>
            </div>
            <div>
              <div className="flex items-center h-16">
                <span className="text-lg text-blue-600 font-bold">
                  What is express js? What is Nest JS?
                </span>
              </div>
              <div className="flex items-center py-2">
                <span className="text-gray-500">
                  Express.js: <br />
                  Express.js is a minimalistic and flexible web application
                  framework for Node.js. It provides a set of features and tools
                  that make it easier to build web applications and APIs.
                  Express.js allows you to handle HTTP requests, define routes,
                  and manage middleware for processing incoming requests and
                  generating responses. It is known for its simplicity,
                  flexibility, and wide community support. Express.js is a
                  popular choice for building lightweight and fast web
                  applications. <br /> <br />
                  Nest.js: <br />
                  Nest.js is a powerful and scalable Node.js framework for
                  building server-side applications. It is built on top of
                  Express.js and leverages TypeScript to bring structure and
                  maintainability to your codebase. Nest.js follows the
                  principles of modularity and uses decorators, dependency
                  injection, and a module-based architecture to organize your
                  application's components. It provides features such as
                  routing, middleware support, data validation, and dependency
                  injection out of the box. Nest.js is designed for building
                  scalable and maintainable applications, making it a popular
                  choice for enterprise-level projects.
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex">
            <div>
              <div className="flex items-center h-16 border-l-4 border-blue-600">
                <span className="text-4xl text-blue-600 px-4">Q.</span>
              </div>
              <div className="flex items-center h-16 border-l-4 border-gray-400">
                <span className="text-4xl text-gray-400 px-4">A.</span>
              </div>
            </div>
            <div>
              <div className="flex items-center h-16">
                <span className="text-lg text-blue-600 font-bold">
                  What is MongoDB aggregate and how does it work?
                </span>
              </div>
              <div className="flex items-center py-2">
                <span className="text-gray-500">
                  MongoDB Aggregation: <br />
                  In MongoDB, aggregation is a powerful feature that allows you
                  to perform advanced data processing and analysis operations on
                  your data. It enables you to perform complex queries,
                  transformations, and calculations on the documents stored in a
                  MongoDB collection. <br /> <br />
                  How it works: <br />
                  Pipeline Stages: Aggregation in MongoDB works by using a
                  series of pipeline stages. Each stage performs a specific
                  operation on the input documents and passes the result to the
                  next stage. <br />
                  Data Transformation: The pipeline stages can perform various
                  operations such as filtering, grouping, sorting, projecting,
                  joining, and calculating aggregations like sums, averages, and
                  counts. <br />
                  Chaining Stages: You can chain multiple stages together to
                  create a sequence of operations that transform and manipulate
                  the data. Output: The final stage of the aggregation pipeline
                  returns the processed data, which can be further analyzed or
                  used in your application.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
