import * as jsxRuntime from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
const Header = ({
  name,
  jobTitle
}) => {
  return /* @__PURE__ */ jsxs(Box, { display: "flex", flexDirection: "column", gap: 2, children: [
    /* @__PURE__ */ jsx(Typography, { variant: "h1", fontSize: "2.5rem", children: name }),
    /* @__PURE__ */ jsx(Typography, { variant: "h2", color: "gray", fontSize: "1.3rem", children: jobTitle }),
    /* @__PURE__ */ jsx(Typography, { children: "Hello I am Stan, I have been working as an engineer for six years. Three years on front-end, three years on back-end. I have been spending my spare time discovering and learning new techniques. I think It’s important to discuss with my co-workers about how to build better system architecture and use it on the official web application. Ideas sharing and team discussion play an essential part in the front-end technology. Researching the React landscape and its new trend will sure benefit our team." })
  ] });
};
const SubItem = ({ jobTitle, name, date, renderNode }) => {
  return /* @__PURE__ */ jsxs(Box, { marginBottom: 2, children: [
    /* @__PURE__ */ jsxs(Box, { display: "flex", gap: 1, alignItems: "center", children: [
      /* @__PURE__ */ jsx(Typography, { fontSize: "16px", fontWeight: 800, children: name }),
      "-",
      /* @__PURE__ */ jsx(Typography, { fontSize: "16px", fontWeight: 800, children: jobTitle })
    ] }),
    /* @__PURE__ */ jsxs(Box, { display: "flex", gap: 1, children: [
      /* @__PURE__ */ jsx(Typography, { color: "gray", fontStyle: "italic", children: date.from }),
      "-",
      /* @__PURE__ */ jsx(Typography, { color: "gray", fontStyle: "italic", children: date.to })
    ] }),
    renderNode && renderNode()
  ] });
};
const experienceList = [
  {
    name: "Chunghwa Telecom",
    jobTitle: "Senior Front-End Developer",
    location: "Taipei City, TW",
    date: {
      from: "September 2022",
      to: "Present"
    },
    descList: [
      "Implemented new features in our electric vehicle such as login module, refresh token, and tree view selection module is easier to choose organize structure.",
      "Created Media Module, which interface of upload includes preview our video files and image files.",
      "Customized digital signage layout module using vanilla javascript.",
      "In charge of department main reviewer to improve remembers code productivity and code quality."
    ]
  },
  {
    name: "imbee",
    jobTitle: "Front-End Developer",
    location: "Hong Kong, HK, REMOTE",
    date: {
      from: "November 2021",
      to: "September 2022"
    },
    descList: [
      "Sync chat content(ex. text, image, video) between public chat room and private chat room",
      "Developed common module",
      "Reporting services that provide data collection as visual diagram to client",
      "Content group module",
      "Customized count down force logout module by user setting"
    ]
  },
  {
    name: "Sinopac Security",
    jobTitle: "Senior Front-End Engineer",
    location: "Taipei City, TW",
    date: {
      from: "April 2021",
      to: "August 2021"
    },
    descList: [
      "Build inviteCode and activityCode interface to show information visualization.",
      "Build multiProcessor deal with webSocket for sub-brokerage api"
    ]
  },
  {
    name: "Anue",
    jobTitle: "Front-End Developer",
    location: "Taipei City, TW",
    date: {
      from: "March 2021",
      to: "March 2020"
    },
    descList: [
      "Created shared modules using context pattern and wrote a unit test",
      "For the specific view need to realtime updated, design a pattern to reduce 10% call api frequency",
      ""
    ]
  },
  {
    name: "NextDigital",
    jobTitle: "Software Engineer",
    location: "Taipei City, TW",
    date: {
      from: "August 2017",
      to: "February 2020"
    },
    descList: [
      "Built a content management system chatbot for news updates",
      "Designed a News content management system for reporters to upload their press releases",
      "Designed a new website using Progressive Web App for testing"
    ]
  },
  {
    name: "Pegatron",
    jobTitle: "Software Engineer",
    location: "Taipei City, TW",
    date: {
      from: "December 2015",
      to: "May 2017"
    },
    descList: [
      "Built a Inventory Management System for operators",
      "Designed a customer reports interface for specific customers"
    ]
  }
];
const Experience = () => {
  function renderSubItem(item) {
    const { descList, ...rest } = item;
    function renderItem(desc) {
      return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Typography, { fontSize: "14px", fontWeight: 500, children: desc }, desc) }, desc);
    }
    return /* @__PURE__ */ jsx(
      SubItem,
      {
        ...rest,
        renderNode: () => /* @__PURE__ */ jsx(Box, { mt: 1, children: /* @__PURE__ */ jsx("ul", { children: descList.map(renderItem) }) })
      },
      item.name
    );
  }
  return /* @__PURE__ */ jsxs(Box, { display: "flex", flexDirection: "column", gap: 2, children: [
    /* @__PURE__ */ jsx(Typography, { variant: "h6", children: "WORK EXPERIENCE" }),
    experienceList.map(renderSubItem)
  ] });
};
const Education = () => {
  return /* @__PURE__ */ jsxs(Box, { display: "flex", flexDirection: "column", gap: 2, children: [
    /* @__PURE__ */ jsx(Typography, { variant: "h6", children: "EDUCATION" }),
    /* @__PURE__ */ jsxs(Box, { children: [
      /* @__PURE__ */ jsxs(Typography, { fontSize: "16px", fontWeight: 800, children: [
        "Information Management, ",
        /* @__PURE__ */ jsx("a", { target: "__blank", href: "https://new.ntpu.edu.tw/", children: "NTPU" })
      ] }),
      /* @__PURE__ */ jsx(Typography, { variant: "subtitle2", children: "Taiwan, Master's degree" }),
      /* @__PURE__ */ jsx(Typography, { color: "gray", fontStyle: "italic", variant: "subtitle2", children: "2011 - 2014" })
    ] }),
    /* @__PURE__ */ jsxs(Box, { children: [
      /* @__PURE__ */ jsxs(Typography, { fontSize: "16px", fontWeight: 800, children: [
        "Information Management, ",
        /* @__PURE__ */ jsx("a", { target: "__blank", href: "https://www.pccu.edu.tw/intl/page/english/index.html", children: "PCCU" })
      ] }),
      /* @__PURE__ */ jsx(Typography, { variant: "subtitle2", children: "Taiwan, Bachelor's degree" }),
      /* @__PURE__ */ jsx(Typography, { color: "gray", fontStyle: "italic", variant: "subtitle2", children: "2007 - 2011" })
    ] })
  ] });
};
const Teaching = () => {
  return /* @__PURE__ */ jsxs(Box, { display: "flex", flexDirection: "column", gap: 2, children: [
    /* @__PURE__ */ jsx(Typography, { variant: "h6", children: "TEACHING EXPERIENCE" }),
    /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("li", { children: "Recoil and Jotai workshop" }),
      /* @__PURE__ */ jsx("li", { children: "XState workshop" })
    ] })
  ] });
};
const Skill = ({ stacks }) => {
  return /* @__PURE__ */ jsxs(Box, { display: "flex", flexDirection: "column", gap: 2, children: [
    /* @__PURE__ */ jsx(Typography, { variant: "h6", children: "SKILLS" }),
    /* @__PURE__ */ jsx(Box, { width: 1, display: "flex", gap: 1.5, flexWrap: "wrap", children: /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("li", { children: "JavaScript, TypeScript" }),
      /* @__PURE__ */ jsx("li", { children: "Styled-Components, Emotion" }),
      /* @__PURE__ */ jsx("li", { children: "React/Hook" }),
      /* @__PURE__ */ jsx("li", { children: "Svelte/SvelteKit" }),
      /* @__PURE__ */ jsx("li", { children: "React-Testing-Library" }),
      /* @__PURE__ */ jsx("li", { children: "Node, Nest/Express" }),
      /* @__PURE__ */ jsx("li", { children: "MongoDB" }),
      /* @__PURE__ */ jsx("li", { children: "Docker" })
    ] }) })
  ] });
};
const App = () => {
  const [profile] = useState({
    name: "Stan Mao",
    jobTitle: "Senior Frontend Developer"
  });
  return /* @__PURE__ */ jsx(Box, { width: "calc(1200px - 5rem)", margin: "0 auto", pt: 5, children: /* @__PURE__ */ jsxs(Box, { display: "flex", flexDirection: "column", gap: 3, children: [
    /* @__PURE__ */ jsx(Header, { ...profile }),
    /* @__PURE__ */ jsxs(Box, { display: "flex", width: 1, alignItems: "flex-start", justifyContent: "space-between", gap: 5, children: [
      /* @__PURE__ */ jsx(Box, { display: "flex", justifyContent: "center", children: /* @__PURE__ */ jsx(Experience, {}) }),
      /* @__PURE__ */ jsxs(Box, { gap: 5, display: "flex", flexDirection: "column", justifyContent: "center", width: "350px", children: [
        /* @__PURE__ */ jsx(Skill, {}),
        /* @__PURE__ */ jsx(Teaching, {}),
        /* @__PURE__ */ jsx(Education, {})
      ] })
    ] })
  ] }) });
};
function SSRRender(url) {
  return ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsx(App, {}) })
  );
}
export {
  SSRRender
};
