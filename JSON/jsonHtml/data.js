const coustomer = [
    {name : "jahirul"},
    {name : "rabiul"},
    {name : "yasin"},
    {name : "ripon"},
    {name : "kakku"},
    {name : "anik"},
    {name : "zahid"},
    {name : "kawser"},
    {name : "rafin"},
    {name : "pervej"},
    {name : "maksud"},
    {name : "rasel"}
]
const ic = [
    {name : "prokas"},
    {name : "emon"},
    {name : "soykot"},
    {name : "ibrahim"},
    {name : "shahin"},
    {name : "ahad"},
    {name : "faysal"},
    {name : "jahid"}
]
const saler = [
    {name : "masum"},
    {name : "rony"},
    {name : "hasnain"},
    {name : "shimanto"},
    {name : "rafi"},
    {name : "jilani"},
    {name : "antor"},
    {name : "sumon"},
    {name : "samia"},
    {name : "shuvo"}
]
const arry = [
    {saler : [
    {name : "jahirul"},
    {name : "rabiul"},
    {name : "yasin"},
    {name : "ripon"},
    {name : "kakku"},
    {name : "anik"},
    {name : "zahid"},
    {name : "kawser"},
    {name : "rafin"},
    {name : "pervej"},
    {name : "maksud"},
    {name : "rasel"}
]},
{cosutmer :[
    {name : "masum"},
    {name : "rony"},
    {name : "hasnain"},
    {name : "shimanto"},
    {name : "rafi"},
    {name : "jilani"},
    {name : "antor"},
    {name : "sumon"},
    {name : "samia"},
    {name : "shuvo"}
]},
{ic :[
    {name : "prokas"},
    {name : "emon"},
    {name : "soykot"},
    {name : "ibrahim"},
    {name : "shahin"},
    {name : "ahad"},
    {name : "faysal"},
    {name : "jahid"}
]}
]

const fulldata = {
    coustomers : coustomer,
    saller : saler,
    ic : ic
};
const objData = JSON.stringify(fulldata);
console.log(objData);
console.log(JSON.parse(objData));



// const jsonData = JSON.stringify(arry);
// const jsData = JSON.parse(jsonData);
// console.log(jsonData);
// console.log(jsData);
