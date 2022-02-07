import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
//errorCode = Erro tratado

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request & { user_id: string },
  response: Response,
  next: NextFunction,
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({
      errorCode: 'token.invalid',
    });
  }

  const [, token] = authToken.split(' ');

  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as IPayload;

    request.body.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).json({ errorCode: 'token.expired' });
  }
}
