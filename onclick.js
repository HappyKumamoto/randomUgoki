let startTime = null;//startTime変数
let displayArea = document.getElementById('display-area');
let onclickArea = document.getElementById('img1');

function start(){
    startTime = Date.now();//上で用意した変数startTimeへ現在時刻のミリ秒を代入
    document.body.onclick = stop;
}

function stop() {
    let currentTime = Date.now();
    let seconds = (currentTime - startTime) / 1000;
    if ( 7 <= seconds && seconds < 8 ) {
        displayArea.innerText = `${seconds}秒でした！
        おめでとうございます！！
        ＼(^o^)／`;
    }else{
        displayArea.innerText = `${seconds}秒でした！
        (*>ω<)おしいです！ `;
    }
  document.body.onclick = null;  //二回目以降は押せない
}

if(confirm(`  👉[[  OK  ]]を押して7秒経ったと思ったら👉 [[  ☁️  ]]を押してください！ `)){
　　　　　//confirm関数は、戻り値が意味を持ち、OKを押されるとtrue、
                  //キャンセルが押されるとfalseが返る
                  
        //let messages = [' &#x1f388; ' , ' &#x1fa81; ',' &#x26bd; ' ]; //innerHTMLで表示
        /* let messages = [' 💡 ' , ' 🌧️ ',' 🍌 ', ' 🏐 ',' 🎈 ','  🌵 ' , '☁️ '  , ' 🤍 ' , ' ❄ ' , ' 💭 '  , ' 🥚 ' , '🖱' , '🚃🚃🚃🚃🚃' ];
        let messageNo = Math.floor( Math.random() * messages.length);
        console.log(messages[messageNo]);
        document.getElementById('onclick-area').innerText = messages[messageNo];
       //HTML EntityはinnerHTMLで絵文字表示されるが、動かない
      　　　//絵文字はinnerTextで      同上*/

  start();
}
