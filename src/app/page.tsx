
import React from 'react';
import Hero from '../components/Hero';
import SymposiumInfo from '../components/SymposiumInfo';
import KeynoteSpeakers from '../components/KeynoteSpeakers';
import OrganizingCommittee from '../components/OrganizingCommittee';
import SupportTeam from '../components/SupportTeam';
import Sponsors from '../components/Sponsors';

export default function HomePage() {
  return (
    <>
      <Hero />
      <SymposiumInfo />
      <KeynoteSpeakers />
      <OrganizingCommittee />
      <SupportTeam />
      <Sponsors />
    </>
  );
}
