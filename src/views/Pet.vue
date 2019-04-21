<template>
  <div>
    <h1>{{animal.name}}</h1>
    <dl>
      <dt>Age:</dt> <dd>{{animal.age}} years old</dd>
      <dt>Breed:</dt> <dd>{{animal.breed}}</dd>
    </dl>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      animal: {}
    }
  },
  computed: {
  //sintaxe também válida
  //cats() { return this.$store.state.cats}
  //mapState é a sintaxe padrão
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  mounted() {
  console.log('TE')
  console.log(this.$route.params)
    const animal = this[this.$route.params.species][this.$route.params.id]
    this.animal = animal
  }
}
</script>
