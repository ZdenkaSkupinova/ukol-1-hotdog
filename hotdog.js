export const toppings = [
    { name: 'Hořčice', price: 5, selected: false },
    { name: 'Kečup', price: 5, selected: false },
    { name: 'Cibule', price: 5, selected: false },
    { name: 'Okurka', price: 5, selected: false },
    { name: 'Paprika', price: 5, selected: false },
    { name: 'Rajče', price: 5, selected: false },
    { name: 'Chilli', price: 5, selected: false },
    { name: 'Sýr', price: 10, selected: false },
    { name: 'Slanina', price: 10, selected: false },
  ];

  // 4. togleTopping a bude volať z konkrétneho toppingu, ktorý už je vyrendrovaný na stránke
  //t.j. toppings a celú .forEach slučku zmažeme.
  // toggleTpping má jedinú úlohu - pozrieť sa do pôvodného objektu, 
  // na konkrétny topping (podľa indexu), zobrať jeho vlastnosť selected,
  // a jej hodnotu zmeniť na opačnú -
  // tj. ak je topping.selected false, tak ho zmení na true
  export const toggleTopping = (index) => {
    toppings = document.querySelectorAll(".topping") 
      toppings.forEach((topping) => {
        if(topping.selected === true) {
          topping[index].selected.classList.toggle("topping--selected")
        } else {
          topping[index].selected.classList.toggle(".topping")
        }
      })
    }


  export const renderToppings = () => {
    const toppingsElement = document.querySelector('#toppings');
    toppingsElement.innerHTML = '';
    // 5. do tohto forEach pridáme ešte aj druhý parameter, index,
    // budeme ho potrebovať
    // a parameter toppings premenujeme na topping, pretože vždy pracujeme nad
    // jedným, tak aby to neplietlo
    toppings.forEach((toppings) => {
      // 6. takže v tejto slučke pre každý topping vytvoríme div, dáme mu class
      // topping, 
      // 7. potom mu pomocou .innerHtmtl dáme vnútornú štruktúru s nadpisom 
      // a cenou
      // 8. potom sa pozrieme, či je topping.selected true,
      // ak áno, pridám class topping--selected

      // 9. a nakoniec na ten div zavesíme event listener, ktorý bude volať 
      // toggleTopping()
     
   // 1. ak od začiatku dáš všetkým toppingom rovno triedu .topping--selected, tak to nemá zmysel. Tú budeš pridávať na klik, ay sa menila farba
  toppingsElement.innerHTML += `
        <div class="topping" class="topping--selected">
          <h3>${toppings.name}</h3>
          <p>${toppings.price}</p>
        </div>
      `;

    })
  
  // 2. logika, ktorá každému toppingu pridáva event listener, musí ísť do 
  // funkcie renderToppings. Inak sa nikdy nezavolá,
  // tým pádom sa event listenery nenapoja, a nič sa na sránke nebude diať

  // 3. po presune do renderToppings do querySelectorAll daj .topping
  // názov je zavádzajci. Toto topping nevyberie. Je to funkcia, ktorá každému
  // toppingu pridá event litener, ktorý po kliku naňho "vyberie" topping -
  // tj. zavolá funkciu toggleTopping a tá pridá class .topping--selected, a
  // tým sa zmení farba
  const toppingSelected = document.querySelectorAll('.topping--selected');
  toppingSelected.forEach((topping) => {
  topping.addEventListener("click", toggleTopping) 
  renderToppings()  
 })
}

