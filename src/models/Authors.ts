import { Model, DataTypes } from 'sequelize'
import sequelize from '../config/database'

class Author extends Model {
  public id!: number
  public name!: string
  public bio!: string
  public birthdate!: Date

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Author.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: {
      type: DataTypes.TEXT,
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'authors',
  }
)

export default Author
