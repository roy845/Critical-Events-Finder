type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  return (
    <header className="py-6 bg-blue-600 w-full text-white text-center shadow">
      <h1 className="text-3xl font-bold">{title}</h1>
    </header>
  );
}

export default Header;
