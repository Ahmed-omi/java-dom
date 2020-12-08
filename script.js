function generate ()
{
	var quote = {
		"- Terry Pratchett" : '"A marriage is always made up of two people who are prepared to swear that only the other one snores." ' ,
        "- Russell R. McIntyre" : '"Sin bravely...We will never have all the facts to make a perfect judgement, but with the aid of basic experience we must leap bravely into the future."',
        "- Samuel Johnson" : '"Do not accustom yourself to use big words for little matters."',
       
        "- Estee Lauder" : '"Touch your customer, and you re halfway there.',
       
        "- Oliver Goldsmith" : '"Dont let us make imaginary evils when you know we have so many real ones to encounter"',
        "- Robert Browning" : '"Why comes temptation, but for man to meet and master and crouch beneath his foot, and so be pedestaled in triumph?"',
         "- Confucius"  : '"It does not matter how slowly you go so long as you do not stop."',
         "- Daniel Webster" : '"The world is governed more by appearances than realities, so that it is fully as necessary to seem to know something as to know it."'
            
            }


	var keys = Object.keys (quote);
	var author = keys[Math.floor(Math.random() * keys.length)];
	var quote = quote[author];
	document.getElementById("quote").innerHTML = quote;
	document.getElementById("author").innerHTML = author;

}

function changeColor(){
	var X=document.getElementById("a");
	if(X.style.color=="yellow")
		X.style.color="red";
	else if (X.style.color=="red")
		X.style.color="green";
	else
		X.style.color="red";
}

var i=0;
var j=0;
 function divchange ()
 {
 	var divtag=document.getElementById("container");
 	var bgcolor= ["purple", "yellow", "blue", "brown"];
 	var txtcolor=["red","black","gray","yellow"];
 	divtag.style.backgroundColor=bgcolor[i];
 	divtag.style.color=txtcolor[j];
 	i=(i+1)%bgcolor.length;
 	j=(j+1)%txtcolor.length;
 }
setInterval(divchange,5000);


