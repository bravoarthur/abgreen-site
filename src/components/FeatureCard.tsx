import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
}

export default function FeatureCard({ title, description, image }: FeatureCardProps) {
  return (
    <div className="feature-card bg-light-feature-green text-white rounded-lg shadow-md p-4 flex flex-col items-center text-center">
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="w-20 h-20 object-contain mb-4"
        
      />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm mt-2">{description}</p>
    </div>
  );
}