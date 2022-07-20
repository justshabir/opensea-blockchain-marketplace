import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '5pzxq5qd',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'sk2sHLZcjiah2FNMDKG2ruzUq5qwMBPiW8CuMuRSiKRjyLP1gz3rxHiEJlnvXS7oVZB35nZaaKYGaZQYuUIQuc2ziDEOE3dKStRZxCEPixB6uGnaRacQZDssMkpUlOdh84wgCtCbeldkv81zn8RDmrp3OKjNUdZ7ovvFGubKGRHBii8pZJDO',
  useCdn: false,
})
