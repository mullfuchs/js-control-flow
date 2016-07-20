
for(var i = 0; i < 20; i++){
	var grade = Math.floor(Math.random() * 100);
	var letterGrade = "";
	if(grade > 90){
		letterGrade = "A";
	} else if(grade > 80){
		letterGrade = "B";
	} else if(grade > 70){
		letterGrade = "C";
	} else if(grade > 60){
		letterGrade = "D";
	} else if(grade > 50){
		letterGrade = "F"
	} else {
		letterGrade = "DROP THE HELL OUT";
	}
	console.log(grade + " " + letterGrade);
}