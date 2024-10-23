const verifyAdminLogin = async (req, res) => {
    const {username, password} = req.body;
    console.log(username);
    console.log(password);
    if(username == "admin" && password == "conclave.admin"){
        res.status(200).json("Success");
    }else{
        res.status(400).json("Error");
    }
}

module.exports = {
    verifyAdminLogin:verifyAdminLogin
}