import characters from '../../mock/characters.js';
import villages from '../../mock/villages.js';

export const listCharacters = () => {
    const registerCharacters = document.getElementById('characters');
    if (registerCharacters) {
        let labelCharacters = '';
        characters.map(character => {
            labelCharacters += `
            <label class="carousel-item">
                <img src="../assets/img/avatar/${character.name}/${character.image}.png" alt="${character.name}" height="150px">
                <input class="with-gap" name="group2" type="radio" value="${character.value}" />
                <span>${character.name}</span>
            </label>       
            `;
        });
        registerCharacters.innerHTML = labelCharacters;
    }
}

export const listVillages = () => {
    const registerVillages = document.getElementById('villages');
    if (registerVillages) {
        let labelVillages = '';
        villages.map(village => {
            labelVillages += `
            <div class="col m3 col-padding">
                <label>
                    <img src="../assets//img/villages/${village.image}.png" alt="${village.name}" height="50px" />
                    <input class="with-gap" name="group3" type="radio" value="${village.value}" />
                    <span>${village.name}</span>
                </label>
            </div>
            `;
        });
        registerVillages.innerHTML = labelVillages;
    }
}