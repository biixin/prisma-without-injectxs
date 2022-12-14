import { Request, Response } from 'express';
import { prisma } from '../database/prisma';

export class FindProductController {
  async handle(req: Request, res: Response) {
    const {id} = req.params
    const product = await prisma.product.findFirst({
      where: {
        id,
      },
      include: {
        ProductCategory: {
          select: {
            category: {
              select: {
                name: true
              }
            }
          },
        }
      },
    })

    return res.status(201).json({product});
  }
}