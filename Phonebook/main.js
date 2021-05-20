



window.addEventListener("load", async () => {
  const db = await DbContext.open();
  // await db.clear();
  await db.seed(mockContacts);

  
  // window.addEventListener("popstate", () => {
  //   console.log(window.location.search);
  // });

  // console.log(window.location);
  // console.log(window.history);
  
  const renderResults = renderContacts(document.getElementById("contacts"));
  const search = _search(db, renderResults)
  const input = document.forms["search"].elements["query"];
  loadQuery(search, input);

  input.addEventListener("input", e => search(input));

  console.log(db);
});


const _search = (db, renderResults) => async input => {
  let { value } = input;

  value = value.trim();

  window.document.title = "Поиск: " + value;
  window.history.pushState(null, "Поиск: " + value, "?query=" + window.encodeURIComponent(value));

  if (!value) {
    return;
  }

  // validation
  // разобрать сложный запрос

  let predicate;
  if (value.search(/^\+?\d+$/) >= 0) {
    predicate = contact => {
      return contact.phone.includes(value);
    };
  } else {
    predicate = contact => {
      return contact.name.includes(value);
    };
  }

  const contacts = await db.findContacts(predicate);

  console.log(contacts);
  renderResults(contacts); 
}

/**
 * 
 * @param {HTMLElement} container 
 * @returns 
 */
const renderContacts = container => contacts => {
  while (container.firstChild) {
    container.firstChild.remove();
  }

  container.append(...contacts.map(renderContact));
};

const renderContact = contact => {
  return $("div", {}, [contact.name, contact.phone, contact.email].join(" "));
}

const loadQuery = (search, input) => {
  input.value = getHrefQuery()["query"];

  search(input);
}


const getHrefQuery = () => {
  const queryString = window.location.search.slice(1);

  console.log(queryString);

  return Object.fromEntries(
    queryString.split("&")
    .map(pair => pair.trimStart())
    .map(pair => {
      const i = pair.indexOf("=");

      let key = pair.slice(0, i);

      try {
        key = window.decodeURIComponent(key);
      } catch (e) {}

      let value = pair.slice(i + 1);
      
      try {
        value = window.decodeURIComponent(value);
      } catch (e) {}

      return [key, value];
    }));
}