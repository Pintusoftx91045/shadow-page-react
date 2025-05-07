
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "2024 Annual NAIPI Symposium",
      date: "June 15-17, 2024",
      location: "Boston, Massachusetts",
      description: "Join us for the premier gathering of IDeA investigators, featuring keynote speakers, networking, and research presentations."
    },
    {
      id: 2,
      title: "IDeA Grant Writing Workshop",
      date: "August 5-6, 2024",
      location: "Virtual Event",
      description: "A two-day workshop designed to help researchers develop competitive grant applications for NIH funding opportunities."
    },
    {
      id: 3,
      title: "Regional IDeA Conference - Western States",
      date: "September 22-24, 2024",
      location: "Boise, Idaho",
      description: "A regional meeting focusing on research collaboration and infrastructure development in western IDeA states."
    }
  ];

  return (
    <div className="symposium-container py-8">
      <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map(event => (
          <Card key={event.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
              <CardDescription className="flex items-center gap-2">
                <Calendar className="h-4 w-4" /> {event.date}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-sm text-primary mb-2">{event.location}</p>
              <p>{event.description}</p>
            </CardContent>
            <CardFooter className="mt-auto">
              <a href="#" className="text-secondary font-medium">View details</a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
