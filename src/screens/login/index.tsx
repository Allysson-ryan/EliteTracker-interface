import { Button } from '../../components/button';
import { api } from '../../services/api';
import styles from './style.module.css';
import { GithubLogo } from '@phosphor-icons/react';

export function Login() {
  async function handleAuth() {
    const { data } = await api.get('/auth');

    window.location.href = data.redirectUrl;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Entrar com</h1>
        <Button onClick={handleAuth}>
          <GithubLogo />
          GitHub
        </Button>
        <p>
          Ao entrar eu concordo com os Termos de Serviço e Política de
          Privacidade.
        </p>
      </div>
    </div>
  );
}
