document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Map
  const map = L.map('map', { minZoom: 4 }).setView([-22.5, 137.0], 4); // Center of Australia loosely

  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri',
    maxZoom: 19
  }).addTo(map);

  // Custom icon for pins
  const outbackIcon = L.divIcon({
    className: 'custom-pin',
    html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="#d35400" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`,
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24]
  });

  // 2. Render Gallery and Map Pins
  const grid = document.getElementById('artifact-grid');
  const clearFilterBtn = document.getElementById('clear-filter');
  const returnMapBtn = document.getElementById('return-map');
  
  collectionData.forEach(item => {
    // Add Card
    if (!item.isLocationOnly) {
      const card = document.createElement('div');
      card.className = 'card glass-panel';
      card.dataset.location = item.locationName;
      const coverImage = item.images ? item.images[0] : item.image;
      card.innerHTML = `
        <div class="card-img">
          <img src="img/${coverImage}" alt="${item.title}">
        </div>
        <div class="card-content">
          <h3 class="card-title">${item.title}</h3>
          <p class="card-meta">${item.locationName}</p>
          <p class="card-desc">${item.description}</p>
        </div>
      `;
      
      // Open Modal Logic
      card.addEventListener('click', () => openModal(item));
      grid.appendChild(card);
    }

    // Add Marker
    if (item.coordinates && item.coordinates.length === 2) {
      const marker = L.marker(item.coordinates, {icon: outbackIcon})
        .addTo(map)
        .bindTooltip(`<b>${item.title}</b><br>${item.locationName}`, {direction: 'top', offset: [0, -25]});
        
      marker.on('click', () => {
        // Filter the gallery cards
        const allCards = document.querySelectorAll('#artifact-grid .card');
        allCards.forEach(c => {
          if (c.dataset.location === item.locationName) {
            c.style.display = 'flex';
          } else {
            c.style.display = 'none';
          }
        });
        
        // Filter the document cards across both sections
        const allDocs = document.querySelectorAll('#docs-grid .card, #heritage-grid .card');
        allDocs.forEach(c => {
          if (c.dataset.locations && c.dataset.locations.includes(item.locationName)) {
            c.style.display = 'flex';
          } else {
            c.style.display = 'none';
          }
        });
        clearFilterBtn.hidden = false;
        returnMapBtn.hidden = false;
        
        // Custom smooth scroll logic respecting fixed headers if they exist
        const galleryElement = document.getElementById('gallery');
        galleryElement.scrollIntoView({ behavior: 'smooth' });
      });
    }
  });

  clearFilterBtn.addEventListener('click', () => {
    document.querySelectorAll('#artifact-grid .card, #docs-grid .card, #heritage-grid .card').forEach(c => c.style.display = 'flex');
    clearFilterBtn.hidden = true;
    returnMapBtn.hidden = true;
    
    // Reset map view
    map.setView([-22.5, 137.0], 4);
  });

  returnMapBtn.addEventListener('click', () => {
    document.getElementById('map').scrollIntoView({ behavior: 'smooth' });
  });

  // 3. Render Printed Materials
  const docsGrid = document.getElementById('docs-grid');
  const heritageGrid = document.getElementById('heritage-grid');
  printedMaterials.forEach(doc => {
    const card = document.createElement(doc.link ? 'a' : 'div');
    if (doc.link) {
        card.href = doc.link;
        card.style.textDecoration = 'none';
        card.style.color = 'inherit';
    } else if (doc.image) {
        card.onclick = () => {
          openModal({
            title: doc.title,
            locationName: "Archival Reference",
            date: "Archive Document",
            description: "An archival map of the fossicking area. <br><br>Read the full <a href='brochure.html' style='color: var(--accent-1); font-weight: 600;'>Agate Creek Information Brochure &rarr;</a>",
            sourceDocument: "Esma & Jim Rigby's Archive",
            images: [doc.image]
          });
        };
    }
    card.className = 'card glass-panel';
    if (doc.relatedLocations) {
      card.dataset.locations = doc.relatedLocations.join('|');
    }
    
    let imgHTML = '';
    if (doc.image) {
        imgHTML = `
      <div class="card-img">
        <img src="img/${doc.image}" alt="${doc.title}">
      </div>`;
    }

    card.innerHTML = `
      ${imgHTML}
      <div class="card-content" style="${!doc.image ? 'padding: 3rem 1.5rem; text-align: center;' : ''}">
        <h3 class="card-title" style="${!doc.image ? 'color: var(--accent-1);' : ''}">${doc.title}</h3>
        ${doc.link ? '<p style="color: var(--text-muted); margin-top: 1rem;">Read Full Story &rarr;</p>' : ''}
      </div>
    `;
    
    if (doc.isHeritage && heritageGrid) {
      heritageGrid.appendChild(card);
    } else {
      docsGrid.appendChild(card);
    }
  });

  // 4. Modal Logic
  const modal = document.getElementById('artifact-modal');
  const closeBtn = document.getElementById('close-modal');
  const prevBtn = document.getElementById('gallery-prev');
  const nextBtn = document.getElementById('gallery-next');
  const modalImg = document.getElementById('modal-image');
  
  let currentImages = [];
  let currentIndex = 0;

  let isZoomed = false;
  modalImg.style.cursor = 'zoom-in';
  
  function resetZoom() {
    isZoomed = false;
    modalImg.style.objectFit = 'contain';
    modalImg.style.maxHeight = '80vh';
    modalImg.style.width = '100%';
    modalImg.style.height = '100%';
    modalImg.style.cursor = 'zoom-in';
    modalImg.parentElement.style.overflow = 'visible';
    modalImg.parentElement.style.display = 'flex';
  }

  modalImg.addEventListener('click', () => {
    isZoomed = !isZoomed;
    if (isZoomed) {
      modalImg.style.objectFit = 'none';
      modalImg.style.maxHeight = 'none';
      modalImg.style.width = 'auto';
      modalImg.style.height = 'auto';
      modalImg.style.cursor = 'zoom-out';
      modalImg.parentElement.style.overflow = 'auto';
      modalImg.parentElement.style.display = 'block';
    } else {
      resetZoom();
    }
  });

  function updateGalleryButtons() {
    if (currentImages.length <= 1) {
      prevBtn.hidden = true;
      nextBtn.hidden = true;
    } else {
      prevBtn.hidden = currentIndex === 0;
      nextBtn.hidden = currentIndex === currentImages.length - 1;
    }
    modalImg.src = currentImages[currentIndex];
  }

  prevBtn.addEventListener('click', () => {
    resetZoom();
    if (currentIndex > 0) {
      currentIndex--;
      updateGalleryButtons();
    }
  });

  nextBtn.addEventListener('click', () => {
    resetZoom();
    if (currentIndex < currentImages.length - 1) {
      currentIndex++;
      updateGalleryButtons();
    }
  });

  function openModal(item) {
    const rawImages = item.images || [item.image];
    currentImages = rawImages.map(img => img.includes('img/') ? img : `img/${img}`);
    currentIndex = 0;
    resetZoom();
    updateGalleryButtons();

    document.getElementById('modal-title').textContent = item.title;
    document.getElementById('modal-location').textContent = item.locationName;
    document.getElementById('modal-date').textContent = item.date;
    let dynamicDesc = item.description;
    if (item.relatedLinks && item.relatedLinks.length > 0) {
      dynamicDesc += `<br><br><span style='color: var(--accent-1); font-weight: 600;'>Read more:</span><ul style='margin-top: 0.5rem; padding-left: 1.5rem; list-style-type: disc; color: var(--text-main); line-height: 1.6;'>`;
      item.relatedLinks.forEach(link => {
        dynamicDesc += `<li><a href='${link.url}' style='color: var(--text-main); text-decoration: underline; transition: color 0.3s;' onmouseover="this.style.color='var(--accent-1)'" onmouseout="this.style.color='var(--text-main)'">${link.label}</a></li>`;
      });
      dynamicDesc += `</ul>`;
    }
    
    document.getElementById('modal-desc').innerHTML = dynamicDesc;
    document.getElementById('modal-source').textContent = item.sourceDocument || 'Unknown';
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent bg scroll
  }

  closeBtn.addEventListener('click', () => {
    resetZoom();
    modal.classList.remove('active');
    document.body.style.overflow = '';
  });

  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      resetZoom();
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});
