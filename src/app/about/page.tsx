import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Your Gardening Business',
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
          We are passionate about transforming gardens into stunning spaces. With years of experience in Australia, we offer professional gardening services, from maintenance to landscaping.
        </p>
      </div>
    </div>
  );
}