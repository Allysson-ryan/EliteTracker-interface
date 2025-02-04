import { Link, useLocation, useNavigate } from 'react-router-dom';
import style from './style.module.css';
import { ClockClockwise, ListChecks, SignOut } from '@phosphor-icons/react';
import { useUser } from '../../hooks/use-User';
import clsx from 'clsx';

export function Sidebar() {
  const { userData, logout } = useUser();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function handleLogout() {
    logout();

    navigate('/entrar');
  }

  return (
    <div className={style.container}>
      <img src={userData.avatarUrl} alt={userData.name} />
      <div className={style.links}>
        <Link to="/">
          <ListChecks className={clsx(pathname === '/' && style.active)} />
        </Link>
        <Link to="/foco">
          <ClockClockwise
            className={clsx(pathname === '/foco' && style.active)}
          />
        </Link>
      </div>
      <SignOut onClick={handleLogout} className={style.signout} />
    </div>
  );
}
