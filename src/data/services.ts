export interface Service {
  id: string;
  title: string;
  description: string;
  additionalInfo: string;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Manutenção de Jardins',
    description: 'Cuide do seu jardim com nossos serviços regulares.',
    additionalInfo: 'Nossos serviços de manutenção incluem corte de grama, adubação, e cuidados sazonais para manter seu jardim saudável e vibrante durante todo o ano.',
  },
  {
    id: '2',
    title: 'Paisagismo',
    description: 'Crie um jardim dos seus sonhos com nosso design profissional.',
    additionalInfo: 'Desenvolvemos projetos personalizados de paisagismo, combinando plantas nativas e exóticas para criar espaços únicos e funcionais.',
  },
  {
    id: '3',
    title: 'Poda e Limpeza',
    description: 'Mantenha seu jardim impecável com nossos serviços de poda.',
    additionalInfo: 'Realizamos podas precisas e limpezas completas, removendo folhas secas e detritos para garantir a beleza e saúde do seu jardim.',
  },
  {
    id: '4',
    title: 'Irrigação',
    description: 'Sistemas de irrigação eficientes para manter seu jardim hidratado.',
    additionalInfo: 'Instalamos e mantemos sistemas de irrigação automatizados, otimizando o uso de água e garantindo a hidratação ideal para suas plantas.',
  },
  {
    id: '5',
    title: 'Controle de Pragas',
    description: 'Proteja suas plantas com soluções seguras e eficazes.',
    additionalInfo: 'Utilizamos métodos ecológicos e produtos seguros para controlar pragas, protegendo seu jardim sem prejudicar o meio ambiente.',
  },
];