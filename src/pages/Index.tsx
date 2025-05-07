
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SymposiumInfo from '../components/SymposiumInfo';
import KeynoteSpeakers from '../components/KeynoteSpeakers';
import OrganizingCommittee from '../components/OrganizingCommittee';
import SupportTeam from '../components/SupportTeam';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <main>
        <SymposiumInfo />
        <KeynoteSpeakers />
        <OrganizingCommittee />
        <SupportTeam />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
