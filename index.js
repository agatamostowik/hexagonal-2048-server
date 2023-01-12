import { initApp } from "./src/app.js";

const port = process.env.PORT || 3001;

initApp().listen(port, () => {});
