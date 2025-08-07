
import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
}

export default function ServiceCard({ id, title, description }: ServiceCardProps) {
  return (
    <Link href={`/services/${id}`} className="block">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out w-full">
        <h3 className="text-xl font-semibold sm:text-lg">{title}</h3>
        <p className="mt-2 text-base sm:text-sm">{description}</p>
      </div>
    </Link>
  );
}
/*import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
}

export default function ServiceCard({ id, title, description }: ServiceCardProps) {
  return (
    <Link href={`/servicos/${id}`} className="block">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}*/