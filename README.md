# hwp-azure-app-service
Express based website that streams 3D data from an Azure instance

Live: http://hoops-web-demo.azurewebsites.net/

Training class: https://youtu.be/7RQ9v9JbYd8?t=3031

## License String
To run you must get a HOOPS Web Platform or HOOPS Communicator license string from manage.techsoft3d.com or developer.techsoft3d.com and add it to /bin/www.

## Running locally
> npm install
> npm start
open http://localhost:3000/ in a browser window

## Running on Azure
In the Azure online Portal:
- Create an App Service Plan (ASP)
- Create App Service using:
  - Code
  - Node 12 LTS - Or your preferred version of Node
  - ndows or Linux - The github repo below runs a windows executable, you’ll need to edit it for linux
  - Standard S1 - This is important because it supports 64bit, necessary to data streaming
- Go to App Service | Configuration | General settings
  - Enable 64bit & WebSockets
  - Select Save.
On your local machine deploy the folder \hwp-azure-app-service folder to Azure App Service via the VSCode extension
Browse to http://*yourUniqueUrl*.azurewebsites.net

## Possible Improvements
- The application only serves one client connection at a time, streaming data via a WebSocket connection on port 11180. Remove use of port 11180, but instead create a pool of ports (possibly managed by a map), monitors client connections, and for each connection, use an available open port
- Implement HTTPS and secure WebSockets
- Instead of waiting 500ms for a child process to spawn, wait until the child process produces a “ready” liveliness ping.
- Implement a version that spawns a Linux stream cache server
