var x, y, g, h, s, w, p, l, i, o, t;

function newtry() {
  x = 0;
  y = 0;
  s = 0;
  w = 0;

  t = 0;

  p = document.getElementsByClassName("paint");
  l = document.getElementsByClassName("play");

  document.getElementById("moves").innerHTML = "moves: " + w;
  document.getElementById("win").style.display = "none";

  for (i = 0; i < 64; i++) {
    p[i].style.opacity = 0;
  }

  for (i = 0; i < 8; i++) {
    x = x + 1;
    y = 0;

    for (o = 0; o < 8; o++) {
      y = y + 1;

      l[t].setAttribute(
        "onclick",
        "x" + x + "()," + " " + "y" + y + "()," + " " + "myfunction()"
      );
      t = t + 1;
    }
  }

  x = Math.floor(Math.random() * 8) + 1;
  y = Math.floor(Math.random() * 8) + 1;

  document.getElementById("knight").style.gridRowStart = x;
  document.getElementById("knight").style.gridColumnStart = y;
  document.getElementById("start").style.display = "none";
}

function x1() {
  g = 1;
}

function x2() {
  g = 2;
}

function x3() {
  g = 3;
}

function x4() {
  g = 4;
}

function x5() {
  g = 5;
}

function x6() {
  g = 6;
}

function x7() {
  g = 7;
}

function x8() {
  g = 8;
}

function y1() {
  h = 1;
}
function y2() {
  h = 2;
}

function y3() {
  h = 3;
}

function y4() {
  h = 4;
}

function y5() {
  h = 5;
}

function y6() {
  h = 6;
}

function y7() {
  h = 7;
}

function y8() {
  h = 8;
}

function deifunction() {
  if (
    (x - 2 == g && y - 1 == h) ||
    (x - 2 == g && y + 1 == h) ||
    (x + 2 == g && y + 1 == h) ||
    (x + 2 == g && y - 1 == h) ||
    (x - 1 == g && y + 2 == h) ||
    (x - 1 == g && y - 2 == h) ||
    (x + 1 == g && y + 2 == h) ||
    (x + 1 == g && y - 2 == h)
  ) {
    x = g;
    y = h;
    s = s - 1;
    w = w + 1;
    document.getElementById("knight").style.gridRowStart = x;
    document.getElementById("knight").style.gridColumnStart = y;

    document.getElementById("rd" + x + y).style.opacity = 0;
    document.getElementById("ad" + x + y).setAttribute("onclick", "x" + x + "(), " + " " + "y" + y + "()," + " " + "myfunction()");
    document.getElementById("moves").innerHTML = "moves: " + w;
  }
}

function myfunction() {
  if (
    (x - 2 == g && y - 1 == h) ||
    (x - 2 == g && y + 1 == h) ||
    (x + 2 == g && y + 1 == h) ||
    (x + 2 == g && y - 1 == h) ||
    (x - 1 == g && y + 2 == h) ||
    (x - 1 == g && y - 2 == h) ||
    (x + 1 == g && y + 2 == h) ||
    (x + 1 == g && y - 2 == h)
  ) {
    x = g;
    y = h;
    s = s + 1;
    w = w + 1;
    document.getElementById("knight").style.gridRowStart = x;
    document.getElementById("knight").style.gridColumnStart = y;

    document.getElementById("rd" + x + y).style.opacity = 0.7;
    document.getElementById("ad" + x + y).setAttribute("onclick", "x" + x + "()," + " " + "y" + y + "()," + " " + "deifunction()");
    document.getElementById("moves").innerHTML = "moves: " + w;

    if (s == 64) {
      document.getElementById("win").innerHTML = "Congratulations! </br> </br> You have won with " + w + " moves.";
      document.getElementById("win").style.display = "block";

      x = 0;
      y = 0;
      t = 0;

      for (i = 0; i < 8; i++) {
        x = x + 1;
        y = 0;

        for (o = 0; o < 8; o++) {
          y = y + 1;

          l[t].setAttribute("onclick", "nope");
          t = t + 1;
        }
      }
    }
  }
}
