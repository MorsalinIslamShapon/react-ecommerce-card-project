import axios from "axios";
import {GetToken, ManageTokenExpire, SetEmail, SetToken} from "../utility/TokenHelper.js";

const BASEURL="https://cart-api.teamrabbil.com/api";


export async function UserLoginRequest(postBody) {
    try {
        let res = await axios.post(`${BASEURL}/user-login`,postBody);
        SetEmail(postBody['UserEmail']);
        return res.data['msg']
    }
    catch (e) {
        return false
    }
}



export async function OTPVerifyRequest(postBody) {
    try {
        let res = await axios.post(`${BASEURL}/verify-login`, postBody);
        if(res.data['msg']==="success"){
            SetToken(res.data['data'])
        }
        return res.data['msg']
    } catch (e) {
        return false
    }
}


export async function ProductListRequest(){
    try {
        let res = await axios.get(`${BASEURL}/product-list`);
        return res.data['data']
    } catch (e) {
        return []
    }
}



let config = {
    headers: {
        token: GetToken(),
    }
}





export async function CartListRequest(){
    try {
        let res = await axios.get(`${BASEURL}/cart-list`,config);
        return res.data['data']
    } catch (e) {
        ManageTokenExpire(e.response.status)

    }

}


export async function AddCartRequest(product_id){
    try {
        let res = await axios.get(`${BASEURL}/create-cart/${product_id}`,config);
        return res.data['msg']
    } catch (e) {
        ManageTokenExpire(e.response.status)
    }

}


export async function RemoveCartRequest(product_id){
    try {
        let res = await axios.get(`${BASEURL}/remove-cart/${product_id}`,config);
        return res.data['msg']
    } catch (e) {
        ManageTokenExpire(e.response.status)
    }

}