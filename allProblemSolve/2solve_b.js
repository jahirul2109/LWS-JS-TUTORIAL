const text = " sonar amr bangla ami tomai valo basi chiro din tomr ahkas tmr batas amr mone bajai basi amr Amr";
let lengths = text.match (/amr/gi);
let sonkha = lengths ? lengths.length : 0;
let postion = text.search (/amrdr/i);
postion = postion >= 0 ? postion : "Not found";
console.log( `Word ta use hose ${sonkha}`);
console.log(`1st word er positon ${postion}`);