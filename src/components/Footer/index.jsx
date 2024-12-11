const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="mx-auto max-w-screen-lg px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-3">Urban Shop 🛍️</h2>
          <p className="text-gray-400">
            Tu tienda en línea favorita para encontrar los mejores productos al mejor precio.
          </p>
        </div>

        <div className="justify-self-end">
          <h3 className="text-lg font-semibold mb-3">Ayuda</h3>
          <ul className="space-y-2">
            <li>
              <a href="/faq" className="hover:text-gray-400">
                Preguntas Frecuentes
              </a>
            </li>
            <li>
              <a href="/shipping" className="hover:text-gray-400">
                Envíos
              </a>
            </li>
            <li>
              <a href="/returns" className="hover:text-gray-400">
                Devoluciones
              </a>
            </li>
          </ul>
        </div>

        <div className="justify-self-end">
          <h3 className="text-lg font-semibold mb-3">Síguenos</h3>
          <div className="flex flex-col text-lg">
            <a href="#" className="hover:text-blue-500">
              🅕 Facebook
            </a>
            <a href="#" className="hover:text-blue-400">
              🐦 Twitter
            </a>
            <a href="#" className="hover:text-pink-500">
              📸 Instagram
            </a>
            <a href="#" className="hover:text-blue-600">
              🔗 LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Línea Divisoria y Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Mi Tienda. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
