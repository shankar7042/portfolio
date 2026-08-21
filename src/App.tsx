import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Skills } from '@/components/sections/skills'
import { Experience } from '@/components/sections/experience'
import { Credentials } from '@/components/sections/credentials'

export function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Credentials />
      </main>
      <SiteFooter />
    </div>
  )
}
