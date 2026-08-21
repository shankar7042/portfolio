import { ArrowRight, Mail, Phone } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { profile, stats } from '@/data/resume'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)]" />
        <div className="absolute -top-32 left-1/2 h-[420px] w-[720px] max-w-full -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pt-20 pb-16 text-center sm:px-6 sm:pt-28 sm:pb-24">
        <Reveal>
          <Badge variant="outline" className="gap-2 rounded-full px-4 py-1.5 text-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {profile.role}
          </Badge>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-balance sm:text-6xl md:text-7xl">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground text-pretty sm:text-xl">
            {profile.tagline}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="rounded-full">
              <a href={`mailto:${profile.email}`}>
                <Mail />
                Get in touch
                <ArrowRight />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href={profile.github} target="_blank" rel="noreferrer noopener">
                <GithubIcon className="size-4" />
                GitHub
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href={profile.linkedin} target="_blank" rel="noreferrer noopener">
                <LinkedinIcon className="size-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Mail className="size-4" />
              {profile.email}
            </a>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <a
              href={`tel:${profile.phone}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Phone className="size-4" />
              {profile.phoneDisplay}
            </a>
          </div>
        </Reveal>

        <Reveal delay={500} className="mt-16 w-full">
          <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm"
              >
                <dt className="order-last mt-1 text-sm text-muted-foreground">{stat.label}</dt>
                <dd className="text-3xl font-bold tracking-tight text-primary">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
