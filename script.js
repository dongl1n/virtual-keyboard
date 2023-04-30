let isCapslock = 0, isFirstLeft = 1, isFirstRigth = 1, langCode = "En", text, textBuf = "";

import keys from './assets/json/en.json' assert { type: "json" };
//const keys = [];

/* eslint-disable max-lines-per-function, max-statements*/
const createKeyboard = () => {

  const wrapper = document.createElement("div");
  wrapper.classList = "wrapper";
  document.body.append(wrapper);

  const main = document.createElement("div");
  main.classList = "main";
  wrapper.append(main);

  const lang = document.createElement("div");
  lang.classList = "main__lang";
  main.append(lang);

  const langImg = document.createElement("div");
  langImg.classList = "main__lang-image";
  lang.append(langImg);

  const langName = document.createElement("div");
  langName.classList = "main__lang-name";
  langName.innerText = langCode + " (shift+alt)";
  lang.append(langName);

  const textBlock = document.createElement("div");
  textBlock.classList = "main__text-block";
  textBlock.innerHTMLt = textBuf;
  main.append(textBlock);

  const keyboard = document.createElement("div");
  keyboard.classList = "keyboard";
  main.append(keyboard);

  const keyWrapper = document.createElement("div");
  keyWrapper.classList = "keyboard__key-wrapper";
  keyboard.append(keyWrapper);

  for (let i = 0; i < keys.length; i++) {

    const key = document.createElement("div");
    key.classList = keys[i].class;
    key.innerHTML = keys[i].text;
    keyWrapper.append(key);

  }

};

// eslint-enable max-lines-per-function, max-statements


/* Keyboard */
const updateVar = () => text = document.querySelector(".main__text-block");

const deleteKeyboard = () => document.querySelector(".wrapper").remove();

const selectLang = () => {

  if (langCode === "En") {

    langCode = "Ru";

  } else {

    langCode = "En";

  }

  deleteKeyboard();
  createKeyboard();
  updateVar();

};

/* eslint-disable max-lines-per-function, max-statements, complexity*/
const animateKey = (key) => {

  const keysPage = document.querySelectorAll(".keyboard__key");
  for (let i = 0; i < keysPage.length; i++) {

    if (key === "tab" && keysPage[i].classList.contains("tab")) {

      keysPage[i].classList.add("keyboard__animation");
      return;

    }

    if (key === "ctrl" && keysPage[i].classList.contains("ctrl")) {

      keysPage[i].classList.add("keyboard__animation");
      return;

    }
    if (key === "rigthCtrl" && keysPage[i].classList.contains("rigth-ctrl")) {

      keysPage[i].classList.add("keyboard__animation");
      return;

    }
    if (key === "shift" && keysPage[i].classList.contains("shift")) {

      keysPage[i].classList.add("keyboard__animation");
      return;

    }
    if (key === "rigthShift" && keysPage[i].classList.contains("rigth-shift")) {

      keysPage[i].classList.add("keyboard__animation");
      return;

    }
    if (key === "capslock" && keysPage[i].classList.contains("capslock")) {

      keysPage[i].classList.add("keyboard__animation");
      return;

    }
    if (key === "backspace" && keysPage[i].classList.contains("backspace")) {

      keysPage[i].classList.add("keyboard__animation");
      return;

    }
    if (key === "space" && keysPage[i].classList.contains("space")) {

      keysPage[i].classList.add("keyboard__animation");
      return;

    }
    if (key === "enter" && keysPage[i].classList.contains("enter")) {

      keysPage[i].classList.add("keyboard__animation");
      return;

    }
    if (keysPage[i].outerText.includes(key) && (keysPage[i].classList.contains("standart") || keysPage[i].classList.contains("slash"))) { // eslint-disable-line max-len

      keysPage[i].classList.add("keyboard__animation");
      return;

    }
    if (key === "alt" && keysPage[i].classList.contains("alt")) {

      keysPage[i].classList.add("keyboard__animation");
      return;

    }
    if (key === "rigthAlt" && keysPage[i].classList.contains("rigth-alt") && !keysPage[i].classList.contains("rigth-ctrl")) { // eslint-disable-line max-len

      keysPage[i].classList.add("keyboard__animation");
      return;

    }
    if (key === "arrowRight" && keysPage[i].classList.contains("arrow")  && keysPage[i].classList.contains("rigth")) {

      keysPage[i].classList.add("keyboard__animation");
      return;

    }
    if (key === "arrowLeft" && keysPage[i].classList.contains("arrow")  && keysPage[i].classList.contains("left")) {

      keysPage[i].classList.add("keyboard__animation");
      return;

    }
    if (key === "arrowUp" && keysPage[i].classList.contains("arrow")  && keysPage[i].classList.contains("up")) {

      keysPage[i].classList.add("keyboard__animation");
      return;

    }
    if (key === "arrowDown" && keysPage[i].classList.contains("arrow")  && keysPage[i].classList.contains("bottom")) {

      keysPage[i].classList.add("keyboard__animation");
      return;

    }
    if (key === "del" && keysPage[i].classList.contains("del")) {

      keysPage[i].classList.add("keyboard__animation");
      return;

    }

  }

};


/* Print */
class Carriage {

  index = textBuf.length;

  // Backspace and left
  moveLeft = () => {

    if (this.index) {

      this.index--;

    }

  };

  // Add and rigth
  moveRigth = () => this.index++;

  checkFirstLine = () => {

    this.index = this.index < 58 ? 1 : 0;

  };

  // !moveTop = () => {}

  returnIndex = () => this.index;

  drawCarriage = () => {
    let buf = textBuf.slice(0, this.index) + '<span class="main__carriage">' + textBuf.slice(this.index, this.index+1) + '</span>' + textBuf.slice(this.index+1, textBuf.length); // eslint-disable-line
    //buf = buf.replace(/_v1rt_ent3r_butt0n_c0de_/gu, " fdifjdjidf ");
    text.innerHTML = buf.replace(/\s(?!class)/gu, " &nbsp ");

  };

  printKey = (key) => {

      textBuf = textBuf.split("");  
      textBuf.splice(this.index, 0, key)
      textBuf = textBuf.join("");

  };

  backspaceKey = () => {

    textBuf = textBuf.split("");  
    textBuf.splice(this.index, 1)
    textBuf = textBuf.join("");

  }

  delKey = () => {

    textBuf = textBuf.split("");  
    textBuf.splice(this.index + 1, 1)
    textBuf = textBuf.join("");

  }

}

const carriage = new Carriage();

setInterval(
  () => {

    updateVar();

  },
  500
);

document.addEventListener("keyup", (event) => {

  event.preventDefault();
  if (event.key === "CapsLock") {

    if (isCapslock) {

      isCapslock = 0;

    } else {

      isCapslock = 1;

    }
    animateKey("capslock");

  }

  const keysPage = document.querySelectorAll(".keyboard__key");
  for (let i = 0; i < keysPage.length; i++) {

    keysPage[i].classList.remove("keyboard__animation");

  }

});

/* eslint-disable max-lines-per-function, max-statements, complexity*/
document.addEventListener("keydown", (event) => {

  event.preventDefault();
  if (event.key === "CapsLock") {

    animateKey("capslock");
    return;

  }

  if (event.key === "Control") {

    if (event.location === 1) {

      animateKey("ctrl");
      return;

    }
    if (event.location === 2) {

      animateKey("rigthCtrl");
      return;

    }

  }

  if (event.altKey && event.shiftKey) {

    selectLang();
    return;

  }


  if (event.key === "Backspace") {

    animateKey("backspace");
    carriage.backspaceKey();
    carriage.moveLeft();
    carriage.drawCarriage();
    return;

  }

  if (event.key === "Delete") {
    animateKey("del");
    carriage.delKey();
    carriage.drawCarriage();
    return;

  }

  if (event.key === "Shift") {

    if (event.location === 1) {

      animateKey("shift");
      return;

    }
    if (event.location === 2) {

      animateKey("rigthShift");
      return;

    }

  }

  if (event.key === " ") {

    carriage.printKey(" ");
    animateKey("space");
    carriage.drawCarriage();
    carriage.moveRigth();
    return;

  }

  if (event.key === "Tab") {

    animateKey("tab");
    for (let i = 0; i < 4; i++) {

      text.innerHTML = textBuf + " ";
      carriage.printKey(" ");
      carriage.drawCarriage();
      carriage.moveRigth();

    }
    return;

  }

  if (event.key === "Enter") {

    text.innerHTML = textBuf + "<br>";
    carriage.printKey(" ");
    carriage.drawCarriage();
    animateKey("enter");
    return;

  }

  if (isCapslock) {

    if (event.key && event.shiftKey) {

      for (let i = 0; i < keys.length; i++) {

        if (keys[i].key === event.key) {

          carriage.printKey(keys[i].key);
          animateKey(keys[i].key);
          carriage.drawCarriage();
          carriage.moveRigth();
          return;

        }

      }

    }

    for (let i = 0; i < keys.length; i++) {

      if (keys[i].supKey === event.key) {

        text.innerHTML = textBuf + keys[i].supKey;
        carriage.printKey(keys[i].supKey);
        animateKey(keys[i].supKey);
        carriage.drawCarriage();
        carriage.moveRigth();
        return;

      }

    }

  } else if (event.key && event.shiftKey) {

    for (let i = 0; i < keys.length; i++) {

      if (keys[i].supKey === event.key) {
      
        text.innerHTML = textBuf + event.key;
        carriage.printKey(keys[i].supKey);
        animateKey(keys[i].key);
        carriage.drawCarriage();
        carriage.moveRigth();
        return;

      }

    }

  }

  for (let i = 0; i < keys.length; i++) {

    if (keys[i].key === event.key) {
      
      text.innerHTML = textBuf + event.key;
      carriage.printKey(keys[i].key);
      animateKey(keys[i].key);
      carriage.drawCarriage();
      carriage.moveRigth();
      return;

    }

  }

  if (event.key === "Alt") {

    if (event.location === 1) {

      animateKey("alt");

    }
    if (event.location === 2) {

      animateKey("rigthAlt");

    }
    return;

  }

  if (event.key === "ArrowLeft") {

    animateKey("arrowLeft");
    if (isFirstLeft) {

      carriage.moveLeft();
      isFirstLeft = 0;

    }
    carriage.moveLeft();
    carriage.drawCarriage();
    return;

  }

  if (event.key === "ArrowRight") {

    animateKey("arrowRight");
    if (isFirstRigth) {

      carriage.moveRigth;
      isFirstRigth = 0;

    }
    carriage.moveRigth();
    carriage.drawCarriage();
    return;

  }
  if (event.key === "ArrowUp") {

    animateKey("arrowUp");
    return;

  }
  if (event.key === "ArrowDown") {

    animateKey("arrowDown");
    return;

  }
  if (!(event.key === "F5")) {

    /* eslint-disable max-len*/
    alert("Не найдена клавиша. Проверьте соответсвие раскладки виртуальной клавиатуры (в том числе capslock)" +
    "с вашей раскладкой, либо наличие нужной клавиши на виртуальной клавиатуре." +
    "Если сменить раскладку не представляется возможным, используйте мышь для набора текста.");

  }

});

createKeyboard();
updateVar();

const keysPage = document.querySelectorAll(".keyboard__key");
for (let i = 0; i < keysPage.length; i++) {

  keysPage[i].addEventListener("click", () => {
    
    if (keysPage[i].classList.contains("backspace")) {

      carriage.backspaceKey();
      carriage.moveLeft();
      carriage.drawCarriage();
      return;

    }

    if (keysPage[i].classList.contains("tab")) {

      animateKey("tab");
      for (let i = 0; i < 4; i++) {

        text.innerHTML = textBuf + " ";
        carriage.printKey(" ");
        carriage.drawCarriage();
        carriage.moveRigth();

      }
      return;
  
    }

    if (keysPage[i].classList.contains("del")) {
    
      carriage.delKey();
      carriage.drawCarriage();
      return;

    }

    if (keysPage[i].classList.contains("left") && keysPage[i].classList.contains("arrow")) {
    
      if (isFirstLeft) {

        carriage.moveLeft();
        isFirstLeft = 0;

      }
      carriage.moveLeft();
      carriage.drawCarriage();
      return;

    }

    if (keysPage[i].classList.contains("rigth") && keysPage[i].classList.contains("arrow")) {
    
      if (isFirstLeft) {

        carriage.moveRigth();
        isFirstLeft = 0;

      }
      carriage.moveRigth();
      carriage.drawCarriage();
      return;

    }

    if (keysPage[i].classList.contains("space")) {
    
      carriage.printKey(" ");
      carriage.drawCarriage();
      carriage.moveRigth();
      return;

    }

    if (keysPage[i].classList.contains("standart")) {

      for (let j = 0; j < keys.length; j++) {
        console.log(keysPage[i].outerText + " " + keys[j].key)
        if (keysPage[i].outerText.includes(keys[j].key)) {
          
          carriage.printKey(keys[j].key);
          carriage.drawCarriage();
          carriage.moveRigth();
          return;
    
        }
    
      }

    }

  })

}