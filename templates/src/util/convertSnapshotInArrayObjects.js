//@deprecated Nao use este metodo use o definido no service util
export const convertSnapshotInArrayObjects = (snapshot) => {
  const values = snapshot.val();
  if (values) {
    const keys = Object.keys(values);
    return keys.map((id) => ({...values[id], id}));
  }
  return [];
};
