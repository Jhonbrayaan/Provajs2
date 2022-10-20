let Alunos = [
  { id: 1, name: 'Jhonatan', BIM1: 7, BIM2: 5, BIM3: 7, BIM4: 10, media: 10 },
  { id: 2, name: 'Gutemberg', BIM1: 5, BIM2: 4, BIM3: 5, BIM4: 3, media: 4 },
  { id: 3, name: 'Bea', BIM1: 3, BIM2: 7, BIM3: 6, BIM4: 3, media: 2 },
  { id: 4, name: 'Cleber', BIM1: 10, BIM2: 10, BIM3: 10, BIM4: 10, media: 10 }
]

Alunos.forEach( notas => {
  let media = ( notas.BIM1 + notas.BIM2 + notas.BIM3 + notas.BIM4 ) / 4;
  notas.media = media;

  if ( notas.media == 10 ) {
      console.log(`${notas.id}  ${notas.name}  ${notas.media}  Aluno exemplar`);
  } 
  else if ( notas.media >= 7) {
      console.log(`${notas.id}  ${notas.name}  ${notas.media} Aprovado`);
  } else {
      console.log(`${notas.id} ${notas.name} ${notas.media} Recuperação`);
  }

});