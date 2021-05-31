
class DragNDropView {

  controller;

  constructor() {
    window.addEventListener("mouseup", this.stopDrag);
    window.addEventListener("mousemove", this.drag);
  }


  setController(controller) {
    this.controller = controller;
  }

  // view
  renderEditForm = toDoItem => {
    return $("form", { className: "add-form",
        onsubmit: (e) => {
          e.preventDefault();
          const form = e.target;
          const title = form.elements["title"].value;
          const description = form.elements["description"].value;
          this.controller.update(toDoItem, title, description);
        }
      }, 
      $("label", {}, 
        "Название",
        $("input", { type: "text", name: "title", value: toDoItem.title }),
      ),
      $("label", {}, 
        "Описание",
        $("textarea", { name: "description", value: toDoItem.description }),
      ),
      $("button", { type: "submit" }, "Обновить заметку")
    );
  }
  
  renderAddForm() {
    return $("form", { className: "add-form",
        onsubmit: (e) => {
          e.preventDefault();
          const form = e.target;
          const title = form.elements["title"].value;
          const description = form.elements["description"].value;
          this.controller.add(title, description);
        }
      }, 
      $("label", {}, 
        "Название",
        $("input", { type: "text", name: "title" }),
      ),
      $("label", {}, 
        "Описание",
        $("textarea", { name: "description"  }),
      ),
      $("button", { type: "submit" }, "Занести в заметки")
    );
  }
  renderItem = toDoItem =>  {
    const item = $("li", { className: "toDoItem" },
        $("input", { checked: toDoItem.isDone, type: "checkbox", disabled: true
            // onchange: () => this.controller.toggle(item)
        }),
        $("div", { className: "to-do-item__title" },
            toDoItem.title
        ),
        $("div", { className: "to-do-item__description" },
            toDoItem.description
        ),
        $("div", { className: "to-do-item__date" },
            toDoItem.isDone ? toDoItem.doneAt.toLocaleDateString() : toDoItem.createdAt.toLocaleDateString()
        ),
        $("button", { className: "to-do-item__delete", type: "button",
            onclick: () => this.controller.delete(toDoItem)
        }, "удалить"),
        $("button", { className: "to-do-item__delete", type: "button",
            onclick: () => this.controller.enterEditMode(toDoItem.id)
        }, "редактировать")
    );

    item.addEventListener("mousedown", this.startDrag(toDoItem, item));

    return item;
  }
  
  renderList = (name, list) => {
    return $("ul", { className: "to-do-list", id: "to-do-list",
            onmousemove: () => { this.dropZone = name }
          },
        ...list.map(item => 
                    this.controller.editedItemId === item.id
                    ? this.renderEditForm(item)
                    : this.renderItem(item))
    );
  }

  renderBin() {
    return $("div", { className: "bin",
        onmousemove: () => { this.dropZone = "bin" }
      }, "Корзина");
  }

  renderLayout(active, archive) {
    return $("div", { className: "layout" },
      $("div", { className: "layout__add-form" }, this.renderAddForm()),
      $("div", { className: "layout__list-active" }, 
        $("h2", {}, "Активные"),  
        this.renderList("active", active)),
      $("div", { className: "layout__list-archive" }, 
        $("h2", {}, "Архив"),  
        this.renderList("archive", archive)),
      $("div", { className: "layout__bin" }, this.renderBin()),
    )
  }

  render = (active, archive) => {
    while (document.body.firstChild) {
      document.body.firstChild.remove();
    }
    
    this.dropZone = null;
    this.currentToDoItem  = null;
    this.currentItem = null;
    this.innerX = 0;
    this.innerY = 0;

    document.body.append(this.renderLayout(active, archive));
  }

  dropZone = null;

  currentItem = null;
  currentToDoItem = null;
  innerX = 0;
  innerY = 0;

  startDrag = (toDoItem, item) => (event) => {
    this.currentToDoItem = toDoItem;
    this.currentItem = item;
    
    const width = this.currentItem.offsetWidth;
    const height = this.currentItem.offsetHeight;
    
    this.innerX = item.offsetLeft - event.pageX;
    this.innerY = item.offsetTop - event.pageY;
    

    this.currentItem.style.width = width + "px";
    this.currentItem.style.hepight = height + "px";

    this.currentItem.classList.add("drag-n-drop__item_dragging");
        
    let x = event.pageX + this.innerX;
    let y = event.pageY + this.innerY;

    this.currentItem.style.transform = "translate(" + x + "px," + y + "px)";
  }

  
  drag = (event) => {
    
    if (this.currentItem === null) {
      return;
    } 
    
    event.preventDefault(); // чтобы выключить выделение текста

    let x = event.pageX + this.innerX;
    let y = event.pageY + this.innerY;

    this.currentItem.style.transform = "translate(" + x + "px," + y + "px)";
  }

  
  stopDrag = (event) => {
    if (this.currentItem === null) {
      return;
    }

    this.currentItem = null;

    console.log(this.dropZone);

    switch (this.dropZone) {
      case "active": this.controller.setActive(this.currentToDoItem); break;
      case "archive": this.controller.setArchive(this.currentToDoItem); break;
      case "bin": this.controller.delete(this.currentToDoItem); break;
    }

  }
  
}