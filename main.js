document.onreadystatechange = () => {
    function getRate(type, stade, mainPetLvl, foodPetLvl){
        let rate = 0;
        let lvlBasedRate = (mainPetLvl + foodPetLvl) * 0.125;

        if (stade === 0) {
            if (type === 0) rate = 90;
            else if (type === 1) rate = 45;
            else if (type === 2) rate = 50;
        }
        else if (stade === 1) {
            if (type === 0) rate = 70;
            else if (type === 1) rate = 30;
            else if (type === 2) rate = 40;
        }
        else if (stade === 2) {
            if (type === 0) rate = 49;
            else if (type === 1) rate = 25;
            else if (type === 2) rate = 30;
        }
        else if (stade === 3) {
            if (type === 0) rate = 34;
            else if (type === 1) rate = 17;
            else if (type === 2) rate = 20;
        }
        else if (stade === 4) {
            if (type === 0) rate = 24;
            else if (type === 1) rate = 12;
            else if (type === 2) rate = 10;
        }

        let calculedRate = rate + lvlBasedRate;

        return { baseRate : Math.min(calculedRate, 100), specialRate : Math.min(calculedRate + 10, 100), jokerRate : Math.min(calculedRate + 30, 100) };
        //return { baseRate: calculedRate, specialRate: (calculedRate + 10), jokerRate: (calculedRate + 30) };
    }


    function calculate() {
        const type = Number(document.getElementById("type").value);
        const stade = Number(document.getElementById("stade").value);
        const mainPetLvl = Number(document.getElementById("mainPetLvl").value);
        const foodPetLvl = Number(document.getElementById("foodPetLvl").value);

        const result = getRate(type, stade, mainPetLvl, foodPetLvl);
        const out = result.baseRate + "%";
        const outSpecial = result.specialRate + "%";
        const outJoker = result.jokerRate + "%";

        
        document.getElementById("result").innerHTML = out;
        document.getElementById("resultSpecial").innerHTML = outSpecial;
        document.getElementById("resultJoker").innerHTML = outJoker;
        document.getElementById("resultTable").style.display = "";

    }

    document.getElementById("petDetails").onsubmit = (e) => {
        e.preventDefault();
        calculate();
    };

};