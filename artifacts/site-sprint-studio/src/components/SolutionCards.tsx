import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { RefreshCw, LayoutTemplate, TrendingUp } from 'lucide-react';

const solutions = [
  {
    icon: <RefreshCw className="h-6 w-6" />,
    title: 'Outdated Website Refreshes',
    description: 'Keep the business people already know, but rebuild the page structure, copy, visuals, and quote path so visitors know what to do next.'
  },
  {
    icon: <LayoutTemplate className="h-6 w-6" />,
    title: 'Service Landing Pages',
    description: 'One focused page for a high-value service, seasonal offer, or Google ad campaign, built around one clear customer action.'
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: 'Launch + Growth Support',
    description: 'Hosting, updates, new service pages, Google Business Profile support, and reporting after the new site is live.'
  }
];

export function SolutionCards() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-14 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">Sharper pages. Clearer offers. More quote requests.</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Jolt helps local service businesses clean up the online moments that happen right before someone calls, books, or requests an estimate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full relative overflow-hidden group hover:border-primary/50 hover:shadow-md transition-all">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-6 shadow-sm">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-display">{solution.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {solution.description}
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
