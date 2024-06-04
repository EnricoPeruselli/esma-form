// CONDIVISIONE PACCHETTI, Tutorial: https://www.youtube.com/watch?v=5QV9wVc8c7g
// CONDIVISIONE PACCHETTI -  qui bisogna importare ed esportare i componenti da condividere nei progetti figli
// Importo bootstrap in modo da generare un file minimizzato con tutte le classi
import TheForm from "./components/TheForm.vue";
import BaseError from "./components/form/BaseError.vue";
import BaseInput from "./components/form/BaseInput.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseCard from "./components/ui/BaseCard.vue";
import BaseImg from "./components/ui/BaseImg.vue";
// import BaseLink from "./components/ui/BaseLink.vue";
import BaseList from "./components/ui/BaseList.vue";
import BaseText from "./components/ui/BaseText.vue";
import BaseTitle from "./components/ui/BaseTitle.vue";
import SwitchButton from "./components/ui/SwitchButton.vue";
import ListTabs from "./components/ui/ListTabs.vue";
import BaseLoader from "./components/ui/BaseLoader.vue";
import DropDownSelect from "./components/ui/DropDownSelect.vue";

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faCircleInfo, faUser, faCirclePlus, faSquareCaretDown, faUpload, faCircleXmark, faChevronRight, faCaretRight, faCaretLeft, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import './scss/_main.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

export default {
    install: (app, options) => {
        app.component('TheForm', TheForm);
        app.component('BaseError', BaseError);
        app.component('BaseInput', BaseInput);
        app.component('BaseButton', BaseButton);
        app.component('BaseCard', BaseCard);
        app.component('BaseImg', BaseImg);
        app.component('BaseList', BaseList);
        app.component('BaseText', BaseText);
        app.component('BaseTitle', BaseTitle);
        app.component('SwitchButton', SwitchButton);
        app.component('ListTabs', ListTabs);
        app.component('BaseLoader', BaseLoader);
        app.component('DropDownSelect', DropDownSelect);
        
        library.add(faUserSecret, faCircleInfo, faUser, faCirclePlus, faSquareCaretDown, faUpload, faCircleXmark, faChevronRight, faChevronLeft, faCaretLeft, faCaretRight)
        app.component('FontAwesomeIcon', FontAwesomeIcon)
    },

};
