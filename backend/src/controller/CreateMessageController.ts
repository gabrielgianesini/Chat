import { Request, Response } from 'express';
import { CreateMessageService } from '../services/CreateMessageService';

class CreateMessageController {
  async handle(request: Request, response: Response) {
    
    const { message, user_id } = request.body;
    console.log(user_id);

    const createMessageService = new CreateMessageService();
    try {
      const result = await createMessageService.execute(message, user_id);

      return response.json(result);
    } catch (err) {
      return response.json({ erro: err });
    }
  }
}

export { CreateMessageController };
