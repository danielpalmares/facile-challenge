import { Request, Response } from 'express';
import { FindNameUseCase } from './FindNameUseCase';

export class FindNameController {
  constructor(private findNameUseCase: FindNameUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const id = +request.params.id;

    try {
      const encryptedName = await this.findNameUseCase.execute(id);

      return response.json(encryptedName);
    } catch (error: any) {
      const statusCode = error.code || 500;

      return response
        .status(statusCode)
        .json({ code: statusCode, message: error.message });
    }
  }
}
