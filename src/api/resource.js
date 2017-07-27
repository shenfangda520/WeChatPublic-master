/**
 * Created by 96400 on 2017/7/24.
 */
import {API_ROOT} from './config.js'
const apiKJG = {
    Login: '/api/UserInfo/valLogin',//用户登录
    getMuseumNamesList: '/api/Museum/getMuseumList',//获取科技馆名称列表接口

}

export const LoginResource = API_ROOT.concat(apiKJG.Login);
export const getMuseumNamesListResource = API_ROOT.concat(apiKJG.getMuseumNamesList);


