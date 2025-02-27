let banKinh = prompt("Nhập bán kính của hình cầu:");
banKinh = parseFloat(banKinh);

let theTich = (4 / 3) * Math.PI * Math.pow(banKinh, 3);
let dienTichBeMat = 4 * Math.PI * Math.pow(banKinh, 2);
let chuViLonNhat = 2 * Math.PI * banKinh;

document.write("Thể tích hình cầu: " + theTich + "<br>");
document.write("Diện tích bề mặt hình cầu: " + dienTichBeMat + "<br>");
document.write("Chu vi lớn nhất của hình cầu: " + chuViLonNhat + "<br>");