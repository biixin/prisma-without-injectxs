import { Request, Response } from 'express';
import { prisma } from '../database/prisma';

export class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const {name} = req.body

    const category = await prisma.category.create({
      data: {
        name
      }
    })
    return res.status(201).json({category});
  }
}