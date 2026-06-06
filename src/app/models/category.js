import Sequelize, { Model } from "sequelize";

class Category extends Model {
        static init(sequelize) {
            super.init(
            {
                name: Sequelize.STRING,
                path: Sequelize.STRING,

                url: {
                    type: Sequelize.VIRTUAL,
                    get() {
                        return `https://devburguer-api-1.onrender.com/category-file/${this.path}`;
                    },
                },
            }, 
            {
                sequelize,
                tableName: 'categories',
            },
        );

        return this;
    }
}

export default Category;