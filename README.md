Calculators
===========
A collection of calculators that execute various formulas.

The motivation for this project is to learn [SolidJS](https://www.solidjs.com/).

Deployment
----------
To deploy the app, there is a Dockerfile that's written to serve the
built Solidjs app. For HTTPS, you MUST place the SSL certificate and
private key files into the ssl directory. Those files MUST be named:

* certificate > fullchain.pem
* private key > privkey.pem
