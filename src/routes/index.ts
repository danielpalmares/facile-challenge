import express from 'express';
import { createNameController } from '../useCases/CreateName';
import { findNameController } from '../useCases/FindName';

export const router = express.Router();

router
  .post('/encrypts/:name', (request, response) =>
    createNameController.handle(request, response)
  )
  .get('/encrypts/:id', (request, response) =>
    findNameController.handle(request, response)
  );
