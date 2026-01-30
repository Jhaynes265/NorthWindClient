document.addEventListener("DOMContentLoaded", function() {

    document.getElementById('discount-row').addEventListener('click', function(e){
    if (e.target.classList.contains('discount')) {
      e.preventDefault();
            document.getElementById('product').innerHTML = e.target.dataset['product'];
      bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
    }
    });

    const toastID = document.getElementById('liveToast');
    const toast = bootstrap.Toast.getOrCreateInstance(toastID);
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        toast.hide();
      }
    });
  
});

