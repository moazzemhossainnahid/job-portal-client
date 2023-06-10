import { Response } from '@helper/response'
import { Category } from '@models/category'

import { v4 as uuid } from 'uuid'

const response = new Response()

// -------- category -------- //

export const category = async (req, res) => {
  //---- get categories

  if (req.method === 'GET') {
    try {
      const result = await Category.find({}, '-_id -created_at -__v')

      response.SUCCESS(res, result)
    } catch (error) {
      response.INTERNAL_SERVER_ERROR(res, error)
    }
  }

  //----   create category
  else if (req.method === 'POST') {
    const { name, parent_id, image } = req.body

    if (!name) return response.BAD_REQUEST(res, "Name can't be empty")

    try {
     
      const id = uuid()

      const category = new Category({
        name,
      
        image,
        parent_id: parent_id === 'NA' ? null : parent_id,
        id,
      })

      const result = await category.save()

      response.CREATED(res, result)
    } catch (error) {
      response.INTERNAL_SERVER_ERROR(res, error)
    }
  } else {
    response.METHOD_NOT_ALLOWED(res, req)
  }
}
