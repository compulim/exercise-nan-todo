export const toggle = (id, toggled) => {
  return {
    type: 'TOGGLE',
    id,
    toggled
  }
}