console.log("asdf");

class DragNDropController {
  
  model;
  view;

  editedItemId = null;

  constructor (model, view) {
    this.model = model;
    this.view = view;
    this.view.setController(this);

    this.render();
  }

  render = async () =>  {
    const active = await this.model.list({
      includeArchive: false,
      includeActive: true
    });

    const archive = await this.model.list({
      includeArchive: true,
      includeActive: false
    });

    this.view.render(active, archive);
  }
  
  enterEditMode(id) {
    this.editedItemId = id;
    this.render();
  }

  exitEditMode() {
    this.editedItemId = null;
    this.render();
  }

  setActive = async item => {
    if (item.isDone) {
      await this.model.toggle(item);
    }
    this.render();
  }

  setArchive = async item => {
    if (!item.isDone) {
      await this.model.toggle(item);
    }
    this.render();
  }

  delete = async item => {
    await this.model.delete(item);
    this.render();
  }

  add = async (title, description) => {
    if (!title) {// валидация
      return;
    }
    await this.model.add(title, description);
    this.render();
  }

  update = async (toDoItem, title, description) => {
    if (!title) {// валидация
      return;
    }
    await this.model.update(toDoItem, title, description);
    this.exitEditMode();
    // this.render();
  }

}