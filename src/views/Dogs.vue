<template>
  <PetTable
    species="dogs"
    :pets="dogs"
   />
</template>

<script>
import { mapState } from 'vuex'
import PetTable from '@/components/PetTable.vue'

export default {
  data() {
    return {}
  },
  components: {
    PetTable
  },
  computed: {
    ...mapState([
      'dogs'
    ])
  }
}
</script>
