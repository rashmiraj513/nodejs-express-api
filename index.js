import express from 'express';
import mongoose from 'mongoose';
import routes from './src/routes/apiRoutes';

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost/APIdb', {
  useNewUrlParser: true
}, console.log('Database connection established!'));

app.use(express.urlencoded( { extended: true }))
app.use(express.json());

routes(app);

app.get('/', (req, res) => 
  res.send(`Node & Express Server is running at port ${PORT}.`)
);

app.listen(PORT, () => 
  console.log(`Server is listening on port ${PORT}.`)
);