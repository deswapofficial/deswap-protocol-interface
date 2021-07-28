const path = require('path')
const rewireAliases = require('react-app-rewire-aliases')
const SassRuleRewire = require('react-app-rewire-sass-rule')

module.exports = function override(config, env) {
  config = rewireAliases.aliasesOptions({
    '@src': path.resolve(__dirname, 'src'),
    '@layouts': path.resolve(__dirname, 'src/Layout/'),
    '@assets': path.resolve(__dirname, 'src/assets/'),
    '@redux': path.resolve(__dirname, 'src/redux/'),
    '@components': path.resolve(__dirname, 'src/components/'),
    '@hooks': path.resolve(__dirname, 'src/utility/hooks/'),
    '@utility': path.resolve(__dirname, 'src/utility/'),
    '@views': path.resolve(__dirname, 'src/Views/'),
    '@router': path.resolve(__dirname, 'src/router/'),
    '@contractMethods': path.resolve(__dirname, 'src/utility/contractMethods')
  })(config, env)


  config = new SassRuleRewire()
    .withRuleOptions({
      test: /\.s[ac]ss$/i,
      use: [
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: ['node_modules', 'src/assets']
            }
          }
        }
      ]
    })
    .rewire(config, env)
  return config
}
