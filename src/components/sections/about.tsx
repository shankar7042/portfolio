import { Card, CardContent } from '@/components/ui/card'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { summary } from '@/data/resume'

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About"
          title="Professional summary"
          description="A quick look at who I am, what I do, and the results I deliver."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {summary.map((paragraph, i) => (
            <Reveal key={i} delay={i * 100}>
              <Card className="h-full border-border/60 bg-card/50 transition-colors hover:border-primary/40">
                <CardContent>
                  <span className="text-4xl font-extrabold text-primary/30">0{i + 1}</span>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{paragraph}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
