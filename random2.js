    xmin = 200;        //　左　動く範囲の設定
    ymin = 0;        //　上
    xmax = 700;        //　右
    ymax = 300;        //　下
    x = 100;
    y = 0;
    function move(){                        //　移動方向を決める
        rand = Math.floor(Math.random() * 10);
        if(img1.style.pixelLeft == xmin) {            //　左端の場合、右方向
            x = 0;
        }
        else if(img1.style.pixelLeft == xmax) {            //　右端の場合、左方向
            x = 1;
        }
        else if(rand == 0) {                    //　乱数で決める
            x = Math.floor(Math.random() * 3);
        }
        if(img1.style.pixelTop == ymin) {            //　上端の場合、下方向
            y = 0;
        }
        else if(img1.style.pixelTop == ymax) {            //　下端の場合、上方向
            y = 1;
        }
        else if(rand == 0) {                    //　乱数で決める
            y = Math.floor(Math.random() * 3);
        }
                                    //　画像の移動
        if(x == 0) {                        //　右に移動
            img1.style.pixelLeft    = img1.style.pixelLeft    + 50;
        }
        else if(x == 1) {                    //　左に移動
            img1.style.pixelLeft    = img1.style.pixelLeft    - 50;
        }
        if(y == 0) {                        //　下に移動
            img1.style.pixelTop    = img1.style.pixelTop    + 30;
        }
        else if(y == 1) {                    //　上に移動
            img1.style.pixelTop    = img1.style.pixelTop    - 30;
        }
    }
    //function tm(){                            //　タイマー
        setInterval("move()",300);
    //}
