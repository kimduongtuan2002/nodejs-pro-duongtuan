import getConnection from "../config/database";


const handleCreateUser = (fullName: String, email: String, address: String) => {

    // insert data to database

    // return result
    console.log(">>> Insert data complete a new user");

};

const getAllUsers = async() => {
    const connection = await getConnection();

    try {
    const [results, fields] = await connection.query(
        'SELECT * FROM `users`'
    );
        return results;
    } catch (err) {
        return [];
    }
};

export { handleCreateUser, getAllUsers };