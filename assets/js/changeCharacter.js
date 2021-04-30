import characters from '../../static/characters.js';
import { getStorage } from './storage.js';

export const showCharacter = () => {
    const checkCharacter = document.getElementById('change-character');
    if (checkCharacter) {
        const premium = getStorage('premium');
        if (premium === 'true') {
            let print = '';
            characters.map(character => {
                print += `
                <div class="col s6 m2">
                    <label>
                        <img src="../assets/img/avatar/${character.name}/${character.image}.png" class="c-pointer" width="80px" alt="${character.name}" />
                        <div>
                            <input class="with-gap" name="group2" type="radio" value="${character.value}" required>
                            <span></span>
                        </div>
                    </label>
                </div>
            `;
            });
            
            print += '<input type="submit" class="btn" value="Salvar" />';
            
            checkCharacter.innerHTML = print;
        }
    }
}