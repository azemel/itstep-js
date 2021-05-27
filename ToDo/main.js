window.addEventListener("load", async () => {
    const toDoList = await ToDoList.open();

    // toDoList.insert(ToDoItem.from("qwer", "qwer", new Date()));

    const toDoItems = await toDoList.getList();



    console.log(toDoItems);


    const controller = {}
    controller.del = del(controller, toDoList)
    controller.toggle = toggle(controller, toDoList),
    controller.list = list(controller, toDoList);

    controller.render = render(controller);


    controller.render(toDoItems);

    // document.body.append(renderList(renderItem(toggle(toDoList), del(toDoList)))(toDoItems));

});

const list = (controller, toDoList) => async () => {
  return await await toDoList.getList();
}

const toggle = (controller, toDoList) => toDoItem => {
  toDoItem.isDone ? toDoItem.markUndone() : toDoItem.markIsDone(new Date());
  toDoList.update(toDoItem);
}

const del = (controller, toDoList) => async toDoItem => {
  await toDoList.delete(toDoItem);
  controller.render(await controller.list());
}

// view
const renderItem = controller => item => {
    return $("li", { className: "toDoItem" },
        $("input", { checked: item.isDone, type: "checkbox",
            onchange: () => controller.toggle(item)
        }),
        $("div", { className: "to-do-item__title" },
            item.title
        ),
        $("div", { className: "to-do-item__description" },
            item.description
        ),
        $("div", { className: "to-do-item__date" },
            item.isDone ? item.doneAt.toLocaleDateString() : item.createdAt.toLocaleDateString()
        ),
        $("button", { className: "to-do-item__delete", type: "button",
            onclick: () => controller.del(item)
        }, "удалить")
    );
}
const renderList = controller => list => {
    return $("ul", { className: "to-do-list", id: "to-do-list" },
        ...list.map(renderItem(controller))
    );
}

const render = controller => toDoItems => {
    const list = document.getElementById("to-do-list");
    if (list !== null) {
        list.remove();
    }
    document.body.append(renderList(controller)(toDoItems));
}