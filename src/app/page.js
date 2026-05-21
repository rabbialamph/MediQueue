import HeroSlider from '@/Components/HomePage/Banner/HeroSlider';
import Cards from '@/Components/HomePage/Tutors/Cards';
import WhyChoose from '@/Components/HomePage/ExtraSection/WhyChooseUs';
import React from 'react';
import DashboardSection from '@/Components/HomePage/ExtraSection/DashboardSection';

const Home = () => {
  return (
    <div>
      <HeroSlider></HeroSlider>
      <Cards></Cards>
      <DashboardSection></DashboardSection>
      <WhyChoose></WhyChoose>
    </div>
  );
};

export default Home;