/* eslint-disable vue/component-definition-name-casing */
import { createApp, h } from 'vue'
import { createPinia } from 'pinia'

// DOC fontawesome https://fontawesome.com/docs/web/use-with/vue/add-icons
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faCircleInfo, faUser, faCirclePlus, faSquareCaretDown, faUpload, faCircleXmark, faChevronRight, faCaretRight, faCaretLeft, faChevronLeft } from '@fortawesome/free-solid-svg-icons'


// CONDIVISIONE PACCHETTI, Tutorial: https://www.youtube.com/watch?v=5QV9wVc8c7g
// CONDIVISIONE PACCHETTI - qui è importante importare tutti i componenti che si vogliono usare all'interno dei progetti figli
import TheForm from './components/TheForm.vue';
import BaseError from './components/form/BaseError.vue';
import BaseInput from './components/form/BaseInput.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseImg from './components/ui/BaseImg.vue';
import ListTabs from './components/ui/ListTabs.vue';

import BaseList from './components/ui/BaseList.vue';
import BaseText from './components/ui/BaseText.vue';
import BaseTitle from './components/ui/BaseTitle.vue';

// importo css bootstrap
// TUTORIAL https://www.youtube.com/watch?v=oZ9zlS5V5WU&t=0s
import "bootstrap/dist/css/bootstrap.css";


import './scss/_main.scss'
import App from './App.vue'
import router from './router'

// import './assets/main.css'

const app = createApp({
    render: ()=>h(App)
});

// CONDIVISIONE PACCHETTI - qui è importante dichiarare i componnti da condividere nei progetti figli

app.use(TheForm, BaseError, BaseInput, BaseButton, BaseCard, BaseImg, BaseList, BaseText, BaseTitle)


library.add(faUserSecret, faCircleInfo, faUser, faCirclePlus, faSquareCaretDown, faUpload, faCircleXmark, faChevronRight, faChevronLeft, faCaretLeft, faCaretRight)
app.use(createPinia())
app.use(router)

// add FONTAWESOME

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

// importo JS bootstrap
// aggiunto direttamente in index.html come script perchè non importava il JS, TODO
// import 'bootstrap/dist/js/bootstrap.js'
