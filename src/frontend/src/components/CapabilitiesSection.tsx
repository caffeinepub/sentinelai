import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { capabilities } from '../content/capabilities';

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-20 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Comprehensive AI Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              SentinelAI provides a full suite of AI capabilities designed for professional use across all industries. Every feature is built with security, accuracy, and reliability in mind.
            </p>
          </div>

          {capabilities.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 border-2 border-foreground bg-foreground/5 flex items-center justify-center">
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{category.category}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="border-2">
                    <CardHeader>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Typical Inputs:</h4>
                        <ul className="text-sm space-y-1">
                          {item.inputs.map((input, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-foreground mr-2 font-bold">•</span>
                              <span>{input}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Typical Outputs:</h4>
                        <ul className="text-sm space-y-1">
                          {item.outputs.map((output, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-foreground mr-2 font-bold">•</span>
                              <span>{output}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {item.constraints && (
                        <div>
                          <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Notes & Constraints:</h4>
                          <p className="text-sm text-muted-foreground">{item.constraints}</p>
                        </div>
                      )}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {item.tags.map((tag, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
