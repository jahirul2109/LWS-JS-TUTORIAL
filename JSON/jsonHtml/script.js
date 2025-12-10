async function change_mySelect(sel) {
    const dparam = JSON.stringify({table : sel, limit : 20})
   const response = await fetch("https://www.w3schools.com/js/json_demo_html_table.php", {
    method : "POST",
    headers : {
        "Content-type": "application/x-www-form-urlcencode"
    },
    body : "x=" + dparam,
   })
}