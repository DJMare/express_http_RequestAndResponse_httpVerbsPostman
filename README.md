# express_http_RequestAndResponse_httpVerbsPostman
A simple http request and response app using http verbs to view basic CRUD operations in Postman. 

COMMAND PROMPT

(1) Run the following to navigate to your Desktop: 

  cd Desktop

(2) Create a new folder on desktop: 

  mkdir Express

(3) Navigate to the Express directory: 

  cd Express

(4) Run the following command to install the Express generator globally onto your computer: 

  npm install express-generator -g

(5) Enter the following command to generate the Express starter app. This will set the view to use Handlebars and will name the app express_http_RequestAndResponse_httpVerbsPostman: 

  express --view=hbs express_http_RequestAndResponse_httpVerbsPostman 

(6) Once the process is complete, navigate into the express_http_RequestAndResponse_httpVerbsPostman directory: 

  cd express_http_RequestAndResponse_httpVerbsPostman  

(7) Now in the express_http_RequestAndResponse_httpVerbsPostman directory, run the following: 

  npm install

(8) Install Nodemon globally: 

  npm install -g nodemon

(9) Start the server with Nodemon with the following command: 

  nodemon

VS CODE

(10) Open in VS code: ![open in vs code - index js (_httpVerbsPostman)](https://user-images.githubusercontent.com/35668707/67519099-fb975800-f65a-11e9-88e6-4fc2da3b63c8.JPG)

(11) Navigate to the routes/index.js file and add an the routes for basic CRUD operations: ![add routes for CRUD operations - index js (_httpVerbsPostman)](https://user-images.githubusercontent.com/35668707/67519209-38634f00-f65b-11e9-99a3-432b868202cb.JPG)


POSTMAN

(12) In Postman, navigate to localserver:3000 to see changes for each route:
![successful POST route in Postman](https://user-images.githubusercontent.com/35668707/67519294-65affd00-f65b-11e9-8f19-989920d0ec70.JPG)

![successful GET route in Postman](https://user-images.githubusercontent.com/35668707/67519347-8710e900-f65b-11e9-8f86-ee84b248e8de.JPG)

![successful PUT route in Postman](https://user-images.githubusercontent.com/35668707/67519405-a871d500-f65b-11e9-911e-e7320a7ddd8e.JPG)

![successful DELETE route in Postman](https://user-images.githubusercontent.com/35668707/67519465-c4757680-f65b-11e9-957f-49f16857ce49.JPG)
