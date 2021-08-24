import React from "react";
import { renderToString } from "react-dom/server";
import express from "express";
import cors from "cors";
import App from "./src/App";
import { Helmet } from "react-helmet-async";
const app = express();  
app.use(cors());
app.get("/*", (req, res) => {
  const app = renderToString(<App />);
  const helmet = Helmet.renderStatic();

  const html = `
  <!DOCTYPE html>
  <html ${helmet.htmlAttributes.toString()}>
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
    </head>
    <body ${helmet.bodyAttributes.toString()}>
      <div id="root">
        ${app}
      </div>
      </body>
  </html>
`;
res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.send(html);
});
app.listen(8000);