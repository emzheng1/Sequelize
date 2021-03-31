async function diningHalls() {
  const request = await fetch('/api/dining');
  const diningInfo = await request.json();
  
  const arrayDining = diningInfo.data;
  const info = document.querySelector('.target');

  arrayDining.forEach((i) => {
    createRows.innerHTML = `
        <td>${i.hall_id}</td>
        <td>${i.hall_name}</td>
        <td>${i.hall_address}</td>
        `;
    info.append(createRows);
  });
}
window.onload = diningHalls;