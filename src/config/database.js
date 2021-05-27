require('dotenv').config();

module.exports = {
  dialect: process.env.DB_DIALECT || 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  storage: './__tests__/database.sqlite',
  logging: false,
  define: {
    // Registro com timer
    timestamps: true,
    // Converte tabelas e colulas camelCase para sublinhado
    underscored: true,
    // Converte nomes de modelo camelCase para sublinhado
    underscoredAll: true,
  },
};
