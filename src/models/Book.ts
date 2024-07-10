import { Model, DataTypes } from 'sequelize'
import sequelize from '../config/database'
import Author from './Authors'


class Book extends Model {
  public id!: number
  public title!: string
  public description!: string
  public published_date!: Date
  public author_id!: number

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    published_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Author,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    tableName: 'books',
  }
)

// Establish associations
Book.belongsTo(Author, { foreignKey: 'author_id', as: 'author' })
Author.hasMany(Book, { foreignKey: 'author_id', as: 'books' })

export default Book
