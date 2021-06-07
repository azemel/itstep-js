const openRequest = indexedDB.open("flowers", 2);

openRequest.addEventListener("upgradeneeded", (e) => {
  console.log(e);

  /**
   * @type {IDBDatabase}
   */
  const db = e.target.result;

  switch(e.oldVersion) {
    case 0: 
    case 1: {
      const store = db.createObjectStore("flowers", {
        keyPath: "id"
      });
    }
  }
});

openRequest.addEventListener("success", (e) => {
  const db = e.target.result;

  startApp(db);
});

openRequest.addEventListener("error", (e) => {
  console.log(e);
});

/**
 * 
 * @param {IDBDatabase} db 
 */
const startApp = (db) => {
  console.log(db);

  db.addEventListener("error", (e) => {
    console.log(e);
  });

  const transaction = db.transaction("flowers", "readwrite");

  transaction.addEventListener("complete", (e) => {
    console.log(e);
  });

  const store = transaction.objectStore("flowers");

  store.getAll().addEventListener("success", (e) => {
    // console.log(e);
    console.log(e.target.result);
      
    store.get(1).addEventListener("success", (e) => {
      // console.log(e);
      console.log(e.target.result);
    });
  });

  store.put({
    id: 2,
    name: "Rose"
  });


  // store.delete(2).ad;


  store.openCursor().addEventListener("success", (e) => {
    console.log(e);
    const cursor = e.target.result;

    if (cursor) {
      console.log([cursor.key, cursor.value]);
      cursor.continue();
    }

  });

}