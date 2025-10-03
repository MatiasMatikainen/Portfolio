export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <ul className="flex justify-center space-x-8 py-4 text-lg font-medium text-gray-700">
        <li>
          <a href="#koti" className="hover:text-blue-500 transition">Koti</a>
        </li>
        <li>
          <a href="#osaaminen" className="hover:text-blue-500 transition">Osaaminen</a>
        </li>
        <li>
          <a href="#projektit" className="hover:text-blue-500 transition">Projektit</a>
        </li>
        <li>
          <a href="#yhteystiedot" className="hover:text-blue-500 transition">Yhteystiedot</a>
        </li>
      </ul>
    </nav>
  );
}