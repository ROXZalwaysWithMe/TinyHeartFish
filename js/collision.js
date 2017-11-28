function momFruitsCollision() {
    for (var i = 0; i < fruit.num; i++) {
        if (!data.gameOver) {
            if (fruit.alive[i]) {
                //calLength2(x1,y1,x2,y2){ return dx^2 + dy^2}
                var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
                if (l < 900) {
                    fruit.dead(i);
                    if (fruit.fruitType[i] == "orange") {
                        data.fruitOrangeNum++;
                        mom.momBodyCount++;
                    };
                    if (mom.momBodyCount > 7) {
                        mom.momBodyCount = 7;
                    };
                    if (fruit.fruitType[i] == "blue" && data.fruitOrangeNum > 0) {
                        data.multiple = 2;
                    };
                    wave.born(fruit.x[i], fruit.y[i], 50, 10, "rgba(255,255,255,");
                };
            };
        };
    };
}

function momBabyCollision() {
    var l = calLength2(mom.x, mom.y, baby.x, baby.y);
    if (l < 900) {
        if (data.fruitOrangeNum == 0) {
            return;
        } else {
            baby.babyBodyCount -= data.fruitOrangeNum * 2 * data.multiple;
            if (baby.babyBodyCount < 0) {
                baby.babyBodyCount = 0;
            }
            mom.momBodyCount = 0;
            //score update
            // "rgba(254,171,52,"
            data.addScore();
            wave.born(baby.x, baby.y, 100, 100, randomColor());
        };
    };
}