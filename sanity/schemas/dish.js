export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of dish',
      validation: (rule) => rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (rule) => rule.max(200),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price of the dish in INR',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the dish',
    },
  ],
}
