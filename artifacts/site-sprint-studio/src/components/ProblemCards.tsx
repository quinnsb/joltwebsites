import { motion } from 'framer-motion';
import { Smartphone, HelpCircle, PhoneOff, ImageOff, UserMinus, SearchX } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const problems = [
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: 'Looks broken on phones',
    description: 'Pinch-to-zoom is the enemy of quote requests. If they can\'t read it on their phone, they\'re leaving.'
  },
  {
    icon: <HelpCircle className="h-6 w-6" />,
    title: "Visitors can't figure out what you do",
    description: 'Industry jargon and walls of text confuse people who just want to know if you can solve their problem.'
  },
  {
    icon: <PhoneOff className="h-6 w-6" />,
    title: 'Customers give up before contacting you',
    description: 'A buried phone number or broken 10-field form kills leads. People want one obvious next step.'
  },
  {
    icon: <ImageOff className="h-6 w-6" />,
    title: 'Nothing makes you look trustworthy',
    description: 'Stock photos of fake houses don\'t build trust. People want to see real trucks, real work, and real reviews.'
  },
  {
    icon: <UserMinus className="h-6 w-6" />,
    title: "It's about you, not them",
    description: 'Your story matters, but customers first need to know how you\'re going to help them — not who founded the company.'
  },
  {
    icon: <SearchX className="h-6 w-6" />,
    title: 'Your Google clicks go nowhere',
    description: 'If someone searches "roof repair near me" and lands on a generic homepage, they have to work too hard to contact you.'
  }
];

export function ProblemCards() {
  return (
    <section id="problem" className="py-20 md:py-32 bg-secondary/40 border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 leading-tight">
            Your website might be costing you real jobs.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Most people don't need to be convinced that your business exists. They already heard about you, found you on Google, saw your truck, or got your name from a friend. Then they visit your website and decide whether you feel trustworthy enough to contact.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
            >
              <Card className="h-full border border-border/60 shadow-sm hover:shadow-md hover:border-primary/20 transition-all bg-card">
                <CardContent className="p-6">
                  <div className="w-11 h-11 rounded-lg bg-destructive/10 text-destructive flex items-center justify-center mb-5">
                    {problem.icon}
                  </div>
                  <h3 className="text-base font-bold mb-2 leading-snug">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
