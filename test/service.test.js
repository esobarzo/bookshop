const cds = require('@sap/cds');
const chai = require('chai');
const expect = chai.expect;

describe('Catalog Service', () => {
  before(async () => {
    await cds.connect.to('db'); // Conecta a la base de datos en memoria por defecto
    await cds.deploy('srv'); // Despliega el servicio localmente
    await cds.serve('CatalogService').from('srv'); // Sirve el servicio
  });

  it('should return books', async () => {
    const { Books } = cds.services.CatalogService.entities;
    const books = await SELECT.from(Books); // Usa SELECT en lugar de cds.read
    expect(books).to.be.an('array');
  });
});