<script setup>
import {reactive, ref} from 'vue'
import BaseInput from '@/components/form/BaseInput.vue'
import BaseError from '@/components/form/BaseError.vue'
import useVuelidate from '@vuelidate/core'



// SET data

// validate serve per inizilizzare vuelidate, se non uso un valore al load dei componenti non esiste v$ in quanto viene creato dopo la validazione e va in errore il componente
// ref serve per poter richiamare la variabile nelle funzioni. per modificare il date bisogna dichiararle con validate.value = false
const validate = ref(true)

// SET prop

const props = defineProps({
    formData: {
      type: Object,
      default: () => {}
    },
    formRules: {
      type: Object,
      default: () => {}
    },
})

// reactive serve per rendere reattiva la la const, si deve importare

const vModel = reactive({})

// array per le chiavi che gestiscono gli input condizionali
const vIfActivator = reactive([])


// qui richiamo le rules di validazione definite all'interno della pagina
// definisco vuelidate
const v$ = useVuelidate(props.formRules, vModel)


// funzione per verificare se all'interno dell'array per mostrare gli input condizionali viene trovate la chiave, se viene trovata la chiave allora l'input condizionale viene mostrato

const checkConditionalInput = (value) => {
    return vIfActivator.indexOf(value) > -1
}

// funzione per elimare gli item da vIfActivator
const deleteItemfromVifActivator = (value) => {
    return vIfActivator.splice(vIfActivator.indexOf(value), 1)
}

// SET emit

const emit = defineEmits(['setModel'])

// SET funzioni per salvare i dati

const saveData = (value) => {

    // salvo il dato nel v-model col nome passato dal json e il valore
    vModel[value.name] = value.value

    // emetto il vmodel per il compoennte padre, servirà per i requiredIf condizionali. IMPORTANTE, necessario solo se si vogliono usare dei requiredIf condizionali che sono da settare nel componeneta padre

    emit('setModel', vModel)


    // IMPORTANTE, per l'attivazione condizionale degli input devo creare un array in cui salvo tutte le chiavi degli input valorizzati. Nel json degli input condizionali sarà presente un valore activeCheckbox che avrà un valore uguale alla chiave che lo attiverà. Cosi facendo se la chiave viene trovata ed è uguale all'attivatore l'input si mostrerà.

    // funzione per verificare che non sia già presente la chiave all'interno dell'array, essendo che la funzione saveData è legata all'input ci sarebbe l'aggiunta della chiave ad ogni modifica

    const containsString = vIfActivator.some(element => {
        return element.toLowerCase() === value.name.toLowerCase()
    });


    // controllo che l'input sia radio o select
    // in questo caso il funzionamente è diverso rispetto alla checkbox, qui il nome dell'attivatore deve essere il valore passato dall'input, ma non sarà un booleano come per la checkbox, sarà una stringa. Ogni volta che cambio valore devo fare un controllo all'interno del vModel, se è presente rimuovo sia l'attivatore da vIfActivator che il dato condizionale dal vModel. esempio ho un radio con 3 opzioni. l'input condizionale viene attivato se il radio è settato su altro. se quando cambio input 'altro' è presente vuol dire che sto cambiando valore, quindi pulisco i due array.
    if(value.type == "radio" || value.type == "select") {
      // value activator è l'attivaotre che devo passare per gli input radio e select per cancellare l'attivatore dall'array. se non passo queto dato è complesso cancellare il dato in quanto ogni volta che clicco sun altro campio radio viene passato il nuovo valore e il precedente viene perso. questo porta a un valore undefined e lo splice di default rimuove l'ultimo item dall'array
      if (vIfActivator.includes(value.activator)) {
        // verifico sia presente l'attivatore, se non presente il valore sarebbe undefined e lo splice di default rimuove l'ultimo item dall'array
        deleteItemfromVifActivator(value.activator)
      }
      // se ne vmodel c'è il name dell'attivaotre 
      if(vModel.hasOwnProperty(value.name)) {
        // se il valore è diverso dall'attivatore
        if(vModel[value.name] != value.activator) {
          // loop e cerco in tutti gli input l'item che ha come activevalue === attivaotre
          props.formData.dataInput.forEach(item => {
            if(item.activeValue === value.activator) {
              // elimino l'item
              delete vModel[item.name]
            }
          })
        }
      }
    }
    // se non è presente la chiave la aggiungo
    if(!containsString) {
        // faccio un controllo se il valore è TRUE lo aggiungo, gli input possono solo essere condizionali se vengono gestiti da una select. se l'input che arriva è diverso tra Boolean allora non considero il valore
        if(value.type == "checkbox") {
            vIfActivator.push(value.name)
        } else {
          // DESCRIZIONE DA INSERIRE - Loop e aggiungo il valore
          props.formData.dataInput.forEach(item => {
            // cerco nei dati l'item che ha l'attivatore uguale al value passato
            if(item.activeValue === value.value) {
              // lo aggiungo al vIfActovator
              vIfActivator.push(value.value)
            }
          })
        }
    } else {
        // significa che il valore è già presente quindi essendo un Boolean lo rimuovo cosi da nascondere l'input condizionale
        deleteItemfromVifActivator(value.name)
        // lo rimuovo anche dal v-model e il valore dell'input condizionale
        props.formData.dataInput.forEach(item => {
          // cerco nei dati l'item che ha l'attivatore uguale al value passato
          if(item.activeValue === value.name) {
            // lo rimuovo dal v-model
            delete vModel[item.name]
          }
        })
    }

}

const sendData = async () => {
    // verifico la validazione attraverso le regole definite in const rules
    const result = await v$.value.$validate();
    if (result) {
        validate.value = true
        alert('succes')
        // inserire funzione STORE, le diverse funzioni gestirle nello store e non qui
    } else {
        validate.value = false
        alert('nope')
    }
}

</script>

<template>
  <section>
    <form @submit.prevent="sendData">
      <!-- ogni componente deve stare all'interno di una section per la gestione degli errori, la gestione interna all'input porta un refresh del componente causando errori di rendering -->
      <section
        v-for="(input, i) in props.formData.dataInput"
        :key="i"
      >
        <template v-if="input.show">
          <BaseInput
            :data="input"
            @input="saveData"
          />
          <BaseError
            v-if="v$ && !validate"
            :error="v$[input.name]"
          />
        </template>
        <template v-if="checkConditionalInput(input.activeValue) && !input.show">
          <BaseInput
            :data="input"
            @input="saveData"
          />
          <BaseError
            v-if="v$ && !validate"
            :error="v$[input.name]"
          />
        </template>
      </section>
    </form>
    <button
      type="submit"
      class="btn btn-primary"
      @click="sendData"
    >
      Invia
    </button>
    {{ vModel }}
    {{ vIfActivator }}
  </section>
</template>