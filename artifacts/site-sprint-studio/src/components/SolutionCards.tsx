import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { RefreshCw, LayoutTemplate, TrendingUp } from 'lucide-react';

export function SolutionCards() {
  const solutions = [
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: 'Website Refreshes',
      description: 'For businesses with outdated websites that need clearer structure, better design, and stronger calls to action.'
    },
    {
      icon: <LayoutTemplate className="h-6 w-6" />,
      title: 'Landing Pages',
      description: 'For seasonal offers, specific services, paid ads, local SEO pages, or quick campaign tests.'
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Growth Support',
      description: 'For businesses that want ongoing updates, service pages, Google Business Profile support, and light reporting.'
    }
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Sharper pages. Clearer offers. More quote requests.</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Site Sprint Studio helps local service businesses clean up the online moments that happen right before someone calls, books, or requests an estimate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full relative overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform translate-x-1/4 -translate-y-1/4 scale-150">
                  {solution.icon}
                </div>
                <CardContent className="p-8 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-6 shadow-sm">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-display">{solution.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
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
