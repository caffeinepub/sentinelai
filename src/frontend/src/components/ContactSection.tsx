import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Send, CheckCircle2, Building2, MessageSquare, Calendar } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      // Construct mailto link with form data
      const subject = encodeURIComponent(`Nexus Forge AI Inquiry from ${formData.company || formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:SentinelAI@usa.com?subject=${subject}&body=${body}`;
      
      // Open mailto link
      if (typeof window !== 'undefined') {
        window.location.href = mailtoLink;
      }
      
      // Show success message
      setShowSuccess(true);
      
      // Reset form
      setFormData({ name: '', email: '', company: '', message: '' });
      
      // Hide success message after 5 seconds
      const timeoutId = setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      
      // Cleanup timeout if component unmounts
      return () => clearTimeout(timeoutId);
    } catch (error) {
      console.error('Error submitting contact form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to explore how Nexus Forge AI can transform your organization? Contact us to schedule a demo, request access, or ask questions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {showSuccess && (
                    <Alert className="mb-6 border-2 border-success bg-success/10">
                      <CheckCircle2 className="h-5 w-5 text-success" />
                      <AlertDescription className="ml-2">
                        Your email client should open with a pre-filled message. If not, please email us directly.
                      </AlertDescription>
                    </Alert>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@company.com"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Name"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your needs and how we can help..."
                        className="min-h-[150px] resize-none"
                        disabled={isSubmitting}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-2">
                <CardHeader>
                  <div className="h-12 w-12 border-2 border-primary bg-primary/5 flex items-center justify-center mb-2">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Email Us</CardTitle>
                  <CardDescription>
                    Send us an email and we'll respond within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:SentinelAI@usa.com"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Contact Us
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="h-12 w-12 border-2 border-primary bg-primary/5 flex items-center justify-center mb-2">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Enterprise Sales</CardTitle>
                  <CardDescription>
                    Discuss custom solutions and enterprise pricing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Contact our sales team for volume licensing and custom deployments
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="h-12 w-12 border-2 border-primary bg-primary/5 flex items-center justify-center mb-2">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Support</CardTitle>
                  <CardDescription>
                    Get help with technical questions and implementation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our support team is available to assist with your questions
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
