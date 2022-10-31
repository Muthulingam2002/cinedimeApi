import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRoutes from './routes/UserRoutes.js'

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://muthu:muthu@cluster0.13aqazl.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/user", userRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to cindDime api")
})

app.listen(8000, (req, res) => {
  console.log("hello world");
});
