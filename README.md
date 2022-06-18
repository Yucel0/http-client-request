# http-request module

It is a module that hosts basic (GET,POST,PUT,DELETE) http methods.

This module uses free API Services at 'https://jsonplaceholder.typicode.com'

# Installation

npm install or npm i http-client-request

# Usage 

import { HttpRequest } from "http-client-request";

create a new instance of HttpRequest Class
const request = new HttpRequest();

# Example 

request.get("https://jsonplaceholder.typicode.com/todos")
.then(res => console.log(res.data))
.catch(err => console.log(err));