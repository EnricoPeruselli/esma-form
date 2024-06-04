# Esma Form

esma-form is a library for creating forms in Vue. The library allows you to create anything from simple forms to complex forms with conditional inputs and dynamic validations.


## Installation

Install the library using npm:

```sh
npm i esma-form
```

## Basic Usage

Import style and component in main.js file 

```sh
import '../node_modules/esma-form/dist/style.css'

import TheForm from '../node_modules/esma-form/dist/esma-form.mjs'

app.use(TheForm)
```

Then inside the component/page

```sh
<TheForm :form-data="formData" :form-rules="formRules"/>
```

You need to pass a JSON object to configure the form inputs. Here is an example of a basic input configuration:

```sh
dataInput: [
  {
    type: 'text',
    name: 'text',
    value: '',
    title: 'Text',
    placeholder: 'placeholder',
    notice: 'notice',
    class: 'group',
    show: true,
  },
]
```
## Input Configuration

- type: The type of input (e.g., text, checkbox, select).
- name: The name attribute of the input.
- title: The label for the input.
- placeholder: The placeholder text for the input.
- notice: A note that will appear below the input.
- class: Optional CSS class for the input.
- show: Determines whether the input is displayed. Useful for conditional inputs.

## Form Submission

To handle form submission, you can trigger the sendData function which will pass the populated v-model by default.

```sh
<template>
  <TheForm @sendData="sendData" />
</template>

<script>
export default {
  methods: {
    sendData(data) {
      console.log(data);
    }
  }
}
</script>

# vue 3 

<script setup>
const sendData = (data) => {
    console.log(data)
}
</script>
```

# Conditional Inputs
## Checkbox Example

Conditional input configuration requires an activeValue that matches the name of the controlling input.

```sh
{
  type: 'checkbox',
  name: 'checkbox',
  value: 'test',
  class: 'checkbox',
  title: 'Checkbox',
  placeholder: 'placeholder',
  show: true,
}
```

Conditional input based on checkbox being checked:

```sh
{
  type: 'text',
  name: 'text2',
  value: '',
  title: 'Text2',
  placeholder: 'placeholder2',
  notice: 'notice2',
  class: 'group',
  activeValue: 'checkbox',
  show: false,
}
```

Radio or Select Example

```sh
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
```

Conditional input based on select option:

```sh
{
  type: 'text',
  name: 'text6',
  value: '',
  title: 'Text6',
  placeholder: 'placeholder9',
  notice: 'notice9',
  class: 'group',
  activeValue: 'selectaltro',
  show: false,
}
```

# Validation Management

Validation is based on Vuelidate and is fully integrated.

To enable validation, create a validation object where the key matches the name of the input. For example:

```sh
{
  type: 'file',
  name: 'file',
  label: 'Scegli file',
  id: 'id',
  show: true,
}
```

Validation configuration:

```sh
file: { required },
```

Remember to add in your page/component the validation that you need to use

```sh
import {required, helpers, minLength} from '@vuelidate/validators'
```


For all validation rules, both conditional and general, refer to the Vuelidate documentation:

[Vuelidate Documentation](https://vuelidate.js.org/)

# Example Usage

Here is an example of how to use esma-form in your Vue component:

```sh


<template>
  <div>
    <TheForm :formData="formInputs" :formRules="formRules" @sendData="handleFormSubmit" />
  </div>
</template>

<script>
import { required } from '@vuelidate/validators';

export default {
  data() {
    return {
      formRules = {
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
    };
  },
  methods: {
    handleFormSubmit(data) {
      console.log(data);
    },
  },
};
</script>

```
