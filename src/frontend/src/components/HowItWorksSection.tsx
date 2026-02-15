import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { workflowSteps, safeTestingPractices } from '../content/howItWorks';
import { CheckCircle2, Shield } from 'lucide-react';

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Understanding the Nexus Forge AI workflow from initial testing to full deployment. Our process is designed to be transparent, secure, and straightforward.
            </p>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center">Evaluation Workflow</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workflowSteps.map((step, index) => (
                <Card key={index} className="relative border-2">
                  <CardHeader>
                    <div className="absolute -top-4 -left-4 h-12 w-12 border-2 border-success bg-success text-white flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    <CardTitle className="text-lg pt-4">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-success mr-2 flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <Shield className="h-8 w-8 text-success" />
                <h3 className="text-2xl font-bold">Safe Testing Practices</h3>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Follow these guidelines to ensure secure and effective evaluation of Nexus Forge AI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {safeTestingPractices.map((practice, index) => (
                <Card key={index} className="border-2">
                  <CardHeader>
                    <div className="flex items-start space-x-3">
                      <div className="h-10 w-10 border-2 border-success bg-success/5 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-success" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{practice.title}</CardTitle>
                        <CardDescription className="mt-1">{practice.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {practice.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-success mr-2 font-bold">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
