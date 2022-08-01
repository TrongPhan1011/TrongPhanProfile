//level 1
const home = '/';
const gioiThieu = '/gioithieu';
const sanPham = '/sanpham';
const chuyenFile = '/chuyenfile';
const music = '/music';
const qrCode = '/qrcode';

/* 
    level 2
    QR Code
*/

const taoMaQR = qrCode + '/taomaqr';
const dichMaQR = qrCode + '/dichmaqr';

const routes = {
    home: home,
    gioiThieu: gioiThieu,
    sanPham: sanPham,
    chuyenFile: chuyenFile,
    music: music,
    qrCode: qrCode,
    // level 2
    //qrCode
    taoMaQR: taoMaQR,
    dichMaQR: dichMaQR,
};
export default routes;
