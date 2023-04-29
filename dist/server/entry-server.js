import * as jsxRuntime from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { useState } from "react";
import { Typography } from "@mui/material";
const Fragment = jsxRuntime.Fragment;
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
function About() {
  return /* @__PURE__ */ jsx("h1", { children: "About" });
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About
}, Symbol.toStringTag, { value: "Module" }));
const Home = () => {
  const [counter, setCounter] = useState(0);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "home" }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsxs("div", { children: [
      "Button clicked ",
      counter,
      " times"
    ] }),
    /* @__PURE__ */ jsx("button", { onClick: () => setCounter((prevState) => prevState + 1), children: "click" })
  ] });
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home
}, Symbol.toStringTag, { value: "Module" }));
const Header = ({
  name,
  jobTitle
}) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Typography, { component: "h1", children: name }),
    /* @__PURE__ */ jsx(Typography, { component: "h2", children: jobTitle })
  ] });
};
const PagePathWithComponents = /* @__PURE__ */ Object.assign({ "./pages/About.tsx": __vite_glob_0_0, "./pages/Home.tsx": __vite_glob_0_1 });
Object.keys(PagePathWithComponents).map((path) => {
  const name = path.match(/\.\/pages\/(.*)\.tsx$/)[1];
  return {
    name,
    path: name === "Home" ? "/" : `/${name.toLowerCase()}`,
    component: PagePathWithComponents[path].default
  };
});
const App = () => {
  const [profile] = useState({
    name: "Stan Mao",
    jobTitle: "Senior Frontend Developer"
  });
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Header, { ...profile }) });
};
function SSRRender(url) {
  return ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsx(App, {}) })
  );
}
export {
  SSRRender
};
