import { initApp } from "./src/app.js";

const port = process.env.PORT || 3001;

console.log("Server is listening on port " + port);

initApp().listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
