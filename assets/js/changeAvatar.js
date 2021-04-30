import { getStorage } from './storage.js';

export const showAvatar = () => {
    const avatar = document.getElementById('change-avatar');
    if (avatar) {
        const premium = getStorage('premium');
        const avatarName = getStorage('avatarName');
        let values = [1, 2, 3];
        if (premium === 'true') {
            values = [1, 2, 3, 4, 5];
        }
        let print = '';
        values.map(value => {
            print += `
            <div class="col s12 m4">
                <label>
                    <img src="../assets/img/avatar/${avatarName}/${value}.png" class="c-pointer" width="150px" alt="Avatar" />
                    <div>
                        <input class="with-gap" name="group2" type="radio" value="1" required>
                        <span></span>
                    </div>
                </label>
            </div>
        `;
        });
        
        avatar.innerHTML = print;
    }
}