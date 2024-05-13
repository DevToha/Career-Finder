

const Blogs = () => {
    return (
        <div className="border-2 bg-gray-300 w-[1300px] h-auto py-10 px-16 mt-10 rounded-xl border-gray-400 ml-[108px]">
            <div>
                <div>
                    <h1 className="text-2xl font-extrabold mb-3">First Question</h1>
                    <p className="text-base font-semibold mb-3">1. What is an access token and refresh token? How do they work and where should
                        we store them on the client side?
                    </p>
                    <h1 className="text-2xl font-bold mb-5">Answer : </h1>
                    <p>
                        Access tokens and refresh tokens are commonly used in authentication systems, especially in OAuth2-based authentication flows. <br />

                       <br /> <span className="text-xl font-semibold">Access Token: <br /></span>

                        - An access token is a credential used by a client to access protected resources on behalf of a user. <br />
                        - It is usually short-lived, typically lasting only a few minutes to an hour. <br />
                        - Access tokens are issued by the authorization server after successful authentication and authorization. <br />
                        - They are sent along with each request to access protected resources. <br />
                        - Access tokens contain information about the user and their permissions. <br />
                        <span className="text-xl font-semibold">Refresh Token: <br /></span>

                        - A refresh token is a credential used to obtain a new access token when the current access token expires. <br />
                        - Unlike access tokens, refresh tokens are long-lived, often lasting for days or weeks. <br />
                        - Refresh tokens are securely stored by the client and are not sent with every request. <br />

                        <span className="text-xl font-semibold">How They Work: <br /></span>

                        - When a user logs in or grants authorization, the server issues both an access token and a refresh token. <br />
                        - The client stores the refresh token securely, usually in a secure HTTP-only cookie or local storage. <br />
                        - The client sends the access token with each request to access protected resources. <br />

                        <span className="text-xl font-semibold">Where to Store Them on the Client Side: <br /></span>
                        - Access tokens should be stored in memory (such as in a JavaScript variable) or in a short-lived storage mechanism like session storage. <br />
                        - Refresh tokens should be stored securely, typically in an HTTP-only cookie or secure local storage. <br />
                        - Storing refresh tokens in HTTP-only cookies helps mitigate certain security risks, such as cross-site scripting (XSS) attacks. <br />
                        - Storing refresh tokens in secure local storage is also common, but it may be vulnerable to XSS attacks if not properly secured.</p>
                </div>
                <div className="mt-8">
                    <h1 className="text-2xl font-extrabold mb-3">Second Question</h1>
                    <p className="text-base font-semibold mb-3">2. What is express js?</p>
                    <h1 className="text-2xl font-bold mb-5">Answer : </h1>
                    <p>
                        Express.js is a framework for building web applications in Node.js. It simplifies tasks like handling requests and responses, routing, and middleware. <br /> It's popular because it's flexible and easy to use.
                    </p>
                </div>
                <div className="mt-8">
                    <h1 className="text-2xl font-extrabold mb-3">Third Question</h1>
                    <p className="text-base font-semibold mb-3">3. What is Nest JS ?</p>
                    <h1 className="text-2xl font-bold mb-4">Answer : </h1>
                    <p>
                        NestJS is a framework for Node.js, but it's more structured and scalable. It's built on top of Express and uses TypeScript. NestJS helps developers build reliable and maintainable server-side applications, especially for larger projects.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;