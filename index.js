var masukazu = 3;


//はじめにマスを生成する処理
function iti() {
    var a = document.getElementById("masu");

    var i = 0, j = 0;
    for (i = 0; i < masukazu; i++) {
        var tr = document.createElement("tr");
        for (j = 0; j < masukazu; j++) {
            var td = document.createElement("td");
            td.className = "masu";
            td.id = "ms" + i + j;
            td.textContent = "";
            td.onclick = cli;
            tr.appendChild(td);
        }
        a.appendChild(tr);
    }

    kazuireru();
}

//最初に数字をいれる処理
function kazuireru() {
    var kazu = 1;
    var i = 0, j = 0;
    for (i = 0; i < masukazu; i++) {
        for (j = 0; j < masukazu; j++) {
            if (i == masukazu - 1 && j == masukazu - 1) {
                break;
            }
            document.getElementById("ms" + i + j).textContent = kazu;
            kazu++;
        }
    }

}

//マウスがクリックされたときの処理
function cli(e) {
    var id = e.target.id;
    ugokasu(document.getElementById(id));
    hantei();
}

//数字を動かす
function ugokasu(e) {
    if (e.textContent == "") {
        return;
    }
    var i = e.id.charAt(2);
    var j = e.id.charAt(3);
    i = parseInt(i);
    j = parseInt(j);
    var hidari = document.getElementById("ms" + i + (j - 1));
    var ue = document.getElementById("ms" + (i - 1) + j);
    var migi = document.getElementById("ms" + i + (j + 1));
    var sita = document.getElementById("ms" + (i + 1) + j);

    var ht = null, ut = null, mt = null, st = null;

    if (j != 0) {
        ht = hidari.textContent;
    }
    if (i != 0) {
        ut = ue.textContent;
    }
    if (j != masukazu - 1) {
        mt = migi.textContent;
    }
    if (i != masukazu - 1) {
        st = sita.textContent;
    }
    switch ("") {
        case ht:
            hidari.textContent = e.textContent;
            e.textContent = "";
            break;
        case ut:
            ue.textContent = e.textContent;
            e.textContent = "";
            break;
        case mt:
            migi.textContent = e.textContent;
            e.textContent = "";
            break;
        case st:
            sita.textContent = e.textContent;
            e.textContent = "";
            break;
    }
}

//パズルを混ぜる．
function mazeru() {
    for (var i = 0; i < 1000 * masukazu; i++) {
        ugokasu(document.getElementById("ms" + Math.floor(Math.random() * masukazu) + Math.floor(Math.random() * masukazu)));
    }
    hantei();
}

//パズルが完成したらclearを表示
function hantei() {
    var kazu = 1;
    var i = 0, j = 0;
    for (i = 0; i < masukazu; i++) {
        for (j = 0; j < masukazu; j++) {
            if (i == masukazu - 1 && j == masukazu - 1) {
                document.getElementById("hantei").textContent = "clear";
                return;
            }
            if (document.getElementById("ms" + i + j).textContent != kazu) {
                document.getElementById("hantei").textContent = "";
                return;
            }
            kazu++;
        }
    }

}

function masukaeru() {
    masukazu = document.getElementById("number").value;
    sakujo();
    iti();
}

function sakujo() {
    var element = document.getElementById("masu");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}