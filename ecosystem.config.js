module.exports = {
  apps: [{
    name: 'redhat-node-aws',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ec2-user',
      host: 'ec2-3-19-101-171.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/tijanaKey.pem',
      ref: 'origin/master',
      repo: 'https://github.com/Mirko965/redhat-node-aws.git',
      path: '/home/ec2-user/redhat-node-aws',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js && pm2 startup && pm2 save'
    }
  }
}
