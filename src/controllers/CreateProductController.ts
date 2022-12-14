import { Request, Response } from 'express';
import { prisma } from '../database/prisma';

export class CreateProductController {
  async handle(req: Request, res: Response) {
    const {name, bar_code, price} = req.body

    const products = await prisma.product.create({
      data: {
        name,
        bar_code,
        price
      }
    })
    return res.status(201).json({products});
  }
}