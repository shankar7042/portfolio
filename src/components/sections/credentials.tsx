import { Award, BadgeCheck, GraduationCap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { awards, certifications, education } from '@/data/resume'

export function Credentials() {
  return (
    <section id="education" className="scroll-mt-20 bg-muted/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Credentials"
          title="Education, certifications & awards"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal>
            <Card className="h-full border-border/60 bg-card transition-colors hover:border-primary/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2.5 text-base font-semibold">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <GraduationCap className="size-4.5" />
                  </span>
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold">{education.degree}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{education.school}</p>
                <p className="mt-3 text-sm font-medium text-primary">{education.period}</p>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={100}>
            <Card className="h-full border-border/60 bg-card transition-colors hover:border-primary/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2.5 text-base font-semibold">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <BadgeCheck className="size-4.5" />
                  </span>
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2.5">
                  {certifications.map((cert) => (
                    <li key={cert} className="flex gap-2.5 text-sm leading-relaxed">
                      <BadgeCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{cert}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={200}>
            <Card className="h-full border-border/60 bg-card transition-colors hover:border-primary/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2.5 text-base font-semibold">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Award className="size-4.5" />
                  </span>
                  Honors &amp; Awards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2.5">
                  {awards.map((award) => (
                    <li key={award} className="flex gap-2.5 text-sm leading-relaxed">
                      <Award className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{award}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
