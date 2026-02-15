import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Sparkles } from 'lucide-react';
import { suggestedPrompts } from '../content/tryDemo';

export function TryDemoSection() {
  const prompts = Array.isArray(suggestedPrompts) ? suggestedPrompts : [];

  return (
    <section id="try-demo" className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Experience Nexus Forge AI
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Test our AI capabilities in a safe, controlled environment. Try these suggested prompts to explore what Nexus Forge AI can do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prompts.map((prompt, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-muted-foreground" />
                        {prompt.category}
                      </CardTitle>
                      <CardDescription className="mt-2">{prompt.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-muted border border-border p-3">
                      <p className="text-sm font-mono">{prompt.prompt}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      <strong>Expected:</strong> {prompt.expectedOutput}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 font-semibold group"
            >
              <a
                href="https://nexusforgeai.base44.app/Chat"
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch Demo Environment
                <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
