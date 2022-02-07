import { serverHttp } from './app';

const port = 5000;

serverHttp.listen(port, () =>
  console.log(`🚀 Server is running on PORT ${port}`),
);
