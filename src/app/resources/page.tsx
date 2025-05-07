
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Link } from 'lucide-react';

export default function ResourcesPage() {
  const resources = [
    {
      category: "Grant Writing",
      items: [
        { title: "NIH Grant Application Guide", url: "#" },
        { title: "IDeA Program Specific Instructions", url: "#" },
        { title: "Budget Development Templates", url: "#" },
        { title: "Sample Specific Aims", url: "#" }
      ]
    },
    {
      category: "Research Tools",
      items: [
        { title: "Shared Equipment Directory", url: "#" },
        { title: "Core Facilities Network", url: "#" },
        { title: "Data Analysis Resources", url: "#" },
        { title: "Collaboration Matching Service", url: "#" }
      ]
    },
    {
      category: "Professional Development",
      items: [
        { title: "Mentoring Resources", url: "#" },
        { title: "Career Development Opportunities", url: "#" },
        { title: "Leadership Training Materials", url: "#" },
        { title: "Virtual Learning Library", url: "#" }
      ]
    }
  ];

  return (
    <div className="symposium-container py-8">
      <h1 className="text-3xl font-bold mb-6">Resources</h1>
      
      <div className="space-y-8">
        {resources.map((category, idx) => (
          <div key={idx}>
            <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {category.items.map((item, i) => (
                <Card key={i}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href={item.url}
                      className="flex items-center gap-1 text-primary hover:underline"
                    >
                      <Link className="h-4 w-4" /> 
                      Access Resource
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
