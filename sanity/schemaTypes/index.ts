import { type SchemaTypeDefinition } from 'sanity'
import profile from './profile'
import project from './project'
import skills from './skills'
import testimonials from './testimonials'
import siteSettings from './site-settings'
import service from './service'
import experience from './experience'
import education from './education'
import certification from './certification'
import achievement from './achievement'
import blog from './blog'
import contact from './contact'
import navigation from './navigation'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    profile,
    project,
    skills,
    experience,
    education,
    testimonials,
    certification,
    achievement,
    blog,
    service,
    contact,
    siteSettings,
    navigation
  ],
}
