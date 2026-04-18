import { NavLink } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Sign in', to: '/auth/signin' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'h-full border-2 px-4 py-2 text-[11px] font-semibold uppercase flex items-center justify-center tracking-[0.24em] transition',
    isActive
      ? 'border-primary bg-primary text-zinc-50'
      : 'border-transparent text-zinc-700 hover:border-primary hover:bg-primary hover:text-zinc-50',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 bg-secondary backdrop-blur">
      <div className="mx-auto flex max-w-6xl h-full items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3 ">
          <img src={logo} alt="BulldogEx" className="h-9 w-9 border-2 rounded-full border-primary bg-primary object-contain" />
          <div className="space-y-0.5">
            <p className="text-xl font-bold text-zinc-900">BulldogEx Shop</p>
          </div>
        </NavLink>

        <nav className="hidden h-full justify-center items-center md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClassName}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
