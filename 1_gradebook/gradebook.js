function getAvg(scores) {
    var total = scores.reduce(function (sum, score) { return sum + score; }, 0);
    var avg = total / scores.length;
    return avg;
}
function getGrade(score) {
    if (score === 100) {
        return "A++";
    }
    else if (score >= 90 && score <= 99) {
        return "A";
    }
    else if (score >= 80 && score <= 89) {
        return "B";
    }
    else if (score >= 70 && score <= 79) {
        return "C";
    }
    else if (score >= 60 && score <= 69) {
        return "D";
    }
    else if (score >= 0 && score <= 59) {
        return "F";
    }
    else {
        return "Invalid Score!";
    }
}
function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
    var average = getAvg(totalScores);
    var grade = getGrade(studentScore);
    var passed = studentScore >= 60 ? "You passed the course." : "You failed the course.";
    // Construct the message
    return "Class average: ".concat(average, ". Your grade: ").concat(grade, ". ").concat(passed);
}
console.log(getAvg([90, 12, 45, 76, 87]));
console.log(getGrade(90));
console.log(hasPassingGrade(50));
console.log(hasPassingGrade(70));
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
