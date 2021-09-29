import axios from 'axios'

const regURL = 'https://gabsocialmedia.herokuapp.com/user/register'
const loginURL = 'https://gabsocialmedia.herokuapp.com/user/login'
const logoutURL = 'https://gabsocialmedia.herokuapp.com/user/logout'
const isLoggedInURL = 'https://gabsocialmedia.herokuapp.com/user/isLoggedIn'
const homeURL = 'https://gabsocialmedia.herokuapp.com/home'
const refreshTokenURL = 'https://gabsocialmedia.herokuapp.com/refresh_token'
const createPostURL = 'https://gabsocialmedia.herokuapp.com/posts/createPost'
const updatePostURL = 'https://gabsocialmedia.herokuapp.com/posts/updatePost'
const deletePostURL = 'https://gabsocialmedia.herokuapp.com/posts/deletePost'
const likePostURL = 'https://gabsocialmedia.herokuapp.com/posts/likePost'
const postURL = 'https://gabsocialmedia.herokuapp.com/posts/post'
const userPostsURL = 'https://gabsocialmedia.herokuapp.com/posts/getUserPosts'
const myLikedPostsURL = 'https://gabsocialmedia.herokuapp.com/posts/getMyLikedPosts'
const newCommentURL = 'https://gabsocialmedia.herokuapp.com/posts/newComment'
const getCommentURL = 'https://gabsocialmedia.herokuapp.com/posts/getComment'
const getUserURL = 'https://gabsocialmedia.herokuapp.com/userProfile/'
const updateUserURL = 'https://gabsocialmedia.herokuapp.com/userProfile/updateUser'
const deleteCommentURL = 'https://gabsocialmedia.herokuapp.com/posts/deleteComment'
const getUsersURL = 'https://gabsocialmedia.herokuapp.com/userProfile/getUsers'
const getPostsURL = 'https://gabsocialmedia.herokuapp.com/posts/getSearchedPosts'

export const regUser = (newUser) => axios.post(regURL, newUser,)
export const loginUser = (userCredentials) => axios.post(loginURL, userCredentials, { withCredentials: true })
export const getPosts = () => axios.get(homeURL, { withCredentials: true })
export const refreshToken = (header) => axios.post(refreshTokenURL, header, { withCredentials: true})
export const isLoggedIn = () => axios.get(isLoggedInURL, {withCredentials: true})
export const createPost = (newPost) => axios.post(createPostURL, newPost, { withCredentials: true })
export const updatePost = (newPostInfo) => axios.post(updatePostURL, newPostInfo, {withCredentials: true}) 
export const deletePost = (postId) => axios.post(deletePostURL, postId, {withCredentials: true}) 
export const likePost = (postId) => axios.post(likePostURL, postId, {withCredentials: true})
export const logoutUser = () => axios.get(logoutURL, {withCredentials: true})
export const getPost = (post) => axios.post(postURL, post, {withCredentials: true})
export const newComment = (comment) => axios.post(newCommentURL, comment, {withCredentials: true})
export const getComments = (data) => axios.post(getCommentURL, data, {withCredentials: true})
export const getUser = (user) => axios.post(getUserURL, user, {withCredentials: true})
export const updateUser = (user) => axios.post(updateUserURL, user, {withCredentials: true})
export const deleteComment = (comment) => axios.post(deleteCommentURL, comment, {withCredentials: true})
export const getUserPosts = (user) => axios.post(userPostsURL, user, {withCredentials:true})
export const getMyLikedPosts = (user) => axios.post(myLikedPostsURL, user, {withCredentials:true})
export const getUsers = (query) => axios.post(getUsersURL, query, {withCredentials:true})
export const getSearchedPosts = (query) => axios.post(getPostsURL, query, {withCredentials:true})

axios.interceptors.response.use(response => {
    return response
}, async error => {
    const req = error.config
    if(error.response.status === 400 && !req._retry){
        req._retry = true
        await refreshToken()
        return axios(req)
    }
    return Promise.reject(error)
})
