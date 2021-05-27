import Sequelize from 'sequelize';
import DatabaseConfig from '../config/database';

// Models
import User from '../app/models/User';
import Doctor from '../app/models/Doctor';

// Buffer
const models = [User, Doctor];

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    // Inicializa conexao
    this.connection = new Sequelize(DatabaseConfig);

    // Percorre o vetor e acessa o método inicializador
    models.map((model) => model.init(this.connection));
  }
}

export default new DataBase();
