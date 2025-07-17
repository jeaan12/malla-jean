document.addEventListener('DOMContentLoaded', () => {
  const cursos = [
    { nombre: "Anatomía", semestre: 1 },
    { nombre: "Histología", semestre: 1 },
    { nombre: "Bioquímica", semestre: 2 },
    { nombre: "Fisiología", semestre: 2 },
    // Agrega más cursos según tu malla
  ];

  const container = document.getElementById('malla-container');

  cursos.forEach(curso => {
    const divCurso = document.createElement('div');
    divCurso.className = 'curso';
    divCurso.textContent = `${curso.nombre} (Sem ${curso.semestre})`;
    container.appendChild(divCurso);
  });
});
crear archivo script.js con estructura de malla interactiva
