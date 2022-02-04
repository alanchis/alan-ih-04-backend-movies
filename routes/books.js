const express			= require("express")
const router			= express.Router()

const bookController	= require("./../controllers/bookController")

// OBTENER LIBROS
router.get("/", bookController.getBooks)

// CREAR PÁGINA PARA CREAR UN LIBRO EN BD
router.get("/create", bookController.createBooks)

// ENVIAR DATOS DE FORMULARIO PARA CREAR LIBRO EN BD
router.post("/create", bookController.createBooksForm)

//CREAR UNA PAGINA INDIVIDIAL PARA CADA LIBRO CON LOS DATOS RESPRECTIVOS
router.get("/:bookID", bookController.getSingleBook)

module.exports = router