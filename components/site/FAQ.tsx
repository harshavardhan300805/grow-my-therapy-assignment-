'use client';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'What types of therapy does Dr. Reynolds offer?',
    a: 'Dr. Reynolds specializes in therapy for adults dealing with anxiety, trauma, and burnout. She integrates evidence-based methods including cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to address both the emotional and physiological sides of what you\u2019re experiencing.',
  },
  {
    q: 'Does Dr. Reynolds offer in-person and telehealth sessions?',
    a: 'Yes. Dr. Reynolds offers both in-person therapy from her Santa Monica office and secure telehealth sessions for clients located anywhere in California. You can choose whichever format feels most comfortable, and you can switch between them as needed.',
  },
  {
    q: 'What can I expect during my first session?',
    a: 'Your first session is a collaborative conversation. Dr. Reynolds will take time to understand what brings you to therapy, what you\u2019re hoping to change, and how she can best support you. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. There is no pressure to share more than you\u2019re ready to.',
  },
  {
    q: 'How does trauma therapy work with EMDR?',
    a: 'Trauma work is paced carefully, with an emphasis on safety, stabilization, and helping you feel more regulated in your daily life. EMDR is one of several tools Dr. Reynolds uses to help process both single-incident trauma and more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress.',
  },
  {
    q: 'Is therapy right for me if I feel \u201Cfunctional\u201D but still struggling?',
    a: 'Absolutely. Many of the people Dr. Reynolds works with appear functional on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they\u2019re always bracing for something to go wrong. Therapy can help you understand these patterns and develop more sustainable, fulfilling ways of living.',
  },
  {
    q: 'How do I schedule an appointment?',
    a: 'You can reach out through the contact form below or call the office directly. Dr. Reynolds will respond to learn more about what brings you to therapy and find a time that works for you. Both in-person and telehealth appointments are available.',
  },
];

export default function FAQ() {
  return (
    <section id="faqs" className="bg-sage-50 py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sage-100 text-sage-600 mb-5">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-sage-800 leading-tight mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-sage-600 text-lg text-pretty">
            Answers to common questions about therapy with Dr. Maya Reynolds.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-white rounded-xl px-6 border border-sage-100 shadow-sm"
            >
              <AccordionTrigger className="text-sage-800 font-serif text-base sm:text-lg font-semibold hover:text-sage-600 text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sage-600 text-base leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
