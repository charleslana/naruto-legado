const ninjasOnline = () => {
    let ninjas = '';
    [1, 2, 3, 4, 5].forEach(ninja => {
        ninjas += `
        <tr>
            <td><img src="../assets/img/icons/online.png" alt="Status"></td>
            <td>Sv2 - Name</td>
            <td><img src="../assets/img/villages/vila-areia.png" width="40px" alt="Village"></td>
            <td>18</td>
            <td>2060</td>
        </tr>
        `;
    });
    document.getElementById('ninjas-online').innerHTML = ninjas;
}

export default ninjasOnline;