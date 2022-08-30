import Nav from './Nav';

const Header = props => {
  return (
    <header className="fixed top-0 left-0 h-20 w-full bg-blue-white flex items-end">
      <Nav />
    </header>
  );
};

export default Header;
