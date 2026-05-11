import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you only work with Bloomington-Normal businesses?",
    answer: "Bloomington-Normal is the focus, but I can work with nearby Central Illinois businesses too."
  },
  {
    question: "What kind of businesses are the best fit?",
    answer: "Local service businesses where each new customer has real value: contractors, remodelers, med spas, landscapers, auto shops, cleaning companies, groomers, and similar businesses."
  },
  {
    question: "Do I need a full rebrand?",
    answer: "Usually not. Most businesses need clearer messaging, better structure, sharper visuals, and a stronger quote path before they need a full brand overhaul."
  },
  {
    question: "How fast can a site be built?",
    answer: "Most landing pages can be built quickly once the offer and content are clear. Full website refreshes are usually handled as focused sprints."
  },
  {
    question: "Can you host and maintain the site?",
    answer: "Yes. Monthly support options are available for hosting, updates, new pages, Google Business Profile support, and reporting."
  },
  {
    question: "Do you guarantee leads?",
    answer: "No one can honestly guarantee leads from a website alone. The goal is to improve the parts we can control: clarity, trust, mobile experience, offer structure, search basics, and conversion paths."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold">Common questions</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="w-full bg-card rounded-xl border border-border shadow-sm p-2 md:p-6">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border px-4">
                <AccordionTrigger className="text-left font-medium hover:text-primary py-4 text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
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
