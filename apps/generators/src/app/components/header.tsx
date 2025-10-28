import "../globals.css";

export default function Header() {
  return (
    <header className="hidden md:flex w-full py-4 px-8 flex justify-between items-center menu">
      <h1 className="text-2xl font-bold">Generator Pro</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}