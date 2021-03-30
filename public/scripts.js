async function windowActions() {
    const request = await fetch(endpoint);
    const dining = await request.json();

    return hall_id;
}
window.onload = windowActions;