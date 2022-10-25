const { withNativeFederation, shareAll } = require('@softarc/native-federation/build')

module.exports = withNativeFederation({
  name: 'app1',
  // exposes: {
  //   './component': './src/component'
  // },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
      includeSecondaries: false
    })
  }
})
