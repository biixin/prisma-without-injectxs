import { Request, Response } from 'express';
import { prisma } from '../database/prisma';

export class CreateProductCategoryController {
  async handle(req: Request, res: Response) {
    const {id_product, id_category} = req.body

    const category = await prisma.productCategory.create({
      data: {
        id_category,
        id_product
      }
    })
    return res.status(201).json({category});
  }
}