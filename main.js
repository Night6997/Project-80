var NOP = [];
function submit() {
    var GuestName = document.getElementById("inputName").value;
    NOP.push(GuestName);
    console.log(NOP);
    document.getElementById("names").innerHTML = NOP;
}
function Show() {
    var ListNop = NOP.join("<br>");
    document.getElementById("ListDiv").innerHTML = ListNop
    document.getElementById("buttonSort").style.display="inline-block";
}                
function sortIt() {
    var sortedNOP = NOP.sort();
    console.log(NOP);
    document.getElementById("EmptyForSorted").innerHTML = sortedNOP
}
function search() {
    var s= document.getElementById("inputSearch").value;
    var found=0;
    var j;
    for(j=0; j<NOP.length; j++)
     {
        if(s==NOP[j]){
            found=found+1;
            console.log(found);
        }
    }
    document.getElementById("emptyDivForSearch").innerHTML = "name found "+found+" time/s";
    console.log("found name "+found+" time/s");
}