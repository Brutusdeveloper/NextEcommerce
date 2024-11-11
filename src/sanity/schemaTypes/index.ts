import { type SchemaTypeDefinition } from 'sanity'
import banner from '../schemas/banner'
import category from '../schemas/category'
import products from '../schemas/products'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [banner, category, products],
}
