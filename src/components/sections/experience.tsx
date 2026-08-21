import { Briefcase } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { experience } from '@/data/resume'

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="Six years of shipping full-stack products across enterprise clients."
        />

        <div className="relative">
          <div
            aria-hidden
            className="absolute top-2 bottom-2 left-[19px] w-px bg-gradient-to-b from-primary/60 via-border to-transparent sm:left-[23px]"
          />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 120}>
                <div className="relative pl-12 sm:pl-16">
                  <span className="absolute top-6 left-0 flex size-10 items-center justify-center rounded-full border border-primary/30 bg-background text-primary shadow-sm sm:size-12">
                    <Briefcase className="size-4 sm:size-5" />
                  </span>

                  <Card className="border-border/60 bg-card transition-colors hover:border-primary/40">
                    <CardHeader>
                      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                        <div>
                          <h3 className="text-lg font-semibold tracking-tight">{job.role}</h3>
                          <p className="mt-0.5 text-sm font-medium text-primary">{job.company}</p>
                        </div>
                        <Badge
                          variant={job.current ? 'default' : 'secondary'}
                          className={job.current ? '' : 'font-medium text-secondary-foreground/90'}
                        >
                          {job.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2.5">
                        {job.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-3 text-sm leading-relaxed">
                            <span
                              aria-hidden
                              className="mt-[7px] size-1.5 shrink-0 rounded-full bg-primary/70"
                            />
                            <span className="text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
