<template>
    <div class="login-container">
        
        <form class="login-form">
            <input type="text" class="input-field" placeholder="Pseudo" required>
            <div class="password-container">
                <input :type="passwordFieldType" class="input-field" placeholder="Password" required>
                <button type="button" @click="togglePasswordVisibility">
                    <img :src="passwordIcon" alt="Toggle visibility">
                </button>
            </div>
            
            <button class="login-button" type="submit">Login</button>
          
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            passwordFieldType: 'password',
            passwordIcon: './path/to/eye-closed-icon.png'
        }
    },
    methods: {
        togglePasswordVisibility() {
            if (this.passwordFieldType === 'password') {
                this.passwordFieldType = 'text';
                this.passwordIcon = './path/to/eye-open-icon.png';
            } else {
                this.passwordFieldType = 'password';
                this.passwordIcon = './path/to/eye-closed-icon.png';
            }
        }
    }
}
</script>
<style scoped>

.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 20px; /* Ajoute un peu d'espace autour du conteneur sur les petits écrans */
}

.login-form {
    display: flex;
    flex-direction: column;
    width: 100%; /* Fait en sorte que le formulaire prenne toute la largeur sur les petits écrans */
    max-width: 300px; /* Mais ne dépasse pas 300px sur les grands écrans */
    gap: 20px;
}

.input-field {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    color: white; /* Change la couleur du texte saisi par l'utilisateur en blanc */
}
.input-field::placeholder {
    color: white; /* Change la couleur du texte du placeholder en blanc */
}
/* Media query pour les écrans de plus de 600px de large */
@media (min-width: 600px) {
    .login-form {
        width: 300px; /* Rétablit la largeur du formulaire à 300px sur les grands écrans */
    }
}
.login-button {
    padding: 10px;
    border: none;
    border-radius: 20px; /* Augmente le rayon des bords arrondis */
    background-color: red;
    color: white;
    cursor: pointer;
    width: 80%; /* Fait en sorte que le bouton soit moins large que les champs de saisie */
    margin: 0 auto; /* Centre le bouton */
    transition: transform 0.3s ease; /* Ajoute une transition pour l'effet de clic */
    font-weight: bold; /* Rend le texte du bouton en gras */
}
.login-button:active {
    transform: scale(0.9); /* Réduit légèrement la taille du bouton lorsqu'il est cliqué */
    transition: transform 0.1s; /* Ajoute une transition pour l'effet de clic */
}
.input-field::placeholder {
    font-weight: bold;
}

.password-container {
    position: relative;
}

.password-container button {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
}

.password-container img {
    width: 20px;
    height: 20px;
}
.password-container {
    position: relative;
    display: flex;
}

.input-field {
    flex-grow: 1;
}

.toggle-password {
    background: none;
    border: none;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
}

.toggle-password img {
    width: 20px;
    height: 20px;
}

</style>