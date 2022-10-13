const populateGroceryList = () => {
  const groceries = ["apples", "oranges", "milk", "bread", "coffee"];
  const groceryList = document.getElementsByClassName("grocery-list")[0];
  const addItems = document.getElementsByClassName("add-item");
  const removeItem = document.getElementsByClassName("remove-item");
  const btnAdd = document.getElementsByClassName("btn-add")[0];

  btnAdd.addEventListener("click", (e) => {
    const item = document.getElementsByClassName("item")[0].value;
    const quantity = document.getElementsByClassName("quantity")[0].value;
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    ${item}: ${quantity}
    <input type='checkbox' />
    <button class='remove-item'>Remove</button>
    `;
    groceryList.appendChild(listItem);
  });

  document.addEventListener("click", (e) => {
    if (e.target.className == "remove-item") {
      console.log("hello");
      e.target.parentNode.remove();
    }
  });
};

populateGroceryList();
