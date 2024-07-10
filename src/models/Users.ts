import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class User extends Model {
  public id!: number;
  public email!: string;
  public password!: string;
  public role!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,  // Use STRING instead of TEXT for consistency with your migration
      allowNull: false,  // Ensure this is consistent with your migration
    },
    role: {
      type: DataTypes.ENUM( 'admin', 'super admin'),  // Use ENUM correctly
      defaultValue: 'user',
    },
  },
  {
    sequelize,
    tableName: 'users',
  }
);

export default User;
