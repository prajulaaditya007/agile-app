module.exports = {
    apps: [
        {
            name:"agile-app",
            script:"pnpm",
            args:"run dev",
            env:{
                NODE_ENV:"development",
            },
        },
    ],
};