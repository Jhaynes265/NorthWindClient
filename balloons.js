document.addEventListener("DOMContentLoaded", function() {
  const elem = document.getElementById('dob');
  const datepicker = new Datepicker(elem, {
    // options
    autohide: true,
    format: 'MM-dd'
  });

  // uncheck all boxes by default (Firefox)
  document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);
  // event listener for check/uncheck
  document.getElementById('checkbox-card').addEventListener('change', function(e){
    if (e.target.classList.contains('form-check-input')) {
      const elem = document.getElementById(e.target.id + 'Img');
      elem.style.visibility = "visible";
      elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
      e.target.checked ?
        elem.classList.add("animate__animated", "animate__bounceInDown") :
        elem.classList.add("animate__animated", "animate__bounceOutUp");
    }
  });

  
// 1

const classList = ["animate__bounce", "animate__flash", "animate__pulse", "animate__rubberBand", "animate__shakeX", "animate__shakeY", "animate__headShake", "animate__swing", "animate__tada", "animate__wobble", "animate__jello", "animate__heartBeat"];
const randomNumber = Math.floor(Math.random() * classList.length);
const AddClass = classList[randomNumber];
const h1 = document.getElementById("title");
h1.classList.add(AddClass);


// 2

const toastSubmission = document.getElementById('submit')
const toastError = document.getElementById('liveToast')
if (toastSubmission) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastError)
  toastSubmission.addEventListener('click', () => {
    const checkedBoxAmount = document.querySelectorAll('input[type="checkbox"]:checked').length;
    if (checkedBoxAmount === 0) {
      toastBootstrap.show()
    }
  })
}


// 3

document.getElementById('checkAll').addEventListener('click', () => {
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.checked = true;
    const elem = document.getElementById(checkbox.id + 'Img');
    elem.style.visibility = "visible";
    elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
    elem.classList.add("animate__animated", "animate__bounceInDown");
  });
});

document.getElementById('uncheckAll').addEventListener('click', () => {
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.checked = false;
    const elem = document.getElementById(checkbox.id + 'Img');
    elem.style.visibility = "visible";
    elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
    elem.classList.add("animate__animated", "animate__bounceOutUp");
  });
});


// 4

document.querySelectorAll('label').forEach(label => {
  const h1 = document.querySelector('h1');
  
  label.addEventListener('mouseenter', () => {
    
    if (label.id === 'head-red') {
      h1.classList.add('text-danger');
    } else if (label.id === 'head-blue') {
      h1.classList.add('text-primary');
    } else if (label.id === 'head-green') {
      h1.classList.add('text-success');
    }
  });
  
  label.addEventListener('mouseleave', () => {
    h1.classList.remove('text-danger', 'text-primary', 'text-success');
  });
});


});
