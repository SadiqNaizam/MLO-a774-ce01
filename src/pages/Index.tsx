import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import HeroSection from '../components/HeroSection/HeroSection';
import StatsGrid from '../components/StatsGrid/StatsGrid';
import PromotionsGrid from '../components/PromotionsGrid/PromotionsGrid';
import FoodMenuGrid from '../components/FoodMenuGrid/FoodMenuGrid';
import GallerySection from '../components/GallerySection/GallerySection';
import SpecialMenuSection from '../components/SpecialMenuSection/SpecialMenuSection';

/**
 * IndexPage serves as the main landing page for the Wellfood Chicken website.
 * It aggregates all the primary sections of the site into a cohesive food overview experience.
 * This page utilizes the MainAppLayout for consistent header, footer, and overall page structure.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout title="Food Overview">
      {/* HeroSection: Captures immediate attention with a prominent display of featured food. */}
      <HeroSection />

      {/* StatsGrid: Showcases key statistics about the restaurant, building trust and engagement. */}
      <StatsGrid />

      {/* PromotionsGrid: Highlights current special offers and promotions to attract customers. */}
      <PromotionsGrid />

      {/* FoodMenuGrid: Displays a selection of popular menu items. */}
      <FoodMenuGrid />

      {/* GallerySection: Features a visual gallery of food photography. */}
      <GallerySection />

      {/* SpecialMenuSection: Dedicated section for a prominent special menu offer. */}
      <SpecialMenuSection />
    </MainAppLayout>
  );
};

export default IndexPage;
