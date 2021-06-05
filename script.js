let times = new Date();
let h = times.getHours();
let m = times.getMinutes();

document.getElementById('hour').innerHTML = h + ':' + m;

function show(ob) {
  let a = ob;
  document.getElementById('value').value += a;
}
function call() {
  if (document.getElementById('value').value === '') {
    document.getElementById('error').innerHTML = 'please Add Mobile No.';
    document.getElementById('error').style.color = 'red';
  } else {
    document.getElementById('error').style.color = 'green';
    document.getElementById('error').innerHTML = 'Add Number.';
    document.getElementById('keypad').style.visibility = 'hidden';
    document.getElementById('callscr').style.visibility = 'visible';
    document.getElementById('phone').innerHTML = document.getElementById(
      'value'
    ).value;
  }
}
function cancel() {
  document.getElementById('keypad').style.visibility = 'visible';
  document.getElementById('callscr').style.visibility = 'hidden';
}
