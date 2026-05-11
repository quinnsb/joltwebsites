import { motion } from 'framer-motion';
import { Smartphone, HelpCircle, FormInput, ImageOff, UserMinus, SearchX } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const problems = [
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: 'Dated mobile experience',
    description: 'Pinch-to-zoom is the enemy of conversions. If they cannot read it on their phone, they are leaving.'
  },
  {
    icon: <HelpCircle className="h-6 w-6" />,
    title: 'Services are hard to understand',
    description: 'Industry jargon and walls of text confuse people who just want to know if you can fix their problem.'
  },
  {
    icon: <FormInput className="h-6 w-6" />,
    title: 'No clear quote request path',
    description: 'Burying your phone number at the bottom of the page or using a broken 10-field form kills leads.'
  },
  {
    icon: <ImageOff className="h-6 w-6" />,
    title: 'Weak photos or buried proof',
    description: 'Stock photos of fake houses do not build trust. People want to see real trucks, real work, and real reviews.'
  },
  {
    icon: <UserMinus className="h-6 w-6" />,
    title: 'Homepage talks too much about the business',
    description: 'Your story matters, but customers first need to know how you are going to help them.'
  },
  {
    icon: <SearchX className="h-6 w-6" />,
    title: 'Google traffic lands on pages that don\'t sell',
    description: 'If someone searches for "roof repair" and lands on a generic homepage, they have to work too hard.'
  }
];

export function ProblemCards() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Your website might be quietly losing good leads.</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Most people don't need to be convinced that your business exists. They already heard about you, found you on Google, saw your truck, or got your name from a friend. Then they visit your website and decide whether you feel trustworthy enough to contact.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow bg-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
                    {problem.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
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
