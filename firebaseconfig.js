var admin = require("firebase-admin");

const app = admin.initializeApp({
  credential: admin.credential.cert({
    type: process.env.TYPE,
    project_id: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCe+8E9k/LZYsed\nd2mtrVDYXWrPgiw6Fu0K9HwRAKuY/HCeAzz+YpNOombxzrQ4flHAwP7MbK/2M8fQ\nHIoUyLD3MBnaXiRjZQyVsxaxuIWEJSZC0jvLF7l5M3xgeUY4UrWVmZNya5u9KMe7\nV/6hdy94iiVRUvHa8KWXlW00Frnogi/ZLYUNx/AfT8MfzN12I0+2iVAMx/EYQAmm\nZ/8BM5pxfBGaNW2MQ7IioAodMBeQwfZC+lUfJTVaSTP2BwgMJ/G7zjEjbSj2XYqt\n/4nIT6zXn3/23BC2gQgfkiNxyyTDRQAefsNHEgGjxMrVMktD3wVPZQBS14MKDDdM\nP0pDyu45AgMBAAECggEAE+WaF6TOfdpY9SIevbe1KH74gSPfeR2paPeUF2SoFSty\nxLPPDF815F961sRx1agpfyAoQ1lO5FcyqJ8JwPQlAaqpcaTalP3uh0W0j2VygElN\n8orxJMfBVKPW6xQCb8YaJ7DivS0ufov+AzpOCdMqw8E2Tmk9D5OShdgTpLM7bRe7\neevhEyray0Na14anTc6y2Rg0LcLSf/2jhLdl6+2+826r4K3EP2kmAEjD/fbDKlEG\nNdVXsd4Lykh9omfZrVyWbhlbtoFPDG5DaR9d2WjsT46w3WTIOO5TtDAozkY6m4UR\n/OnazHjmQ0gvmuFS2AAuPP2uWLqCmp+TPMlF7SzWiQKBgQDKoo4d679RpJCqeXrc\nK/e58WZbEr6SRe+tiQQuJIz1T6P7xyRaQCG46z2xo/FarTPFAotSIdxHKXwd9AdQ\nlix/hLNLYCWyUuNoxAFywwYFjKlx3ftkiTgUmYbZonYs7QQD5r7u4Qp9pr9pNCmw\nKvg3aaLL+83XCsTOJ089f1pMZwKBgQDI2kFsh/lTkTbiYDvxi2ct5z/hwFNlmbDx\n28D+o7sXtJ09u8sxuTS4EEhuXJGp8NiFzyX9lUuAII/pyKXC6LV5v0ILCLmWi5ca\nIVaTmCWUzOVv6aJCwIaLMoZ7XGCdJJsUAHJe6CFGDuwyZ0M6/FeIwf4G8fJom0U6\n8HxbOFZMXwKBgAuR6Idw1IW23cO+F/PGVui5Dd0ZXuQ/NgY0kpaH47yGBZj0r/Cv\nRL2oQOeJstg4l4IiOQ5BfLBbgAi9zEUfrf7B9vLQ1JYwAWgT+PkyhX9/npUv1ZDR\n/O/ALGD008aQ6e/HFxPQqaavBLLfFZpHedDAKVl4UTJ8HOygdffO87r1AoGBALZG\nM8ddoqvvBeLsuJmdDBcBXNzvn/99ObJT3tJ4HisGMwi6K03FqQ09Ya4d/ec+dhEB\nC5YU7b6qTlA4Ug4PB9oj8rh2w43WwlrpVFt/YOOoCrPEUAfKFo+uW5MKI3eYp8/A\nFAsDGGcu1bVsNvwJ0xp+Cp2c5oN+HZa+deyGtPJ7AoGAQH/Q8jazoAPfP6o3mA2e\npwUO2mUdBSnefb0paP92bHbMvjTRyC6YVZANzxO/ykHjKaXcaxCHiWaADWrtJ/Tt\nOghwuboModl8D6tXawJ5sd5v7HEKqFotrtATWWteRZjH6/cY3odrlv4r4d1uI2Tw\n2gjt5Z0nEUkBLjN/2oXrAWE=\n-----END PRIVATE KEY-----\n",
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    auth_uri: process.env.AUTH_URI,
    token_uri: process.env.TOKEN_URI,
    auth_provider_x509_cert_url: process.env.AUTH_PROVIDER,
    client_x509_cert_url: process.env.CLIENT_ID,
  }),
});

module.exports = app;
