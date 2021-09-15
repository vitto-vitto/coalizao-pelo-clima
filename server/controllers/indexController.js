const router = require("../routes");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

router.post('/form/action/value', (req, res)=> {
    // Info processing
    var formValue = req.body;
    console.log(formValue) // {formInputName: formInputValue}
    res.redirect('/redirect/destiny')
})