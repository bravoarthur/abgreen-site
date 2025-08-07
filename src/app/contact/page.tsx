'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import Head from 'next/head';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>();

  const onSubmit: SubmitHandler<ContactForm> = async (data) => {
    try {
      const response = await fetch('https://formspree.io/f/xvgqwnzv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        alert('Error sending message.');
      }
    } catch (error) {
      alert('Error sending message.');
    }
  };

  return (
    <div>
      <Head>
        <title>Contact - Ab Green Garden Maintenance</title>
        <meta name="description" content="Get in touch for quotes or inquiries." />
      </Head>
      <section className="bg-garden-green text-white w-full py-8">
        <h1 className="text-4xl font-bold text-center sm:text-3xl">Contact Us</h1>
      </section>
      <div className="py-12 px-4 max-w-5xl mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg sm:text-base">Name</label>
            <input
              id="name"
              {...register('name', { required: 'Name is required' })}
              className="w-full p-3 border rounded-lg text-garden-green sm:p-2"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-lg sm:text-base">Email</label>
            <input
              id="email"
              type="email"
              {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
              className="w-full p-3 border rounded-lg text-garden-green sm:p-2"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-lg sm:text-base">Message</label>
            <textarea
              id="message"
              {...register('message', { required: 'Message is required' })}
              className="w-full p-3 border rounded-lg text-garden-green sm:p-2"
              rows={5}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>
          <button type="submit" className="px-6 py-3 bg-garden-green text-white rounded-lg hover:bg-earth-brown transition-all sm:px-4 sm:py-2 sm:text-sm">
            Send
          </button>
        </form>
        <div className="mt-6 text-center">
          <p>Or contact us directly:</p>
          <a
            href="https://wa.me/+610424226446?text=Hi,%20I%27d%20like%20a%20quote%20for%20gardening%20services!"
            className="mt-2 inline-block px-6 py-3 bg-green-600 text-white rounded-lg"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}



/*"use client";

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
        alert('Message sent successfully!');
      } else {
        alert('Error sending message.');
      }
    } catch (error) {
      alert('Error sending message.');
    }
  };

  return (
    <div>
      <Head>
        <title>Contact - Ab Green Garden Maintenance</title>
        <meta name="description" content="Get in touch for quotes or inquiries." />
      </Head>
      <section className="bg-garden-green text-white w-full py-8">
        <h1 className="text-4xl font-bold text-center">Contact Us</h1>
      </section>
      <div className="py-12 px-4 max-w-2xl mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
          <div>
            <label className="block">Name</label>
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


*/