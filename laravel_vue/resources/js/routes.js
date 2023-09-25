const Home = import("./components/Home.vue");
const Contact = import("./components/Contact.vue");
const Show = import("./components/blog/Show.vue");
const Edit = import("./components/blog/Edit.vue");
const Create = import("./components/blog/Create.vue");

export const routes = [
    {
        name: "home",
        path: "/",
        component: Home,
    },
    {
        name: "contact",
        path: "/contact",
        component: Contact,
    },

    {
        name: "mostrarBlogs",
        path: "/blogs",
        component: Show,
    },

    {
        name: "editarBlogs",
        path: "/edit/:id",
        component: Edit,
    },

    {
        name: "crearBlog",
        path: "/create",
        component: Create,
    },
];
