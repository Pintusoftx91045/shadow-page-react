
import React from 'react';

interface SpeakerProps {
  name: string;
  title: string;
  organization: string;
  imageSrc: string;
}

const SpeakerCard: React.FC<SpeakerProps> = ({ name, title, organization, imageSrc }) => {
  return (
    <div className="profile-card">
      <img src={imageSrc} alt={name} className="w-32 h-32 rounded-full object-cover" />
      <h3 className="font-bold">{name}</h3>
      <p className="text-sm text-gray-600">{title}</p>
      <p className="text-sm text-gray-600">{organization}</p>
      <a href="#" className="read-more-btn mt-2">Read More...</a>
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
    <section className="py-12 bg-white">
      <div className="symposium-container">
        <h2 className="section-title">NISBRE 2024</h2>
        <h3 className="text-xl font-bold text-center mb-12">Featured Keynote Speakers</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
