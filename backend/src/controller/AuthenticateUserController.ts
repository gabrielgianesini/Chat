import { Request, Response } from 'express';
import { AuthenticateUserService } from '../services/AuthenticateUserServices';

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { code } = request.body;

    const service = new AuthenticateUserService();
    try {
      const result = await service.execute(code);
      return response.json(result);
    } catch (err) {
      console.log('entrou no erro');
      
      return response.json({ error: err.message });
    }
  }
}

export { AuthenticateUserController };
