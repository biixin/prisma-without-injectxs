import { Request, Response } from 'express';
import { prisma } from '../database/prisma';

export class FindCategoryController {
  async handle(req: Request, res: Response) {
    const {id} = req.params
    const product = await prisma.category.findFirst({
      where: {
        id,
      },
      include: {
        ProductCategory: {
          select: {
            product: {
              select: {
                name: true
              }
            }
          }
        }
      }
    })

    return res.status(201).json({product});
  }
}