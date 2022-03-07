import { Router } from 'express';
import { AuthenticateUserController } from '../controller/AuthenticateUserController';
import { CreateMessageController } from '../controller/CreateMessageController';
import { GetLast5MessagesController } from '../controller/GetLast5MessagesController';
import { ProfileUserController } from '../controller/ProfileUserController';
import { ensureAuthenticated } from '../middleware/ensureAuthenticated';

const router = Router();

router.post('/authenticate', new AuthenticateUserController().handle);

router.post(
  '/messages',
  ensureAuthenticated,
  new CreateMessageController().handle,
);

router.get('/messages/last5', new GetLast5MessagesController().handle);

router.get('/profile', ensureAuthenticated, new ProfileUserController().handle);

export { router };
