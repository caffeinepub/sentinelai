import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Briefcase, GraduationCap, Heart, Factory, ShoppingBag, Landmark, Zap } from 'lucide-react';

export function UseCasesSection() {
  const useCases = [
    {
      icon: Building2,
      industry: 'Enterprise & Corporate',
      description: 'Streamline operations, enhance decision-making, and automate workflows.',
      examples: [
        'Document analysis and summarization',
        'Customer service automation',
        'Data extraction and reporting',
        'Internal knowledge management',
      ],
      tags: ['Fortune 500', 'SMB', 'Startups'],
    },
    {
      icon: Landmark,
      industry: 'Government & Public Sector',
      description: 'Improve citizen services, process documents, and enhance transparency.',
      examples: [
        'Public records processing',
        'Citizen inquiry handling',
        'Policy document analysis',
        'Compliance monitoring',
      ],
      tags: ['Federal', 'State', 'Local'],
    },
    {
      icon: Heart,
      industry: 'Healthcare & Life Sciences',
      description: 'Support clinical workflows, research, and patient care coordination.',
      examples: [
        'Medical documentation assistance',
        'Research literature review',
        'Administrative task automation',
        'Patient communication support',
      ],
      tags: ['HIPAA-aware', 'Clinical', 'Research'],
    },
    {
      icon: GraduationCap,
      industry: 'Education & Research',
      description: 'Enhance learning experiences, support research, and streamline administration.',
      examples: [
        'Educational content creation',
        'Research paper analysis',
        'Student support services',
        'Administrative automation',
      ],
      tags: ['K-12', 'Higher Ed', 'Research'],
    },
    {
      icon: Briefcase,
      industry: 'Legal & Professional Services',
      description: 'Accelerate document review, research, and client service delivery.',
      examples: [
        'Contract analysis and review',
        'Legal research assistance',
        'Document drafting support',
        'Case management automation',
      ],
      tags: ['Law Firms', 'Consulting', 'Accounting'],
    },
    {
      icon: Factory,
      industry: 'Manufacturing & Logistics',
      description: 'Optimize supply chains, quality control, and operational efficiency.',
      examples: [
        'Quality documentation analysis',
        'Supply chain optimization',
        'Maintenance documentation',
        'Inventory management support',
      ],
      tags: ['Production', 'Supply Chain', 'Quality'],
    },
    {
      icon: ShoppingBag,
      industry: 'Retail & E-commerce',
      description: 'Enhance customer experience, optimize inventory, and personalize marketing.',
      examples: [
        'Product description generation',
        'Customer inquiry automation',
        'Inventory analysis',
        'Marketing content creation',
      ],
      tags: ['Online', 'Brick & Mortar', 'Omnichannel'],
    },
    {
      icon: Zap,
      industry: 'Technology & SaaS',
      description: 'Accelerate development, improve documentation, and enhance user support.',
      examples: [
        'Technical documentation',
        'Code review assistance',
        'Customer support automation',
        'API documentation generation',
      ],
      tags: ['B2B', 'B2C', 'Developer Tools'],
    },
  ];

  return (
    <section id="use-cases" className="py-20 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Built for All Industries
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nexus Forge AI is designed to serve companies across every sector. Whether you're a startup, enterprise, government agency, or non-profit, our AI capabilities adapt to your unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <Card key={index} className="border-2">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3 flex-1">
                        <div className="h-12 w-12 border-2 border-foreground bg-foreground/5 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-foreground" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg">{useCase.industry}</CardTitle>
                          <CardDescription className="mt-1">{useCase.description}</CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Example Applications:</h4>
                      <ul className="space-y-1">
                        {useCase.examples.map((example, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <span className="text-foreground mr-2 font-bold">•</span>
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {useCase.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center pt-8">
            <p className="text-muted-foreground mb-4">
              Don't see your industry? Nexus Forge AI's flexible capabilities work across sectors.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-success hover:underline font-medium focus:outline-none focus:ring-2 focus:ring-ring"
            >
              Contact us to discuss your specific use case →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
