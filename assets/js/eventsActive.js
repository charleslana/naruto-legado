const eventsActive = () => {
    let events = '';
    [1, 2].forEach(event => {
        events += `
        <tr>
            <td><img src="../assets/img/icons/online.png" alt="Status"></td>
            <td>Invasão do Boss</td>
        </tr>
        `;
    });
    document.getElementById('events-active').innerHTML = events;
}

export default eventsActive;