import getConnection from "config/database";


const handleCreateUser = async(fullName: String, email: String, address: String) => {

    // insert data to database
    const connection = await getConnection();
    try {
        // query
        const sql = 'INSERT INTO `users`(`name`, `email`, `address`) VALUES (?, ?, ?)';
        const values = [fullName, email, address];

        const [result, fields] = await connection.execute(sql, values);
             
    } catch (err) {
        console.log(err);
        return [];
    }


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

const handleDeleteUser = async(id: string) => {
    try {
    const connection = await getConnection();
    const sql = 'DELETE FROM `users` WHERE `id` = ? LIMIT 1';
    const values = [id];

    const [result, fields] = await connection.execute(sql, values);
    
    return result;
    } catch (err) {
    console.log(err);
    return [];
    }

    console.log(">>> Delete user complete");
}

export { handleCreateUser, getAllUsers, handleDeleteUser };