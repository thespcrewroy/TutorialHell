<a name="_qph3n655ck5k"></a>What is NGINX?

- Airbnb.ca → Inspect → Network
- **Google Dev Tools Network Tab**: shows network requests made from the browser to a particular server to get content from
- **Web Server:** a server that serves web content to the browser.
- **Reverse Proxy:** when we click on Airbnb.ca, a request is sent over the internet to an NGINX web server, and then NGINX makes a request to the Airbnb AWS server, the server processes the request, the response is sent to the NGINX server, and finally NGINX sends the response to the browser
- **HTTPS:** the server is encrypting the data that is being sent and returned. Having multiple servers creates an issue since you have to encrypt every single one
- You could just take the NGINX middleman out, however,
  - If your website receives a lot of traffic, NGINX can increase the number of AWS servers to to avoid low latency for the user
  - **Load Balancer:** NGINX is responsible for sending requests to servers that are working the least to optimize server space
  - All encryption and decryption happens in NGINX so that you do not have to do it for every single server

<a name="_3y1gn79jd8nz"></a>NGINX Installation

- **brew install nginx**: installs nginx package using homebrew to /usr/local/etc/
- **nginx -t:** find where your nginx package is
- **cd /opt/homebrew/etc/nginx/:** change into the nginx directory
- **code .**: open up VS Code and navigate to the nginx.config file
- **nginx:** type this in the terminal to start nginx
- **chrome → search bar → localhost:8080:** we are making a request to nginx on port 8080 and nginx is serving us this content
- Go to networks → headers → server, and you will see that nginx is the webserver that is serving us the webpage

<a name="_iwp5hmr0cviw"></a>NGINX Terminology

- **Directives:** key-value pairs of the nginx config file
- **Context:** the blocks surrounding the key value pairs
- **http Context:** defines our http server. Directives inside http context define it.

<a name="_dzzm91gkfakb"></a>Serving Static Content

- Delete everything in the nginx.config file
- Create an index.html file in the Desktop environment
- We want to configure NGINX to serve our html file whenever we go to localhost:8080
- We need an http context since we are dealing with http responses
- We need an events context
- Place a server context inside the http context
- We want a “listen 8080” directive inside http-server since we are listening on port 8080
- We want a root directive inside http-server that lists the file path to the project folder or repository we want to serve when we go to port 8080
  - First, right click the index.html file in VS Code and copy the file path
  - In the nginx.config within http-server context, type “root [filepath];”
- After making changes to nginx.config, open the VS Code terminal and type “**nginx -s reload**” to update and launch the changes

<a name="_oxe2fpa1fhbv"></a>Mime Types

- Add a styles.css file to your project and link it to your html
- However, the styles do not apply when you reload the page, even though the styles is shown on the network tab of google dev tools
- If you scroll through the styles.css from the network headers tab, you see that the styles.css “Content-Type” is text/plain, when it should be text/css
- To fix this
  - Create a “include mime.types” directive inside the http context
  - Perform a hard reload with **COMMAND + SHIFT + R**

<a name="_sro0jifm6xtk"></a>Location Block

- **root:** append a new page
- **alias:** create an alias for the same page
- **try\_files:** consider these listed files, and if it produces 403 forbidden, throw a 404 error
- We add a fruits directory and an index.html file in it and want to show it on the webpage
  - Go back and create a “location /fruits” context inside server context
  - Copy and paste the “root [filepath]” directive within the server-location context
- We want the carbs and fruit to be interchangeable in the search and still produce the same webpage, what do we do?
  - Create a “location /carbs” context inside server context
  - Create an “alias [filepath]/fruits” directive within the server location context
- We create a vegetables folder with veggies.html, but it produces a 403 forbidden error when we try to do the normal location context and root directive?
  - Add a try\_files directive with “/vegetables/veggies.html =404” which tries to load the veggies.html file and then throws a 404 error if it does not
- What if we want the localhost:8080/count/1, localhost:8080/count/2, … up till count/9 to bring us to the index.html page
  - Use **regex** in the location context to create “~\* location /count/[0-9] {}”
  - Then put “root [filepath];” and “try\_files /index.html =404;” in it

<a name="_uxyp1i4fbdjz"></a>Rewrite and Redirect

- **307:** status code represents a temporary redirect
- If I append crops to the search query, I want it to redirect to fruits
  - Create a “location /crops” context
  - Within it, “put a return 307 /fruits;” directive
- What if I want to append number/# to the uri and not just count/#
  - rewrite: allows you to provide another option for a uri that performs a function
  - Create a “rewrite ^/number/(\w+) /count/$1;” directive under the server context
    - **\w+:**  represents a variable
    - The number rewrites the count

<a name="_gj64ku4xlojp"></a>Load Balancer

- Instead of client worrying which server to make a request to, it’s instead going to make a request to to the internet which is caught by NGINX, and then it becomes NGINX’s responsibility to forward that request to a server it chooses using an algorithm
- **Round Robin Algorithm:** the most common algorithm where it switches servers after handling the request and response from one server. It keeps moving back and forth through all the servers in a round robin approach.
- **Docker:** best way to build servers as it builds server containers that are isolated
- Create a server directory
- Create an index.js in the directory
- Go to terminal and execute **npm init -y** to initialize a node app
- Run **npm install express** to create a server
- Put the following javascript code in index.js
  - const express = require("express");

  - const app = express();

  - app.get("/", (req, res) => {
  - `    `res.send("I am an endpoint")
  - })

  - app.listen(7777, () => {
  - `    `console.log("listening on port 7777")
  - })
- Add to the scripts header in package.json **"start": "node index.js"**
- Run **npm run start**
- Create a docker file called “Dockerfile” with the following text
  - FROM node:16

  - # Create app directory by specifying working directory
  - WORKDIR /usr/src/app

  - # A wildcard is used to ensure package.json AND package-lock.json are copied
  - # where available (npm@5+)
  - COPY package\*.json ./

  - RUN npm install
  - # If you are building your code for production
  - # RUN npm ci --only=production

  - COPY . .

  - EXPOSE 7777
  - CMD [ "npm", "run", "start" ]
- [Install docker](https://docs.docker.com/desktop/install/mac-install/#system-requirements)
- Run **docker build . -t [nameOfServer]** to build the docker server
- You can view the docker server image in the desktop application
- Close port 7777 with CTRL + C on that terminal that first ran nodejs
- Run **docker run -p 1111:7777 -d myserver**
  - Run containers off that image
  - Map the container to run on port 1111 on my machine from port 777 to run multiple instances of the app
  - Run it in detached mode
- Check the docker desktop app’s container’s section, where you should see your server
- Create 3 more servers by running 
  - docker run -p 2222:7777 -d myserver
  - docker run -p 3333:7777 -d myserver
  - docker run -p 4444:7777 -d myserver
- Add the round robin functionality
  - Go to nginx.config
  - Specify the locations of the backend server (place within http context)
    - upstream backendserver {
    - `        `server 127.0.0.1:1111;
    - `        `server 127.0.0.1:2222;
    - `        `server 127.0.0.1:3333;
    - `        `server 127.0.0.1:4444;
    - `    `}
  - Specify to change locations to server below in backendserver context (place within http-server context)
  - location / {
  - `            `proxy\_pass http://backendserver/;
  - `        `}
