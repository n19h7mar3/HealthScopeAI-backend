const express = require('express');
const app = express();

app.use('/api/auth', require('./routers/auth'));
app.use('/api/chat', require('./routers/chat'));
app.use('/api/user', require('./routers/user'));

app.listen(80);
