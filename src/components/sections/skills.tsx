import {
  Cloud,
  Database,
  FlaskConical,
  LayoutTemplate,
  Server,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { skillGroups } from '@/data/resume'

const icons: Record<string, LucideIcon> = {
  layout: LayoutTemplate,
  server: Server,
  database: Database,
  cloud: Cloud,
  flask: FlaskConical,
  sparkles: Sparkles,
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-muted/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Technical toolkit"
          description="Technologies and practices I use to ship reliable products every day."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon] ?? Sparkles
            return (
              <Reveal key={group.title} delay={(i % 3) * 100}>
                <Card className="h-full border-border/60 bg-card transition-colors hover:border-primary/40">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2.5 text-base font-semibold">
                      <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="size-4.5" />
                      </span>
                      {group.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="font-medium text-secondary-foreground/90"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
