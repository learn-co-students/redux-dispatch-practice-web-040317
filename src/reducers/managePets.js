export let state;


export function managePets(state={ pets: [] }, action){
  switch (action.type) {
    case "ADD_PET":
      return {pets: [...state.pets, action.pet] }
      break;
    case "REMOVE_PET":
      return { pets: state.pets.filter(p => p.id !== action.id) }
      break;
    default:
    return state;

  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let parent = document.getElementById('container');
  let petsList = state.pets.map((pet) => {
    return `<li>${pet.name}</li>`;
  }).join(' ');

  parent.innerHTML = `<ul>${petsList}</ul>`;
}
