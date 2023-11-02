import app from './infraestructure/server';
import { serverConfig } from './config';

app.listen(serverConfig.PORT, () => {
  console.info(`Server running on port ${serverConfig.PORT}`);
});
