
import React from 'react';

interface SupportMemberProps {
  name: string;
  title: string;
  organization: string;
  imageSrc: string;
}

const SupportMemberCard: React.FC<SupportMemberProps> = ({ name, title, organization, imageSrc }) => {
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

const SupportTeam = () => {
  const supportMembers = [
    {
      name: "Mary Campbell",
      title: "Conference Coordinator",
      organization: "University of Montana",
      imageSrc: "/lovable-uploads/4d315de3-ae4c-4205-b1d1-19f1bc773e41.png"
    },
    {
      name: "Steven Scott",
      title: "Technical Support Lead",
      organization: "Biomedical Innovations, Inc.",
      imageSrc: "/lovable-uploads/4d315de3-ae4c-4205-b1d1-19f1bc773e41.png"
    },
    {
      name: "Julia Klein",
      title: "Program Manager",
      organization: "National Center for Advancing Translational Sciences",
      imageSrc: "/lovable-uploads/4d315de3-ae4c-4205-b1d1-19f1bc773e41.png"
    },
    {
      name: "Brian Lewis",
      title: "Communications Director",
      organization: "IDeA States Consortium",
      imageSrc: "/lovable-uploads/4d315de3-ae4c-4205-b1d1-19f1bc773e41.png"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="symposium-container">
        <h2 className="section-title">Meet the Organizing Support Team (NISBRE2024)</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {supportMembers.map((member, index) => (
            <SupportMemberCard 
              key={index}
              name={member.name}
              title={member.title}
              organization={member.organization}
              imageSrc={member.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportTeam;
