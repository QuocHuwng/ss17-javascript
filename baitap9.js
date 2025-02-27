// function tinhTheTichHinhCau(banKinh) {
//     return (4 / 3) * Math.PI * Math.pow(banKinh, 3);
// }
// function tinhDienTichBeMatHinhCau(banKinh) {
//     return 4 * Math.PI * Math.pow(banKinh, 2);
// }
// function tinhChuViLonNhatHinhCau(banKinh) {
//     return 2 * Math.PI * banKinh;
// }
// let banKinh = parseFloat(prompt("Nhập bán kính của hình cầu:"));

// let theTich = tinhTheTichHinhCau(banKinh);
// let dienTichBeMat = tinhDienTichBeMatHinhCau(banKinh);
// let chuViLonNhat = tinhChuViLonNhatHinhCau(banKinh);

// console.log("Thể tích hình cầu: " + theTich);
// console.log("Diện tích bề mặt hình cầu: " + dienTichBeMat);
// console.log("Chu vi lớn nhất của hình cầu: " + chuViLonNhat);
let a = parseFloat(prompt("Nhập a:"));
let b = parseFloat(prompt("Nhập b:"));
let c = parseFloat(prompt("Nhập c:"));
let delta = b * b - 4 * a * c;
if (delta < 0) {
    console.log("Phương trình vô nghiệm");
} else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`Nghiệm của phương trình là: x1 = ${x1}, x2 = ${x2}`);
}