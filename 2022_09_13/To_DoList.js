document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#todo");
  const todoList = document.querySelector("#todo-list");
  const addbtn = document.querySelector("#addBtn");

  let keyCnt = 0;

  const addTodo = () => {
    if (input.value.trim() === "") {
      alert("할 일을 입력하여 주세요.");
      return;
    }

    const item = document.createElement("div");
    const checkbox = document.createElement("input");

    const text = document.createElement("span");
    const btn = document.createElement("button");

    const key = keyCnt;

    keyCnt += 1;

    item.setAttribute("data-key", key);
    item.appendChild(checkbox);
    item.appendChild(text);
    item.appendChild(btn);

    todoList.appendChild(item);

    checkbox.type = "checkbox";
    checkbox.addEventListener("change", (event) => {
      item.style.textDecoration = event.target.checked ? "line-through" : "";
    });

    text.textContent = input.value;

    btn.textContent = "제거하기";
    btn.addEventListener("click", () => {
      removeTodo(key);
    });

    input.value = "";
  };

  const removeTodo = (ky) => {
    const item = document.querySelector(`[data-key="${ky}"]`);
    todoList.removeChild(item);
  };

  addbtn.addEventListener("click", addTodo);

  input.addEventListener("keyup", (event) => {
    const ENTER = 13;
    if (event.keyCode === ENTER) {
      addTodo();
    }
  });
});
