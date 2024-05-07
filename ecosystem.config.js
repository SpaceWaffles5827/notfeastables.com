module.exports = {
    apps: [
        {
            name: 'Not-Feastables-Front',
            script: 'npm',
            args: 'run start',
            env: {
                PORT: 5000 // Setting environment variable PORT to 5000
            }
        },
    ],
};
