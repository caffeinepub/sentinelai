import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Eye, FileCheck, Server, AlertCircle } from 'lucide-react';

export function SafetySecuritySection() {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'Industry-standard encryption practices for data in transit and at rest.',
      details: [
        'End-to-end encryption protocols',
        'Secure data handling procedures',
        'Regular security audits',
        'Compliance-ready architecture',
      ],
    },
    {
      icon: Lock,
      title: 'Access Control',
      description: 'Granular permission systems to ensure only authorized users access sensitive features.',
      details: [
        'Role-based access control',
        'Multi-factor authentication support',
        'Session management',
        'Audit logging',
      ],
    },
    {
      icon: Eye,
      title: 'Privacy by Design',
      description: 'Built with privacy principles from the ground up, not as an afterthought.',
      details: [
        'Minimal data collection',
        'User data ownership',
        'Transparent data practices',
        'Privacy-preserving AI techniques',
      ],
    },
    {
      icon: FileCheck,
      title: 'Compliance Ready',
      description: 'Designed to support common regulatory and compliance requirements.',
      details: [
        'GDPR considerations',
        'SOC 2 alignment practices',
        'Industry-specific standards',
        'Documentation and reporting',
      ],
    },
    {
      icon: Server,
      title: 'Infrastructure Security',
      description: 'Robust infrastructure practices to maintain system integrity and availability.',
      details: [
        'Redundant systems',
        'Regular backups',
        'DDoS protection',
        'Monitoring and alerting',
      ],
    },
    {
      icon: AlertCircle,
      title: 'Incident Response',
      description: 'Prepared procedures for handling security events and maintaining transparency.',
      details: [
        'Incident response plan',
        'Security team availability',
        'Transparent communication',
        'Continuous improvement',
      ],
    },
  ];

  return (
    <section id="safety-security" className="py-20 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Safety & Security
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Security and privacy are not optional features—they're fundamental to how SentinelAI is built and operated. We implement industry best practices to protect your data and maintain your trust.
            </p>
          </div>

          <div className="bg-warning/10 border-2 border-warning p-6">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-6 w-6 text-warning flex-shrink-0 mt-1" />
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Important Disclaimer</h3>
                <p className="text-sm text-muted-foreground">
                  While we implement robust security practices and follow industry standards, no system can guarantee absolute security. We describe our practices and policies transparently so you can make informed decisions about using SentinelAI. We continuously work to improve our security posture and welcome feedback from security researchers.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-2">
                  <CardHeader>
                    <div className="h-12 w-12 border-2 border-success bg-success/5 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-success" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <span className="text-success mr-2 font-bold">✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
