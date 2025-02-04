import styles from './styles.module.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useUser } from '../../hooks/use-User';

export function Auth() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { getUserInfo } = useUser();

  async function handleAuth() {
    await getUserInfo(String(searchParams.get('code')));

    navigate('/');
  }

  useEffect(() => {
    handleAuth();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Carregando...</h1>
    </div>
  );
}
