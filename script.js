function openModal(src) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    modal.style.display = "block";
    modalImg.src = src;
  }
  
  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
  }
  