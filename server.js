'use strict';

const express = require('express');

// Constants
const PORT = 8082;
const HOST = '0.0.0.0';

const HTMLPAGE = `<!DOCTYPE html>
<html>
<body>

<h1>Carlo's very basic web service</h1>

<p>Testing Cloud Native tools. Third iteration..</p>

</body>
</html>
`

// App
const app = express();
app.get('/', (req, res) => {
  res.send(HTMLPAGE);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

