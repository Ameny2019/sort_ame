function PS() {

    let tab = [1002,11,206,14,2,0,215]
  
    for (let i = 0; i < tab.length; i++) {
  
  
      for (let x = 0; x < tab.length - i - 1; x++) {
  
  
        if (tab[x + 1] < tab[x]) {
  
  
          [tab[x + 1], tab[x]] = [tab[x], tab[x + 1]]
  
        }
      }
    };
    return tab;
  };
  
  console.log(PS())