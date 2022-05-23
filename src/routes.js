import FirstPage from './components/FirstPage.vue'
import SecondPage from './components/SecondPage.vue'

export default [
    {
        path: '/',
        component: FirstPage,
        name: 'FirstPage'
    },
    {
        path: '/post/:id',
        component: SecondPage,
        props: true,
        name: 'SecondPage'
    }
]