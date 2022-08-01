import Home from '~/pages/Home';
import QRCode from '~/pages/QRcode';
import GioiThieu from '~/pages/GioiThieu';
import SanPham from '~/pages/SanPham';
import ChuyenFile from '~/pages/ChuyenFile';
import MyMusic from '~/pages/MyMusic';

import config from '~/config';
//public
const publicRoutes = [
    {
        path: config.routeConfig.home,
        component: Home,
    },
    {
        path: config.routeConfig.gioiThieu,
        component: GioiThieu,
    },
    {
        path: config.routeConfig.sanPham,
        component: SanPham,
    },
    {
        path: config.routeConfig.chuyenFile,
        component: ChuyenFile,
    },
    {
        path: config.routeConfig.music,
        component: MyMusic,
    },
    {
        path: config.routeConfig.qrCode,
        component: QRCode,
    },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
