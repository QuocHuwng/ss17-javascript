let day1 = prompt("Nhap ngay thang (YYYY-MM-DD): ");
let day2 = prompt("Nhap ngay thang (YYYY-MM-DD): ");
let date1 = new Date(day1);
let date2 = new Date(day2);
let time = Math.abs(date2 - date1);
let day = Math.ceil(time / (1000 * 60 * 60 * 24));
console.log(`Độ lệch là ${day} ngày`);