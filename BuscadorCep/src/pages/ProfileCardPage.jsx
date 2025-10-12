import React from 'react';
import ProfileCard from '../components/profilecard.jsx'; // Caminho para o componente

function ProfileCardPage() {
  // Você pode passar dados para o ProfileCard aqui
  const userData = {
    name: "João Silva",
    age: 28,
    isStudent: false
  };

  return (
    <div>
      <h1>Página de Perfil</h1>
      <ProfileCard
        name={userData.name}
        age={userData.age}
        isStudent={userData.isStudent}
      />
    </div>
  );
}

export default ProfileCardPage;