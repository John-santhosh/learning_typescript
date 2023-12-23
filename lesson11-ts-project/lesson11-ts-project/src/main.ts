import "./css/style.css";
import FullLIst from "./model/FullList";
import ListItem from "./model/ListItem";
import ListTemplate from "./templates/ListTemplate";

const initApp = (): void => {
  const fullLIst = FullLIst.instance;
  const template = ListTemplate.instance;

  const itemEntryForm = document.getElementById(
    "itemEntryForm"
  ) as HTMLFormElement;
  itemEntryForm.addEventListener("submit", (e: SubmitEvent): void => {
    e.preventDefault();
    const input = document.getElementById("newItem") as HTMLInputElement;

    const newEntryText: string = input.value.trim();
    if (!newEntryText.length) return;

    // calculate item ID
    const itemId: number = fullLIst.list.length
      ? parseInt(fullLIst.list[fullLIst.list.length - 1].id) + 1
      : 1;

    const newItem = new ListItem(itemId.toString(), newEntryText);

    fullLIst.addItem(newItem);

    template.render(fullLIst);
  });

  const clearItems = document.getElementById(
    "clearItemsButton"
  ) as HTMLButtonElement;

  clearItems.addEventListener("click", () => {
    fullLIst.clearList();
    // fullLIst.save
    template.clear();
  });

  fullLIst.load();
  template.render(fullLIst);
};

document.addEventListener("DOMContentLoaded", initApp);
