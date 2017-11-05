const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const AppRoutes = require('./routes');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(AppRoutes);
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
