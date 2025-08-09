export default function Footer() {
  return (
    <footer className="bg-garden-green text-white py-8">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} AB Green Garden Maintenance. All rights reserved.</p>
        <p>Contact us: <a href="mailto:quote.gcare@gmail.com" className="underline">quote.gcare@gmail.com</a></p>
        <p>Phone: 0424 226 446</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://www.facebook.com/profile.php?id=61563579015089" className="text-white hover:text-light-garden">Facebook</a>
          <a href="https://wa.me/+610424226446" className="text-white hover:text-light-garden">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}