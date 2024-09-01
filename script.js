onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  window.onload = function() {
    document.getElementById('meuAudio').play();
  };



