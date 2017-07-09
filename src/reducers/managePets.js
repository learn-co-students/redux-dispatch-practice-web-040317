export let state;


export const managePets = (state = {pets: []}, action) => {

  switch (action.type) {
    case 'ADD_PET': return { ...state, pets: [...state.pets, action.pet] }
    case 'REMOVE_PET': return { ...state, pets: [...state.pets.filter(x => x.id != action.id)] }
    default: return state
  }

}

export const dispatch = (action) => {
  state = managePets(state, action)
  render()
}

export const render = () => {
  const pets = state.pets.map(pet => `<li>${pet.name}</li>`).join('')
  document.getElementById('container').innerHTML = `<ul>${pets}</ul>`
}
