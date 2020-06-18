interface Istate {
  id: number;
}

export function uniqueId<T extends Istate>(state: T[]): number {
  let newId: number = 0;

  function checkIfIdExist() {
    if (state.some((s) => s.id === newId)) {
      newId++;
      checkIfIdExist();
    }
  }
  checkIfIdExist();

  return newId;
}
