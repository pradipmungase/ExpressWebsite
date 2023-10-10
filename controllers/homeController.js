const homeController = (req , res) => {
    const data = {'pageName': 'Home'};
    res.render('home', data);
}

export default homeController;