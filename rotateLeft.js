function rotateLeft(a, n) {
   while (n) {
      a.push(a.shift());
      n--;
   }
return a;
}

rotateLeft([1,2,3,4,5],4)
