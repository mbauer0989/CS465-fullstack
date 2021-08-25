# Architecture
•	Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
•	Why did the backend use a NoSQL MongoDB database?

The Express and Node had logic that was executed on the server and the clients received the user interface code as HTML, CSS, and JavaScript. There is a lot of back-and-forth communications as the user navigates, clicks buttons, and many other things. Using SPA, the content and logic is sent to the client on startup. The images, style sheets, and application code are delivered to the client and handled there. Everything that was on the web server side is now moved to the client. The only communications back-and-forth is data. SPA reduces the load on servers and this can reduce the cost to host the server. SPA does not have to reload as users navigate and click buttons. SPA uses JavaScript and these are hard for search engines to index. SPA have a slower first page load. An additional functionality of SPA is URL anchors, which allow to go to a specific place on a page. The backend used NoSQL MongoDB because MongoDB stores documents as BSON which is binary JSON. JSON is a way that JavaScript stores data. Since the full stack project used JavaScript primarily MongoDB fit right into the stack. 
# Functionality
•	How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
•	Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

JSON is JavaScript Object Notation, it is the format used for storing and transporting data. Binary JSON is used by MongoDB but by using Mongoose the BJSON is exposed as JSON. Express, Node, and Angular use JSON, this makes it easy to send and receive data. A couple instances include making the trips be able to change between different views. Another was changing the backend HTML website into an application that uses the Model View Controller (MVC) design pattern. The benefits from reusable user interface (UI) components are improving efficiency because you are not creating something brand new. Improving consistency because the same UI is used throughout. One other benefit is the fact that you know the code works so testing is easier. 
# Testing
•	Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

Security is used to create authentication that requires username and passwords. My understanding is that the methods and endpoints use the authentication to make sure that a user is authorized or even logged in before allowing the user to continue.
# Reflection
•	How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course has allowed me to gain insight into how a full stack works and from this I will be able to use the skills in my profession in frontend, backend, or both. I have gained knowledge with Angular, Express, Node, and MongoDB that can be leveraged in the future. Learning MEAN, developing a full stack, working with securing the application, and overall having the experience now of doing this will make me a more marketable candidate.

