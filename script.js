let running = true;
const cookie = document.querySelector("#bigCookie");

function infiniteLoop(callback) {
  if (!running) {
    return;
  }
  callback();
  requestAnimationFrame(() => infiniteLoop(callback));
}

function startLoop(callback) {
  running = true;
  infiniteLoop(callback);
}

function stopLoop() {
  running = false;
}

// Example usage:
startLoop(() => {
    cookie.click();
   // console.log(cookie);
    let randomUpgrade = chooseUpgrade();
    randomUpgrade.click();
    let randomTopUpgrade = chooseTopUpgrades();
    randomTopUpgrade.click();

    
});
//this is actually choosing a product but I kept breaking it whenever i changed the name 
function chooseUpgrade() {
  const products = document.querySelector("#products");
  
  // Get all the divs inside #products, excluding those inside #storeBulk
  const upgrades = Array.from(products.querySelectorAll('div')).filter(upgrade => 
    !upgrade.closest('#storeBulk') // Ensure it's not inside the #storeBulk div
  );

  // If there are valid upgrades, select a random one
  if (upgrades.length > 0) {
    const randomIndex = Math.floor(Math.random() * upgrades.length);
    return upgrades[randomIndex];
  } else {
    return null;
  }
}

function chooseTopUpgrades(){
    const upgrades = document.querySelector("#upgrades");

    const divs = upgrades.querySelector('div');

    
    const randomIndex = Math.floor(Math.random() * upgrades.length);
    return divs[randomIndex];
    
}
