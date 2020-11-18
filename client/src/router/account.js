export default [
    {
        path: '/accounts/register',
        name: 'Register',
        component: () => import('../views/account/Register.vue')
    },
    {
        path: '/accounts/login',
        name: 'Login',
        component: () => import('../views/account/Login.vue')
    },
    {
        path: '/accounts/profile',
        name: 'Profile',
        component: () => import('../views/account/Profile.vue')
    }
]
