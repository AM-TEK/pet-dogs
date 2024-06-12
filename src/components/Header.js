import Link from 'next/link';

export default function Header({ title = "Pet Dogs", subtitle = "An app to help you find your new best friend!" }) {
  return (
    <header className="p-1 border-b-4">
      <h1 className="text-xl font-bold text-center sm:text-2xl md:text-3xl">{title}</h1>
      <h3 className="italic font-semibold text-center text-md sm:text-lg md:text-xl font-style:">{subtitle}</h3>
      <nav className="flex justify-center mt-2 space-x-4">
        <Link href="/">
          Home
        </Link>
        <Link href="/map">
          Map
        </Link>
      </nav>
    </header>
  );
}
