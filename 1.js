const inutTempCelsiy = Number.parseFloat(prompt(`Пожалуйста введите температуру в градусах Цельсия: `));
let convertedTempFar = (((9/5) * inutTempCelsiy + 32)*100/100).toFixed(1);
alert(`Цельсий: ${inutTempCelsiy} , Фаренгейт: ${convertedTempFar}`);


