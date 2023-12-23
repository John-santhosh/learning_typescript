import FullLIst from "../model/FullList";

interface DOMList {
  ul: HTMLUListElement;
  clear(): void;
  render(fullLIst: FullLIst): void;
}

export default class ListTemplate implements DOMList {
  ul: HTMLUListElement;

  static instance: ListTemplate = new ListTemplate();

  private constructor() {
    this.ul = document.getElementById("listItems") as HTMLUListElement;
  }

  clear(): void {
    this.ul.innerHTML = "";
  }

  render(fullLIst: FullLIst): void {
    this.clear();
    fullLIst.list.forEach((list) => {
      const li = document.createElement("li");
      li.className = "item";

      const check = document.createElement("input") as HTMLInputElement;
      check.type = "checkbox";
      check.id = list.id;
      check.tabIndex = 0;
      check.checked = list.checked;

      check.addEventListener("change", () => {
        list.checked = !list.checked;
        fullLIst.save();
      });
      li.appendChild(check);
      const label = document.createElement("label") as HTMLLabelElement;
      label.htmlFor = list.id;
      label.textContent = list.item;

      li.append(label);

      const button = document.createElement("button") as HTMLButtonElement;
      button.className = "button";
      button.innerText = "X";

      li.append(button);
      button.addEventListener("click", () => {
        fullLIst.removeItem(list.id);
        this.render(fullLIst);
      });
      this.ul.appendChild(li);
    });
  }
}
