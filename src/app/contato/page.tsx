"use client"; // Add this directive to make it a Client Component


"use client";

import { useForm, SubmitHandler } from 'react-hook-form';
import Head from 'next/head';

type FormData = {
  nome: string;
  email: string;
  mensagem: string;
};

export default function Contato() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch('https://formspree.io/f/xvgqwnzv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert('Mensagem enviada! Entraremos em contato em breve.');
      } else {
        alert('Erro ao enviar a mensagem. Tente novamente.');
      }
    } catch (error) {
      alert('Erro ao enviar a mensagem. Tente novamente.');
    }
  };

  return (
    <div>
      <Head>
        <title>Contato - Seu Negócio de Jardinagem</title>
        <meta name="description" content="Entre em contato para orçamentos e dúvidas." />
      </Head>
      <section className="bg-garden-green text-white w-full py-8">
        <h1 className="text-4xl font-bold text-center">Entre em Contato</h1>
      </section>
      <div className="py-12 px-4 max-w-2xl mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
          <div>
            <label className="block">Nome</label>
            <input
              {...register('nome', { required: 'Nome é obrigatório' })}
              className="w-full p-2 border rounded"
            />
            {errors.nome && <p className="text-red-500">{errors.nome.message}</p>}
          </div>
          <div>
            <label className="block">E-mail</label>
            <input
              {...register('email', { required: 'E-mail é obrigatório', pattern: { value: /^\S+@\S+$/i, message: 'E-mail inválido' } })}
              className="w-full p-2 border rounded"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block">Mensagem</label>
            <textarea
              {...register('mensagem', { required: 'Mensagem é obrigatória' })}
              className="w-full p-2 border rounded"
            />
            {errors.mensagem && <p className="text-red-500">{errors.mensagem.message}</p>}
          </div>
          <button type="submit" className="px-6 py-3 bg-earth-brown text-white rounded-lg">
            Enviar
          </button>
        </form>
        <div className="mt-6 text-center">
          <p>Ou fale conosco diretamente:</p>
          <a
            href="https://wa.me/+61424226446?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20jardinagem!"
            className="mt-2 inline-block px-6 py-3 bg-green-600 text-white rounded-lg"
          >
            Fale pelo WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}


