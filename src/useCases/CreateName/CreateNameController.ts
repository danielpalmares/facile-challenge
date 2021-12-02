import { Request, Response } from 'express';
import { CreateNameUseCase } from './CreateNameUseCase';

export class CreateNameController {
  constructor(private createNameUseCase: CreateNameUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.params;

    try {
      const id = await this.createNameUseCase.execute(name);

      return response.json({ id });
    } catch (error: any) {
      const statusCode = error.code || 500;

      return response
        .status(statusCode)
        .json({ code: statusCode, message: error.message });
    }
  }
}
