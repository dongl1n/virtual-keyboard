let langCode='En', text, textBuf='', isCapslock=0;
import keys from './assets/json/en.json' assert { type: "json" };

let createKeyboard= () => {
  let wrapper = document.createElement('div');
  wrapper.classList='wrapper';
  document.body.append(wrapper);

  let main = document.createElement('div');
  main.classList='main';
  wrapper.append(main);

  let lang = document.createElement('div');
  lang.classList='main__lang';
  main.append(lang);

  let langImg = document.createElement('div');
  langImg.classList='main__lang-image';
  lang.append(langImg);

  let langName = document.createElement('div');
  langName.classList='main__lang-name';
  langName.innerText=langCode + ' (shift+alt)';
  lang.append(langName);

  let text = document.createElement('div');
  text.classList='main__text-block';
  text.innerHTMLt=textBuf;
  main.append(text);

  let keyboard = document.createElement('div');
  keyboard.classList='keyboard';
  main.append(keyboard);

  let keyWrapper = document.createElement('div');
  keyWrapper.classList='keyboard__key-wrapper';
  keyboard.append(keyWrapper);

  for(let i=0; i<keys.length; i++){
    let key = document.createElement('div');
    key.classList = keys[i].class;
    key.innerHTML = keys[i].text;
    keyWrapper.append(key);
  }
}

/*Keyboard*/
let deleteKeyboard = () => document.querySelector('.wrapper').remove();

let selectLang = () => {
  if(langCode==='En') langCode='Ru';
  else langCode='En';
  deleteKeyboard();
  createKeyboard();
  updateVar();
}

let updateVar = () => text = document.querySelector('.main__text-block');

let animateKey = key => {
  let keysPage = document.querySelectorAll('.keyboard__key');
  for(let i=0; i<keysPage.length; i++){
    if(key==='ctrl' && keysPage[i].classList.contains('ctrl')){
      console.log(keysPage[i])
      keysPage[i].classList.add('keyboard__animation');
      return;
    }
    if(key==='rigthCtrl' && keysPage[i].classList.contains('rigth-ctrl')){
      console.log(keysPage[i])
      keysPage[i].classList.add('keyboard__animation');
      return;
    }
    
    if(key==='shift' && keysPage[i].classList.contains('shift')){
      keysPage[i].classList.add('keyboard__animation');
      return;
    }
    if(key==='rigthShift' && keysPage[i].classList.contains('rigth-shift')){
      keysPage[i].classList.add('keyboard__animation');
      return;
    }
    if(key==='capslock' && keysPage[i].classList.contains('capslock')){
      keysPage[i].classList.add('keyboard__animation');
      return;
    }
    if(key==='backspace' && keysPage[i].classList.contains('backspace')){
      keysPage[i].classList.add('keyboard__animation');
      return;
    }
    if(key==='space' && keysPage[i].classList.contains('space')){
      keysPage[i].classList.add('keyboard__animation');
      return;
    }
    if(key==='enter' && keysPage[i].classList.contains('enter')){
      keysPage[i].classList.add('keyboard__animation');
      return;
    }
    if(keysPage[i].outerText.includes(key) && (keysPage[i].classList.contains('standart') || keysPage[i].classList.contains('slash'))){
      keysPage[i].classList.add('keyboard__animation');
    }
    if(key==='alt' && keysPage[i].classList.contains('alt')){
      console.log('Alt нажат')
      keysPage[i].classList.add('keyboard__animation');
      return;
    }
    if(key==='rigthAlt' && keysPage[i].classList.contains('rigth-alt') && !keysPage[i].classList.contains('rigth-ctrl')){
      keysPage[i].classList.add('keyboard__animation');
      return;
    }
  }
}

/*Print*/

let getTextArr = () => {
  let arr = [];
  arr[0]=[];
  for(let i=0, j=0, k=0; i<bufText.length; i++){
    if(k===57){
      j++; 
      arr[j]=[];
      k=0;
    }
    if(bufText[i]==='\n'){
      let iteration=58-arr[j].length-1;
      for(let l=0; l<iteration; l++){
        arr[j][k]='';
        k++;
      }
      continue;
    }
    
    arr[j][k]=bufText[i];
    k++;
  }
  return arr;
}

class Carriage {
  index=textBuf.length;
  
  moveLeft = () => {if(this.index) this.index--}; //Backspace and left
  moveRigth = () => this.index++; //Add and rigth
  checkFirstLine = () => (this.index<58)? 1:0;
  moveTop = () => {
    /* if(bufText.length>=this.index && this.index>=bufText.length-58){
      if(!checkFirstLine(this.index)){
        
      }
    } */
  }
  returnIndex = () => this.index;
  drawCarriage = () => { console.log('index:' + this.index);
    text.innerHTML=textBuf.slice(0, this.index) +'<span class="main__carriage">'+textBuf.slice(this.index)+'</span>'.replace(/\s(?!class)/, '&nbsp');
  }
  //Подвинуть вниз
  //Подвинуть вверх
}

let carriage = new Carriage();

setInterval(()=>{
  updateVar();
}, 500)

document.addEventListener('keypress', function(event) {
});

document.addEventListener('keyup', function(event) {
  if(event.key=='CapsLock'){
    if(isCapslock) isCapslock=0;
    else isCapslock=1;
    animateKey('capslock');
  }

  let keysPage = document.querySelectorAll('.keyboard__key');
  for(let i=0; i<keysPage.length; i++) keysPage[i].classList.remove('keyboard__animation');

});

document.addEventListener('keydown', function(event) {
  console.log(event.key)
  
  if(event.key=='CapsLock'){
    animateKey('capslock');
    return;
  }

  if(event.key=='Control'){
    if(event.location=='1') animateKey('ctrl');
    if(event.location=='2') animateKey('rigthCtrl');
    return;
  }

  if(event.altKey && event.shiftKey){
    selectLang();
  }


  if(event.key=='Backspace'){
    animateKey('backspace');
    return;
  }

  if(event.key=='Shift'){
    if(event.location=='1') animateKey('shift');
    if(event.location=='2') animateKey('rigthShift');
    return;
  }

  if(event.key==' '){
    text.innerHTML=textBuf+" ";
    textBuf=textBuf+" ";
    animateKey('space');
    carriage.drawCarriage();
    carriage.moveRigth();
    return;
  }

  if(event.key=='Enter'){
    text.innerHTML=textBuf+"<br>";
    textBuf=textBuf+" ";
    carriage.drawCarriage();
    animateKey('enter');
    return;
  }

  if(isCapslock){
    if(event.key && event.shiftKey){
      let key=event.key;
      for(let i=0; i<keys.length; i++)
      if(keys[i].key==key){
        text.innerHTML=textBuf+keys[i].key;
        textBuf=textBuf+keys[i].key;
        animateKey(keys[i].key);
        carriage.drawCarriage();
        carriage.moveRigth();
        return;
      }
    }

    let key=event.key;
    for(let i=0; i<keys.length; i++)
    if(keys[i].supKey==key){
      text.innerHTML=textBuf+keys[i].supKey;
      textBuf=textBuf+keys[i].supKey;
      animateKey(keys[i].supKey);
      carriage.drawCarriage();
      carriage.moveRigth();
      return;
    }

  }
  else if(event.key && event.shiftKey){
    let key=event.key;
    for(let i=0; i<keys.length; i++)
    if(keys[i].supKey==key){
      text.innerHTML=textBuf+key;
      textBuf=textBuf+keys[i].supKey;
      animateKey(keys[i].key);
      carriage.drawCarriage();
      carriage.moveRigth();
      return;
    }
  }
    let key=event.key;
    for(let i=0; i<keys.length; i++)
    if(keys[i].key==key){
      text.innerHTML=textBuf+key;
      textBuf=textBuf+keys[i].key;
      animateKey(keys[i].key);
      carriage.drawCarriage();
      carriage.moveRigth();
      return;
    }

    if(event.key=='Alt'){
      if(event.location=='1') animateKey('alt');
      if(event.location=='2') animateKey('rigthAlt');
      return;
    }
  if(!(event.key=='F5')) alert('Не найдена клавиша. Проверьте соответсвие раскладки виртуальной клавиатуры с вашей раскладкой, либо наличие нужной клавиши на виртуальной клавиатуре. Если сменить раскладку не представляется возможным, используйте мышь для набора текста.')
});

createKeyboard();
updateVar();