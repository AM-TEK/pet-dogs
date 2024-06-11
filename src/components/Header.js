export default function Header({ title = "Pet Dogs", subtitle = "An app to help you find your new best friend!" }) {
  return (
    <header className="p-3 border-b-4">
      <h1 className="mb-2 text-3xl font-bold text-center sm:text-4xl md:text-5xl">{title}</h1>
      <h3 className="mb-2 text-xl italic font-semibold text-center sm:text-2xl md:text-3xl font-style:">{subtitle}</h3>
    </header>
  );
}
