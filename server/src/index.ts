import * as http from "http";
import * as debug from "debug";

import App from "./app";

debug("ts-express:server");

const port = normalizePort(process.env.PORT || 3003);
App.set("port", port);

const server = http.createServer(App);
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

function normalizePort(val: number | string): number | string | boolean {
  let normalizedPort: number = (typeof val === "string") ? parseInt(val, 10) : val;
  if (isNaN(normalizedPort)) {
    return val;
  } else if (normalizedPort >= 0) {
    return normalizedPort;
  } else { return false; }
}

// tslint:disable:no-console
function onError(error: NodeJS.ErrnoException): void {
  if (error.syscall !== "listen") { throw error; }
  let bind = (typeof port === "string") ? "Pipe " + port : "Port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}
// tslint:enable:no-console

function onListening(): void {
  let addr = server.address();
  let bind = (typeof addr === "string") ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
}
