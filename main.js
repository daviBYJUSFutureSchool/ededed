nameOfStudentArray = []

function submit()
{
    displayStudentArray = [];

    for (var j = 1; j <4; j++)
    {
        var nameOfTheStudent = document.getElementById("nameOfTheStudent"+j).value;
        console.log(nameOfTheStudent);
        nameOfStudentArray.push(nameOfTheStudent);
    }

    console.log(nameOfTheStudent);

    var lenghtOfNameOfStudentArray = nameOfStudentArray.lenght;
    console.log(lenghtOfNameOfStudentArray);

    for (var k = 0; k < lenghtOfNameOfStudentArray; k++)
    {
        displayStudentArray.push("<h4>NOME - "+ nameOfStudentArray[k] + "</h4>");
        console.log(displayStudentArray);
    }

    console.log(displayStudentArray);
    document.getElementById("displaynameWithCommas").innerHTML = displayStudentArray;

    var removeCommas = displayStudentArray.join(" ");
    console.log(removeCommas);
    document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;
    document.getElementById("submitButton").style.display = "none";
    
}