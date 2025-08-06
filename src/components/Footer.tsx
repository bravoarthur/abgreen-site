export default function Footer() {
  return (
    <footer className="bg-garden-green text-white p-4">
      <div className="max-w-6xl mx-auto text-center">
        <p>Seu Negócio de Jardinagem &copy; {new Date().getFullYear()}</p>
        <p className="mt-2">Contato: seuemail@example.com | (XX) XXXX-XXXX</p>
        <div className="mt-2">
          <a href="https://wa.me/SeuNumero" className="text-white underline">WhatsApp</a>
          {' | '}
          <a href="https://instagram.com/SeuPerfil" className="text-white underline">Instagram</a>
        </div>
      </div>
    </footer>
  );
}