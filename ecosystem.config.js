module.exports = {
    apps : [
        {
          name: "nicasso-admin",
          script: "npm",
          args : "run serve",
          env: {
            "NODE_ENV": "production",
          }
        }
    ]
}