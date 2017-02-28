function squareNumber(i)
{	
    var numberAS = Number(i)*Number(i);
    return numberAS;
}

function halfNUmber(i)
{
	var numberAfter = Number(i)/2;
	return numberAfter;
}

function percentOf(i, j)
{
	return Number(i) / Number(j); 
}

function areaOfCircle(i)
{
	var r = Number(i);
	var areal = Math.PI * r * r;

	return Math.round(areal*100)/100;
}