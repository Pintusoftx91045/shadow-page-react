
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function UpdatesPage() {
  const updates = [
    {
      id: 1,
      title: "2024 Annual Symposium Registration Now Open",
      date: "April 15, 2024",
      description: "Registration for the 2024 NAIPI Annual Symposium is now open. Join us for three days of networking, presentations, and workshops."
    },
    {
      id: 2,
      title: "New NIH Funding Opportunities for IDeA States",
      date: "March 28, 2024",
      description: "NIH has announced new funding opportunities specifically for researchers in IDeA states. Submission deadline is June 30, 2024."
    },
    {
      id: 3,
      title: "Executive Board Elections Results",
      date: "February 10, 2024",
      description: "NAIPI welcomes the newly elected Executive Board members who will serve for the 2024-2026 term."
    }
  ];

  return (
    <div className="symposium-container py-8">
      <h1 className="text-3xl font-bold mb-6">Updates</h1>
      <div className="grid gap-6">
        {updates.map(update => (
          <Card key={update.id}>
            <CardHeader>
              <CardTitle>{update.title}</CardTitle>
              <CardDescription>{update.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{update.description}</p>
              <a href="#" className="text-primary font-medium mt-4 inline-block">Read more</a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
