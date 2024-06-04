<script setup>
import TheForm from '@/components/TheForm.vue'
import { ref } from 'vue'
import { required, email, helpers, minLength, requiredIf } from '@vuelidate/validators'

const formData = {
  dataInput: [
    {
        type: 'text',
        name: 'text',
        value: '',
        title: 'Text',
        placeholder: 'placeholder',
        notice: 'notice',
        class: "group",
        show: true,
    },
    {
        type: 'email',
        name: 'email',
        value: '',
        title: 'Email',
        placeholder: 'placeholder@email.com',
        notice: 'notice',
        class: 'group',
        show: true,
    },
    {
        type: 'email',
        name: 'email2',
        value: '',
        title: 'Email2',
        placeholder: 'placeholder@email.com',
        notice: 'notice',
        class: 'group',
        show: true,
    },
    {
        type: 'password',
        name: 'password',
        value: '',
        title: 'Password',
        placeholder: 'placeholder',
        notice: 'notice',
        class: 'group',
        show: true,
    },
    {
      type: 'radio',
      label: 'radio',
      name: 'radio',
      title: 'input radio',
      class: 'check',
    //   activator è il valore da passare se l'input èp select o radio per la gestione dinamica della rimozione del campo dall'array vIfActovator, è REQUIRED
      activator: 'altro',
      show: true,
      options: [
          {
              value: 'uno',
              type: 'radio',
              name: 'radio',
              class: 'check',
              title: 'Radio',
          },
          {
              value: 'due',
              type: 'radio',
              name: 'radio',
              class: 'check',
              title: 'Radio',
          },
          {
              value: 'altro',
              type: 'radio',
              name: 'radio',
              class: 'check',
              title: 'Altro',
          },
      ]
    },
    // esempio dato nascosto con input Radio
    {
        type: 'text',
        name: 'text5',
        value: '',
        title: 'Text5',
        placeholder: 'placeholder3',
        notice: 'notice3',
        class: "group",
        activeValue: 'altro',
        show: false,
    },
    {
        type: 'checkbox',
        name: 'checkbox4',
        value: 'test',
        class: 'checkbox',
        title: 'Checkbox 4',
        placeholder: 'placeholder',
        show: true,
    },
    {
        type: 'checkbox',
        name: 'checkbox',
        value: 'test',
        class: 'checkbox',
        title: 'Checkbox',
        placeholder: 'placeholder',
        show: true,
    },
    // esempio dato nascosto
    {
        type: 'text',
        name: 'text2',
        value: '',
        title: 'Text2',
        placeholder: 'placeholder2',
        notice: 'notice2',
        class: "group",
        activeValue: 'checkbox',
        show: false,
    },
    {
        type: 'checkbox',
        name: 'checkbox2',
        value: 'test',
        class: 'checkbox',
        title: 'Checkbox2',
        placeholder: 'placeholder',
        show: true,
    },
    {
        type: 'text',
        name: 'text3',
        value: '',
        title: 'Text3',
        placeholder: 'placeholder3',
        notice: 'notice3',
        class: "group",
        activeValue: 'checkbox2',
        show: false,
    },
    {
      type: 'select',
      label: 'Select',
      name: 'select',
      activator: 'selectaltro',
      class: 'check',
      show: true,
      options: [
          {
              value: 'uno'
          },
          {
              value: 'due'
          },
          {
              value: 'selectaltro'
          },
      ]
    },
    {
        type: 'text',
        name: 'text6',
        value: '',
        title: 'Text6',
        placeholder: 'placeholder9',
        notice: 'notice9',
        class: "group",
        activeValue: 'selectaltro',
        show: false,
    },
    {
        type: 'file',
        name: 'file',
        label: 'Scegli file',
        id: 'id',
        show: true,
    },
  ],
}

// vModel passato dal componente figlio, IMPORTANTE, è necessario solo per la gestione dei required condizionali. requiredIf(), se non sono presenti required condizionali non è necessario passare il v-model dal compoente figlio. con required condizionali intendo un campo che deve diventare required solo se un altro campo è valorizzato
// se abbiamo più form e più required condizionali, ogni form avrà la sua const e la sua funzione. Questo è un esempio per un solo required condizionale
const childModel = ref(true)

const setModel = (object) => {
    childModel.value = object
    console.log(childModel.value.select === 'selectaltro')
}

const sendData = (object) => {
    console.log(object)
}

// IMPORTANTE

// alcuni campi potrebbero essere nascosti di defautl e mostrati solo in caso di active di altri input. 
// I dati devono contenere l'attivatore del v-if che sarà il name del campo che devi attivare activeValue: checkbox e show: false. Tutti gli altri devono contenere SEMPRE show: true perchè sono di primo livello


// qui definisco le rules per vuelidate, ogni campo required deve essere definito qui dentro con le rispettive regole
// helpers è per aggiungere un messaggio custom al field
// https://vuelidate-next.netlify.app/validators.html#sameas VALIDATORI

const formRules = {
    text: {
        required: helpers.withMessage('Valore obbligatorio', required),
        minLength: helpers.withMessage('Minimo 4 caratteri', minLength(4))
    },
    // email: {required, email},
    password: {required},
    radio: {required},
    checkbox: {required},
    select: {required},
    file: {required},

    checkbox2: {required},
    text6: {
        required: requiredIf(() => childModel.value.select === 'selectaltro'),
    }
}
</script>

<template>
  <main>
    <TheForm
      :form-data="formData"
      :form-rules="formRules"
      @set-model="setModel"
      @sendData="sendData"
    />
  </main>
</template>




