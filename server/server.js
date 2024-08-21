// server/server.js
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../src/App";
import path from 'path';


const app = express();

app.get("/main.js", (req, res) =>
{
  res.send({})
});

app.get("/favicon.ico", (req, res) =>
{
  const fileDirectory = path.resolve(__dirname, '.', 'public');

  res.sendFile('favicon.ico', {root: fileDirectory}, (err) => {
    res.end();

    if (err) throw(err);
  });
});

app.get("/*", (req, res) =>
{
  const entryPoint = ["/main.js"];

  const { pipe, abort: _abort } = ReactDOMServer.renderToPipeableStream(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>,
    {
      bootstrapScripts: entryPoint,
      onShellReady() {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        pipe(res);
      },
      onShellError() {
        res.statusCode = 500;
        res.send("<!doctype html><p>Loading...</p>");
      },
    }
  );
});

app.listen(3002, () => {
  console.log("App is running on http://localhost:3002");
});
