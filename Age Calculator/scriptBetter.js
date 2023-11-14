function Info(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
}

document.addEventListener("DOMContentLoaded", function() {
    //button
    const button= document.getElementById("button");
    //input dates
    
    const dayInput= document.getElementById("day");
    const monthInput= document.getElementById("month");
    const yearInput= document.getElementById("year");
    
    //verify
    function verifyBirth(birth) {
        console.log("Birth date: ");
        console.log(birth.day);
        console.log(birth.month);
        console.log(birth.year);
    }
    
    function verifyCurrent(current) {
        console.log("Current date: ");
        console.log(current.day);
        console.log(current.month);
        console.log(current.year);
    }
    
    function verifyYear(birth, current) {
        //if(2003 <= 2023)
        if(birth.year <= current.year) {
            console.log("Year Verify: Succes");
            return true;
        }
        else {
            console.log("Year Verify: Fail");
            return false;
        }
    }
    
    function verifyMonth(birth) {
         if (birth.month <= 12) {
            console.log("Month Verify: Succes");
            return true;
        }
        else {
            console.log("Month Verify: Fail");
            return false;
        }
    }
    
    function LeapYear(year) {
    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
}
    
    function verifyDay(birth) {
        if (
            (birth.month == 1 && birth.day >= 1 && birth.day <= 31) || 
            //January
            (birth.month == 2 && birth.day >= 1 && (birth.day <= 29 && LeapYear(birth.year) || birth.day <= 28)) || 
            // February
            (birth.month == 3 && birth.day >= 1 && birth.day <= 31) || 
            //March
            (birth.month == 4 && birth.day >= 1 && birth.day <= 30) || 
            //April
            (birth.month == 5 && birth.day >= 1 && birth.day <= 31) ||
            //May
            (birth.month == 6 && birth.day >= 1 && birth.day <= 30) || 
            // June
            (birth.month == 7 && birth.day >= 1 && birth.day <= 31) || 
            // July
            (birth.month == 8 && birth.day >= 1 && birth.day <= 31) || 
            // August
            (birth.month == 9 && birth.day >= 1 && birth.day <= 30) || 
            // September
            (birth.month == 10 && birth.day >= 1 && birth.day <= 31) || 
            // October
            (birth.month == 11 && birth.day >= 1 && birth.day <= 30) || 
            // November
            (birth.month == 12 && birth.day >= 1 && birth.day <= 31) 
            // December
    ) {
        console.log("Day Verify: Success");
        return true;
    } else {
        console.log("Day Verify: Fail");
        return false;
    }
}

    //calculate  
    function ageCalculator(birth, current) {
        
        let ageYears= current.year - birth.year;
        let ageMonths= current.month - birth.month;
        let ageDays= current.day - birth.day;
        
        if(ageDays < 0) {
            ageMonths--;
            const daysInLastMonth = new Date(current.year, current.month - 1, 0).getDate();
            ageDays += daysInLastMonth;
        }
        
         if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }
        
        return {
            years: ageYears,
            months: ageMonths,
            days: ageDays,
        };
        

    }
    
    function showAge() {
        const showAge= document.getElementById("showAge");
            
        if(showAge.style.display === "none") {
            showAge.style.display= "block"; 
            
            
        }
    }
        
    button.addEventListener("click", function() {
        
        //birth info
        const birth= new Info(dayInput.value, monthInput.value, yearInput.value);
        
        //current date info
        const date= new Date();
        const current= new Info(date.getDate(), date.getMonth() + 1, date.getFullYear());
        
        //verify
        verifyBirth(birth);
        verifyCurrent(current);
        const check1= verifyYear(birth, current);
        const check2= verifyMonth(birth);
        const check3= verifyDay(birth);
        
        
        if(check1 && check2 && check3 == true) {
            //age calculation
            const age = ageCalculator(birth, current);
            console.log("Years: ", age.years);
            console.log("Months: ", age.months);
            console.log("Days: ", age.days);
            
            document.getElementById("yearsResult").textContent= age.years;
            document.getElementById("monthsResult").textContent= age.months;
            document.getElementById("daysResult").textContent= age.days;
            showAge();
        }
        else {
            //fail
            alert("Please introduce a valid date");
        }
        
    });
});