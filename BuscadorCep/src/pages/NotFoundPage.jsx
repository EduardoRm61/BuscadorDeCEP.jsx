import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh',
      textAlign: 'center',
      padding: '1rem',
    }}>
      <h1 style={{ fontSize: '4rem', fontWeight: 'bold', color: '#dc2626' }}>404</h1>
      <p style={{ fontSize: '1.5rem', fontWeight: 'semibold', color: '#4b5563', marginTop: '1rem' }}>
        Página Não Encontrada
      </p>
      <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>
        Ops! Parece que a URL que você digitou não existe.
      </p>
      <Link 
        to="/" 
        style={{
          marginTop: '1.5rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#4f46e5',
          color: 'white',
          borderRadius: '0.5rem',
          fontWeight: 'medium',
          textDecoration: 'none',
          transition: 'background-color 0.3s'
        }}
      >
        Voltar para a Página Inicial
      </Link>
    </div>
  );
}

export default NotFoundPage;