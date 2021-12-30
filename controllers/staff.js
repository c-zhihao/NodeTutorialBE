//require the model if using mongoose

const get_staff = async (req, res) => {
    console.log("get all staff");
    res.send(200);
}

const get_one_staff = async (req, res) => {
    console.log("get one staff");
    res.send(200);
}

module.exports = {
    get_staff,
    get_one_staff
}