/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Logan Ratliff
      Date:   01/31/2023

      Filename: project02-01_txt.js
 */

function fToc(fdegree) {

    var fdegree = document.getElementById("fValue").value;
            
            return (fdegree-32)/1.8;
            

}

function cTof(cdegree) {

      var cdegree = document.getElementById("cValue").value;
              
              return (cdegree*1.8) +32;
}

document.getElementById("fValue").onchange = function(){var fdegree = document.getElementById("fValue").value;
document.getElementById("cValue").value = fToc(fdegree); return fdegree}


document.getElementById("cValue").onchange = function(){var cdegree = document.getElementById("cValue").value;
document.getElementById("fValue").value = cTof(cdegree); return cdegree}