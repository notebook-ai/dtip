import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PagesController {
  public async index({ view }: HttpContextContract) {
    return view.render("welcome")
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}


  public async aboutPage({ view }: HttpContextContract)
  {
    return view.render("about")
  }

  public async contactPage({ view }: HttpContextContract)
  {
    return view.render("contact")
  }
}
