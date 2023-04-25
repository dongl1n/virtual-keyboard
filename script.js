let langCode='En', text, textBuf='', isCapslock=0;
import keys from './assets/json/en.json' assert { type: "json" };

function createKeyboard(){
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

function deleteKeyboard(){
  document.querySelector('.wrapper').remove();
}

function updateVar(){
  text = document.querySelector('.main__text-block');
}

function animateKey(key){
  let keysPage = document.querySelectorAll('.keyboard__key');
  for(let i=0; i<keysPage.length; i++){
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
  }
}

function selectLang(){
  if(langCode==='En') langCode='Ru';
  else langCode='En';
  deleteKeyboard();
  createKeyboard();
  updateVar();
}

/*
del=document.querySelector('.del');

setInterval(()=>{
  del.addEventListener('click', selectLang);
}, 500)*/

setInterval(()=>{
  updateVar();
  let keysPage = document.querySelectorAll('.keyboard__key');
}, 500)


document.addEventListener('keyup', function(event) {
  if(event.key=='CapsLock'){
    if(isCapslock) isCapslock=0;
    else isCapslock=1;
  }

  let keysPage = document.querySelectorAll('.keyboard__key');
  for(let i=0; i<keysPage.length; i++) keysPage[i].classList.remove('keyboard__animation');
  
  if(event.key=='Backspace'){
    animateKey('backspace');
  }

});

document.addEventListener('keydown', function(event) {
  if(event.altKey && event.shiftKey){
    selectLang();
  }
});

document.addEventListener('keypress', function(event) {
  console.log(event.key)
  if(event.key==' '){
    text.innerHTML=textBuf+"&nbsp";
    textBuf=textBuf+"&nbsp";
    animateKey('space');
    return;
  }

  if(event.key=='Enter'){
    text.innerHTML=textBuf+"<br>";
    textBuf=textBuf+"<br>";
    animateKey('enter');
    return;
  }

  if(isCapslock){
    if(event.key && event.shiftKey){
      let key=event.key;
      for(let i=0; i<keys.length; i++)
      if(keys[i].supKey==key){
        text.innerHTML=textBuf+keys[i].key;
        textBuf=textBuf+keys[i].key;
        animateKey(keys[i].key);
        return;
      }
    }

    let key=event.key;
    for(let i=0; i<keys.length; i++)
    if(keys[i].key==key){
      text.innerHTML=textBuf+keys[i].supKey;
      textBuf=textBuf+keys[i].supKey;
      animateKey(keys[i].supKey);
      return;
    }

  }
  if(event.key && event.shiftKey){
    let key=event.key;
    for(let i=0; i<keys.length; i++)
    if(keys[i].supKey==key){
      text.innerHTML=textBuf+key;
      textBuf=textBuf+keys[i].supKey;
      animateKey(keys[i].key);
      return;
    }
  }
    let key=event.key;
    for(let i=0; i<keys.length; i++)
    if(keys[i].key==key){
      text.innerHTML=textBuf+key;
      textBuf=textBuf+keys[i].key;
      animateKey(keys[i].key);
      return;
    }
});

createKeyboard();
updateVar();