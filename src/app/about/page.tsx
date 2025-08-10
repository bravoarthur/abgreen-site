import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - AB Green Garden Maintenance',
  description: 'Learn more about our professional gardening services in Australia..',
};

export default function Sobre() {
  return (
    <div>
      <section className="bg-garden-green text-white w-full py-8">
        <h1 className="text-4xl font-bold text-center">About Us</h1>
      </section>
      <div className="py-12 px-4 max-w-4xl mx-auto">
        <p className="text-lg">
          With over 10 years of gardening expertise, our business has been proudly serving the Northern Beaches of Sydney and surrounding areas for the past 5 years. We are passionate about transforming gardens with efficiency, using top-quality equipment, and prioritizing safety for both our team and your property.Our friendly approach ensures every project leaves your garden looking its best, bringing us genuine satisfaction. We believe in building long-term relationships with our clients, fostering a strong sense of community. Trust us to care for your garden with dedication and professionalism.
        </p>
      </div>
    </div>
  );
}