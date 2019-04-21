<template>
  <div class="home-view-container">
    <h1>Adopt a new best friend</h1>

    <p>Actualy we have
      {{getAllCats.length}} cats and
      {{getAllDogs.length}} dogs for adoption.
      <strong>Total: {{ animalsCount }} pets</strong>
    </p>

    <button @click="togglePetForm" class="btn btn-primary">Add new pet</button>


    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">
      <b-form-group id="input-group-2" label="Pet's Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select id="speciesSelect" :options="['cats', 'dogs']" v-model="formData.species" ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-input
          id="input-4"
          type="number"
          v-model="formData.age"
          required
          placeholder="Enter age"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import { mapActions, mapGetters } from 'vuex' //vuex
export default {
  name: 'home',
  data() {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        species: null
      }
    }
  },
  computed: { //watching for changes on thi
    ...mapGetters([
      'animalsCount',
      'getAllCats',
      'getAllDogs'
    ])
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    togglePetForm() {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit() {
      const { species, age, name } = this.formData
      const payload = {
        species,
        pet: {
          name, age
        }
      }
      this.addPet(payload)

      //reset form after submit
      this.formData = {
        name: '',
        age: 0,
        species: null
      }
    }
  },
  components: {
  }
}
</script>
