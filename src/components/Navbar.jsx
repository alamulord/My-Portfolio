import { navLinks, navIcons } from '#constants';
import useWindowStore from '#store/window';
import dayjs from 'dayjs';

const Navbar = () => {
  const { openWindow } = useWindowStore();
  return (
    <nav>
      <div>
        <img src='/images/logo.svg' alt='logo' />
        <p className='font-bold'>Aliyu's Portfolio</p>

        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {navIcons.map(({ id, img }) => (
          <img key={id} src={img} alt='icon' />
        ))}
        <time>{dayjs().format('ddd MMMM D, h:mm A')}</time>
      </div>
    </nav>
  );
};

export default Navbar;
