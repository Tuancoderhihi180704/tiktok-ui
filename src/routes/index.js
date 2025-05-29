//Layout
import { HeaderOnly } from '~/Component/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
//public routes
const publicRoutes = [
  { path: '/', componet: Home },
  { path: '/following', componet: Following },
  { path: '/@:nickname', componet: Profile },
  { path: '/search', componet: Search, layout: null },
  { path: '/upload', componet: Upload, layout: HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
