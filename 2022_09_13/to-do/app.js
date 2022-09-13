document.addEventListener("DOMContentLoaded", () => {
  const lst = document.querySelector("#lst");
  const addBtn = document.querySelector("#addBtn");
  const todo = document.querySelector("#todo");

  let keyCnt = 0;

  // ---------------------------------------------------------------------

  const addTodo = (che, val) => {
    // if (lst.value.trim() === "") {
    //   alert("일정을 입력하여 주십시오.");
    // }

    const item = document.createElement("div");
    const text = document.createElement("span");
    const btn = document.createElement("button");
    const checkbox = document.createElement("input");

    const key = keyCnt;

    keyCnt += 1;

    item.setAttribute("data-key", key);

    checkbox.type = "checkbox";

    if (che !== undefined) {
      checkbox.checked = che;
    }

    if (val === undefined) {
      text.textContent = lst.value;
    } else {
      text.textContent = val;
    }

    btn.textContent = "del";

    item.appendChild(checkbox);
    item.appendChild(text);
    item.appendChild(btn);
    todo.appendChild(item);

    let todoObj = {
      checked: checkbox.checked,
      txt: text.textContent,
    };
    const cnt = keyCnt;
    localStorage.setItem(`${cnt}`, JSON.stringify(todoObj));

    checkbox.addEventListener("change", (event) => {
      todoObj.checked = event.target.checked;
      localStorage.setItem(`${cnt}`, JSON.stringify(todoObj));
      item.style.textDecoration = event.target.checked ? "line-through" : "";
    });
    btn.addEventListener("click", () => {
      removeTodo(key);
    });

    lst.value = "";
  };

  if (localStorage.length !== 0) {
    for (let i = 1; i <= localStorage.length; i++) {
      let orgin = localStorage.getItem(`${i}`);
      let changed = JSON.parse(orgin);
      addTodo(changed.checked, changed.txt);
    }
  }

  addBtn.addEventListener("click", () => {
    addTodo();
  });

  const removeTodo = (key) => {
    const tar = document.querySelector(`[data-key="${key}"]`);
    localStorage.removeItem(`${key + 1}`);
    todo.removeChild(tar);
  };
});
