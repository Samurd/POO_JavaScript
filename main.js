class Student {
    constructor({
        name,
        email,
        approvedCourses = [],
        learningPaths = []
    })

    {
        this.name = name;
        this.email = email;
        this.learningPaths = learningPaths;
        this.approvedCourses = approvedCourses;
    }
}

class FreeStudent extends Student {
    constructor(props) {
        super(props)
    }

    approveCourse(newCourse) {
        if(newCourse.isFree) {
            this.approvedCourses.push(newCourse)
        } else {
            console.warn("Lo sentimos," + this.name) 
        }
    }


}


class BasicStudent extends Student {
    constructor(props) {
        super(props)
    }

    
    approveCourse(newCourse) {
        if(newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse)
        } else {
            console.warn("Lo sentimos," + this.name) 
        }
    }
}


class ExpertStudent extends Student {
    constructor(props) {
        super(props)
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse)
    }
    
}


class LearningPaths {
    constructor({
        id,
        name,
        courses = [],

    })

    {
        this.id = id;
        this.name = name;
        this.courses = courses
    }
}

class Course {
    constructor({
        name,
        classes = [],
        teacher = "Anonimo",
        isFree = false,
        lang = "spanish"
    }) 

    {
        this.name = name;
        this.classes = classes;
        this.teacher = teacher;
        this.isFree = isFree;
        this.lang = lang;
    }
}

class Teacher {
    constructor({
        name,
        speciality,
    })

    {
        this.name = name;
        this.speciality = speciality;
    }
}


// Profesores --------

const freddy = new Teacher({
    name: "Freddy Vegga",
    speciality: "CEO de Platzi"
})

const juanDavid = new Teacher({
    name: "Juan David",
    speciality: "Programador"
})


// Cursos -------------


const cursoHtmlyCss = new Course({
    name:"HTML Y CSS",
    isFree: true,
    teacher: freddy

})

const cursoPracticoHtmlyCss = new Course({
    name:"Curso Practico HTML Y CSS",
    isFree: false,
    lang: "english",
    teacher: juanDavid
})


// Escuelas ------------

const escuelaweb = new LearningPaths({
    id: 1,
    name: "Escuela Web",
    courses: [
        cursoHtmlyCss,
        cursoPracticoHtmlyCss,
    ]

})


// Estudiantes --------------

const juanito = new FreeStudent({
    name: "Juanita",
    email: "juanita@gmail.com",
    learningPaths: [
        escuelaweb
    ]
})