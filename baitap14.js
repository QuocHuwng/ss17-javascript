let banKinh = parseFloat(prompt("Nhập vào bán kính của hình trụ:"));
let chieuCao = parseFloat(prompt("Nhập vào chiều cao của hình trụ:"));

let dienTichXungQuanh = 2 * Math.PI * banKinh * chieuCao;
let dienTichToanPhan = 2 * Math.PI * banKinh * (banKinh + chieuCao);
let theTich = Math.PI * Math.pow(banKinh, 2) * chieuCao;
let chuViDay = 2 * Math.PI * banKinh;

document.write("Diện tích xung quanh: " + dienTichXungQuanh + "<br>");
document.write("Diện tích toàn phần: " + dienTichToanPhan + "<br>");
document.write("Thể tích hình trụ: " + theTich + "<br>");
document.write("Chu vi đáy: " + chuViDay + "<br>");
