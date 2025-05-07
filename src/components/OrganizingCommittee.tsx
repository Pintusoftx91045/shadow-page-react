
import React from 'react';

interface CommitteeMemberProps {
  name: string;
  title: string;
  organization: string;
  imageSrc: string;
}

const CommitteeMemberCard: React.FC<CommitteeMemberProps> = ({ name, title, organization, imageSrc }) => {
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

const OrganizingCommittee = () => {
  const committeeMembers = [
    {
      name: "A. P. Peterson, Ph.D.",
      title: "Director, INBRE Program",
      organization: "Harvard Medical School",
      imageSrc: "/lovable-uploads/4d315de3-ae4c-4205-b1d1-19f1bc773e41.png"
    },
    {
      name: "Bob Smith, D.V.M., Ph.D.",
      title: "Professor of Biomedical Sciences",
      organization: "University of Montana",
      imageSrc: "/lovable-uploads/4d315de3-ae4c-4205-b1d1-19f1bc773e41.png"
    },
    {
      name: "R. Maria Garcia",
      title: "Professor of Bioinformatics",
      organization: "University of Nevada",
      imageSrc: "/lovable-uploads/4d315de3-ae4c-4205-b1d1-19f1bc773e41.png"
    },
    {
      name: "Lisa Chen, M.D.",
      title: "Director, Center for Translational Research",
      organization: "Medical University of South Carolina",
      imageSrc: "/lovable-uploads/4d315de3-ae4c-4205-b1d1-19f1bc773e41.png"
    },
    {
      name: "Scott Davis, Ph.D.",
      title: "Associate Professor of Molecular Biology",
      organization: "University of Vermont",
      imageSrc: "/lovable-uploads/4d315de3-ae4c-4205-b1d1-19f1bc773e41.png"
    },
    {
      name: "Sheila Sanders, M.D.",
      title: "Professor of Internal Medicine",
      organization: "University of Kentucky",
      imageSrc: "/lovable-uploads/4d315de3-ae4c-4205-b1d1-19f1bc773e41.png"
    },
    {
      name: "Dr. Helen Fischer-Solano",
      title: "Director, Translational Research",
      organization: "Dartmouth College",
      imageSrc: "/lovable-uploads/4d315de3-ae4c-4205-b1d1-19f1bc773e41.png"
    },
    {
      name: "G. Robert Campbell",
      title: "Associate Professor of Microbiology",
      organization: "University of Alaska",
      imageSrc: "/lovable-uploads/4d315de3-ae4c-4205-b1d1-19f1bc773e41.png"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="symposium-container">
        <h2 className="section-title">Meet The 2024 Organizing Committee</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {committeeMembers.map((member, index) => (
            <CommitteeMemberCard 
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

export default OrganizingCommittee;
