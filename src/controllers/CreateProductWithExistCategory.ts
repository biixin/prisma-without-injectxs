import { Request, Response } from 'express';
import { prisma } from '../database/prisma';

export class CreateProductWithCategory {
  async handle(req: Request, res: Response) {
    const {name, price, bar_code, id_category} = req.body
    const product = await prisma.productCategory.create({
      data: {
        product: {
          create: {
            bar_code,
            name,
            price
          }
        },
        category: {
          connect: {
            id: id_category
          }
        }
      }
    })

    return res.status(201).json({product});
  }
}