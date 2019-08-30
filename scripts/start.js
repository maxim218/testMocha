"use strict";

import findMax from "./findMax";
import getSum from "./getSum";

const express = eval(`require("express")`);
const app = express();
const port = 5000;
app.listen(port);
console.log("Server on port: " + port);

app.get("/api/sum", function(request, response) {
    const a = request.query.a + "";
    const b = request.query.b + "";
    const result = getSum(a, b);
    response.end(JSON.stringify({
        result: result,
    }));
});

app.get("/api/max", function(request, response) {
    const a = request.query.a + "";
    const b = request.query.b + "";
    const c = request.query.c + "";
    const result = findMax(a, b, c);
    response.end(JSON.stringify({
        result: result,
    }));
});
