import 'dotenv/config'
import express, { response } from 'express';
import cors from 'cors';


const port = 5000;

const app = express();

app.use(
  cors({
    credentials: true,
    methods: '*',
    origin: true,
  }),
);

app.use(express.json());

app.get("/github", (req, res) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
})

app.get('/signin/callback', (req, res) =>{
  const { code } = req.query;
  return res.json(code)
})

app.listen(port, () => console.log(`🚀 Server is running on PORT ${port}`));
