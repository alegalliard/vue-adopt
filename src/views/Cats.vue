<template>
  <PetTable
    species="cats"
    :pets="cats"
   />
</template>

<script>
import { mapState } from 'vuex'
import PetTable from '@/components/PetTable.vue'

export default {
  components: {
    PetTable
  },
  data() {
    return {}
  },
  computed: {
    ...mapState([
      'cats'
    ])
  }
}
</script>
