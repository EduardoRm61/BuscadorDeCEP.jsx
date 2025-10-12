import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function IdDisplayPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const numId = parseInt(id);

    if (isNaN(numId) || numId > 100) {
      navigate('/', { replace: true });
    }
  }, [id, navigate]);

  return (
    <div>
      <h2>ID Recebido!</h2>
      <p>O ID capturado na URL é: {id}</p>
    </div>
  );
}

export default IdDisplayPage;