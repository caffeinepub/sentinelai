export const suggestedPrompts = [
  {
    category: 'Data Extraction',
    description: 'Extract structured information from unstructured text',
    prompt: 'Extract all dates, names, and amounts from this invoice: [paste sample invoice text]',
    expectedOutput: 'Organized list of extracted entities with labels',
  },
  {
    category: 'Content Generation',
    description: 'Generate professional business content',
    prompt: 'Write a professional email responding to a customer inquiry about product features',
    expectedOutput: 'Well-structured, professional email draft',
  },
  {
    category: 'Question Answering',
    description: 'Get answers based on provided context',
    prompt: 'Based on this policy document, what is the refund policy for items purchased over 30 days ago?',
    expectedOutput: 'Clear, accurate answer citing relevant policy sections',
  },
];
