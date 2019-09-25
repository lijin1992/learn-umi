export default {
  plugins: [
    [
      "umi-plugin-react",
      {
        antd: true,
        dva:true,
      }
    ]
  ],
  routes: [
    { path: "/", component: "./index" }, // 路径相对于pages
    { path: "/goods", component: "./goods" }, // 路径相对于pages
    {
      path: "/about",
      component: "./about",
      Routes: ['./routes/PrivateRoute.js']
    }, // 路由守卫
    {
      path: "/users",
      component: "./users/_layout",
      routes: [
        { path: "/users/", component: "./users/about" },
        { path: "/users/", component: "./users/index" },
      ]
    },
    { path: "/login", component: "./login" },
    { component: "./notFind" }
  ]
};
