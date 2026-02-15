import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { MessageSquare, Send, AlertCircle, Loader2 } from 'lucide-react';
import { useGetAnswer } from '../hooks/useQueries';
import { useBackendHealth } from '../hooks/useBackendHealth';

export function AssistantSection() {
  const [question, setQuestion] = useState('');
  const [lastQuestion, setLastQuestion] = useState('');
  const getAnswerMutation = useGetAnswer();
  const { isHealthy, isUnhealthy, isChecking, reason } = useBackendHealth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    
    // Only gate submission if definitively unhealthy (not while checking)
    if (isUnhealthy) {
      return;
    }
    
    setLastQuestion(question);
    getAnswerMutation.mutate(question);
  };

  const handleRetry = () => {
    if (lastQuestion && !isUnhealthy) {
      getAnswerMutation.mutate(lastQuestion);
    }
  };

  const isLoading = getAnswerMutation.isPending;
  const hasError = getAnswerMutation.isError;
  const answer = getAnswerMutation.data;

  // Determine if submission should be disabled
  // Allow submission while checking if we don't know it's unhealthy
  const isSubmitDisabled = !question.trim() || isLoading || isUnhealthy;

  return (
    <section id="assistant" className="py-20 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              AI Assistant
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ask questions and get instant answers powered by Nexus Forge AI. Test our capabilities in real-time.
            </p>
          </div>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Ask a Question
              </CardTitle>
              <CardDescription>
                Enter your question below and our AI will provide an answer
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Show unavailable message only when definitively unhealthy */}
              {isUnhealthy && (
                <Alert variant="destructive" className="border-2">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="ml-2">
                    <p className="font-semibold">
                      {reason || 'Assistant service is not ready'}
                    </p>
                    <p className="text-sm mt-1">
                      Some features may be temporarily unavailable. Please try again in a few moments.
                    </p>
                  </AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <Textarea
                  placeholder="What is Nexus Forge AI?"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="min-h-[100px] resize-none"
                  disabled={isLoading || isUnhealthy}
                />
                <Button
                  type="submit"
                  disabled={isSubmitDisabled}
                  className="w-full"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Ask Question
                    </>
                  )}
                </Button>
              </form>

              {/* Show error with retry option */}
              {hasError && !isUnhealthy && (
                <Alert variant="destructive" className="border-2">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="ml-2">
                    <p className="font-semibold mb-2">
                      {getAnswerMutation.error instanceof Error
                        ? getAnswerMutation.error.message
                        : 'Failed to get an answer. Please try again.'}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleRetry}
                      disabled={isLoading || isUnhealthy}
                    >
                      Retry
                    </Button>
                  </AlertDescription>
                </Alert>
              )}

              {/* Show answer */}
              {answer && !hasError && (
                <Alert className="border-2 border-success bg-success/10">
                  <MessageSquare className="h-4 w-4 text-success" />
                  <AlertDescription className="ml-2">
                    <p className="font-semibold text-success mb-2">Answer:</p>
                    <p className="text-foreground whitespace-pre-wrap">{answer}</p>
                  </AlertDescription>
                </Alert>
              )}

              {/* Suggested questions */}
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-semibold text-muted-foreground mb-3">
                  Try asking:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'What is Nexus Forge AI?',
                    'What does Nexus Forge AI do?',
                    'How does Nexus Forge AI work?',
                    'What are the core capabilities?',
                    'Tell me about zero trust privacy',
                    'How do I get started?',
                  ].map((suggestedQuestion) => (
                    <Button
                      key={suggestedQuestion}
                      variant="outline"
                      size="sm"
                      onClick={() => setQuestion(suggestedQuestion)}
                      disabled={isLoading || isUnhealthy}
                      className="text-xs"
                    >
                      {suggestedQuestion}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
