/**
 * Created by 96400 on 2017/7/12.
 */
import axios from 'axios';
//上线正式
import {
    LoginResource,//用户登录
    getMuseumNamesListResource//获取科技馆名称列表接口

} from './resource'
export default {
    /**
     * 用户登录
     */
    getLogin(Name, Pwd) {
        return axios.post(LoginResource, {
                userName: Name || '',
                userPwd: Pwd || ''
            }
        )
    }
}
