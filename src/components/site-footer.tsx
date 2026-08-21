import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Reveal } from '@/components/reveal'
import { profile } from '@/data/resume'

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">Contact</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Let&apos;s build something great together
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">
              I&apos;m open to senior full-stack roles and interesting collaborations. The fastest
              way to reach me is by email — I usually reply within a day.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="rounded-full">
                <a href={`mailto:${profile.email}`}>
                  <Mail />
                  {profile.email}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href={`tel:${profile.phone}`}>
                  <Phone />
                  {profile.phoneDisplay}
                </a>
              </Button>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              <Button asChild variant="ghost" size="icon" aria-label="GitHub profile">
                <a href={profile.github} target="_blank" rel="noreferrer noopener">
                  <GithubIcon className="size-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" aria-label="LinkedIn profile">
                <a href={profile.linkedin} target="_blank" rel="noreferrer noopener">
                  <LinkedinIcon className="size-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" aria-label="Email">
                <a href={`mailto:${profile.email}`}>
                  <Mail className="size-5" />
                </a>
              </Button>
            </div>
          </div>
        </Reveal>

        <Separator className="my-10" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <a
            href="#top"
            className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
          >
            Back to top
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
