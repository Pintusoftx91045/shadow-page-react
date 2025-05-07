
import React from 'react';

interface SpeakerProps {
  name: string;
  title: string;
  organization: string;
  imageSrc: string;
}

const SpeakerCard: React.FC<SpeakerProps> = ({ name, title, organization, imageSrc }) => {
  return (
    <div className="profile-card bg-white p-6 rounded-lg shadow-md text-center">
      <div className="mb-4">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-primary"
        />
      </div>
      <h3 className="font-bold text-lg text-primary">{name}</h3>
      <p className="text-sm text-gray-600 mt-1">{title}</p>
      <p className="text-sm text-gray-600 mb-3">{organization}</p>
      <a href="#" className="read-more-btn text-secondary inline-block">Read More...</a>
    </div>
  );
};

const KeynoteSpeakers = () => {
  const speakers = [
    {
      name: "Tracy Stevens, M.D.",
      title: "Medical Director, Saint Luke's Muriel I. Kauffman Women's Heart Center",
      organization: "Saint Luke's Mid America Heart Institute",
      imageSrc: "/lovable-uploads/4d315de3-ae4c-4205-b1d1-19f1bc773e41.png"
    },
    {
      name: "Susan Kent",
      title: "Associate Research Professor",
      organization: "University of Nevada, Las Vegas",
      imageSrc: "/lovable-uploads/4d315de3-ae4c-4205-b1d1-19f1bc773e41.png"
    },
    {
      name: "James Lin, Ph.D.",
      title: "Professor of Chemistry and Biochemistry",
      organization: "University of Montana",
      imageSrc: "/lovable-uploads/4d315de3-ae4c-4205-b1d1-19f1bc773e41.png"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="symposium-container">
        <div className="text-center mb-12">
          <h2 className="text-primary text-3xl font-bold mb-2">Featured Keynote Speakers</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <SpeakerCard 
              key={index}
              name={speaker.name}
              title={speaker.title}
              organization={speaker.organization}
              imageSrc={speaker.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeynoteSpeakers;
