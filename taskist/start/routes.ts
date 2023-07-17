/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.resource('pages', 'PagesController')
Route.get('/about/:name?', 'PagesController.aboutPage').as('about_page')
Route.get('/contact', 'PagesController.contactPage').as('contact_page')


// Route.get('/home', async ({ view }) => {
//   return view.render('welcome2')
// })


// Route.get('/about/:name?', async ({ params }) => {
//   if (params.name)
//   {
//     return `this is a about page for ${params.name}`
//   }
//   return `this is a about page `
//   // return `${params.name}`
//   // return `this is a about page for ${params.name}`
// })


// Route.get('/about/:name', async ({ params }) => {
//   // return `${params.name}`
//   return `this is a about page for ${params.name}`
// })




// Route.get('/about', async () => {
//   return "this is a about page"
// })

// Route.post()
// Route.put()
// Route.patch()
// Route.delete()
