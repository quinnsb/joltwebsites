import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Do you only work with Bloomington-Normal businesses?',
    answer: 'Bloomington-Normal is the focus, but I can work with nearby Central Illinois businesses too.',
  },
  {
    question: 'What kind of businesses are the best fit?',
    answer: 'Local service businesses where each new customer has real value: contractors, remodelers, med spas, landscapers, auto shops, cleaning companies, groomers, and similar businesses.',
  },
  {
    question: 'Do I need a full rebrand?',
    answer: "Usually not. Most businesses need clearer messaging, better structure, sharper visuals, and a stronger quote path before they need a full brand overhaul.",
  },
  {
    question: 'How fast can a site be built?',
    answer: 'Most landing pages take 2 to 3 weeks once the offer and content direction are clear. Full website refreshes run 3 to 5 weeks as a focused sprint.',
  },
  {
    question: 'Can you host and maintain the site?',
    answer: 'Yes. Monthly support options cover hosting, updates, new pages, Google Business Profile support, and reporting.',
  },
  {
    question: 'Do you guarantee leads?',
    answer: "No one can honestly guarantee leads from a website alone. The goal is to improve the parts we can control: clarity, trust, mobile experience, offer structure, search basics, and conversion paths.",
  },
  {
    question: 'What do I need to provide to get started?',
    answer: 'Not much. Your current website URL, a sense of which service you want to grow, and a willingness to share what makes your business different. I handle the rest.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-secondary/30 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Common questions</h2>
          <p className="text-muted-foreground">Honest answers about what to expect.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="w-full bg-card rounded-xl border border-border shadow-sm divide-y divide-border">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="px-5 border-0">
                <AccordionTrigger className="text-left font-medium hover:text-primary py-4 text-base hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4 text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
