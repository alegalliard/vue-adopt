//o ciclo é: actions -> mutations -> state
export default {
  addPet: ({commit} /*<= vem do VUEX */, pet) => {
    commit('appendPet', pet) //chamando uma mutation
  }
}
