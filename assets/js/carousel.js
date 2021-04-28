import characters from '../../mock/characters.js';

export const carousel = () => {
    const elements = document.querySelectorAll('.carousel');
    M.Carousel.init(elements, {
        duration: 30,
        numVisible: 5
    });
}

export const listCharacters = () => {
    const carouselCharacters = document.getElementById('characters');
    if (carouselCharacters) {
        let printCharacters = '';
        characters.map(character => {
            printCharacters += `
            <label class="carousel-item">
                <img src="../assets/img/avatar/${character.name}/${character.image}.png" alt="${character.name}" height="150px">
                <input class="with-gap" name="group1" type="radio" value="${character.value}" />
                <span>${character.name}</span>
            </label>       
            `;
        });
        carouselCharacters.innerHTML = printCharacters;
    }
}