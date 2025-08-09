
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

export default function ServiceCard({ id, title, description, image }: ServiceCardProps) {
  return (
    <Link href={`/services/${id}`} className="block">
      <div className="bg-gray-100 rounded-lg shadow-md hover:bg-light-card hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out w-full overflow-hidden">
        <Image
          src={image}
          alt={`Illustration of ${title}`}
          width={600}
          height={400}
          className="w-full h-48 object-cover rounded-t-lg"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          priority={false}
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold sm:text-lg">{title}</h3>
          <p className="mt-2 text-base sm:text-sm">{description}</p>
        </div>
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
    <Link href={`/services/${id}`} className="block">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out w-full hover:bg-light-card">
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