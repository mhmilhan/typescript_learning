function getAvg(scores: number[]): number {
    const total = scores.reduce((sum, score) => sum + score, 0);
    const avg = total / scores.length;
    return avg;
}

function getGrade(score: number): string {
    if (score === 100) {
        return "A++"
    } 
    else if(score >= 90 && score <= 99) {
        return "A"
    }
    else if(score >= 80 && score <= 89) {
        return "B"
    }
    else if(score >= 70 && score <= 79) {
        return "C"
    }
    else if(score >= 60 && score <= 69) {
        return "D"
    }
    else if(score >= 0 && score <= 59) {
        return "F"
    }
    else {
        return "Invalid Score!"
    }
    
}


function hasPassingGrade(score: number): boolean {
    return getGrade(score) !== "F";
}

function studentMsg(totalScores: number[], studentScore: number): string {
    const average = getAvg(totalScores).toFixed(2);
    const grade = getGrade(studentScore);
    const passed = studentScore >= 60 ? "You passed the course." : "You failed the course.";

    // Construct the message
    return `Class average: ${average}. Your grade: ${grade}. ${passed}`;
}

console.log(getAvg([90, 12, 45, 76, 87]));
console.log(getGrade(90));
console.log(hasPassingGrade(50));
console.log(hasPassingGrade(70));
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));