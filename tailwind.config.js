module.exports = {
	important: true,
    purge: [
      'src/**/*.js',
      'src/**/*.jsx',
      'src/**/*.ts',
      'src/**/*.tsx',
      'public/**/*.html',
    ],
    theme: {
      extend: {},
      fontSize: {
          'ui-btn-default': '0.9rem' ,
      }
    },
    variants: {},
    plugins: [],
  }