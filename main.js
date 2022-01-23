import { HttpRequest } from "./http-request.js";

const request = new HttpRequest();

// Get Request
request.get("https://jsonplaceholder.typicode.com/todos").then(res => {
    console.log(res);
})

// Post Request
const exampleData = {
    completed: true,
    id: 201,
    title: "Hi I'm a new data :)",
    userId: 10
}
request.post("https://jsonplaceholder.typicode.com/todos",{
    body: request.toJSON(exampleData)
}).then(res => console.log(res));
