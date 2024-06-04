<script setup>
import {reactive, ref} from 'vue'


import BaseTitle from '@/components/ui/BaseTitle.vue'
import BaseText from '@/components/ui/BaseText.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseInput from '@/components/form/BaseInput.vue'
import BaseImg from '@/components/ui/BaseImg.vue'
import BaseList from '@/components/ui/BaseList.vue'
import ListTabs from '@/components/ui/ListTabs.vue'




const inputText = {
    type: 'text',
    name: 'text',
    value: '',
    title: 'Text',
    placeholder: 'placeholder',
    notice: 'notice',
    class: "group",
    show: true,
}

const inputEmail =  {
    type: 'email',
    name: 'email',
    value: '',
    title: 'Email',
    placeholder: 'placeholder@email.com',
    notice: 'notice',
    class: 'group',
    show: true,
}

const inputPassword =  {
    type: 'password',
    name: 'password',
    value: '',
    title: 'Password',
    placeholder: 'placeholder',
    notice: 'notice',
    class: 'group',
    show: true,
}

const inputCheckbox =  {
    type: 'checkbox',
    name: 'checkbox',
    value: 'test',
    class: 'checkbox',
    title: 'Checkbox',
    placeholder: 'placeholder',
    show: true,
}

const inputSelect =  {
    type: 'select',
    label: 'Select',
    name: 'select',
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
}


const inputDropDwon =  {
    type: 'select',
    dark: true,
    name: 'select',
    class: 'check',
    placeholder: 'Nome Peer Group',
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
}

const inputRadio =  {
    type: 'radio',
    label: 'radio',
    name: 'radio',
    title: 'input radio',
    class: 'check',
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
}


</script>

<template>
  <section class="container-fluid bg-white">
    <BaseTitle>
      Esma Form - nice serene
    </BaseTitle>

    <BaseText>
      The project is a components framework based on vue.js (v3) and bootstrap
    </BaseText>

    <BaseTitle>
      Form
    </BaseTitle>

    <BaseText>
      Form is a complex logic wrapper component. <code>TheForm</code> <br>
      <code>TheForm</code> accept two kind of props that are required <code>:form-data="formData" and :form-rules="formRules"</code> <br>
      <code>:form-data="formData"</code> have a specific json file that you can find for every input tyep, see below <br>
      <code>:form-rules="formRules"</code> pass inside for the rules for the validdation. See vuelidate documentations for more informations: https://vuelidate-next.netlify.app/
    </BaseText>
    <BaseCard>
      <h5 class="card-header">
        Type of input and respective json format
      </h5>
      <div class="card-body">
        <BaseTitle>
          Input Text
        </BaseTitle>
        <BaseInput
          :data="inputText"
        />
        <BaseTitle>
          Json options
        </BaseTitle>
        <pre>
          const inputText = {
              type: 'text',
              name: 'text',
              value: '',
              title: 'Text',
              placeholder: 'placeholder',
              notice: 'notice',
              class: "group",
              show: true,
          }
        </pre>
      </div>
      <div class="card-body">
        <BaseTitle>
          Input Email
        </BaseTitle>
        <BaseInput
          :data="inputEmail"
        />
        <BaseTitle>
          Json options
        </BaseTitle>
        <pre>
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
        </pre>
      </div>
      <div class="card-body">
        <BaseTitle>
          Input Password
        </BaseTitle>
        <BaseInput
          :data="inputPassword"
        />
        <BaseTitle>
          Json options
        </BaseTitle>
        <pre>
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
        </pre>
      </div>
      <div class="card-body">
        <BaseTitle>
          Input Radio
        </BaseTitle>
        <BaseInput
          :data="inputRadio"
        />
        <BaseTitle>
          Json options
        </BaseTitle>
        <pre>
          {
            type: 'radio',
            label: 'radio',
            name: 'radio',
            title: 'input radio',
            class: 'check',
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
        </pre>
      </div>
      <div class="card-body">
        <BaseTitle>
          Input Checkbox
        </BaseTitle>
        <BaseInput
          :data="inputCheckbox"
        />
        <BaseTitle>
          Json options
        </BaseTitle>
        <pre>
          {
              type: 'checkbox',
              name: 'checkbox',
              value: 'test',
              class: 'checkbox',
              title: 'Checkbox',
              placeholder: 'placeholder',
              show: true,
          },
        </pre>
      </div>
      <div class="card-body">
        <BaseTitle>
          Input Select
        </BaseTitle>
        <BaseInput
          :data="inputSelect"
        />
        <BaseTitle>
          Json options
        </BaseTitle>
        <pre>
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
          }
        </pre>
      </div>
    </BaseCard>
    <BaseTitle>
      Conditional input rendering
    </BaseTitle>
    <BaseText>
      The select, radio and checkbox could have the possibility to activate or not hidden input. For do this the input 'master' need to have  <code>activator: 'nameofactivator'</code> inside his options. And the sub input need to have <code>activeValue: 'nameofactivator'</code> for display itself when 'master' is checked. The sub input also need to have <code>show: false</code> 
    </BaseText>
  </section>
</template>
