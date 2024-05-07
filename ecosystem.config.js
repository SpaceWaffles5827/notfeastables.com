module.exports = {
    apps: [
        {
            name: 'Nova-Front',
            script: 'npm',
            args: 'run build && npm start',
            exec_mode: 'fork',
            instances: 1
        },
    ],
};
