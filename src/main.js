import AppLayout from "./AppLayout.svelte";
import "./common.css";

const app = new AppLayout({
  target: document.getElementById("app"),
});

export default app;
