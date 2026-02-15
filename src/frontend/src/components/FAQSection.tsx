import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQSection() {
  const faqs = [
    {
      question: 'Is SentinelAI only for government agencies?',
      answer: 'No! While SentinelAI is suitable for government use, it is designed for all types of companies—from startups and small businesses to large enterprises across every industry. Our AI capabilities are flexible and adapt to your organization\'s specific needs, regardless of sector.',
    },
    {
      question: 'How secure is the testing environment?',
      answer: 'Our testing environment implements industry-standard security practices including encryption, access controls, and secure data handling. While we cannot guarantee absolute security (no system can), we follow best practices and are transparent about our security measures. We recommend avoiding sensitive or confidential data during initial testing.',
    },
    {
      question: 'What kind of data can I test with?',
      answer: 'You can test with general business documents, sample data, and non-sensitive information. We recommend using anonymized or synthetic data for initial evaluation. Avoid testing with personally identifiable information (PII), confidential business data, or regulated information until you have reviewed our security practices and established appropriate agreements.',
    },
    {
      question: 'Do I need technical expertise to use SentinelAI?',
      answer: 'No technical expertise is required to test and use SentinelAI. Our interface is designed to be intuitive for business users. However, technical teams can also integrate SentinelAI into existing workflows and systems. We provide documentation and support for both business users and technical implementers.',
    },
    {
      question: 'How does pricing work?',
      answer: 'Pricing varies based on usage volume, features needed, and deployment requirements. We offer flexible plans for organizations of all sizes. Contact our sales team to discuss your specific needs and receive a customized quote. The demo is free to try with no commitment required.',
    },
    {
      question: 'Can SentinelAI integrate with our existing systems?',
      answer: 'Yes, SentinelAI is designed with integration in mind. We support standard APIs and can work with your technical team to integrate with existing workflows, databases, and business systems. Specific integration capabilities depend on your requirements and deployment model.',
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide comprehensive support including documentation, email support, and dedicated account management for enterprise customers. Support levels vary by plan. During evaluation, our team is available to answer questions and help you understand how SentinelAI can meet your needs.',
    },
    {
      question: 'How accurate are the AI capabilities?',
      answer: 'AI accuracy varies by task type and input quality. Our models are trained on diverse, high-quality data and regularly evaluated. However, like all AI systems, SentinelAI is not perfect and should be used as a tool to augment human decision-making, not replace it. We recommend human review of AI outputs, especially for critical decisions.',
    },
    {
      question: 'Can we customize SentinelAI for our specific needs?',
      answer: 'Yes, we offer customization options for enterprise customers, including fine-tuning for specific domains, custom workflows, and specialized integrations. Contact our team to discuss your requirements and explore customization possibilities.',
    },
    {
      question: 'What happens to our data?',
      answer: 'We implement privacy-focused practices and are transparent about data handling. Your data is used only to provide the service you request. We do not use customer data to train public models without explicit permission. Specific data handling practices depend on your deployment model and agreement. Review our privacy documentation or contact us for detailed information.',
    },
  ];

  return (
    <section id="faq" className="py-20 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about SentinelAI, our capabilities, and how we work with companies.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-border bg-card px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center pt-8">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-success hover:underline font-medium focus:outline-none focus:ring-2 focus:ring-ring"
            >
              Contact our team for answers →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
