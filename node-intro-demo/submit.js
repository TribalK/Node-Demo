document.querySelector('#clickme').addEventListener('click', getReq);

async function getReq() {
  try {
    console.log('clicked');
    const res = await fetch('/test');
    const data = await res.json();
    console.log(data);
  } catch ( error ) {
    console.log(error);
  }
}
