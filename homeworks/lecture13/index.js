import { createRoot } from "react-dom/client";


import Lists from "./hw2";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// root.render(<App />);
root.render(<Lists />);


