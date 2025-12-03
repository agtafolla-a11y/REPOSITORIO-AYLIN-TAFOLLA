// referencia para los elementos//
const imageUrlInput = document.getElementById('imageUrlInput');

const addImageBtn = document.getElementById('addImageBtn');

const galleryContainer = document.getElementById('galleryContainer');

// Evento, al hacer click//

addImageBtn.addEventListener('click',() => {
  const imageUrl = imageUrlInput.value.trim();
  
  if(imageUrl){
    //crear u nuevo contenedor para la imagen//
    const col = document.createElement('div');
    col.classList.add('col');
    
    //crear la imagen//
    
    const img = document.createElement('img');
    img.src = imageUrl;
    img.classList.add('img-fluid', 'rounded', 'shadow-sm');
    img.alt = 'Imagen añadida';
    
    // Agregar la imagen dentro del contenedor
    col.appendChild(img);

    // Añadir el contenedor a la galería
    galleryContainer.appendChild(col);

    // Limpiar input
    imageUrlInput.value = '';
  } else {
    alert('Por favor ingresa una URL válida.');
  }
});

