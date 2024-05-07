module.exports = {
    apps: [
        {
            name: 'Not-Feastables-Front',
            script: 'npm',
            args: 'run build && npm start',
            exec_mode: 'fork',
            instances: 1
        },
    ],
};
