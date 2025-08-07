export default function Footer() {
  return (
    <footer className="bg-garden-green text-white py-8">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Your Gardening Business. All rights reserved.</p>
        <p>Contact us: <a href="mailto:info@yourgardeningbusiness.com" className="underline">info@yourgardeningbusiness.com</a></p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://facebook.com" className="text-white hover:text-light-garden">Facebook</a>
          <a href="https://instagram.com" className="text-white hover:text-light-garden">Instagram</a>
          <a href="https://wa.me/YourNumber" className="text-white hover:text-light-garden">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}