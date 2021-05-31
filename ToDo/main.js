window.addEventListener("load", async () => {

  const db = await IndexedDBStore.open();
  // await db.seed(mockToDoList);

  const memory = Memory.open();
  // memory.seed(mockToDoList);

  const store = MultiStore.open(memory, db);
  await store.seed(mockToDoList);
  await store.sync();


  const model = new ToDoList(store);
  const view = new DragNDropView();
  const controller = new DragNDropController(model, view);
});

